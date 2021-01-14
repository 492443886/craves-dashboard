import {Component, OnInit} from '@angular/core';
import { FirebaseService } from '../firebase.service';
import {CreditCard, User} from "./user";

@Component({
  selector: 'app-user',
  templateUrl: 'user-home.html'
})

export class UserHomeComponent implements OnInit {

  private users: Array<any>;
  private showDetails: boolean;
  private msg: string;
  private selectedUser: User;
  private tableName: string;
  private url: string;
  private todo: string;

  constructor(public fs: FirebaseService) {
    this.showDetails = false;
    this.selectedUser = null;
    this.tableName = 'Users';
  }

  ngOnInit(): void {
    this.msg = 'Loading users..';
    this.updateList('users loaded');
  }

  addNewUser(): void {
    // TODO: Implement this function
    this.selectedUser = {
      userID: null,
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      institution: '',
      joinedDate: '',
      creditCard: null,
      userName: '',
      userCategory: '',
      deliveredCount: 0,
      moneySpent: 0,
      moneyEarned: 0,
      commissionRate: 0.0,
      credit: null,
      warningCount: 0,
      disableThreshold: 0,
      isDisabled: null
    };
    this.showDetails = true;
    this.msg = `New User`;
    this.todo = 'add'
  }

  cancel(msg: string): void {
    this.selectedUser = null;
    this.showDetails = false;
    this.msg = `Operation cancelled`;
  }

  save(user: User): void {
    var url = this.tableName + '/' + user.userID;
    var msg = 'user ' + user.userID;
    if(this.todo === 'add') {
      this.fs.add(url, user);
      msg += ' added';
    }else {
      this.fs.update(url, user);
      msg += ' updated';
    }

    this.showDetails = false;
    // this.updateList(msg);
  }

  delete(user: User): void {
    var url = this.tableName + '/' + user.userID;
    this.fs.delete(url);
    var msg = user.userID + ' deleted';
    this.showDetails = false;
    // this.updateList(msg);
  }

  selectUser(user: User): void {
    this.selectedUser = user;
    this.showDetails = true;
    this.todo = 'update';
    this.msg = `Selected ${ user.firstName }`;
  }

  updateList(success_msg: string): void {
    this.fs.findAll(this.tableName).subscribe(
      payload => {
        this.msg = success_msg;
        this.users = payload;
      },
      err => {
        this.msg = 'server error';
      });
  }
}
