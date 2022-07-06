import {
    ApiKey,
    Endpoint,
    IGetResp,
    CallbackVoid,
    DataDrawNews,
    DataDrawSources,
} from '../interfaces-and-types/interfaces-and-type';

type CallbackDraw = CallbackVoid<DataDrawNews> | CallbackVoid<DataDrawSources>;
class Loader {
    baseLink: string;
    private options: ApiKey;

    constructor(baseLink: string, options: ApiKey) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} }: IGetResp,
        callback: CallbackDraw = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: ApiKey, endpoint: Endpoint) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: 'GET' | 'POST', endpoint: Endpoint, callback: CallbackDraw, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
