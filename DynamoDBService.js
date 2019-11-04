// eslint-disable-next-line import/no-extraneous-dependencies
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import uuidv4 from 'uuid/v4';
import ValidationUtils from 'Middlewares/validationUtils';
import { getCurrentDateTime } from '../helpers';
import { aws } from '../config';

export default class DynamoDBService {
  // eslint-disable-next-line class-methods-use-this
  get baseParams() {
    return {
      TableName: aws.dynamo.tableName,
    };
  }

  /**
   * @param {object} options
   */
  constructor() {
    this.dynamoClient = new DocumentClient();
    this.validator = new ValidationUtils();
  }

  /**
   *
   * @param {Object} item
   * @param {String} key
   * @returns {Promise<PromiseResult<D, E>>}
   */
  save(item, key = '/fieldExperiment') {
    const params = this.createParamObject({
      Item: {
        ID: uuidv4(),
        Message: JSON.stringify(item),
        Event: item.event,
        DateTime: getCurrentDateTime(),
      },
    });

    return this.validator.validate(item, key).then(() => {
      return this.dynamoClient.put(params).promise();
    });
  }

  /**
   * @param {object} additionalArgs
   * @returns {object}
   */
  /* istanbul ignore next */
  createParamObject(additionalArgs = {}) {
    return { ...this.baseParams, ...additionalArgs };
  }
}
