import axios from "axios";
import base64 from "base-64";
import qs from "qs";
import { cloudfront_domain_id, cognito_app_client_id, cognito_app_client_secret, cognito_domain } from "../env.env";

function CodeToToken() {
  console.log(3);
  const parameters = new URLSearchParams(location.search);
  if (!parameters.has("code")) {
    console.log("Cannot get token without code to authenticate");
    return false;
  }

  const code = parameters.get("code");

  let url = `https://${cognito_domain}.auth.us-west-2.amazoncognito.com/oauth2/token`;
  const client_id = cognito_app_client_id;
  const redirect_uri = `https://${cloudfront_domain_id}.cloudfront.net/main/index.html`;
  const client_secret = cognito_app_client_secret;

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

  const promiseResponse = axios.post(
    url,
    data,
    {headers}
  );

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

  return promiseResponse;
}

export default CodeToToken;
