import React from 'react';

import './forum.scss';
import { ThemeContext } from '../../theme';
import { ThemeBuilder } from '../../utils/ThemeBuilder';
import { ForumTabEnum } from '../../types';
import MainForum from './MainForum/MainForum';
import SwitchComponentFactory from '../../utils/SwitchComponents';
import PrivateForum from './PrivateForum/PrivateForum';
import ReviewForum from './Review/ReviewForum';

const Forum = () => {
  const themeCtx = React.useContext<ThemeBuilder>(ThemeContext);
  const [tabSelection, setTagSelection] = React.useState<ForumTabEnum>(
    ForumTabEnum.MAIN,
  );
  return (
    <div
      className="forum"
      style={{
        background: themeCtx.getBackgroundColor(),
        color: themeCtx.getTextColor(),
      }}
    >
      <div className="tabs is-centered">
        <ul>
          <li
            className={tabSelection === ForumTabEnum.MAIN ? 'is-active' : ''}
            onClick={() => setTagSelection(ForumTabEnum.MAIN)}
            data-testid="main forum tab"
          >
            <a>Forum</a>
          </li>
          <li
            className={tabSelection === ForumTabEnum.PRIVATE ? 'is-active' : ''}
            onClick={() => setTagSelection(ForumTabEnum.PRIVATE)}
            data-testid="private forum tab"
          >
            <a>Private</a>
          </li>
          <li
            className={
              tabSelection === ForumTabEnum.REVIEWREJECT ? 'is-active' : ''
            }
            onClick={() => setTagSelection(ForumTabEnum.REVIEWREJECT)}
            data-testid="review forum tab"
          >
            <a>Review & Reject</a>
          </li>
        </ul>
      </div>
      <div className="forum-content">
        {SwitchComponentFactory({
          components: [
            { name: ForumTabEnum.MAIN, component: <MainForum /> },
            { name: ForumTabEnum.PRIVATE, component: <PrivateForum /> },
            { name: ForumTabEnum.REVIEWREJECT, component: <ReviewForum /> },
          ],
          selection: tabSelection,
        })}
      </div>
    </div>
  );
};

export default Forum;
