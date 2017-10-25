import { Component } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';

import { CropperPage } from '../cropper/cropper';
import { DocUploadApiProvider } from '../../providers/doc-upload-api/doc-upload-api';
import { PdfconvPage } from '../pdfconv/pdfconv';

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class HomePage {

    constructor(public navCtrl: NavController, private camera: Camera,
     private platform: Platform, private docUploadProvider: DocUploadApiProvider) {
       this.params = new Map(
        [['Paystub',false],
        ['W2',false],
        ['Tax Return',false],
        ['Title',false],
        ['Home Appraisal',false]
        ]) 
    }

    params: Map<string, boolean> 

    myCallbackFunction = (_params) => {
     return new Promise((resolve, reject) => {
         _params.forEach((value, key) => {
                this.params.set(key, value);     
         });
         resolve();
     });
}

    takePhoto(docName: string) {
        this.takeThePhoto(this.camera.PictureSourceType.CAMERA)
            .then((data) => {
                this.navCtrl.push(CropperPage, 
                { unCroppedImg: data, name: docName, callback: this.myCallbackFunction });
            })
            .catch(err => {
                console.log('error in taking picture');
            });
    }

    pickImage(docName: string) {
        this.takeThePhoto(this.camera.PictureSourceType.SAVEDPHOTOALBUM)
            .then((data) => {
                this.navCtrl.push(CropperPage, 
                { unCroppedImg: data, name: docName, callback: this.myCallbackFunction });
            })
            .catch(err => {
                console.log('error in pick picture');
            });
    }


    takeThePhoto(pictureSourceType) {
        
        return this.camera.getPicture({
            sourceType: pictureSourceType,
            destinationType: this.camera.DestinationType.FILE_URI,
            quality: 100,
            correctOrientation: true,
            encodingType: this.camera.EncodingType.JPEG
        })
            .then((imageData: string) => {
                return imageData;
            });
    }

    getPicture(docName: string) {
        this.docUploadProvider.getDocument(docName)
        .subscribe(
          data => {
            this.navCtrl.push(PdfconvPage,{image: data.data, isImageExist: true})
          })
    }

}
