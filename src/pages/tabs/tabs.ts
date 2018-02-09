import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { DinnersPage } from '../dinners/dinners';
import { BasicPage } from '../basic/basic';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  listRoot = HomePage;
  dinnersRoot = DinnersPage;
  basicRoot = BasicPage;

  constructor() {

  }
}
