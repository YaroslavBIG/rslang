import { createMentorCard } from '../aboutTheTeamPageComponents/createMentorCard';
import { createTeamCards } from '../aboutTheTeamPageComponents/createTeamCards';

export const createAboutTheTeamPage = () => `
<section class="about-team">
    <h1 class="about-team__title">СТРАНА ДОЛЖНА ЗНАТЬ СВОИХ ГЕРОЕВ В ЛИЦО</h1>
    ${createMentorCard()}
    ${createTeamCards()}
</section>
`;
