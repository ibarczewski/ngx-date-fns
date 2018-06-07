import { Pipe, PipeTransform } from '@angular/core';
import { addYears } from 'date-fns';

@Pipe({ name: 'addYears' })
export class AddYearsPipe implements PipeTransform {
    transform(value: any, amount: number): any {
        if (typeof amount === 'undefined' || (typeof amount !== 'number')) {
            throw new Error('AddYearsPipe: missing required arguments');
        }

        return addYears(value, amount);
    }
}
