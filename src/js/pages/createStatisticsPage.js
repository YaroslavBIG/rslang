import { createMarkupChart } from '../statistics/createMarkupChart';
import { createStatisticsController } from '../statistics/createStatisticsController';

export const createStatisticsPage = () => `
    <section class="statistics-wrapper">
        ${createStatisticsController()}
        ${createMarkupChart()}
    </section>
`;
