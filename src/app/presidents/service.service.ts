import { Injectable } from '@angular/core';
import {IPresident} from './ipresident';

@Injectable({
  providedIn: 'root'
})
export class Service {

  constructor() { }

  getPresidents(): IPresident[] {

return [
  {
    presidentId: 100,
    presidentName: 'Bill Clinton',
    period: '1990-1999',
    politicalParty: 'Democratic Party',
    rating: 5,
    presidentIQ: 190,
    imageUrl: 'assets/images/pres100.jpg'

  },
  {
    presidentId: 200,
    presidentName: 'Donnie Trump',
    period: '2016-?',
    politicalParty: 'Republican Party',
    presidentIQ: 0,
    rating: 0,
    imageUrl: 'assets/images/pres200.jpg'
  },
  {
    presidentId: 300,
    presidentName: 'Barack Obama',
    period: '2008-2016',
    politicalParty: 'Democratic Party',
    rating: 5,
    presidentIQ: 180,
    imageUrl: 'assets/images/pres300.jpg'

  },
  {
    presidentId: 400,
    presidentName: 'Harry Truman',
    period: '1990-1999',
    politicalParty: 'Democratic Party',
    rating: 5,
    presidentIQ: 130,
    imageUrl: 'assets/images/pres400.jpg'

  },
  {
    presidentId: 500,
    presidentName: 'Abraham Lincoln',
    period: '1990-1999',
    politicalParty: 'Republican Party',
    rating: 4,
    presidentIQ: 180,
    imageUrl: 'assets/images/pres500.jpg'

  },
  {
    presidentId: 600,
    presidentName: 'George Washington',
    period: '1796-1790',
    politicalParty: 'Democratic Party',
    rating: 5,
    presidentIQ: 190,
    imageUrl: 'assets/images/pres600.jpg'

  }];

  }

}
