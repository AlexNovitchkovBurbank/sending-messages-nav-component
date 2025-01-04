import {SignIn} from "./SignIn.js"
import {SignOut} from "./SignOut.js"

export default function Root(props) {
  return <section><SignIn/><SignOut/>{props.name} is mounted!</section>;
}