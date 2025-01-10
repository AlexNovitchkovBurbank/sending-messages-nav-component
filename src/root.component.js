import { useEffect, useState } from "react";
import { SignIn } from "./SignIn.js";
import { SignOut } from "./SignOut.js";
import CodeToToken from "./loginLogic.js";
import SendMessage from "./SendMessage.js";


export default function Root(props) {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const promiseResponse = CodeToToken();

    if (promiseResponse !== false && promiseResponse !== null)
      promiseResponse.then((res) => setResponse(res.data)).catch((err) => setResponse(err));
    //setResponse(CodeToToken());
  }, []);

  if (response !== null) console.log(response);

  if (response !== null && typeof response === 'object')
    if (Object.hasOwn(response, "access_token"))
      SendMessage(response.access_token);
      console.log(65);

  return (
    <section>
      <SignIn />
      <SignOut />
      {props.name} is mounted!
    </section>
  );
}
