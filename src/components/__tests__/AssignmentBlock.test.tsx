import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Assignment, AssignmentBlockProps } from '../../types';
import AssignmentBlock from '../AssignmentBlock/AssignmentBlock';
import { format } from 'date-fns';

describe('AssignmentBlock Test', () => {
  const sample_data: Assignment = {
    _id: '344df',
    title: 'Methods Of Distraction',
    description: 'How does one distract a person - METHODS',
    points: 3,
    createdOn: format(new Date(), 'yyyy/dd/MM'),
    dueDate: format(new Date('09/13/2022'), 'yyyy/dd/MM'),
    documents: [],
    classId: '445tg5rt4',
  };
  const exec = (props: AssignmentBlockProps) => {
    return render(<AssignmentBlock {...props} />);
  };

  it('should render to screen', async () => {
    expect(await exec(sample_data)).toBeDefined();
  });
  it('renders a title that matches sample data', async () => {
    const wrapper = await exec(sample_data).container.querySelector(
      '.blk-title',
    );
    expect(wrapper?.querySelector('h4')?.innerHTML).toBe(sample_data.title);
  });
  it('renders a created on date that matches sample data', async () => {
    const wrapper = await exec(sample_data).container.querySelector(
      '.blk-title',
    );
    expect(wrapper?.querySelector('p')?.innerHTML).toBe(sample_data.createdOn);
  });
  it('renders a div with collapsed', async () => {
    const wrapper = await exec(sample_data).container.querySelector(
      '.collapsed',
    );
    expect(wrapper).toBeDefined();
  });
  it('renders the description', async () => {
    const touchableOpacity = await exec(sample_data).container.querySelector(
      '.touchable-opacity',
    );
    await fireEvent.click(touchableOpacity as HTMLButtonElement);
    const description = await exec(sample_data).container?.querySelector(
      '.para-content',
    )?.innerHTML;
    expect(description).toBe(sample_data.description);
  });
  it('renders a documents dropdown', async () => {
    const touchableOpacity = await exec(sample_data).container.querySelector(
      '.touchable-opacity',
    );
    await fireEvent.click(touchableOpacity as HTMLButtonElement);
    const select = await exec(sample_data).container?.querySelector('.select');
    expect(select).toBeDefined();
  });
  it('renders a points as a number', async () => {
    const touchableOpacity = await exec(sample_data).container.querySelector(
      '.touchable-opacity',
    );
    await fireEvent.click(touchableOpacity as HTMLButtonElement);
    const bottom_bar = await exec(sample_data).container?.querySelector(
      '.bottom-bar',
    );
    const points = bottom_bar?.querySelector('#points')?.innerHTML;
    expect(Number(points?.split(' ')[1])).toBe(sample_data.points);
  });
  it('renders a points as a as boolean as pass fail', async () => {
    sample_data.points = false;
    const touchableOpacity = await exec(sample_data).container.querySelector(
      '.touchable-opacity',
    );
    await fireEvent.click(touchableOpacity as HTMLButtonElement);
    const bottom_bar = await exec(sample_data).container?.querySelector(
      '.bottom-bar',
    );
    const points = bottom_bar?.querySelector('#points')?.innerHTML;
    expect(points?.split(' ')[1]).toBe('PASS/FAIL');
  });
  it('renders the class id', async () => {
    const touchableOpacity = await exec(sample_data).container.querySelector(
      '.touchable-opacity',
    );
    await fireEvent.click(touchableOpacity as HTMLButtonElement);
    const classID = await exec(sample_data).container?.querySelector(
      '#classId',
    );
    expect(classID?.innerHTML.split(' ')[1]).toBe(sample_data.classId);
  });
  it('renders the due date', async () => {
    const touchableOpacity = await exec(sample_data).container.querySelector(
      '.touchable-opacity',
    );
    await fireEvent.click(touchableOpacity as HTMLButtonElement);
    const classID = await exec(sample_data).container?.querySelector(
      '#dueDate',
    );
    expect(classID?.innerHTML.split(' ')[1]).toBe(sample_data.dueDate);
  });
});
