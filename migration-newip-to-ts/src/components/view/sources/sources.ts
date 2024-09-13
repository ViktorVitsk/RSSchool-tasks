import './sources.css';
import { DataSources } from '../../interfaces-and-types/interfaces-and-type';

class Sources {
    private colors: string[] = [
        '#FF6633',
        '#FFB399',
        '#FF33FF',
        '#FFFF99',
        '#00B3E6',
        '#E6B333',
        '#3366E6',
        '#999966',
        '#99FF99',
        '#B34D4D',
        '#80B300',
        '#809900',
        '#E6B3B3',
        '#6680B3',
        '#66991A',
        '#FF99E6',
        '#CCFF1A',
        '#FF1A66',
        '#E6331A',
        '#33FFCC',
        '#66994D',
        '#B366CC',
        '#4D8000',
        '#B33300',
        '#CC80CC',
        '#66664D',
        '#991AFF',
        '#E666FF',
        '#4DB3FF',
        '#1AB399',
        '#E666B3',
        '#33991A',
        '#CC9999',
        '#B3B31A',
        '#00E680',
        '#4D8066',
        '#809980',
        '#E6FF80',
        '#1AFF33',
        '#999933',
        '#FF3380',
        '#CCCC00',
        '#66E64D',
        '#4D80CC',
        '#9900B3',
        '#E64D66',
        '#4DB380',
        '#FF4D4D',
        '#99E6E6',
        '#6666FF',
    ];

    draw(data: DataSources[]) {
        const randomColors = this.colors.sort(() => Math.random() - 0.5);
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
                const indColor = (item.name.charCodeAt(0) - 65) % 24;

                (sourceClone.querySelector('.source__item') as HTMLTemplateElement).setAttribute(
                    'style',
                    `background-color:${randomColors[indColor]};`
                );
            }
            fragment.append(sourceClone);
        });

        document.querySelector('.sources')?.append(fragment);
    }
}

export default Sources;
