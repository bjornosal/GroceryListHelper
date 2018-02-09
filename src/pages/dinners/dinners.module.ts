import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DinnersPage } from './dinners';

@NgModule({
  declarations: [
    DinnersPage,
  ],
  imports: [
    IonicPageModule.forChild(DinnersPage),
  ],
})
export class DinnersPageModule {}
