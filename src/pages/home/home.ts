import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from './../list/list';
import { LoginPage } from './../login/login';
import { HomesService } from './../home/home.service';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public HomesService: HomesService,private AlertController:AlertController,public navCtrl:NavController) {

  }
  login: HomePage;
  loginData: HomePage[];
  loginInfo: HomePage[];
  isHidden:boolean = false;
  signIn1(un: string, pwd: string): void {
    this.login = undefined;
    un = un.trim();
    if (!un) { return; }

    // The server will generate the id for this new hero
    // const newHero: HomePage = { un } as HomePage;
    this.HomesService.addHero(un)
      .subscribe(hero => {
        console.log(hero);

        const loginData = [];

        loginData.push(hero);
        console.log(loginData)
      });

  }
  signIn(un: string, pwd: string): void {
    var loginInfo = {
      "PhoneNumber": un,
      "Password": pwd
    };
    this.navCtrl.setRoot(LoginPage);

    // this.HomesService.login(loginInfo)
    //   .subscribe(hero => {
    //     console.log(hero);
    //     if(hero.status == 200){
    //       console.log(hero.token);
    //       window.localStorage.authToken = hero.token;
    //       console.log(window.localStorage.authToken,"super");
    //       this.navCtrl.setRoot(LoginPage);
    //     }else{
    //       let alert = this.AlertController.create({
    //         title: 'Error',
    //         subTitle: 'Invalid user credentials',
    //         buttons: ['Dismiss']
    //       });
    //       alert.present();
    //     }
      

    //     const loginData = [];

    //     loginData.push(hero);
    //     console.log(loginData)
    //   });

  }
}
