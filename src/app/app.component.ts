import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';


  changeTheme(theme: string) {
    const img: Element | null = document.querySelector('app-root');
    img?.setAttribute('class', theme);
  }
}
