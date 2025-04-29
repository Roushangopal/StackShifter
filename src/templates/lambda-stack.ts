export function getLambdaTemplate(config: any): string {
  return `
    const lambdaFn = new lambda.Function(this, '${config.functionName}', {
      runtime: lambda.Runtime.${config.runtime.toUpperCase().replace(".", "_")},
      handler: '${config.handler}',
      code: lambda.Code.fromAsset('lambda'),
    });
  `;
}
