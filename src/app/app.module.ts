import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/welcome/welcome';
import { TelefonGirisPage } from '../pages/telefon-giris/telefon-giris';
import { OnayKoduPage } from '../pages/onay-kodu/onay-kodu';
import { ProfilOlusturmaPage } from '../pages/profil-olusturma/profil-olusturma';
import { SifreOlusturmaPage } from '../pages/sifre-olusturma/sifre-olusturma';
import { LoginPage } from '../pages/login/login';
import { SiparisSepetiPage } from '../pages/siparis-sepeti/siparis-sepeti';
import { ScardAdresPage } from '../pages/scard-adres/scard-adres';
import { ScardOdemePage } from '../pages/scard-odeme/scard-odeme';
import { ScardkkOdemePage } from '../pages/scardkk-odeme/scardkk-odeme';
import { SiparislerimPage } from '../pages/siparislerim/siparislerim';
import { AdreslerimPage } from '../pages/adreslerim/adreslerim';
import { SiparisLastPage } from '../pages/siparis-last/siparis-last';
import { KisiselBilgilerimiDuzenlePage } from '../pages/kisisel-bilgilerimi-duzenle/kisisel-bilgilerimi-duzenle';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    WelcomePage,
    TelefonGirisPage,
    OnayKoduPage,
    ProfilOlusturmaPage,
    SifreOlusturmaPage,
    LoginPage,
    SiparisSepetiPage,
    ScardAdresPage,
    ScardOdemePage,
    ScardkkOdemePage,
    SiparislerimPage,
    AdreslerimPage,
    SiparisLastPage,
    KisiselBilgilerimiDuzenlePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,
    {
      backButtonText: '',
    }
    )
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    WelcomePage,
    TelefonGirisPage,
    OnayKoduPage,
    ProfilOlusturmaPage,
    SifreOlusturmaPage,
    LoginPage,
    SiparisSepetiPage,
    ScardAdresPage,
    ScardOdemePage,
    ScardkkOdemePage,
    SiparislerimPage,
    AdreslerimPage,
    SiparisLastPage,
    KisiselBilgilerimiDuzenlePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}


