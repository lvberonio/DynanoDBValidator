import DynamoDBService from 'Services/DynamoDBService';

describe('test DynamoDBService', () => {
  it('should save with items to DynamoDB', () => {
    const dynamoDbService = new DynamoDBService();
    const item = {
      name: 'simple_button_variant_exp',
      time: 1571649108.878,
      salt: 'simple_button_variant_exp',
      inputs: {
        id: 1,
      },
      params: {
        buttonText: 'variant 1',
      },
      event: 'clicked_button',
    };
    expect(dynamoDbService.save(item)).resolves.toEqual({});
  });
});
