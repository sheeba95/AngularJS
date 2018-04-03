import { Component } from '@angular/core';

@Component({
  selector: 'app-cts',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  name = 'Sheeba';
  num1 = 23;
  num2 = 23;
  displayDate = function() {
    return new Date();
  }
}
