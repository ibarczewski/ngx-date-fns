import {Pipe, PipeTransform} from '@angular/core';
import { addDays  } from 'date-fns';

@Pipe({ name: 'addDays' })
export class AddDaysPipe implements PipeTransform {
    transform(value: any, amount: number): any {
        if (typeof amount === 'undefined' || (typeof amount !== 'number')) {
            throw new Error('AddDaysPipe: missing required arguments');
        }

        return addDays(value, amount);
    }
}
