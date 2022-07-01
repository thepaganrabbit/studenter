import React from 'react';
import { mdiTrashCan, mdiPencil, mdiCheck } from '@mdi/js';
import Icon from '@mdi/react';

import './messagecard.scss';
import { ThemeBuilder } from '../../utils/ThemeBuilder';
import { ThemeContext } from '../../theme';
import { MessageCardProps } from '../../types';

const MessageCard = ({
  title,
  to,
  sender,
  content,
  date,
  replies,
  approved,
}: MessageCardProps) => {
  const themeCtx = React.useContext<ThemeBuilder>(ThemeContext);
  return (
    <div className="msg-box">
      <div className="actions">
        <Icon
          path={mdiTrashCan}
          size={1}
          color={themeCtx.getStatusColors().danger}
        />
        <Icon
          path={mdiPencil}
          size={1}
          color={themeCtx.getStatusColors().warning}
        />
        {!approved && (
          <Icon
            path={mdiCheck}
            size={1}
            color={themeCtx.getStatusColors().success}
          />
        )}
      </div>
      <div className="card">
        <div
          className="card-header"
          style={{
            backgroundColor: approved
              ? 'white'
              : themeCtx.getColors().tertiary.shade,
          }}
        >
          <div className="card-header-title">{title}</div>
        </div>
        <div className="card-content">
          <div className="media-content">
            <strong>
              {to
                ? `${sender.name} is asking ${to.name}:`
                : `From: ${sender.name}`}
            </strong>
          </div>
          <div
            className="content"
            style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }}
          >
            <p>{content}</p>
            <br />
            <br />
            <time>{date.toString()}</time>
          </div>
        </div>
        <div className="base-actions">
          replies: {replies ? replies.length : 0}
        </div>
      </div>
    </div>
  );
};
export default MessageCard;
