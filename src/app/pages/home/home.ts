import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Conference } from '../../models/conference';
import { OrganizerList } from '../../components/organizer-list/organizer-list';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, OrganizerList],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  //attribute
  title: string;
  listConference: Conference[];
  searchTitle: string;

  //1st method to be executed
  //instance of the class
  constructor() {}

  //2nd method to be executed
  ngOnInit() {
    this.title = 'Welcome to the Home Page';
    this.listConference = [
      {
        id: 1,
        title: 'Angular Conference',
        description: 'Angular Conference Developer',
        address: 'ESPRIT-Tunisia',
        nbr_Max: 50,
        nbr_Participation: 48,
        date: '10-12-2026',
        picture:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv8Q9Y17iP9yV07pJQIuBtfKqoy5nKcP_GiIamFG9udg&s=10',
        organizers: [
          {
            id: 1,
            name: 'Organizer 1',
            email: 'organizer1@esprit.tn',
            picture: '/organizers/o1.jpg',
            university: 'ESPRIT',
          },
          {
            id: 3,
            name: 'Organizer 3',
            email: 'organizer3@esprit.tn',
            picture: '/organizers/o3.jpg',
            university: 'ESPRIT',
          },
        ],
      },
      {
        id: 2,
        title: 'Angular React',
        description: 'Angular Conference Developer',
        address: 'ESPRIT-Tunisia',
        nbr_Max: 50,
        nbr_Participation: 50,
        date: '10-11-2026',
        picture:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5agxXUSsI3J6nJYssKdxaZEO5xpTCsh4P6U4qKGXH2w&s=10',
        organizers: [],
      },
    ];
  }

  participate(conference: Conference) {
    conference.nbr_Participation++;
  }
}
