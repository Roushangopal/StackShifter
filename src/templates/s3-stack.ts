import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';

export interface S3BucketProps {
  bucketName: string;
}

export class S3BucketConstruct extends Construct {
  public readonly bucket: s3.Bucket;

  constructor(scope: Construct, id: string, props: S3BucketProps) {
    super(scope, id);

    this.bucket = new s3.Bucket(this, props.bucketName, {
      bucketName: props.bucketName,
      versioned: true,
      removalPolicy: s3.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });
  }
}
