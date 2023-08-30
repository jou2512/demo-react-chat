import { Trace } from './types';
import { CustomMessage } from '../custom-message.enum';

export const TestingTrace: Trace = {
  canHandle: ({ type }) => type === 'testing_two',
  handle: ({ context }, trace) => {
    const { url } = JSON.parse(trace.payload);

    context.messages.push({
      type: CustomMessage.TEST,
      payload: `this is a testing message ${url}`,
    });
    return context;
  },
};