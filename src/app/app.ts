import { Component } from '@angular/core';
import { Users } from './users/users';

@Component({
  selector: 'app-root',
  imports: [Users],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'users-cards';
}
