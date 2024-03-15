import React from 'react';

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex items-center shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <div className="m-3">
        <img
          className="w-8"
          alt="user"
          src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
        />
      </div>
      <div className=" px-3">
        <p className="font-bold text-sm">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
