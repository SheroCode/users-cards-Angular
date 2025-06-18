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
      profilePicture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alex',
      username: 'alexsmith',
      email: 'alexsmith@example.com',
      phone: '+1-555-1234',
      birthdate: '1990-05-12',
      role: 'admin',
    },
    {
      profilePicture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=jessica',
      username: 'jessicajones',
      email: 'jessica.jones@example.com',
      phone: '+1-555-2345',
      birthdate: '1988-03-22',
      role: 'moderate',
    },
    {
      profilePicture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=michael',
      username: 'michaeljohnson',
      email: 'michael.j@example.com',
      phone: '+1-555-3456',
      birthdate: '1992-08-30',
      role: 'user',
    },
    {
      profilePicture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah',
      username: 'sarahlee',
      email: 'sarah.lee@example.com',
      phone: '+1-555-4567',
      birthdate: '1995-12-14',
      role: 'moderate',
    },
    {
      profilePicture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=daniel',
      username: 'danielmartin',
      email: 'daniel.martin@example.com',
      phone: '+1-555-5678',
      birthdate: '1985-07-09',
      role: 'admin',
    },
    {
      profilePicture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emily',
      username: 'emilywhite',
      email: 'emily.white@example.com',
      phone: '+1-555-6789',
      birthdate: '1991-11-03',
      role: 'user',
    },
    {
      profilePicture: 'assets/imgs/person1.jpg',
      username: 'davidhall',
      email: 'david.h@example.com',
      phone: '+1-555-7890',
      birthdate: '1993-04-18',
      role: 'moderate',
    },
    {
      profilePicture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ashley',
      username: 'ashleybrown',
      email: 'ashley.b@example.com',
      phone: '+1-555-8901',
      birthdate: '1990-09-27',
      role: 'user',
    },
    {
      profilePicture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=james',
      username: 'jameswilliams',
      email: 'james.w@example.com',
      phone: '+1-555-9012',
      birthdate: '1987-06-11',
      role: 'admin',
    },
    {
      profilePicture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=olivia',
      username: 'oliviaroberts',
      email: 'olivia.r@example.com',
      phone: '+1-555-0123',
      birthdate: '1994-02-05',
      role: 'user',
    },
  ];
}
interface User {
  profilePicture: string;
  username: string;
  email: string;
  phone: string;
  birthdate: string;
  role: string;
}
