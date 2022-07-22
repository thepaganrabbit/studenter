import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { sample_store } from '../../setupTests';
import { Provider } from 'react-redux';
import { theme, ThemeContext } from '../../theme';
import Forum from '../Forum/Forum';

describe('Forum Tests', () => {
  const exec = () => {
    return render(
      <BrowserRouter>
        <ThemeContext.Provider value={theme}>
          <Provider store={sample_store}>
            <Forum />
          </Provider>
        </ThemeContext.Provider>
      </BrowserRouter>,
    );
  };

  it('should render to screen', () => {
    expect(exec()).toBeDefined();
  });
  it('should render the main forum to screen by default', async () => {
    const wrapper = await exec();
    const main_forum = wrapper.container.querySelector('.main-forum');
    expect(main_forum).toBeDefined();
  });
  it('should open main forum and have class active', async () => {
    const wrapper = await exec();
    const mainTab = await wrapper.findByTestId('main forum tab');
    await fireEvent.click(mainTab as any);
    const main_forum = wrapper.container.querySelector('.main-forum');
    expect(main_forum).toBeDefined();
    const li = (await mainTab).classList;
    expect(li.contains('is-active')).toBeTruthy();
  });
  it('should not have class active - main', async () => {
    const wrapper = await exec();
    const privTab = await wrapper.findByTestId('private forum tab');
    const mainTab = await wrapper.findByTestId('main forum tab');
    await fireEvent.click(privTab as any);
    const li = (await mainTab).classList;
    expect(li.contains('is-active')).toBeFalsy();
  });
  it('should open private forum and have class active', async () => {
    const wrapper = await exec();
    const privTab = await wrapper.findByTestId('private forum tab');
    await fireEvent.click(privTab as any);
    const main_forum = wrapper.container.querySelector('.private-forum');
    expect(main_forum).toBeDefined();
    const li = (await privTab).classList;
    expect(li.contains('is-active')).toBeTruthy();
  });
  it('should not have class active - main', async () => {
    const wrapper = await exec();
    const privTab = await wrapper.findByTestId('private forum tab');
    const mainTab = await wrapper.findByTestId('main forum tab');
    await fireEvent.click(mainTab as any);
    const li = (await privTab).classList;
    expect(li.contains('is-active')).toBeFalsy();
  });
  it('should open review forum and have class active', async () => {
    const wrapper = await exec();
    const rivTab = await wrapper.findByTestId('review forum tab');
    await fireEvent.click(rivTab as any);
    const review_forum = wrapper.container.querySelector('.review-forum');
    expect(review_forum).toBeDefined();
    const li = (await rivTab).classList;
    expect(li.contains('is-active')).toBeTruthy();
  });
  it('should not have class active - main', async () => {
    const wrapper = await exec();
    const rivTab = await wrapper.findByTestId('review forum tab');
    const mainTab = await wrapper.findByTestId('main forum tab');
    await fireEvent.click(mainTab as any);
    const li = (await rivTab).classList;
    expect(li.contains('is-active')).toBeFalsy();
  });
});
