import { createMentorCard, createTeamCards } from '../aboutTheTeamPageComponents';

export const createAboutTheTeamPage = () => `
<section class="about-team">
    <h1 class="about-team__title">СТРАНА ДОЛЖНА ЗНАТЬ СВОИХ ГЕРОЕВ В ЛИЦО</h1>
    ${createMentorCard()}
    ${createTeamCards()}
</section>
`;
