export class Movie{
    id:string;
    name:string;
    duration:number;
    starRating :number;
    poster:string;
    constructor(mid?,mname?,mduration?,mstarRating?,mposter?){
        this.id=mid;
        this.name=mname;
        this.duration=mduration;
        this.starRating=mstarRating;
        this.poster=mposter;
    }
    addRating(rating:number){
        this.starRating=(this.starRating+rating)/2
    }
}