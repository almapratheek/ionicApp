import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { IonicPage, ViewController, NavParams, NavController } from 'ionic-angular';
import Cropper from 'cropperjs';

import { DocUploadApiProvider } from '../../providers/doc-upload-api/doc-upload-api';

@IonicPage()
@Component({
  selector: 'page-cropper',
  templateUrl: 'cropper.html',
})
export class CropperPage implements OnInit {
  @ViewChild('imageSrc') input: ElementRef;
  imgURI: string
  imgName: string
  callback: any

  constructor(public navCtrl: NavController, public viewCtrl: ViewController,
    public navParams: NavParams, private docUploadProvider: DocUploadApiProvider) {
  }

  ngOnInit() {
    this.imgURI = this.navParams.get('unCroppedImg');
    this.imgName = this.navParams.get('name');
    this.callback = this.navParams.get('callback');
  }

  private cropper: Cropper

  imageLoaded() {
    console.log("starting Cropper... ");
    this.cropper = new Cropper(this.input.nativeElement, {
      aspectRatio: 8.3 / 11.7,
      dragMode: 'move',
      modal: true,
      guides: true,
      highlight: false,
      background: true,
      autoCrop: true,
      autoCropArea: 0.9,
      responsive: true,
      crop: (e: Cropper.CropperCustomEvent) => {

      }
    });
  }

  imageRotate() {
    this.cropper.rotate(90);
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  // finish() {
  //   this.viewCtrl.dismiss(this.cropper.getCroppedCanvas({

  //   })
  //     .toDataURL('image/jpeg', (100 / 100)))
  //     .then((imageData: string) => {
  //       this.docUploadProvider.postDocument(this.imgName, imageData)
  //       .subscribe(
  //         data => {
  //           if(!!data.text) {
  //             let _params: Map<string, boolean> = new Map()
  //             _params.set(this.imgName, true)
  //             this.callback(_params)
  //             // .then(() => {
  //                 // this.navCtrl.pop();
  //               // });
  //           }},
  //           error => {
  //             console.log(error.throw("error message")
  //             );
  //           })
        
  //     // this.navCtrl.push(PdfconvPage, {croppedImg: imageData});
  //   })
  // }

  finish() {
    let imageData = this.cropper.getCroppedCanvas({

    })
      .toDataURL('image/jpeg', (100 / 100))
      
        this.docUploadProvider.postDocument(this.imgName, imageData)
        .subscribe(
          data => {
            if(data == 201) {
              let _params: Map<string, boolean> = new Map()
              _params.set(this.imgName, true)
              this.callback(_params)
              .then(() => {
                  this.navCtrl.pop();
                });
            }},
            error => {
              console.log(error.throw("error message")
              );
            })    
  }

}
