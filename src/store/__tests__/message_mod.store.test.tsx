import { store } from '..';
import { MessageService } from '../services/Messages.service';

jest.mock('../services/Messages.service');

describe('Store tests - Message_mod', () => {
  it('has message array', () => {
    expect(store.getState().message_mod.messages instanceof Array).toBeTruthy();
  });
  it('calls Get on service', async () => {
    const mock = jest.fn().mockResolvedValueOnce([]);
    MessageService.prototype.GET = mock;
    await store.dispatch({ type: 'message_mod/getMessages' });
    expect(mock).toHaveBeenCalled();
  });
  it('calls Get on service and sets array', async () => {
    const mock = jest.fn().mockResolvedValueOnce([]);
    MessageService.prototype.GET = mock;
    await store.dispatch({ type: 'message_mod/getMessages' });
    expect(mock).toHaveBeenCalled();
  });
  it('calls Get on service - personal messages', async () => {
    const mock = jest.fn().mockResolvedValueOnce([]);
    MessageService.prototype.GET = mock;
    await store.dispatch({ type: 'message_mod/getPersonalMessages' });
    expect(mock).toHaveBeenCalled();
  });
  it('calls Get on service and sets array - personal messages', async () => {
    const mock = jest.fn().mockResolvedValueOnce([]);
    MessageService.prototype.GET = mock;
    await store.dispatch({ type: 'message_mod/getPersonalMessages' });
    expect(mock).toHaveBeenCalled();
  });
  it('calls Get on service and sets array - review messages', async () => {
    const mock = jest.fn().mockResolvedValueOnce([]);
    MessageService.prototype.GET = mock;
    await store.dispatch({ type: 'message_mod/getMessagesToReview' });
    expect(mock).toHaveBeenCalled();
  });
});
