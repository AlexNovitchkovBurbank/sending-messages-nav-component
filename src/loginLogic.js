import axios from "axios";
import base64 from "base-64";

export default function CodeToToken() {
  const parameters = new URLSearchParams(location.search);
  if (!parameters.has("code"))
    throw Error("Cannot get token without code to authenticate");

  const code = parameters.get("code");

  let url = "https://2345678.auth.us-west-2.amazoncognito.com/oauth2/token";
  const client_id = "26k1fm2mipg8a7uvaigpnap1ju";
  const redirect_uri = "https://d2w5dvgv7cu0fp.cloudfront.net/main/index.html";
  const client_secret = "195uvsglqutav19t2vieeee5dlssiiofnh01hcfbd19enq7gi315";

  const data = qs.stringify({ // query string stringify different than JSON
    grant_type: "authorization_code",
    code: code,
    redirect_uri: redirect_uri,
  });

  // let formBody = [];
  // for (let property in details) {
  //   let encodedKey = encodeURIComponent(property);
  //   let encodedValue = encodeURIComponent(details[property]);
  //   formBody.push(encodedKey + "=" + encodedValue);
  // }
  // formBody = formBody.join("&");

  const authHeader = base64.encode(`${client_id}:${client_secret}`);
  const headers = {
    "Authorization": `Basic ${authHeader}`,
    "Content-Type": "application/x-www-form-urlencoded",
  };

  axios.post(
    url,
    data,
    {headers}
  ).then((response) => console.log(response.data)).catch((err) => console.error("Error: " + err));

  // fetch(url, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
  //   },
  //   body: formBody,
  // })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //   });
}
