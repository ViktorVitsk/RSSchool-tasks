export type ApiKey = {
    [key: string]: string;
};

export type Endpoint = 'everything' | 'sources';

export interface IGetResp {
    endpoint: Endpoint;
    options?: ApiKey;
}

export type CallbackVoid<T> = (data: T) => void;
