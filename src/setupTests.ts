// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import { init } from '@rematch/core';
import '@testing-library/jest-dom';
import { format } from 'date-fns';
import { Message } from './types';

// Handles issue from MUI and jsdowm issues
beforeEach(() => {
  (console as any).defaultError = console.error.bind(console);
  (console as any).errors = [];
  console.error = function () {
    // default &  console.error()
    Object.entries(arguments).forEach((data) => {
      const [_, v] = data;
      if (v.includes('CSS') || v.includes('.tss')) {
        return;
      }

      (console as any).defaultError.apply(console, data);
      // new & array data
      (console as any).errors.push(Array.from(data));
    });
  };
});

export const sample_store = init({
  models: {
    test_mod: {
      state: {
        age: 0,
      },
    },
    student_mod: {
      state: {
        students: [
          {
            firstName: 'Bob',
            lastName: 'Blobly',
            middleInitial: 'C',
            class: 1,
            id: '134323',
            gpa: 3.0,
            fileLink: 'FR878',
          },
        ],
      },
    },
    message_mod: {
      state: {
        messages: [
          {
            _id: 'jsjsuie',
            title: 'Wondering how it works?',
            sender: { fromId: '334d433', name: 'Andy' },
            to: { fromId: '323423dd', name: 'Sammy' },
            content: 'this is a message from Andy',
            date: format(new Date(), 'yyyy/dd/MM'),
            status: false,
            approved: true,
            replies: [],
          },
          {
            _id: 'jsjsuide',
            title: 'Wondering how it works?',
            sender: { fromId: '334d433', name: 'Andy' },
            to: { fromId: '323423dd', name: 'Sammy' },
            content: 'this is a message from Andy',
            date: format(new Date(), 'yyyy/dd/MM'),
            status: false,
            approved: true,
            replies: [],
          },
        ],
      },
      reducers: {
        allMessages(state, payload: Message[]) {
          return {
            messages: payload,
          };
        },
      },
      effects: (dispatch: any) => ({
        async getMessages() {
          dispatch.message_mod.allMessages([
            {
              _id: 'jsjsuie',
              title: 'Wondering how it works?',
              sender: { fromId: '334d433', name: 'Andy' },
              to: { fromId: '323423dd', name: 'Sammy' },
              content: 'this is a message from Andy',
              date: format(new Date(), 'yyyy/dd/MM'),
              status: false,
              approved: true,
              replies: [],
            },
            {
              _id: 'jsjsuide',
              title: 'Wondering how it works?',
              sender: { fromId: '334d433', name: 'Andy' },
              to: { fromId: '323423dd', name: 'Sammy' },
              content: 'this is a message from Andy',
              date: format(new Date(), 'yyyy/dd/MM'),
              status: false,
              approved: true,
              replies: [],
            },
          ]);
        },
        async getPersonalMessages(userId: string) {
          dispatch.message_mod.allMessages([
            {
              _id: 'jsjsuie',
              title: 'Wondering how it works?',
              sender: { fromId: '334d433', name: 'Andy' },
              to: { fromId: '323423dd', name: 'Sammy' },
              content: 'this is a message from Andy',
              date: format(new Date(), 'yyyy/dd/MM'),
              status: false,
              approved: true,
              isPrivate: true,
              replies: [],
            },
            {
              _id: 'jsjsuide',
              title: 'Wondering how it works?',
              sender: { fromId: '334d433', name: 'Andy' },
              to: { fromId: '323423dd', name: 'Sammy' },
              content: 'this is a message from Andy',
              date: format(new Date(), 'yyyy/dd/MM'),
              status: false,
              approved: true,
              isPrivate: true,
              replies: [],
            },
          ]);
        },
        async getMessagesToReview(userId: string) {
          dispatch.message_mod.allMessages([
            {
              _id: '344rdsd',
              title: 'Time?',
              sender: { userId: '334d433', name: 'Andy' },
              content: 'What time is class on Wednesday?',
              date: format(new Date(), 'yyyy/dd/MM'),
              status: false,
              approved: false,
              replies: [],
            },
            {
              _id: '344rdfsd',
              title: 'Time?',
              sender: { userId: '334d433', name: 'Andy' },
              content: 'What time is class on dd Wednesday?',
              date: format(new Date(), 'yyyy/dd/MM'),
              status: false,
              approved: false,
              replies: [],
            },
          ]);
        },
      }),
    },
    assignment_mod: {
      state: {
        assignments: [
          {
            _id: '344df',
            title: 'Methods Of Distraction',
            description: 'How does one distract a person - METHODS',
            points: 3,
            createdOn: format(new Date(), 'yyyy/dd/MM'),
            dueDate: format(new Date('09/13/2022'), 'yyyy/dd/MM'),
            documents: [],
            classId: '445tg5rt4',
          },
          {
            _id: '34d4df',
            title: 'Methods Of Hypnosis',
            description:
              'Distraction is a type of hypnosis, confusion and missunderstanding - Mind Control',
            points: true,
            createdOn: format(new Date(), 'yyyy/dd/MM'),
            dueDate: format(new Date('09/11/2022'), 'yyyy/dd/MM'),
            documents: [],
            classId: '445tg5rt4',
          },
        ],
      },
    },
  },
});
