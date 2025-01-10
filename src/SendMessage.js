import { api_gateway_id } from "../env.env";
import axios from "axios";

export default function SendMessage(props) {
  const date = new Date();

  const serviceData = {
    timestamp: date.toISOString(),
  };

  const url = `https://${api_gateway_id}.execute-api.us-west-2.amazonaws.com/np/metrics/2`;
  const token = "b"; //props.access_token;
  axios
    .put(url, serviceData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log("Success:", response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
