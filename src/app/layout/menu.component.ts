import {Component} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 2;
      color: #fff;
      max-height: 65px;
      box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2), 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12);
    }

    :host .app-navbar {
      background: #3f51b5;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      padding: 8px 16px;
      color: rgb(255, 255, 255);
    }

    :host .header {
      font-weight: 700;
    }
  `]
})
export class MenuComponent {
  public title = 'Стол заказов';
}
