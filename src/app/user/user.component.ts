import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from './user.model';
import { partition } from 'lodash-es';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @ViewChild('closeModal')
  closeModal!: ElementRef;

  public form: FormGroup;
  public newEntries: User[] = [];
  private index = 1;
  public minAge = 18;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.form = this.buildForm();
  }

  buildForm() {
    return this.formBuilder.group({
      nombre: [''],
      apellido: [''],
      edad: [18],
      ubicacion: [''],
    });
  }

  public onSave(): void {
    this.newEntries.push({
      id: this.index,
      nombre: this.form.get('nombre')?.value,
      apellido: this.form.get('apellido')?.value,
      edad: this.form.get('edad')?.value,
      ubicacion: this.form.get('ubicacion')?.value,
    });
    this.index++;
  }

  onDelete(item: User) {
    this.newEntries = this.newEntries.filter(e => e.id !== item.id);
  }

  onSend() {
    if (this.newEntries.length) {
      const res = partition(this.newEntries, e => e.edad >= this.minAge)
      localStorage.setItem('users', JSON.stringify(res));
      this.closeModal.nativeElement.click();

      this.router.navigate(['user/by-age']);
    } else {
      alert('Debe registrar usuarios para realizar esta función');
    }
  }
}
