import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DinnerDetailPage } from './dinner-detail';

@NgModule({
  declarations: [
    DinnerDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(DinnerDetailPage),
  ],
})
export class DinnerDetailPageModule {}
