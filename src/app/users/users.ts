import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  imports: [NgClass],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users {
  users: User[] = [
    {
      userImg: 'assets/imgs/person1.jpg',
      userName: 'Mahmoud',
      email: 'mahmoud@gmail.com',
      phone: '012555',
      birthDate: '1992',
      roleChip: 'admin',
    },
    {
      userImg: 'assets/imgs/person2.jpg',
      userName: 'Fares',
      email: 'fares@gmail.com',
      phone: '012666',
      birthDate: '1999',
      roleChip: 'moderator',
    },
    {
      userImg: 'assets/imgs/person3.jpg',
      userName: 'Ali',
      email: 'ali@gmail.com',
      phone: '226266',
      birthDate: '2000',
      roleChip: 'user',
    },
    {
      userImg: 'assets/imgs/person4.jpg',
      userName: 'Samy',
      email: 'samy@gmail.com',
      phone: '012555',
      birthDate: '1990',
      roleChip: 'user',
    },
  ];
}
interface User {
  userImg: string;
  userName: string;
  email: string;
  phone: string;
  birthDate: string;
  roleChip: string;
}
