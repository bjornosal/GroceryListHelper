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

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  /**
   * Method for generating 7 dinners.
   * Mainly for getting logic up and running.
   * Will create a JSON file containing 7 dinners.
   * TODO add constraints for how many dinners to create
   * ? Popup when clicking that chooses?
   */
  generateDinners() {
    this.chosenDinners = this.getSetAmountOfDinnersAtRandom(dinners, 7);
    this.dinnersHasBeenGenerated = true;
    new File([JSON.stringify(this.chosenDinners)], "chosenDinners.json", {
      type: "text/json"
    });
    this.generateIngredientsJsonFileFromCurrentDinners();
  }

  getSetAmountOfDinnersAtRandom(dinnerArray: JSON[], amount: number) {
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

  generateIngredientsJsonFileFromCurrentDinners() {
    let ingredients: JSON[] = [];

    for (let i = 0; i < this.chosenDinners.length; i++) {
      let dinner: any = this.chosenDinners[i];

      for (let j = 0; j < dinner.ingredients.length; j++) {
        let ingredient: any = {
          ["itemName"]: dinner.ingredients[j].itemName,
          ["itemQuantity"]: dinner.ingredients[j].itemQuantity
        };
        ingredients.push(ingredient);
        this.addToIngredientInIngredientList(ingredients, ingredient);
      }
    }
  }

  addToIngredientInIngredientList(ingredients: JSON[], ingredient: JSON) {
    for(let i = 0; i < ingredients.length; i++) {
      console.log("###########");
      console.log(ingredients[i]);
      console.log("###########");
    }
  }

  goToDinnerDetailPage(dinner: JSON) {
    this.navCtrl.push("DinnerDetailPage", {});
  }
}
