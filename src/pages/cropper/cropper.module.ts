import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CropperPage } from './cropper';

import { PdfconvPage } from '../pdfconv/pdfconv';

@NgModule({
  declarations: [
    CropperPage,
    PdfconvPage
  ],
  imports: [
    IonicPageModule.forChild(CropperPage),
  ],
  exports: [
    CropperPage,
    PdfconvPage
  ]
})
export class CropperPageModule {}
