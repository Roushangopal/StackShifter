import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface S3BucketStackProps extends StackProps {
  bucketName: string;
}

export class S3Stack extends Stack {
  public readonly bucket: s3.Bucket;

  constructor(scope: Construct, id: string, props: S3BucketStackProps) {
    super(scope, id, props);

    this.bucket = new s3.Bucket(this, props.bucketName, {
      bucketName: props.bucketName,
      versioned: true,
      removalPolicy: s3.RemovalPolicy.DESTROY, // Change to RETAIN for production
      autoDeleteObjects: true,
    });
  }
}