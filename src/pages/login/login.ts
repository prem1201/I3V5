import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { ReportsPage } from './../reports/reports';
import {ListPage} from './../list/list';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }
  reports() {
    this.navCtrl.setRoot(ListPage);
    // That's right, we're pushing to ourselves!

  }
}
