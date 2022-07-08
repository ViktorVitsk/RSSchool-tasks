import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '2fcbdc172dc34cb0bf6129f03082d609', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
