import { Component } from '@angular/core';
import { NavController, Events , ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 sn1 :string;
  constructor(public navCtrl: NavController,private modal : ModalController,private events:Events) {
    this.sn1 = 'page1'

    this.events.subscribe("sec1Submitted",() => {
      this.sn1="page2"
      
  })

  this.events.subscribe("sec2Submitted",() => {
    this.sn1="page3"
})
  }
  openconvert(){
    const myModal = this.modal.create('ConvertModalPage');
  
    myModal.present();
    }
}
