import { createGameBtn } from './createGameBtn';
import { statisticsData } from './constants';

export const createStatisticsController = () => `
    <div class="statistics-controller" id="statistics-controller">
        ${createGameBtn(statisticsData.speakItId, statisticsData.speakItTitle)}
        ${createGameBtn(statisticsData.engPuzzleId, statisticsData.engPuzzleTitle)}
        ${createGameBtn(statisticsData.savannahId, statisticsData.savannahTitle)}
        ${createGameBtn(statisticsData.auditionId, statisticsData.auditionTitle)}
        ${createGameBtn(statisticsData.sprintId, statisticsData.sprintTitle)}
        ${createGameBtn(statisticsData.yourGameId, statisticsData.yourGameTitle)}
    </div>
`;
