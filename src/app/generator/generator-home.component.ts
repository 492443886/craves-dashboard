import { Component } from '@angular/core';
import * as jsPDF from 'jspdf';
import {Generator} from './generator';
import {FirebaseService} from '../firebase.service';

@Component({
  selector: 'app-casestudy',
  templateUrl: './generator-home.html'
})
export class GeneratorHomeComponent {

  isMonth: boolean;

  generator: Generator;

  constructor(public fs: FirebaseService) {
    this.generator = new Generator(fs);
    this.isMonth = false;
  }
  testPDF() {
    this.generator.test();
  }
  basicRes() {
    this.generator.basicRes();
  }
  basicOrder() {
    this.generator.basicOrder();
  }
  basicUser() {
    this.generator.basicUser();
  }

  monthFirst() {
    this.isMonth = true;
  }

}
