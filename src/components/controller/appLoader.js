import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '99b96077bacb4ca3b96ee6c1f3013430', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
