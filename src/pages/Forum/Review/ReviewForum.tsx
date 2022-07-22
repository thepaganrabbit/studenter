import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DropDownBlock from '../../../components/DropDownBlock/DropDownBlock';
import { Dispatch, RootState } from '../../../store';

const ReviewForum = () => {
  const dispatch = useDispatch<Dispatch>();
  const messages = useSelector(
    (state: RootState) => state.message_mod.messages,
  );

  React.useEffect(() => {
    dispatch.message_mod.getMessagesToReview('323423dd');
  }, []);
  // eventually will check user and match to the to key on the object
  return (
    <div className="review-forum">
      {messages.length > 0 ? (
        messages.map((message) => {
          return (
            !message.status && <DropDownBlock key={message._id} {...message} />
          );
        })
      ) : (
        <p>No messages to review.</p>
      )}
    </div>
  );
};

export default ReviewForum;
