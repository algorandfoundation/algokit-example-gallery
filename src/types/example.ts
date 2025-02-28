export interface Example {
  id: string;
  type: "smart-contract" | "dapp" | "frontend";
  author: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  features: string[];
  repositoryUrl: string;
  detailsPages?: {
    smartContract?: string;
  };
}

export interface Examples {
  examples: Example[];
}
