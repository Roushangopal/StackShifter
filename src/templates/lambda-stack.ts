import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export interface LambdaStackProps extends StackProps {
  functionName: string;
  runtime: lambda.Runtime;
  handler: string;
  codePath: string;
}

export class LambdaStack extends Stack {
  public readonly lambdaFunction: lambda.Function;

  constructor(scope: Construct, id: string, props: LambdaStackProps) {
    super(scope, id, props);

    this.lambdaFunction = new lambda.Function(this, props.functionName, {
      functionName: props.functionName,
      runtime: props.runtime,
      handler: props.handler,
      code: lambda.Code.fromAsset(props.codePath),
    });
  }
}