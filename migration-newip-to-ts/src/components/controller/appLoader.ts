import Loader from './loader';

const API_KEY = '2fcbdc172dc34cb0bf6129f03082d609';
class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: API_KEY, // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
