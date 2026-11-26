import { Component } from '@angular/core';

@Component({
  selector: 'app-organizer-list',
  imports: [],
  templateUrl: './organizer-list.html',
  styleUrl: './organizer-list.css',
})
export class OrganizerList {
  organizers = [
    {
      id: 1,
      name: 'Organizer 1',
      email: 'organizer1@esprit.tn',
      picture: '/organizers/o1.jpg',
      university: 'ESPRIT',
    },
    {
      id: 2,
      name: 'Organizer 2',
      email: 'organizer2@esprit.tn',
      picture: '/organizers/o2.jpg',
      university: 'ESPRIT',
    },
    {
      id: 3,
      name: 'Organizer 3',
      email: 'organizer3@esprit.tn',
      picture: '/organizers/o3.jpg',
      university: 'ESPRIT',
    },
  ];
}
