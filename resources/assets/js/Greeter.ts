export default class Greeter
{
    greeting: string;

    constructor(message: string)
    {
        this.greeting = message;
    }

    greet()
    {
        return "What are you doing here? " + this.greeting;
    }
}
