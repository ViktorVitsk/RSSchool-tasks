import News from './news/news';
import Sources from './sources/sources';
import { DataDrawNews, DataDrawSources } from '../interfaces-and-types/interfaces-and-type';

export class AppView {

    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: DataDrawNews) {
        
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }
    
    drawSources(data: DataDrawSources) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
