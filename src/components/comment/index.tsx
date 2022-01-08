import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { BASE_URL } from "../../config/settings";
import CommentsList from "./commentList";

const CommentComponent = () => {
  const [comment, setComment] = useState("");
  const [load, setLoad] = useState(false);

  const [list, setList] = useState([{ _id: "", email: "", comment: "" }]);
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getComments();
  }, [load]);

  const postComment = (e: any) => {
    e.preventDefault();
    axios
      .post(`${BASE_URL}/comment`, { comment }, { withCredentials: true })
      .then((res) => {
        const resp = res.data;
        setComment("");
        setLoad(!load);
        swal(resp.message);
      })
      .catch((err) => {
        swal(`${err.response.data.message}`);
      });
  };

  const getComments = () => {
    axios
      .get(`${BASE_URL}/comments`, { withCredentials: true })
      .then((res) => {
        const resp = res.data;
        setList(resp.message);
        setEmail(resp.email);
      })
      .catch((err) => {
        swal(`Unauthorized! come back after logged In`);
        navigate("/signin");
      });
  };

  const getFilteredComments = () => {
    setList(list.filter((item) => item.email === email));
  };

  return (
    <div>
      <div className="flex items-center justify-center max-w-lg mx-auto mt-20 mb-4 shadow-lg">
        <form
          onSubmit={postComment}
          className="w-full max-w-xl px-4 pt-2 bg-white rounded-lg"
        >
          <div className="flex flex-wrap mb-6 -mx-3">
            <h2 className="px-4 pt-3 pb-2 text-lg text-gray-800">
              What would you like to share with the world?
            </h2>
            <div className="w-full px-3 mt-2 mb-2 md:w-full">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full h-40 px-3 py-2 font-medium leading-normal placeholder-gray-700 bg-gray-100 border border-gray-400 rounded resize-none focus:outline-none focus:bg-white"
                name="body"
                placeholder="Type Your Comment"
                required
              ></textarea>
            </div>
            <div className="flex items-start w-full px-3 md:w-full">
              <div className="flex items-start w-1/2 px-2 mr-auto text-gray-700"></div>
              <div className="-mr-1">
                <button
                  type="submit"
                  className="h-10 px-4 py-1 mr-1 font-medium tracking-wide text-gray-700 bg-white border border-gray-400 rounded-lg cursor-pointer hover:bg-gray-100"
                >
                  Post Comment
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <br />
      <div className="max-w-lg mx-auto">
        <div className="flex justify-between">
          <h2 className="px-4 pt-3 pb-2 text-lg text-gray-800">
            Others Comments
          </h2>
          <button
            type="button"
            onClick={getFilteredComments}
            className="flex items-center justify-center w-20 h-10 px-3 py-2 font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm text-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Filter
          </button>
        </div>
        <CommentsList comments={list} />
      </div>
    </div>
  );
};

export default CommentComponent;
