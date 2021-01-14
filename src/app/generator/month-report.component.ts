import {Component, OnInit} from '@angular/core';
import * as jsPDF from 'jspdf';
import {Generator} from './generator';
import {FirebaseService} from '../firebase.service';


import {User} from '../user/user';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {forEach} from '@angular/router/src/utils/collection';
@Component({
  selector: 'app-month',
  templateUrl: './month-report.html'
})
export class MonthReportComponent implements OnInit {

  selectedUser: any;
  users: Array<any>;
  orders: Array<any>;
  total: number;

  generatorForm: FormGroup;
  userid: FormControl;
  constructor(public fs: FirebaseService, private builder: FormBuilder) {
    this.orders = [];
  }
  ngOnInit(): void {
    this.total = 0;
    this.userid = new FormControl('');
    this.generatorForm = this.builder.group({
      userid: this.userid
    });
    this.fs.findAll('Users').subscribe(
      payload => {
        this.users = payload;
      },
      err => {
      });
    this.onPickUser();
  }
  onPickUser(): void {
    this.generatorForm.get('userid').valueChanges.subscribe(val => {
      if (val) {

        this.selectedUser = val;
        // const table = 'Orders' + '/' + this.selectedInstitution.id + '/record/' + this.selectedUser.userID;


        const table = 'Orders';


        this.fs.findAll(table).subscribe(
          payload => {
            payload.forEach(e => {
              const t =  'Orders/' + e['id'] + '/record/' + this.selectedUser.userID;

              this.fs.findAll(t).subscribe(p2 => {

                p2.forEach(e2 => {
                  this.total += e2["subtotal"]
                  this.orders.push(e2);
                });
                // this.orders = [ ...this.orders, ...p2];
                }, err => {});
            });
          },
          err => {

          });
      }
    });
  }
}
