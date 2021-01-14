import * as jsPDF from 'jspdf';
import {FirebaseService} from '../firebase.service';
import {Restaurant} from '../restaurant/restaurant';
import {User} from '../user/user';
export class Generator {

  x: number;
  y: number;
  doc: jsPDF;


  constructor(public fs: FirebaseService) {
    this.doc = new jsPDF();
    this.x = 30;
    this.y = 30;
  }
  public test(): void {


    this.doc.text('Test', this.x, this.y);
    this.doc.save('test.pdf');

  }

  public basicRes(): void {


    const baseUrl  = 'Companies';
    let restaurants: any[];
    this.fs.findAll(baseUrl).subscribe(
      payload => {

        restaurants = payload;
        console.log('restaurants', restaurants);
        const x = this.x;
        let y = this.y;
        const doc = new jsPDF();
        doc.text('Basic Restaurant report', x, y - 10);
        restaurants.forEach(function (value) {

          const res: Restaurant = value;
          doc.text('Name: ', x , y + 10); doc.text(res.name, x + 60, y + 10);
          doc.text('Address: ', x , y + 20); doc.text(res.address, x + 60, y + 20);
          doc.text('Contact Name: ', x , y + 30); doc.text(res.contactName, x + 60, y + 30);
          doc.text('Phone:', x , y + 40); doc.text(res.phoneNumber, x + 60, y + 40);
          doc.text('BaseServiceFee:', x, y + 50); doc.text(res.baseServiceFee + '', x + 60, y + 50);
          doc.text('commissionRate:', x, y + 60); doc.text(res.commissionRate + '', x + 60, y + 60);
          doc.text('deliverTimeWindow:', x, y + 70);  doc.text(res.deliverTimeWindow + '', x + 60, y + 70);
          y =  y + 200;
        });
        doc.save('BasicRestaurantReport.pdf');

      },
      err => { }
    );
  }
  public basicOrder(): void {
    this.doc.text('Basic Order Report', this.x, this.y);
    this.doc.save('BasicOrderReport.pdf');

  }
  public basicUser(): void {

    const baseUrl  = 'Users';
    let users: any[];
    this.fs.findAll(baseUrl).subscribe(
      payload => {

        users = payload;
        console.log('users', users);
        const x = this.x;
        let y = this.y;
        const doc = new jsPDF();
        doc.text('Basic User Report', this.x, this.y - 10);

        users.forEach(function (value) {

          const res: User = value;
          doc.text('First Name: ', x , y + 10); doc.text(res.firstName, x + 60, y + 10);
          doc.text('User Name: ', x , y + 20); doc.text(res.userName, x + 60, y + 20);
          doc.text('userCategory: ', x , y + 30); doc.text(res.userCategory, x + 60, y + 30);
          doc.text('Phone:', x , y + 40); doc.text(res.phoneNumber, x + 60, y + 40);
          doc.text('email:', x, y + 50); doc.text(res.email + '', x + 60, y + 50);
          doc.text('commissionRate:', x, y + 60); doc.text(res.commissionRate + '', x + 60, y + 60);
          doc.text('credit:', x, y + 70);  doc.text(res.credit + '', x + 60, y + 70);
          y =  y + 150;
        });
        doc.save('BasicUserReport.pdf');

      },
      err => { }
    );

  }
}
