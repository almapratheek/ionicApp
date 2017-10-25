import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pdfconv',
  templateUrl: 'pdfconv.html',
})
export class PdfconvPage {

  imgBase64: string;
  isImageAvailable: boolean;
  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
      this.imgBase64 = this.navParams.get("image");
      this.isImageAvailable = this.navParams.get("isImageExist");       
    
    // this.docUploadProvider.getDocument(this.navParams.get("name"))
    // .then(data => {this.imgBase64 = data});
  }

  // public img: string = this.navParams.get("croppedImg");

  cancel() { 
    this.viewCtrl.dismiss();
  }

}
