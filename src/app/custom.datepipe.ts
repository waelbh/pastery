import { DatePipe } from '@angular/common';
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name:'customDate'
})
export class CustomDatePipe extends DatePipe implements PipeTransform{
    transform(value:any, args?:any):any{
        return super.transform(value,"dd-MM-yyyy");
    }
}