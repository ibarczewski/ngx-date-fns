import {Pipe, PipeTransform} from '@angular/core';
import { addMonths  } from 'date-fns';

@Pipe({ name: 'addMonths' })
export class AddMonthsPipe implements PipeTransform {
    transform(value: any, amount: number): any {
        if (typeof amount === 'undefined' || (typeof amount !== 'number')) {
            throw new Error('AddMonthsPipe: missing required arguments');
        }

        return addMonths(value, amount);
    }
}
