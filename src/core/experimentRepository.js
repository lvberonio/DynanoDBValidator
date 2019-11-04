import DynamoDBService from 'Services/DynamoDBService';

/**
 * @param {object} item
 * @param {string} key
 * @returns {Promise<PromiseResult<D, E>>}
 */
// eslint-disable-next-line import/prefer-default-export
export const add = (item, key = '/fieldExperiment') => {
  const dynamoDbService = new DynamoDBService();

  return dynamoDbService.save(item, key);
};
