import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private typeTheme = document.querySelector('#theme');

  constructor() { 

    const url = localStorage.getItem('theme') || './assets/css/colors/megna.css';
    this.typeTheme?.setAttribute('href', url);

  }

  changeTheme(theme: string) {

    const url = `./assets/css/colors/${ theme }.css`;

    this.typeTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();
    
  }

  checkCurrentTheme() {

    const checks = document.querySelectorAll('.selector');

    checks.forEach(item =>
    {
      item.classList.remove('working');

      const btnTheme = item.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`;
      const currentTheme = this.typeTheme?.getAttribute('href');

      if (btnThemeUrl === currentTheme)
      {
        item.classList.add('working');
      }

    })

  }

}
