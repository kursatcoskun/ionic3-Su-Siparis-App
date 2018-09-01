import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SiparisSepetiPage } from '../siparis-sepeti/siparis-sepeti';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  searchQuery: string = '';
  items;
  adet: string = "1";

  uruns = [
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

  constructor(public navCtrl: NavController,public alerCtrl: AlertController,public app:App) {

   this.initializeItems();

  }

  initializeItems(){
    this.items = this.uruns["title"];
  }

  urunClicked(){
    let confirm = this.alerCtrl.create({
      title: 'Sepete Eklensin mi?',
      message: this.adet +' Adet ürün sepete eklensin mi ?',
      buttons: [
        {
          text: 'İptal',
          handler: () => {
            
          }
        },
        {
          text: 'Tamam',
          handler: () => {
            this.app.getRootNav().getActiveChildNav().select(2);
          }
        }
      ]
    });
    confirm.present()
  }


  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    
     
  }



}
