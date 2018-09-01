import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SiparisSepetiPage } from '../siparis-sepeti/siparis-sepeti';

/**
 * Generated class for the ScardkkOdemePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scardkk-odeme',
  templateUrl: 'scardkk-odeme.html',
})
export class ScardkkOdemePage {

  public event = {
    month: '2018-02-19',
    timeStarts: '07:43',
    timeEnds: '2090-02-20'
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScardkkOdemePage');
  }

  kartBilgileriClicked(){
    this.navCtrl.setRoot(SiparisSepetiPage);
  }

}
