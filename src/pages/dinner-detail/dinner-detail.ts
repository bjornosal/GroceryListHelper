import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-dinner-detail',
  templateUrl: 'dinner-detail.html',
})

export class DinnerDetailPage {

  private dinner : JSON;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log("THIS", this.dinner);
    this.dinner = navParams.get('dinner');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DinnerDetailPage');
  }

}
