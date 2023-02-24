import { Component } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css'],
})
export class HeaderComponentComponent {
  mostrar: boolean = false;

  showMenu(): void {
    this.mostrar = !this.mostrar;
  }
}
