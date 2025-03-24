import fs from "node:fs";
import path from "node:path";

export function getFrontendPath(id: string): string | null {
  try {
    const examplesPath = path.join(
      process.cwd(),
      "algokit-templates",
      "examples",
      id
    );
    const files = fs.readdirSync(examplesPath);
    const workspaceFile = files.find((file) =>
      file.endsWith(".code-workspace")
    );

    if (!workspaceFile) {
      return null;
    }

    const workspacePath = path.join(examplesPath, workspaceFile);
    if (!fs.existsSync(workspacePath)) {
      return null;
    }

    const workspaceContent = fs.readFileSync(workspacePath, "utf-8");
    const workspace = JSON.parse(workspaceContent);
    const folders = workspace.folders || [];
    const frontendFolder = folders.find((f) =>
      f.path.toLowerCase().includes("frontend")
    );
    return frontendFolder ? frontendFolder.path.replace("./", "") : null;
  } catch (e) {
    return null;
  }
}
