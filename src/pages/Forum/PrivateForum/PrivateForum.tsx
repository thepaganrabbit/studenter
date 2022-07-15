import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DropDownBlock from '../../../components/DropDownBlock/DropDownBlock';
import { Dispatch, RootState } from '../../../store';

const PrivateForum = () => {
  const dispatch = useDispatch<Dispatch>();
  const messages = useSelector(
    (state: RootState) => state.message_mod.messages,
  );

  React.useEffect(() => {
    dispatch.message_mod.getPersonalMessages('323423dd');
  }, []);
  // eventually will check user and match to the to key on the object
  return (
    <div className="private-forum">
      {messages.length > 0 ? (
        messages.map((message) => {
          return (
            message.isPrivate && (
              <DropDownBlock key={message._id} {...message} />
            )
          );
        })
      ) : (
        <p>No messages posted in your private messages.</p>
      )}
    </div>
  );
};

export default PrivateForum;
