import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';

export interface DynamoDbStackProps extends StackProps {
  tableName: string;
  partitionKey: { name: string; type: dynamodb.AttributeType };
}

export class DynamoDbStack extends Stack {
  public readonly table: dynamodb.Table;

  constructor(scope: Construct, id: string, props: DynamoDbStackProps) {
    super(scope, id, props);

    this.table = new dynamodb.Table(this, props.tableName, {
      tableName: props.tableName,
      partitionKey: {
        name: props.partitionKey.name,
        type: props.partitionKey.type,
      },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
    });
  }
}