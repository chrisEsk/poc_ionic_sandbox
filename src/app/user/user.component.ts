import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  public form: FormGroup;
  public showSummary = false;
  public summaryData: User = {
    nombre: '',
    apellido: '',
    edad: 0,
    ubicacion: ''
  }

  constructor(private formBuilder: FormBuilder) {
    this.form = this.buildForm();
  }

  buildForm() {
    return this.formBuilder.group({
      nombre: [''],
      apellido: [''],
      edad: [''],
      ubicacion: [''],
    });
  }

  public onSave(): void {
    this.showSummary = true;
    this.summaryData = {
      nombre: this.form.get('nombre')?.value,
      apellido: this.form.get('apellido')?.value,
      edad: this.form.get('edad')?.value,
      ubicacion: this.form.get('ubicacion')?.value,
    };
  }

  goBack() {
    this.showSummary = false;
  }
}
