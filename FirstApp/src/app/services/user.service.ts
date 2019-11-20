import { User } from '../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserService{
    user:User[]
    constructor(private myHttp:HttpClient){
        this.user=[];
    }
    getUserData(){
       return this.myHttp.get("https://localhost:44331/api/user");
    }
}