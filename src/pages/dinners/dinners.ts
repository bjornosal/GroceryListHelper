import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import dinners from "../../assets/json/dinners.json";

@IonicPage()
@Component({
  selector: "page-dinners",
  templateUrl: "dinners.html"
})
export class DinnersPage {
  private dinnersHasBeenGenerated: boolean = false;
  private chosenDinners: JSON[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {


  }

  /**
   * Method for generating 7 dinners.
   * Mainly for getting logic up and running.
   * Will create a JSON file containing 7 dinners.
   */
  generateDinners() {
    this.chosenDinners = this.getSetAmountOfDinnersAtRandom(dinners, 7);
    this.dinnersHasBeenGenerated = true;  
    new File([JSON.stringify(this.chosenDinners)], "chosenDinners.json", {type: "text/json"})
  }

  getSetAmountOfDinnersAtRandom(dinnerArray : JSON[], amount : number ) {
    var result = new Array(amount),
      len = dinnerArray.length,
      taken = new Array(len);
    if (amount > len)
      throw new RangeError("getRandom: more elements taken than available");
    while (amount--) {
      var x = Math.floor(Math.random() * len);
      result[amount] = dinnerArray[x in taken ? taken[x] : x];
      taken[x] = --len;
    }
    return result;
  }

  goToDinnerDetailPage(dinner: JSON) {
    this.navCtrl.push('DinnerDetailPage', {
      dinner
    });
  }


}
