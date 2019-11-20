export class Book{
    id:string;
    name:string;
    pages:number;
    starRating :number;
    poster:string;
    constructor(mid?,mname?,mpages?,mstarRating?,mposter?){
        this.id=mid;
        this.name=mname;
        this.pages=mpages;
        this.starRating=mstarRating;
        this.poster=mposter;
    }
    addRating(rating:number){
        this.starRating=(this.starRating+rating)/2
    }
}