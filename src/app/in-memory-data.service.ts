import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Record } from './record';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService 
implements InMemoryDbService
{

  createDb(){
    const records: Record[] = [
      {
          id : 1,
          firstName: "Erik",
          lastName: "Bauer",
          email: "erik.bauer@muster.com"
        },
        {
          id : 2,
          firstName: "Max",
          lastName: "Schubert",
          email: "max.schubert@muster.de"
        },
        {
          id : 3,
          firstName: "Jon",
          lastName: "Doe",
          email: "jon.doe@muster.de"
        },
        {
          id : 4,
          firstName: "Maria",
          lastName: "Mueller",
          email: "maria.mueller@muster.de"
        }
      ]
      return {records};
  }
  constructor() { }
}
