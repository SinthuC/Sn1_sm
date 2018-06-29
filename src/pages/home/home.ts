import { Component } from '@angular/core';
import { NavController,ViewController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private modal : ModalController) {

  }
  openconvert(){
    const myModal = this.modal.create('ConvertModalPage');
  
    myModal.present();
    }
}
