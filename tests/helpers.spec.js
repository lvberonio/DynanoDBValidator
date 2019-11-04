import * as helpers from '../src/helpers';

describe('test helpers', () => {
  it('should return the proper sqsBaseUrl', () => {
    return expect(
      `https://sqs.${process.env.AWS_ACCOUNT_REGION}.amazonaws.com/${process.env.AWS_ACCOUNT_ID}/`
    ).toEqual(helpers.sqsBaseUrl());
  });

  it('should return the proper getCurrentDateTime', () => {
    const date = new Date();

    return expect(`${date.toISOString().split('.')[0]}Z`).toEqual(
      `${helpers.getCurrentDateTime().split('.')[0]}Z`
    );
  });
});
