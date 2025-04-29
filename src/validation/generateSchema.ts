import { z } from 'zod';

export const generateInfraSchema = z.object({
  cloud: z.literal("aws"), // you can add support for gcp/azure later
  language: z.enum(["typescript", "python"]),
  services: z.array(z.enum(["lambda", "dynamodb", "apigateway", "s3"])),
  projectName: z.string().min(1),
  region: z.string()
});

export type GenerateInfraInput = z.infer<typeof generateInfraSchema>;
