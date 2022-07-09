import React from 'react';

import './forum.scss';
import { ThemeContext } from '../../theme';
import { ThemeBuilder } from '../../utils/ThemeBuilder';
import { ForumTabEnum } from '../../types';
import MainForum from './MainForum/MainForum';

const TabSelector = (selection: ForumTabEnum) => {
  switch (selection) {
    case ForumTabEnum.PRIVATE:
      break;
    case ForumTabEnum.REJECTED:
      break;
    default:
      return <MainForum />;
  }
};

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
          <li className="is-active">
            <a>Forum</a>
          </li>
          <li>
            <a>Private</a>
          </li>
          <li>
            <a>Rejected</a>
          </li>
        </ul>
      </div>
      <div className="forum-content">{TabSelector(tabSelection)}</div>
    </div>
  );
};

export default Forum;
