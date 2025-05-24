import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as rds from 'aws-cdk-lib/aws-rds';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

export interface RdsStackProps extends StackProps {
  instanceIdentifier: string;
  engine: rds.IInstanceEngine;
  vpc: ec2.IVpc;
  instanceType: ec2.InstanceType;
  allocatedStorage?: number;
  databaseName?: string;
}

export class RdsStack extends Stack {
  public readonly dbInstance: rds.DatabaseInstance;

  constructor(scope: Construct, id: string, props: RdsStackProps) {
    super(scope, id, props);

    this.dbInstance = new rds.DatabaseInstance(this, props.instanceIdentifier, {
      instanceIdentifier: props.instanceIdentifier,
      engine: props.engine,
      vpc: props.vpc,
      instanceType: props.instanceType,
      allocatedStorage: props.allocatedStorage ?? 20,
      databaseName: props.databaseName,
      removalPolicy: rds.RemovalPolicy.DESTROY, // Change to RETAIN for production
      deletionProtection: false,
      publiclyAccessible: false,
    });
  }
}