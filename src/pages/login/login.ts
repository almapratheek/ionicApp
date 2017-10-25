import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public ssn: number;

  onSSNValueChanged(newValue){
    this.ssn = newValue;
  }

  authenticated() {
    if(this.ssn == 1111) {
      this.navCtrl.setRoot(HomePage);
    }
    else(err:string) => {
      console.error(err);
    }
  }

}
