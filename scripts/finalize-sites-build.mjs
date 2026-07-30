import { cpSync, mkdirSync } from "node:fs";

mkdirSync("dist/.openai", { recursive: true });
cpSync(".openai/hosting.json", "dist/.openai/hosting.json");
