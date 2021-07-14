import cn from "classnames";
import { FunctionComponent, useCallback, useState } from "react";
import getBackendURL from "../getBackendURL";
import { storeAuthToken } from "./authToken";

interface Props {}

const LoginForm: FunctionComponent<Props> = () => {
  const [user, setUser] = useState("");
  const [password, setPass] = useState("");

  const [message, setMessage] = useState<string | null>(null);
  const [color, setColor] = useState<string>("text-green-500");

  const onSubmit = useCallback(async () => {
    const loginURL = `${getBackendURL()}/auth/login`;

    setMessage(null);

    console.log(user, password);

    const result = await fetch(loginURL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user,
        password,
      }),
    });

    if (result.ok) {
      const json = await result.json();
      storeAuthToken(json.token);

      setColor("text-green-500");
      setMessage(`Successfully logged in as ${user}`);
    } else {
      setColor("text-red-500");
      setMessage("Invalid username or password");
    }
  }, [user, password]);

  const onUserChange = useCallback(
    (e) => {
      setUser(e.target.value);
    },
    [setUser]
  );
  const onPassChange = useCallback(
    (e) => {
      setPass(e.target.value);
    },
    [setPass]
  );

  return (
    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-10 max-w-md">
      <div className="space-y-4">
        <div className="relative">
          <label htmlFor="user" className="text-gray-600 text-sm w-full">
            User
          </label>
          <div className="relative">
            <input
              id="user"
              name="user"
              type="text"
              className="border-b-2 border-gray-300 text-gray-600 text-sm"
              placeholder="user"
              onChange={onUserChange}
            />
          </div>
        </div>
        <div className="relative">
          <label htmlFor="password" className="text-gray-600 text-sm w-full">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type="password"
              className="border-b-2 border-gray-300 text-gray-600 text-sm"
              placeholder="password"
              onChange={onPassChange}
            />
          </div>
        </div>
        <div className="relative">
          <button
            className="bg-blue-500 text-sm text-white rounded-md px-2 py-1"
            onClick={onSubmit}
          >
            Submit
          </button>
        </div>
        {message && (
          <div className="relative">
            <div
              className={cn([
                "text-md",
                {
                  "text-green-500": color === "text-green-500",
                  "text-red-500": color === "text-red-500",
                },
              ])}
            >
              {message}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
