import React from 'react';

const Message = ({ content, sender }) => {
  const isUser = sender === 'user';

  return (
    <div className={`message ${isUser ? 'user-message' : 'bot-message'}`}>
      <p>{content}</p>
    </div>
  );
};

export default Message;

// import React from "react";

// const Message = ({ content, sender }) => {
//   const isUser = sender === "user";

//   return (
//     <div className={`message ${isUser ? "user-message" : "bot-message"}`}>
//       <p>{content}</p>
//     </div>
//   );
// };

// export default Message;
