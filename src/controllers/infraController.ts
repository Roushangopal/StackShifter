import { generateCdkProject } from "../generators/generateCdkProject";
import { generateInfraSchema } from "../validation/generateSchema";
import { Request, Response } from 'express';

export const generateInfra = async (req: Request, res: Response): Promise<void> => {
  try {
    const parsed = generateInfraSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: parsed.error.issues });
      return;
    }

    const { projectName, services, region, language } = parsed.data;

    // 🏗 Call the function to generate infra files
    await generateCdkProject(parsed.data);

    res.status(200).json({ message: "Infrastructure generated successfully" });

  } catch (err) {
    console.error("Error generating infra:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
