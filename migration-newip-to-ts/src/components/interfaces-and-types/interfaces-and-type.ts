export type ApiKey = {
    [key: string]: string;
};

export type Endpoint = 'everything' | 'sources';

enum Languages {
    'ar',
    'de',
    'en',
    'es',
    'fr',
    'he',
    'it',
    'nl',
    'no',
    'pt',
    'ru',
    'sv',
    'ud',
    'zh',
}

export interface IGetResp {
    endpoint: Endpoint;
    options?: ApiKey;
}

// eslint-disable-next-line no-unused-vars
export type CallbackVoid<T> = (data: T) => void;

export type Source = {
    id: string;
    name: string;
};

type UrlAndDescriptions = {
    url: string;
    description: string;
}
export interface DataNews {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: Source;
    title: string;
    url: string;
    urlToImage: string;
}

export interface DataSources extends Source, UrlAndDescriptions {
    category: string;
    country: string;
    language: Languages;
}

type Status = { status: 'ok' | 'error' };

export interface DataDrawNews extends Status {
    articles: DataNews[];
    totalResults: number;
}
export interface DataDrawSources extends Status {
    sources: DataSources[];
}
