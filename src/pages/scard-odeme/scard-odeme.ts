import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScardkkOdemePage } from '../scardkk-odeme/scardkk-odeme';
import { SiparisSepetiPage } from '../siparis-sepeti/siparis-sepeti';

/**
 * Generated class for the ScardOdemePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scard-odeme',
  templateUrl: 'scard-odeme.html',
})
export class ScardOdemePage {

  month: string;
  year: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScardOdemePage');
  }

  krediKartiClicked(){
    this.navCtrl.push(ScardkkOdemePage);
  }

  KapidakkOdeme(){
    this.navCtrl.setRoot(SiparisSepetiPage);
  }

  kapidaOdemeClicked(){
    this.navCtrl.setRoot(SiparisSepetiPage);
    
  }
 
}
