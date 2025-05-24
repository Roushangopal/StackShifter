# StackShifter

StackShifter is a SaaS platform that helps developers and startups quickly scaffold and deploy production-ready infrastructure on AWS. It uses AWS CDK or Terraform under the hood to generate complete stacks with services like Lambda, API Gateway, DynamoDB, S3, and more.

## 🚀 Features

- Drag-and-drop service selection UI (Coming Soon)
- Supports AWS CDK (TypeScript & Python) and Terraform
- Auto-generates backend code templates
- Preconfigured CI/CD pipelines
- Logging, monitoring, and IAM roles setup
- Easily extendable & production-grade code generation
- REST API to programmatically generate stacks

## 📆 Tech Stack

- **Backend:** Node.js, Express, TypeScript
- **Infrastructure:** AWS CDK / Terraform
- **Code Generation:** Templated services (Lambda, S3, API Gateway, etc.)
- **Frontend (upcoming):** React (Drag-and-drop builder)

## 🛠 Setup (Local Development)

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/stackshifter.git
   cd stackshifter
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

## 📂 Project Structure

```
services/
  infra-generator/         # Core service that handles code and infra generation
    templates/             # CDK/Terraform templates for different services
    src/
      routes/              # API routes (e.g., /generate)
      controllers/         # Business logic
      utils/               # Helper functions
      server.ts            # App entrypoint
```

## 📄 API Example

**POST /generate**

```json
{
  "cloud": "aws",
  "language": "typescript",
  "projectName": "myApp",
  "region": "us-east-1",
  "services": ["lambda", "apigateway", "dynamodb"]
}
```

## 📌 Roadmap

- [x] Core infra generation service
- [x] Lambda, S3, API Gateway, DynamoDB, ec2, rds, evenbridge templates
- [ ] React-based drag-and-drop UI
- [ ] Terraform support
- [ ] User authentication & dashboard

## 🤝 Contributing

PRs and issues are welcome. Please fork the repo and follow standard GitHub workflows.

## 📜 License

MIT License

---

Made with ❤️ by Roushan & Contributors

