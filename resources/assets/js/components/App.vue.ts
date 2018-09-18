import Vue from 'vue';
import Component from 'vue-class-component';
import CalendarGitHub from './CalendarGitHub.vue';

@Component({
  components: {
    CalendarGitHub,
  },
})

export default class App extends Vue
{
    mounted(): void
    {
        console.log('Component mounted app');
    }
}
