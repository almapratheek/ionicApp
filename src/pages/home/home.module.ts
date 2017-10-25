import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { HomePage } from './home';
import { CropperPage } from '../cropper/cropper';
import { PdfconvPage } from '../pdfconv/pdfconv';

@NgModule({
  declarations: [
    HomePage,
    CropperPage,
    PdfconvPage
  ],
  imports: [
    IonicPageModule.forChild(HomePage)
  ],
  entryComponents: [
    HomePage,
    CropperPage,
    PdfconvPage
  ]
})
export class HomePageModule {}