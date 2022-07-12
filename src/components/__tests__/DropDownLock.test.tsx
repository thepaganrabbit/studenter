import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { MessageProps } from '../../types';
import DropDownBlock from '../DropDownBlock/DropDownBlock';
import { format } from 'date-fns';

describe('Drop Down Block Test', () => {
  const sample_message = {
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
    return render(<DropDownBlock {...props} />);
  };

  it('should render to screen', async () => {
    expect(await exec(sample_message)).toBeDefined();
  });
  it(`it should render a title matching ${sample_message.title}`, async () => {
    const title = await exec(sample_message).container.querySelector(
      '.title > h3',
    )?.innerHTML;
    expect(title).toBe(sample_message.title);
  });
  it(`it should render a title matching ${sample_message.title}... if title is too long`, async () => {
    sample_message.title = 'title title title title title title';
    const title = await exec(sample_message).container.querySelector(
      '.title > h3',
    )?.innerHTML;
    expect(title).toBe('title title title title title ...');
    sample_message.title = 'Wonder how it works?';
  });
  it(`it should render a from ${sample_message.sender.name}`, async () => {
    const from = await exec(sample_message).container.querySelector('.from > p')
      ?.innerHTML;
    expect(from).toBe(sample_message.sender.name);
  });
  it(`it should render to whome the message ${sample_message.to.name}`, async () => {
    const to = await exec(sample_message).container.querySelectorAll(
      '.from > p',
    )[1].innerHTML;
    expect(to).toBe(sample_message.to.name);
  });
  it(`it should render the posted date ${sample_message.date}`, async () => {
    const posted = await exec(sample_message).container.querySelector('.posted')
      ?.innerHTML;
    expect(posted).toBe(sample_message.date);
  });
  it('should not render the drop-content on default', async () => {
    const drop_content = await exec(sample_message).container.querySelector(
      '.drop-content',
    );
    expect(drop_content).toBeNull();
  });
  it('should render the drop-content on click', async () => {
    const wrapper = await exec(sample_message);
    const header_btn = wrapper.container.querySelector(
      '[data-testid="touch-op"]',
    );
    const drop_content = wrapper.container.querySelector('.drop-content');
    expect(drop_content).toBeNull();
    await fireEvent.click(header_btn as HTMLButtonElement);
    const drop_content_exists =
      wrapper.container.querySelector('.drop-content');
    expect(drop_content_exists).toBeDefined();
  });
  it(`should render the main content ${sample_message}`, async () => {
    const wrapper = await exec(sample_message);
    const header_btn = wrapper.container.querySelector(
      '[data-testid="touch-op"]',
    );
    await fireEvent.click(header_btn as HTMLButtonElement);
    const content = await wrapper.container.querySelector('.main-content > p')
      ?.innerHTML;
    expect(content).toBe(sample_message.content);
  });
  it(`should render replies`, async () => {
    (sample_message.replies as any) = [
      {
        _id: 'uurue',
        from: {
          name: 'Jack Smith',
          userId: '1222323',
        },
        reply: 'Around 18 but 75 has limits too.',
        date: format(new Date(), 'yyyy/dd/MM'),
      },
    ];
    const wrapper = await exec(sample_message);
    const header_btn = wrapper.container.querySelector(
      '[data-testid="touch-op"]',
    );
    await fireEvent.click(header_btn as HTMLButtonElement);
    const content = await wrapper.container.querySelector('.main-content > p')
      ?.innerHTML;
    expect(content).toBe(sample_message.content);
  });
  it(`should render the three action buttons`, async () => {
    const wrapper = await exec(sample_message);
    const header_btn = wrapper.container.querySelector(
      '[data-testid="touch-op"]',
    );
    await fireEvent.click(header_btn as HTMLButtonElement);
    const content = await wrapper.container.querySelectorAll(
      '.action > button',
    );
    expect(content.length).toBe(3);
  });
});
