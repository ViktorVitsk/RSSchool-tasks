import './sources.css';
import { DataSources } from '../../interfaces-and-types/interfaces-and-type';

class Sources {
    draw(data: DataSources[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;
            {
                (sourceClone.querySelector('.source__item-name') as HTMLTemplateElement).textContent = item.name;
                (sourceClone.querySelector('.source__item') as HTMLTemplateElement).setAttribute(
                    'data-source-id',
                    item.id
                );
            }
            fragment.append(sourceClone);
        });

        document.querySelector('.sources')?.append(fragment);
    }
}

export default Sources;
