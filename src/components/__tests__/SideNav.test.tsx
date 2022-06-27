import React from 'react';
import { render } from '@testing-library/react';
import SideNav from '../SideNav/SideNav';

describe('SideNav Test', () => {
  const expectedButtonTitles = [
    'Room',
    'Docs',
    'Lessons',
    'Grades',
    'Noteboard',
    'Forum',
    'Home',
    'Settings',
  ];
  const exec = () => {
    return render(<SideNav />);
  };

  it('should render to screen', async () => {
    expect(await exec()).toBeDefined();
  });
  it('renders 8 buttons', async () => {
    const buttons = await exec().container.querySelectorAll('button').length;
    expect(buttons).toBeGreaterThan(7);
  });
  it('renders 8 buttons', async () => {
    const buttons = await exec().container.querySelectorAll('button');
    const buttonsOnPage: string[] = [];
    buttons.forEach((btn) => {
      buttonsOnPage.push(btn.innerHTML);
    });
    expect(buttonsOnPage.sort()).toEqual(expectedButtonTitles.sort())
  });
});
