export function getDynamoDbTemplate(config: any): string {
  return `
    const table = new dynamodb.Table(this, '${config.tableName}', {
      tableName: '${config.tableName}',
      partitionKey: {
        name: '${config.partitionKey.name}',
        type: dynamodb.AttributeType.${config.partitionKey.type},
      },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST
    });
  `;
}
