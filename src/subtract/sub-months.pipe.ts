import {Pipe, PipeTransform} from '@angular/core';
import { subMonths } from 'date-fns';

@Pipe({ name: 'subMonths' })
export class SubMonthsPipe implements PipeTransform {
    transform(value: any, amount: number): any {
        if (typeof amount === 'undefined' || (typeof amount !== 'number')) {
            throw new Error('SubMonthsPipe: missing required arguments');
        }

        return subMonths(value, amount);
    }
}
