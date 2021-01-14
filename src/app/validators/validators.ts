import { AbstractControl } from '@angular/forms';

const invalid = { invalid: true };

export function ValidatePhone(control: AbstractControl) {
  const PHONE_REGEXP = /^[(]{0,1}[0-9]{3}[)\.\- ]{0,1}[0-9]{3}[\.\- ]{0,1}[0-9]{4}$/;
  return !PHONE_REGEXP.test(control.value) ? invalid : null;
} // ValidatePhone


export function ValidatePostalCode(control: AbstractControl) {
  const PC_REGEXP = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/
  return !PC_REGEXP.test(control.value) ? invalid : null;
} // ValidatePhone

export function ValidateEmail(control: AbstractControl) {
  const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i
  return !EMAIL_REGEXP.test(control.value) ? invalid : null;
}

export function ValidateMoney(control: AbstractControl) {
  const MONEY_REGEXP = /^[+]?[0-9]{1,3}(?:,?[0-9]{3})*(?:\.[0-9]{2})?$/
  return !MONEY_REGEXP.test(control.value) ? invalid : null;
}

export function ValidateInteger(control: AbstractControl) {
  const INTEGER_REGEXP = /^\d+$/
  return !INTEGER_REGEXP.test(control.value) ? invalid : null;
}
