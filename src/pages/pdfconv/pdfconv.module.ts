import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PdfconvPage } from './pdfconv';

@NgModule({
  declarations: [
    PdfconvPage,
  ],
  imports: [
    IonicPageModule.forChild(PdfconvPage),
  ],
  exports: [
    PdfconvPage
  ]
})
export class PdfconvPageModule {}
