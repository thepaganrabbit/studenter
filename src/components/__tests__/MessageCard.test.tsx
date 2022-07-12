import React from 'react';
import { render } from '@testing-library/react';
import { theme, ThemeContext } from '../../theme';
import MessageCard from '../MessageCard/MessageCard';
import { format } from 'date-fns';
import { MessageProps } from '../../types';

describe('MessageBoard Test', () => {
  const sample_message: MessageProps = {
    _id: 'jsjsuie',
    title: 'Wondering how it works?',
    sender: { fromId: '334d433', name: 'Andy' },
    to: { fromId: '323423dd', name: 'Sammy' },
    content: 'this is a message from Andy',
    date: format(new Date(), 'yyyy/dd/MM'),
    status: false,
    approved: true,
    replies: [],
  };
  const exec = (props: MessageProps) => {
    return render(
      <ThemeContext.Provider value={theme}>
        <MessageCard {...props} />
      </ThemeContext.Provider>,
    );
  };

  it('should render to screen', async () => {
    expect(await exec(sample_message)).toBeDefined();
  });
  it(`renders a title to the card that matches ${sample_message.title}`, async () => {
    const msgBrd = await exec(sample_message).container.querySelector(
      '.msg-box',
    );
    expect(msgBrd!.querySelector('.card-header-title')?.innerHTML).toBe(
      sample_message.title,
    );
  });
  it(`renders content that matches ${sample_message.content}`, async () => {
    const msgBrd = await exec(sample_message).container.querySelector(
      '.content',
    );
    expect(msgBrd!.querySelector('p')?.innerHTML).toBe(sample_message.content);
  });
});
