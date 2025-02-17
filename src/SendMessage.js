import { api_gateway_id } from "../env";
import axios from "axios";

export default function SendMessage(id_token) {
  const date = new Date();

  const serviceData = {
    timestamp: date.toISOString(),
  };

  console.log(id_token);
  console.log("api_gateway_id: ", api_gateway_id)
  const url = `https://${api_gateway_id}.execute-api.us-west-2.amazonaws.com/np/metrics/2`;
  const token = id_token;
  axios
    .put(url, serviceData, {
      headers: {
        "Authorization": `Bearer ${token}`,
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
