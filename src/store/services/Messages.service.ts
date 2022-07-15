import { format } from 'date-fns';
import { Message, Package, Response, Service } from '../../types';

export class MessageService extends Service {
  constructor() {
    super();
  }
  async GET<T>(data?: Package<T>): Promise<Response<Message[]>> {
    if (data) {
      // gets personal messages
      if (data.type === 'private') {
        return new Promise((resolve) => {
          resolve({
            status: 200,
            data: [
              {
                _id: '344rd',
                title: 'Wondering how it works?',
                sender: { userId: '334d433', name: 'Andy' },
                to: { userId: '323423dd', name: 'Sammy' },
                content: 'this is a message from Andy',
                date: format(new Date(), 'yyyy/dd/MM'),
                status: false,
                approved: true,
                isPrivate: true,
                replies: [],
              },
              {
                _id: '34dfrd',
                title: 'Pressure and Strength?',
                sender: { userId: '334d433', name: 'Andy' },
                to: { userId: '323423dd', name: 'Sammy' },
                content: 'How is grip related to standard pressure of hand?',
                date: format(new Date(), 'yyyy/dd/MM'),
                status: false,
                approved: true,
                isPrivate: true,
                replies: [],
              },
            ],
          });
        });
      } else if (data.type === 'review') {
        return new Promise((resolve) => {
          resolve({
            status: 200,
            data: [
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
            ],
          });
        });
      }
      // gets a single message
      return new Promise((resolve) => {
        resolve({
          status: 200,
          data: [
            {
              _id: '344rd',
              title: 'Wondering how it works?',
              sender: { userId: '334d433', name: 'Andy' },
              content: 'this is a message from Andy',
              date: format(new Date(), 'yyyy/dd/MM'),
              status: false,
              approved: true,
              replies: [],
            },
          ],
        });
      });
    }
    // gets all messages
    return new Promise((resolve) => {
      resolve({
        status: 200,
        data: [
          {
            _id: '344rd',
            title: 'Wondering how it works?',
            sender: { userId: '334d433', name: 'Andy' },
            content: 'this is a message from Andy',
            date: format(new Date(), 'yyyy/dd/MM'),
            status: false,
            approved: true,
            replies: [],
          },
          {
            _id: '344rdd',
            title: 'Age of I-9?',
            sender: { userId: '334d433', name: 'Andy' },
            content: 'What is the age range for i=9 travel form?',
            date: format(new Date(), 'yyyy/dd/MM'),
            status: false,
            approved: true,
            replies: [
              {
                _id: 'uurue',
                from: {
                  name: 'Jack Smith',
                  userId: '1222323',
                },
                reply: 'Around 18 but 75 has limits too.',
                date: format(new Date(), 'yyyy/dd/MM'),
              },
              {
                _id: 'uu3rue',
                from: {
                  name: 'Tommy Leru',
                  userId: '1222323',
                },
                reply: '20-70 with no limits > limits apply.',
                date: format(new Date(), 'yyyy/dd/MM'),
              },
            ],
          },
          {
            _id: '34dfrd',
            title: 'Pressure and Strength?',
            sender: { userId: '334d433', name: 'Andy' },
            content: 'How is grip related to standard pressure of hand?',
            date: format(new Date(), 'yyyy/dd/MM'),
            status: false,
            approved: true,
            replies: [],
          },
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
        ],
      });
    });
  }
}
