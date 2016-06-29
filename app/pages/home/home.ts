import {Component} from '@angular/core';
import {NavController, Modal} from 'ionic-angular';
import {DetailPage} from '../detail/detail'
@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navController: NavController) {

  }

  showModal(){
   let modal = Modal.create(DetailPage)
   this.navController.present(modal)
  }
}
