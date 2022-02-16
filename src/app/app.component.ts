import { Component } from '@angular/core';

// Definition of the component. 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//In these files I can access {{title}}; Title for first Box (in app.component.html)
export class AppComponent {
  title = 'Team Members';
}
