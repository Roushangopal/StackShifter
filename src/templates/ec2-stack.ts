import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

export interface Ec2StackProps extends StackProps {
  instanceType: ec2.InstanceType;
  machineImage: ec2.IMachineImage;
  vpc: ec2.IVpc;
  instanceName: string;
}

export class Ec2Stack extends Stack {
  public readonly instance: ec2.Instance;

  constructor(scope: Construct, id: string, props: Ec2StackProps) {
    super(scope, id, props);

    this.instance = new ec2.Instance(this, props.instanceName, {
      instanceType: props.instanceType,
      machineImage: props.machineImage,
      vpc: props.vpc,
      instanceName: props.instanceName,
    });
  }
}