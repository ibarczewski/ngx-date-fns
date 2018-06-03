import {Pipe, PipeTransform} from '@angular/core';
import { subDays  } from 'date-fns';

@Pipe({ name: 'subDays' })
export class SubDaysPipe implements PipeTransform {
    transform(value: any, amount: number): any {
        if (typeof amount === 'undefined' || (typeof amount !== 'number')) {
            throw new Error('SubtractPipe: missing required arguments');
        }

        return subDays(value, amount);
    }
}
