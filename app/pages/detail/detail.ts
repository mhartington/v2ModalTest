import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/*
  Generated class for the DetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/detail/detail.html',
})
export class DetailPage {

  constructor(private view: ViewController) {

  }

  close(){
    this.view.dismiss();
  }

}
