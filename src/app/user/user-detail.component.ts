import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import {CreditCard, User} from "./user";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ValidatePhone, ValidateEmail } from '../validators/validators'

@Component({
  selector: 'app-user-detail',
  templateUrl: 'user-detail.html'
})

export class UserDetailComponent implements OnInit {
  @Input()
  private user: User;
  @Output()
  private cancelled = new EventEmitter();
  @Output()
  private saved = new EventEmitter();
  @Output()
  private deleted = new EventEmitter();

  private userForm: FormGroup;

  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.patchForm();
  }

  // TODO: Add validator for rates. Gotta be less than 1.0 always
  private initForm(): void {
    this.userForm = this.builder.group({
      id: ['', [ Validators.required ]],
      firstName: ['', [ Validators.required ]],
      lastName: ['', [ Validators.required ]],
      phoneNumber: ['', [ Validators.required, ValidatePhone ]],
      email: ['', [ Validators.required, ValidateEmail ]],
      institution: ['', [ Validators.required ]],
      joinedDate: ['', [ Validators.required ]],
      // creditCard:
      userName: ['', [ Validators.required ]],
      userCategory: ['', [ Validators.required ]],
      deliveredCount: ['', [ Validators.required ]],
      moneySpent: ['', [ Validators.required ]],
      moneyEarned: ['', [ Validators.required ]],
      commissionRate: ['', [ Validators.required ]],
      credit: ['', [ Validators.required ]],
      warningCount: ['', [ Validators.required ]],
      disableThreshold: ['', [ Validators.required ]],
      isDisabled: ['', [ Validators.required ]]
    });
  }

  private patchForm(): void {
    this.userForm.patchValue({
      id: this.user.userID,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      phoneNumber: this.user.phoneNumber,
      email: this.user.email,
      institution: this.user.institution,
      joinedDate: this.user.joinedDate,
      // creditCard:
      userName: this.user.userName,
      userCategory: this.user.userCategory,
      deliveredCount: this.user.deliveredCount,
      moneySpent: this.user.moneySpent,
      moneyEarned: this.user.moneyEarned,
      commissionRate: this.user.commissionRate,
      credit: this.user.credit,
      warningCount: this.user.warningCount,
      disableThreshold: this.user.disableThreshold,
      isDisabled: this.user.isDisabled
    });
  }

  get f() {
    return this.userForm.controls;
  }

  shouldDisplayHint(formControl) {
    let field = this.f[formControl];
    //return field.errors && (field.dirty || field.touched);
    return false;
  }

  displayHint(name: string): string {
    return `${name} is required`;
  }

  updateSelectedUser(): void {
    const frmJson = this.userForm.getRawValue();
    this.user.userID = frmJson.id;
    this.user.firstName = frmJson.firstName;
    this.user.lastName = frmJson.lastName;
    this.user.phoneNumber = frmJson.phoneNumber;
    this.user.email = frmJson.email;
    this.user.institution = frmJson.institution;
    this.user.joinedDate = frmJson.joinedDate;
    // creditCard:
    this.user.userName = frmJson.userName;
    this.user.userCategory = frmJson.userCategory;
    this.user.deliveredCount = frmJson.deliveredCount;
    this.user.moneySpent = frmJson.deliveredCount;
    this.user.moneyEarned = frmJson.moneyEarned;
    this.user.commissionRate = frmJson.commissionRate;
    this.user.credit = frmJson.credit;
    this.user.warningCount = frmJson.warningCount;
    this.user.disableThreshold = frmJson.disableThreshold;
    this.user.isDisabled = frmJson.isDisabled;
    this.saved.emit(this.user);
  }
}
