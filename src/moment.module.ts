import { NgModule } from '@angular/core';

import { SubDaysPipe } from './subtract/sub-days.pipe';
import { SubMonthsPipe } from './subtract/sub-months.pipe';
import { SubYearsPipe } from './subtract/sub-years.pipe';

const ANGULAR_MOMENT_PIPES = [
  SubDaysPipe,
  SubMonthsPipe,
  SubYearsPipe,
];

@NgModule({
  declarations: ANGULAR_MOMENT_PIPES,
  exports: ANGULAR_MOMENT_PIPES
})
export class MomentModule { }
