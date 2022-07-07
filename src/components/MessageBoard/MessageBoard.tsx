import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store';
import './messageboard.scss';
import MessageCard from '../MessageCard/MessageCard';
import BoardBox from '../BoardBox/BoardBox';

const MessageBoard = () => {
  const messages = useSelector(
    (state: RootState) => state.message_mod.messages,
  );

  return (
    <BoardBox title="Messageboard">
      <div className="messages">
        {messages.map((msg) => {
          return <MessageCard key={msg._id} {...msg} />;
        })}
      </div>
    </BoardBox>
  );
};

export default MessageBoard;
