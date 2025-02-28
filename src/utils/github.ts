// Replace with your values
const owner = "lempira";
const repo = "template-gallery-spike";

// GitHub API endpoint for file contents

// Make the request
export async function getGithubFileContents(path: string, branch: string = "main") {
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `GitHub API returned ${response.status}: ${response.statusText}`
      );
    }

    const data = await response.json();

    // GitHub returns file content as base64 encoded
    const content = atob(data.content);
    return content;
  } catch (error) {
    console.error("Error fetching file from GitHub:", error);
  }
}
