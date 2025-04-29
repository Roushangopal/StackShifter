import { Construct } from 'constructs';
import * as events from 'aws-cdk-lib/aws-events';
import * as targets from 'aws-cdk-lib/aws-events-targets';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface EventBridgeProps {
  lambdaTarget: lambda.IFunction;
  scheduleExpression: string; // e.g., 'rate(5 minutes)'
}

export class EventBridgeConstruct extends Construct {
  constructor(scope: Construct, id: string, props: EventBridgeProps) {
    super(scope, id);

    new events.Rule(this, 'EventBridgeRule', {
      schedule: events.Schedule.expression(props.scheduleExpression),
      targets: [new targets.LambdaFunction(props.lambdaTarget)],
    });
  }
}
