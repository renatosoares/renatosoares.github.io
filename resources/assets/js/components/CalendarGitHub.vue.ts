import Vue from 'vue';
import Component from 'vue-class-component';
import * as GitHubCalendar from "github-calendar";


@Component
export default class CalendarGitHub extends Vue
{
    mounted(): void
    {
        GitHubCalendar(".calendar", "renatosoares");
    }
}
