import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../config/settings";
import { Comment } from "../comment/comments.type";

export default function CommentsList() {

  const [list,setList] = useState([{_id:"",email:"",comment:""}]);
  
  useEffect(()=>{
    getComments()
  },[])

  const getComments = () => {
    axios.get(`${BASE_URL}/comments`,{withCredentials:true})
      .then(res=>{
        const resp = res.data;
        setList(resp.message);
      })
      .catch(err=>{
        console.log(err)
      })
  }
  return (
    <ul  className="divide-y divide-gray-200">
      {list.map((person:Comment) => (
        <li key={person._id} className="flex py-4">
          {/* <img className="w-10 h-10 rounded-full" src={person.image} alt="" /> */}
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{person.email}</p>
            <p className="text-sm text-gray-500">{person.comment}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
