import { Message, Package } from '../../../types';
import { MessageService } from '../Messages.service';

describe('Message Service - Tests', () => {
  it('resolves a get request - all', async () => {
    const service = new MessageService();
    const results = await service.GET();
    expect((results.data as Message[]).length).toBeGreaterThan(1);
  });
  it('resolves a get request - one', async () => {
    const service = new MessageService();
    const send_package = new Package({data: '38388374'});
    const results = await service.GET(send_package);
    expect((results.data as Message[]).length).toBeGreaterThan(0);
  });
  it('resolves a get request - one', async () => {
    const service = new MessageService();
    const send_package = new Package({data: '38388374', type: 'private'});
    const results = await service.GET(send_package);
    expect((results.data as Message[]).length).toBeGreaterThan(0);
  });
  it('resolves a get request - one', async () => {
    const service = new MessageService();
    const send_package = new Package({data: '38388374', type: 'review'});
    const results = await service.GET(send_package);
    expect((results.data as Message[]).length).toBeGreaterThan(0);
  });
});
