import { createGameBtn } from './createGameBtn';
import { statisticsData } from './constants';

export const createStatisticsController = () => `
    <div class="statistics-controller" id="statistics-controller">
        ${createGameBtn(statisticsData.mainId, statisticsData.mainTitle)}
        ${createGameBtn(statisticsData.speakItId, statisticsData.speakItTitle)}
        ${createGameBtn(statisticsData.constructorId, statisticsData.constructorTitle)}
        ${createGameBtn(statisticsData.sprintId, statisticsData.sprintTitle)}
        ${createGameBtn(statisticsData.intervalsId, statisticsData.intervalsTitle)}
    </div>
`;
