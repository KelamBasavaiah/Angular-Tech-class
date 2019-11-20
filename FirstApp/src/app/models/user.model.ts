export class User{
    username:string;
    password:string;
    constructor(un?,pass?){
        this.username=un;
        this.password=pass;

    }
    cheakUser(givenUser:User):boolean{
        if(this.username==givenUser.username && this.password==givenUser.password)
           return true;
        else
            return false;

    }
}