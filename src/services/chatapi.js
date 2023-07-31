import Axios from "axios";

const api = Axios.create({
  baseURL: "http://localhost:8080/api/communicate",
});

const chatAPI = {
  getMessages: (session) => {
    console.log("Calling get messages from API");
    return api.get(`/messages/${session}`);
  },

  sendMessage: (senderID, receiverID, text, session) => {
    let msg = {
      senderID: senderID,
      receiverID: receiverID,
      content: text,
    };
    return api.post(`/publish`, msg, {
      headers: { "Content-Type": "application/json" },
    });
  },
};

export default chatAPI;
