import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '127464d4ba5140c79f05e13e50385f83', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
