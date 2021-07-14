import { FunctionComponent, useEffect, useState } from "react";

import Comment, { CommentModel } from "./Comment";
import getBackendURL from '../getBackendURL';

const CommentStream: FunctionComponent = () => {
  const [comments, setComments] = useState<CommentModel[]>([]);

  useEffect(() => {
    const loadComments = async () => {
      const url = `${getBackendURL()}/api`;
      const query = `{
        comments {
          body
          author {
            id
            name
          }
        }
      }`;

      const result = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
        }),
      });

      if (result.ok) {
        const payload = await result.json();

        setComments(payload.data.comments);
      }
    };

    loadComments();
  }, []);

  return (
    <div className="relative m-1 py-10 space-y-2">
      {comments.map((c, i) => (
        <Comment key={i} comment={c} />
      ))}
    </div>
  );
};

export default CommentStream;
