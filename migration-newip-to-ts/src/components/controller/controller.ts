import AppLoader from './appLoader';
import { CallbackVoid, DataDrawNews, DataDrawSources } from '../interfaces-and-types/interfaces-and-type';

class AppController extends AppLoader {
    getSources(callback: CallbackVoid<DataDrawSources>): void {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback: CallbackVoid<DataDrawNews>): void {
        if (e.target instanceof HTMLElement && e.currentTarget instanceof HTMLElement) {
            let target = e.target;

            const newsContainer = e.currentTarget;

            while (target !== newsContainer) {
                if (target.classList.contains('source__item')) {
                    const sourceId: string = <string>target.getAttribute('data-source-id');
                    if (newsContainer.getAttribute('data-source') !== sourceId) {
                        newsContainer.setAttribute('data-source', sourceId);
                        super.getResp(
                            {
                                endpoint: 'everything',
                                options: {
                                    sources: sourceId,
                                },
                            },
                            callback
                        );
                    }
                    return;
                }
                if (target.parentNode instanceof HTMLElement) {
                    target = target.parentNode;
                }
            }
        }
    }
}

export default AppController;
