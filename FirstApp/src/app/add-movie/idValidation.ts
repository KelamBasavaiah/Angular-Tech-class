import { AbstractControl } from '@angular/forms';

export class IdValidation{
    public static cheakId(idCtrl:AbstractControl){

        var data:string=idCtrl.value;
        if(data && data.length != 4)
           return {"Lenerror":true}
        else
           return null;
    }
}