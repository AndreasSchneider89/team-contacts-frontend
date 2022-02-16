import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecordsComponent } from './records/records.component';
import { CreateRecordComponent } from './create-record/create-record.component';

// const routes vom Typ routs ist ein neuer Array
// Reihenfolge ist wichtig: First-Match wird getroffen
// Hier sind meine Routen zu verschiedenen Unterpfaden (Der URL) gespeichert
// path: 'hinter slash' Route zur Komponente
const routes: Routes = [
  {
    path: 'records', component:RecordsComponent
  },
  {
    path: 'create', component:CreateRecordComponent
  },
  {
    path: 'edit/:id', component:CreateRecordComponent
  },
  {
    // PathMatch: 'Full' = Collected URL should match Path: '': necessary for it to work without /
     // If nothing behind slash making / records
    path:'', redirectTo:'records', pathMatch:'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
