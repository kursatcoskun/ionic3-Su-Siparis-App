import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { TabsPage } from '../tabs/tabs';
import { SiparisSepetiPage } from '../siparis-sepeti/siparis-sepeti';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { WelcomePage } from '../welcome/welcome';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Slides) slidess: Slides;

  slides = [
    {
      title: "12 LT Damacana Su",
      description: " Fiyat 8 TL",
      image: "../../assets/imgs/damacana-markasız.png",
    },
    {
      title: "5 LT Pet Şise Su",
      description:"Fiyat 4 TL",
      image: "../../assets/imgs/5lt-markasız.png",
    },
    {
      title: "1.5 LT Pet Şise Su",
      description:"Fiyat 2.5 TL",
      image: "../../assets/imgs/erikli15lt.png",
    }
  ];

  constructor(public navCtrl: NavController, private app:App) {
  
  }

  devamClicked(){
    this.app.getRootNav().getActiveChildNav().select(1);
    
  }
  siparisClicked(){
    this.app.getRootNav().getActiveChildNav().select(2);
  }

  goToSlide() {
  
    this.slidess.slideTo(this.slidess._activeIndex+1);
  }

  backToSlide(){
    if(this.slidess._activeIndex==0){
      
    }
    this.slidess.slideTo(this.slidess._activeIndex-1);
  }
  
  logout(){
    this.app.getRootNav().setRoot(WelcomePage);
    
  }

}
