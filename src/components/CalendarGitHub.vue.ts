import { Component, Vue } from "vue-property-decorator";
import GitHubCalendar from "github-calendar";

@Component
export default class CalendarGitHub extends Vue {
    mounted(): void {
        GitHubCalendar(
            ".calendar",
            "renatosoares",
            {
                responsive: true,
            }
        );
    }
}
