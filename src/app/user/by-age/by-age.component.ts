import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { isEmpty } from 'lodash-es';

@Component({
  templateUrl: './by-age.component.html',
  styleUrls: ['./by-age.component.scss']
})
export class ByAgeComponent {
  public results: any = [];

  constructor(
    private router: Router,
  ) {
    this.results = JSON.parse(localStorage.getItem('users') || '[]');
    if (isEmpty(this.results)) {
      this.router.navigate(['/user'])
    }
  }

  clearLs() {
    localStorage.removeItem('users')
  }
}
