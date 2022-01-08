import { Comment } from "./comments.type";

export default function CommentsList({ comments }: { comments: Comment[] }) {
  return (
    <ul className="divide-y divide-gray-200">
      {comments.length ? (
        comments.map((person: Comment) => (
          <li key={person._id} className="flex py-4">
            {/* <img className="w-10 h-10 rounded-full" src={person.image} alt="" /> */}
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                {person.email}
              </p>
              <p className="text-sm text-gray-500">{person.comment}</p>
            </div>
          </li>
        ))
      ) : (
        <li className="flex py-4">
          <div className="ml-3">
            <p className="text-sm text-gray-500">No Comments found</p>
          </div>
        </li>
      )}
    </ul>
  );
}
