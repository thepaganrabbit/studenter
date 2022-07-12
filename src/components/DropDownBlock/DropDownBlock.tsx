import { mdiArrowRightBottomBold } from '@mdi/js';
import Icon from '@mdi/react';
import React from 'react';

import { ThemeContext } from '../../theme';
import { MessageProps } from '../../types';
import { ThemeBuilder } from '../../utils/ThemeBuilder';
import TouchableOpacityBtn from '../TouchableOpacityBtn/TouchableOpacityBtn';
import './DropDownBlock.scss';

const DropDownBlock = ({
  title,
  sender,
  content,
  date,
  to,
  replies,
}: MessageProps) => {
  const themeCtx = React.useContext<ThemeBuilder>(ThemeContext);
  const [isOpened, setIsOpened] = React.useState<boolean>(false);
  return (
    <div className="drop-block">
      <TouchableOpacityBtn
        onClick={() => {
          setIsOpened(!isOpened);
        }}
      >
        <div
          className="drop-head"
          style={{
            background: themeCtx.getColorsByMode().colors.secondary.tint,
            color: themeCtx.getTextColor(),
            border: `2px solid ${
              themeCtx.getColorsByMode().colors.tertiary.shade
            }`,
            borderBottom: `2px solid ${
              isOpened
                ? themeCtx.getColorsByMode().colors.primary.shade
                : themeCtx.getColorsByMode().colors.tertiary.shade
            }`,
          }}
        >
          <div className="title">
            <h3>
              {title.length > 33 ? `${title.substring(0, 30)}...` : title}
            </h3>
          </div>
          <div className="from">
            from:<p>{sender.name}</p>
            To: <p>{to?.name}</p>
          </div>
          <div className="posted">{date.toString()}</div>
        </div>
      </TouchableOpacityBtn>
      {isOpened && (
        <div
          className="drop-content"
          style={{
            background: themeCtx.getColorsByMode().colors.secondary.tint,
            color: themeCtx.getTextColor(),
            borderLeft: `2px solid ${
              themeCtx.getColorsByMode().colors.tertiary.shade
            }`,
            borderRight: `2px solid ${
              themeCtx.getColorsByMode().colors.tertiary.shade
            }`,
            borderBottom: `2px solid ${
              themeCtx.getColorsByMode().colors.tertiary.shade
            }`,
          }}
        >
          <div className="main-content">
            {sender.name} is asking: <br />
            <p style={{ marginLeft: '0.5rem' }}>{content}</p>
          </div>
          <div className="replies-content">
            {replies.length > 0 && <h5>Replies:</h5>}
            {replies &&
              replies.map((reply) => {
                return (
                  <div className="reply" key={reply._id}>
                    <div className="reply-title">
                      <p id="rep-from">{reply.from.name} replied:</p>
                      <p id="posted-d">Posted: {reply.date.toString()}</p>
                    </div>
                    <br />
                    <p id="reply-cont">
                      <Icon
                        path={mdiArrowRightBottomBold}
                        size={0.7}
                        color="black"
                      />
                      {reply.reply}
                    </p>
                    <br />
                  </div>
                );
              })}
          </div>
          <div className="drop-actions">
            <div className="spacer"></div>
            <div className="action">
              <button
                className="button"
                style={{
                  backgroundColor:
                    themeCtx.getColorsByMode().colors.primary.origin,
                }}
              >
                Reply
              </button>

              <button
                className="button"
                style={{ backgroundColor: themeCtx.getStatusColors().success }}
              >
                Approve
              </button>

              <button
                className="button"
                style={{ backgroundColor: themeCtx.getStatusColors().danger }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDownBlock;
