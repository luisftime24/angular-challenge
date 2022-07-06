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

  documentValidator(fieldType: string, document: string) {

    return (formGroup: AbstractControl) => {
      const type = formGroup.get(fieldType)?.value;
      const numberDocument = formGroup.get(document)?.value;
      const required = formGroup.get(document)?.errors?.['required'] ? true : false;

      switch (type) {
        case '1':
          return this.ceRegex.test(numberDocument)
            ? null
            : formGroup.get('document')?.setErrors({
              required: required,
              pattern: {
                errorMsg: 'Carnet de extranjeria solo acepta caracteres alfanuméricos y una longitud máxima de 9 caracteres'
              }
            });
        case '2':
          return this.dniRegex.test(numberDocument)
            ? null
            : formGroup.get('document')?.setErrors({
              required: required,
              pattern: {
                errorMsg: 'DNI solo acepta caracteres numéricos y una longitud máxima de 8 caracteres'
              }
            });;
        case '3':
          return this.passportRegex.test(numberDocument)
            ? null
            : formGroup.get('document')?.setErrors({
              required: required,
              pattern: {
                errorMsg: 'Pasaporte solo acepta caracteres numéricos y una longitud máxima de 9 caracteres'
              }
            });
        default:
          return null;
      }
    }
  }
}
