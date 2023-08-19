import { Component } from '@angular/core';
import { HeaderActiveService } from 'src/app/shared/services/headerActive.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private headerActive: HeaderActiveService) {};
  public message: string  = "Войти"; 
  
  getIsFlag() { 
    return this.headerActive.getStateHeader();
  }

  getName() { 
    return localStorage.getItem('user');
  }

  removeLocalStorage() { 
    this.headerActive.changeTheStateOfTheHeader();
    localStorage.clear();
  }
}
