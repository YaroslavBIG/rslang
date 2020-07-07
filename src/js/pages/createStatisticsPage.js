import { createMarkupChart } from '../statistics/createMarkupChart';
import { createStatisticsController } from '../statistics/createStatisticsController';

export const createStatisticsPage = () => `
    <section class="statistics-wrapper" id="wrapper">
        ${createStatisticsController()}
        <div class="main-block" id="main-block">
            ${createMarkupChart()}
        </div>
        <div class="statistics__substrate"></div>
    </section>
`;
