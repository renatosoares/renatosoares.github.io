import Vue from 'vue';
import Component from 'vue-class-component';
import CalendarGitHub from './CalendarGitHub.vue';
import SocialMy from './SocialMy.vue';

@Component({
  components: {
    CalendarGitHub,
    SocialMy,
  },
})

export default class App extends Vue
{
    mounted(): void
    {
        console.log('Component mounted app');
    }
}
