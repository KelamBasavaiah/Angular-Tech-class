import{Flora} from "../models/flora.model"
export class FloraService{
    floras:Flora[];
    constructor(){
     this.floras=[
         new Flora("assets/F001.jpg","Test1",10,5),
         new Flora("assets/F002.jpg","Test2",10,5),
         new Flora("assets/F003.jpg","Test3",10,5),
         new Flora("assets/F004.jpg","Test4",10,5),
         new Flora("assets/F005.jpg","Test5",10,5),
         new Flora("assets/F006.jpg","Test6",10,5)
     ]
    }
    getFloras():Flora[]{
        return this.floras;
    }
}