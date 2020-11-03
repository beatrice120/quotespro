

export class Quote {
    public quote:string;
    public author:string;
    public votes: number;
    public name:string;
    public timeCreated: number;
    constructor(quote, author, name,timeCreated) {
        this.quote = quote;
        this.author = author;
        this.name= name;
        this.votes = 0;
        this.timeCreated = timeCreated;
    }
}


