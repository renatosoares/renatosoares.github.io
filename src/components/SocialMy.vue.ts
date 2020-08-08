import { Component, Prop, Vue } from "vue-property-decorator";


@Component
export default class SocialMy extends Vue
{
    mounted(): void
    {
        console.log('social');

    }
}
