import React, { useState } from "react";
import MessageFormUI from "./MessageFormUI";
const DefaultMessageForm = ({ props, activeChat }) => {
  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState("");
  const handleChange = (e) => setMessage(e.target.value);

  const handleSubmit = async () => {
    const date = new Date()
      .toISOString()
      .replace("T", " ")
      .replace("Z", `${Math.floor(Math.random() * 1000)}+00:00`);
    const attachmentBlob = attachment
      ? [{ blob: attachment, file: attachment.name }]
      : [];
    const form = {
      attachments: attachmentBlob,
      created: date,
      sender_username: props.username,
      text: message,
      activeChatID: activeChat.id,
    };
    props.onSubmit(form);
    setMessage("");
    setAttachment("");
  };

  return (
    <MessageFormUI
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      message={message}
      setAttachment={setAttachment}
    />
  );
};

export default DefaultMessageForm;
