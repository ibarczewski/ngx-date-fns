import { Pipe, PipeTransform } from '@angular/core';
import { subYears } from 'date-fns';

@Pipe({ name: 'subYears' })
export class SubYearsPipe implements PipeTransform {
    transform(value: any, amount: number): any {
        if (typeof amount === 'undefined' || (typeof amount !== 'number')) {
            throw new Error('SubYearsPipe: missing required arguments');
        }

        return subYears(value, amount);
    }
}
