import { Validator } from 'jsonschema';

const requestSchema = require('../../config/schemas/experiment_request');

export default class ValidationUtils {
  constructor() {
    this.validator = new Validator();
    this.validator.addSchema(requestSchema, '/fieldExperiment');
  }

  validate(object, key) {
    const schema = this.validator.schemas[key];

    return new Promise((resolve, reject) => {
      const validation = this.validator.validate(object, schema);

      if (validation.errors.length > 0) {
        reject(validation.errors);
      } else {
        resolve();
      }
    });
  }
}
