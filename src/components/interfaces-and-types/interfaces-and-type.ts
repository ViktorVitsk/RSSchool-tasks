export type ApiKey = {
    [key: string]: string;
};

export type Endpoint = 'everything' | 'sources';

export interface IGetResp {
    endpoint: Endpoint;
    options?: ApiKey;
}

export type CallbackVoid<T> = (data: T) => void;

export type source = {
  id: string,
  name: string
}

export interface DataNews {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: source;
  title: string;
  url: string;
  urlToImage: string;
}

export interface DataSources extends source{
  category: string
  country: string
  description: string
  language: string
  url: string
}


export interface DataDrawNews {
  articles: DataNews[];
  status: string;
  totalResults: number;
}
export interface DataDrawSources {
  sources: DataSources[];
  status: string;
}