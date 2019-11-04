import middy from 'middy';
import { add } from 'Core/experimentRepository';
import { normalizeSQSMessage } from 'slsrun/middlewares';

const originalHandler = async event => {
  const result = await add(event.collection[0].data);

  return { result };
};

// eslint-disable-next-line import/prefer-default-export
export const handler = middy(originalHandler);

handler.use(normalizeSQSMessage());
