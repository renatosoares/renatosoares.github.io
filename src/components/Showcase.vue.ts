import CalendarGitHub from './CalendarGitHub.vue';
import SocialMy from './SocialMy.vue';
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
    components: {
        CalendarGitHub,
        SocialMy,
    },
})
export default class Showcase extends Vue { }
