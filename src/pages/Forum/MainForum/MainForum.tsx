import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DropDownBlock from '../../../components/DropDownBlock/DropDownBlock';
import { Dispatch, RootState } from '../../../store';

const MainForum = () => {
  const dispatch = useDispatch<Dispatch>();
  const messages = useSelector(
    (state: RootState) => state.message_mod.messages,
  );

  React.useEffect(() => {
    dispatch.message_mod.getMessages();
  }, []);
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
