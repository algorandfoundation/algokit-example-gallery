export interface Example {
  id: string;
  type: "smart-contract" | "dapp" | "frontend" | "notebook";
  author: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  features: string[];
  repositoryUrl: string;
  detailsPages?: {
    smartContract?: string;
    notebook?: string;
  };
}

export interface Examples {
  examples: Example[];
}
