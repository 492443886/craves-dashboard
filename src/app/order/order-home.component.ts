import { Component, OnInit } from '@angular/core'
import { FirebaseService } from '../firebase.service';
import { Order, Institution } from "./order";
import { User } from "../user/user";

@Component({
  selector: 'app-order',
  templateUrl: 'order-home.html'
})

export class OrderHomeComponent implements OnInit {

  // list type
  private listTypes: Array<string>;

  // institutions
  private institutions: Array<any>;
  private selectedInstitution: Institution;

  // orders
  private actives: Array<any>;
  private activeOrders: Array<any>;
  private pasts: Array<any>;
  private orders: Array<any>;
  private selectedOrder: Order;
  private orderId: string;

  //users
  private users: Array<any>;
  private selectedUser: User;

  // path
  private pathStr: string;
  private pathes: Array<string>;

  // flags
  private modeSelected: boolean;
  private activeMode: boolean;
  private institutionSelected: boolean;
  private userSelected: boolean;
  private orderSelected: boolean;
  private msg: string;

  // table names
  private orderTable: string;
  private institutionTable: string;
  private userTable: string;
  private url: string;

  constructor(public fs: FirebaseService) {
    this.listTypes = [ "Active Orders", "All Records"];
    this.modeSelected = false;
    this.activeMode = false;
    this.institutionSelected = false;
    this.userSelected = false;
    this.orderSelected = false;
    this.selectedInstitution = null;
    this.selectedOrder = null;
  }

  ngOnInit(): void {
    this.msg = '';
    this.orderTable = 'Orders';
    this.userTable = 'Users';
    this.institutionTable = 'Institutions';
    this.updateInstitutionList('institutions');
    this.pathStr = '';
    this.pathes = [];
    this.orderId = '';
    this.activeMode = false;
    this.activeOrders = [];
    this.orders = [];
  }

  updateInstitutionList(path: string): void {
    this.fs.findAll(this.institutionTable).subscribe(
      payload => {
        this.msg = path;
        this.institutions = payload;
      },
      err => {
        this.msg = 'server error';
      });
  }

  updateOrderList(path: string): void {
    this.fs.findAll(this.orderTable).subscribe(
      payload => {
        this.msg = path;
        this.orders = payload;
      },
      err => {
        this.msg = 'server error';
      });
  }

  updateUserList(path: string): void {
    this.fs.findAll(this.userTable).subscribe(
      payload => {
        this.msg = path;
        this.users = payload;
      },
      err => {
        this.msg = 'server error';
      });
  }

  getActives(path: string): void {
    const activeUrl = 'Orders' + '/' + this.selectedInstitution.id + '/active';
    this.fs.findAll(activeUrl).subscribe(
      payload => {
        this.msg = path;
        this.actives = payload;
        this.actives.forEach(s => this.activeOrders.push(s.split(" ")));
      },
      err => {
        this.msg = 'server error';
      });
  }

  // setOrderId(): void {
  //   var ctimes = this.selectedOrder.createdTime.split(' ');
  //   var dayTimes = ctimes[4].split(':');
  //   var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  //   var monthNum = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  //   this.orderId = ctimes[3] + monthNum[month.indexOf(ctimes[1])] + ctimes[2] + dayTimes[0] + dayTimes[1] + dayTimes[2];
  // }

  getOrderId(cTime: string): string {
    var ctimes = cTime.split(' ');
    var dayTimes = ctimes[4].split(':');
    var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var monthNum = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    return ctimes[3] + monthNum[month.indexOf(ctimes[1])] + ctimes[2] + dayTimes[0] + dayTimes[1] + dayTimes[2];
  }

  save(order: Order): void {
    this.selectedOrder = order;
    this.orderId = this.getOrderId(this.selectedOrder.createdTime);
    var url = this.orderTable + '/' + this.orderId;
    this.fs.update(url, order);
    // this.fs.add(url, order);
    this.msg = 'order ' + this.orderId + ' updated';
    this.orderSelected = false;
    this.selectedOrder = null;
  }

  cancel(msg: string): void {
    this.backToOrderSelection();
  }

  delete(order: Order): void {
    var url = this.orderTable + '/' + this.orderId;
    this.fs.delete(url);
    this.msg = this.orderId + ' deleted';
    this.orderSelected = false;
  }

  getPasts(path: string): void {
    const activeUrl = 'Orders' + '/' + this.selectedInstitution.id +  '/past/' + this.selectedUser.userID;

    this.fs.findAll(activeUrl).subscribe(
      payload => {
        this.msg = path;
        this.pasts = payload;
      },
      err => {
        this.msg = 'server error';
      });
  }

  selectInstitution(institution: Institution): void {
    this.selectedInstitution = institution;
    this.institutionSelected = true;
    this.modeSelected = false;
    this.push_back_Path(this.selectedInstitution.name);
    this.updateUserList(this.pathStr);
    // this.msg = `Selected ${ institution.name }`;
  }

  selectMode(mode: string): void {
    this.modeSelected = true;
    if (mode === 'Active Orders') {
      this.activeMode = true;
      this.getActives(this.pathStr + '/Active');
    } else {

    }
  }

  selectActiveOrder(orderInfo: string): void {
    var orderUser = orderInfo.split(" ");
    var orderId = orderUser[0];
    var userId = orderUser[1];
    var activeUser = this.users.find(u=> u.userID === userId);

    // this.selectUser(activeUser);

    this.selectedUser = activeUser;
    this.userSelected = true;
    this.push_back_Path(this.selectedUser.firstName);
    this.orderTable = 'Orders' + '/' + this.selectedInstitution.id + '/record/' + this.selectedUser.userID;

    this.fs.findAll(this.orderTable).subscribe(
      payload => {
        this.msg = this.pathStr;
        this.orders = payload;
        this.selectedOrder = this.orders.find(o => orderId === this.getOrderId(o.createdTime));
        this.orderSelected = true;
        this.orderId = this.getOrderId(this.selectedOrder.createdTime);
        this.push_back_Path(this.orderId);
        this.activeMode = false;
      },
      err => {
        this.msg = 'server error';
      });
  }

  selectUser(user: User): void {
    this.selectedUser = user;
    this.userSelected = true;
    this.push_back_Path(this.selectedUser.firstName);
    this.orderTable = 'Orders' + '/' + this.selectedInstitution.id + '/record/' + this.selectedUser.userID;

    // this.getPasts('pasts loaded');
    this.updateOrderList(this.pathStr);
    // this.msg = `Selected ${ user.firstName } : ${ user.lastName }`;
  }

  selectOrder(order: Order): void {
    this.selectedOrder = order;
    this.orderSelected = true;
    this.orderId = this.getOrderId(this.selectedOrder.createdTime);
    this.push_back_Path(this.orderId);
  }

  backToModeSelection(): void {
    this.modeSelected = false;
    this.activeMode = false;
    this.msg = this.pathStr;
  }

  backToInstitutionSelection(): void {
    this.selectedInstitution = null;
    this.institutionSelected = false;
    this.activeMode = false;
    this.pop_back_Path();
  }

  backToUserSelection(): void {
    this.selectedUser = null;
    this.userSelected = false;
    this.pop_back_Path();
  }

  backToOrderSelection(): void {
    this.orderId = '';
    this.selectedOrder = null;
    this.orderSelected = false;
    this.pop_back_Path();
  }

  push_back_Path(path: string): void {
    this.pathes.push(path);
    this.pathStr = '';
    this.pathes.forEach(p => this.pathStr += '/' + p);
    this.msg = this.pathStr;
  }

  pop_back_Path(): void {
    this.pathes.pop();
    this.pathStr = '';
    this.pathes.forEach(p => this.pathStr += '/' + p);
    this.msg = this.pathStr;
  }
}
