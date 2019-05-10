import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

// import { ReportsPage } from './../reports/reports';
import { LoginPage } from './../login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


// import { StatusBar } from '@ionic-native/status-bar';
// import { SplashScreen } from '@ionic-native/splash-screen';
@NgModule({
    declarations: [
        // ReportsPage,
        LoginPage
    ],
    imports: [
      BrowserModule,
      IonicModule.forRoot(LoginPage),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        LoginPage,
        // ReportsPage
    ],
    providers: [
      StatusBar,
      SplashScreen,
      {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
  })

export class AppModule {}