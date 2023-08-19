import { Component} from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { HeaderActiveService } from 'src/app/shared/services/headerActive.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent {
  public username: string = '';
  public email: string = '';
  public password: string = '';
  public message: string = '';
  public isFlagMessageError: boolean = false;
  private user: User = {};

  constructor(private headerActive: HeaderActiveService, private router: Router) {};

  validationOfDataFromTheMailField(email: string): boolean {
    let regular = new RegExp(
      '^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})|(^[0-9]{10})+$'
    );
    let testValue: boolean = regular.test(email);
    return testValue;
  }

  validationOfFields(username: string, password: string, email: string): void {
    if (username === '' && password === '' && email === '') {
      this.isFlagMessageError = false;
      this.message = 'Данные не введены в поля';
    } else if (username === '') {
      this.isFlagMessageError = false;
      this.message = 'Данные не введены в поле с именем';
    } else if (email === '') {
      this.isFlagMessageError = false;
      this.message = 'Данные не введены в поле с почтой';
    } else if (this.validationOfDataFromTheMailField(email) === false) {
      this.isFlagMessageError = false;
      this.message = 'Почта введена некорректно';
    } else if (password === '') {
      this.isFlagMessageError = false;
      this.message = 'Данные не введены в поле с паролем';
    } else {
      this.isFlagMessageError = true;
      this.message = 'Данные успешно отправлены на сервер';
    }
  }

  setDataUser(username: string, password: string, email: string): void {
    this.user.id = 0;
    this.user.username = username;
    this.user.password = password;
    this.user.email = email;
  }

  onSubmit(): void {
    this.validationOfFields(this.username, this.password, this.email);
    if (this.isFlagMessageError === true) {
      this.setDataUser(this.username, this.password, this.email);
      localStorage.setItem('user', this.username);
      this.headerActive.changeTheStateOfTheHeader();
      this.router.navigateByUrl('posts');
    }
  }
}
