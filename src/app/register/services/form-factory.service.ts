import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { FormValidatorsService } from './form-validators.service';

@Injectable({
  providedIn: 'root'
})
export class FormFactoryService {

  constructor(
    private fb: FormBuilder,
    private formValidators: FormValidatorsService
  ) { }

  getPassengerForm() {
    return this.fb.group({
      names: ['', [Validators.required, Validators.pattern(this.formValidators.namesPattern)]],
      last_names: ['', [Validators.required, Validators.pattern(this.formValidators.lastNamesPattern)]],
      document_type: ['', [Validators.required]],
      document: ['', [Validators.required]],
      nationality: ['', [Validators.required]],
      edit_mode: true,
    }, {
      validators: [
        this.formValidators.documentValidator('document_type', 'document')
      ]
    })
  }

}
