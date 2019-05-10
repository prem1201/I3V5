import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {HttpClientModule} from '@angular/common/http';

import { HomePage } from '../home/home';
import { ListPage } from '../list/list';
// import { ReportsPage } from './../reports/reports';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    HomePage,
    ListPage,
    // ReportsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(HomePage),HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    HomePage,
    ListPage,
    // ReportsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
