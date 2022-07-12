import React from 'react';
import { useSelector } from 'react-redux';
import DropDownBlock from '../../../components/DropDownBlock/DropDownBlock';
import { RootState } from '../../../store';

const MainForum = () => {
  const messages = useSelector(
    (state: RootState) => state.message_mod.messages,
  );
  return (
    <div className="main-fourm">
      {messages.length > 0 ? (
        messages.map((message) => {
          return (
            message.approved && <DropDownBlock key={message._id} {...message} />
          );
        })
      ) : (
        <p>No messages posted in the forum.</p>
      )}
    </div>
  );
};

export default MainForum;
