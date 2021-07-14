import { FunctionComponent, useCallback, useState } from "react";

import getBackendURL from "../getBackendURL";

const CreateContentForm: FunctionComponent = () => {
  const [body, setBody] = useState<string>("");

  const onChange = useCallback((e) => {
    setBody(e.target.value);
  }, [setBody]);

  const onSubmit = useCallback(() => {
    const submitComment = async () => {
      const url = `${getBackendURL()}/api`;
      const query = `
        mutation {
          createComment(authorID:"a1f237b0-df23-4cb4-8439-e82b75d627b1", body:"${body}") {
            body
            author {
              id
              name
            }
          }
        }
      `;

      await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
        }),
      });

      window.location.reload();
    };

    submitComment();
  }, [body]);

  return <div className="relative m-1 px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-10 max-w-md">
  <div className="space-y-4">
    <div className="relative">
        <input
          id="body"
          name="body"
          type="textarea"
          className="border-gray-300 text-gray-600 text-sm"
          placeholder="type a comment here..."
          onChange={onChange}
        />
    </div>
    <div className="relative">
      <button
        className="bg-blue-500 text-sm text-white rounded-md px-2 py-1"
        onClick={onSubmit}
      >
        Submit
      </button>
    </div>
  </div>
</div>
}

export default CreateContentForm;
