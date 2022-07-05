import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidatorsService {
  public namesPattern: string = "^([a-zA-Z\u00C0-\u017F'\.]+[ ]?){1,3}$";
  public lastNamesPattern: string = "^([a-zA-Z\u00C0-\u017F'\.]+[ ]?){1,2}$";
  public ceRegex: RegExp = /^[a-zA-Z0-9]{9}$/;
  public dniRegex: RegExp = /^[0-9]{8}$/;
  public passportRegex: RegExp = /^[0-9]{9}$/;

  constructor() { }

  documentValidator(campoType: string, campoDocument: string) {

    return (formGroup: AbstractControl) => {
      const type = formGroup.get(campoType)?.value;
      const numberDocument = formGroup.get(campoDocument)?.value;
      const required = formGroup.get(campoDocument)?.errors?.['required'] ? true : false;

      switch (type) {
        case '1':
          return this.ceRegex.test(numberDocument)
            ? null
            : formGroup.get('numeroDocumento')?.setErrors({
              required: required,
              pattern: { ceInvalid: true }
            });
        case '2':
          return this.dniRegex.test(numberDocument)
            ? null
            : formGroup.get('numeroDocumento')?.setErrors({
              required: required,
              pattern: { dniInvalid: true }
            });;
        case '3':
          return this.passportRegex.test(numberDocument)
            ? null
            : formGroup.get('numeroDocumento')?.setErrors({
              required: required,
              pattern: { pasaporteInvalid: true }
            });
        default:
          return null;
      }
    }
  }
}
