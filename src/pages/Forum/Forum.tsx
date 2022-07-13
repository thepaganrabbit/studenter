import React from 'react';

import './forum.scss';
import { ThemeContext } from '../../theme';
import { ThemeBuilder } from '../../utils/ThemeBuilder';
import { ForumTabEnum } from '../../types';
import MainForum from './MainForum/MainForum';
import SwitchComponentFactory from '../../utils/SwitchComponents';

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
          >
            <a>Forum</a>
          </li>
          <li
            className={tabSelection === ForumTabEnum.PRIVATE ? 'is-active' : ''}
            onClick={() => setTagSelection(ForumTabEnum.PRIVATE)}
          >
            <a>Private</a>
          </li>
          <li>
            <a>Rejected</a>
          </li>
        </ul>
      </div>
      <div className="forum-content">
        {SwitchComponentFactory({
          components: [
            { name: ForumTabEnum.MAIN, component: <MainForum /> },
            { name: ForumTabEnum.PRIVATE, component: <>second</> },
          ],
          selection: tabSelection,
        })}
      </div>
    </div>
  );
};

export default Forum;
