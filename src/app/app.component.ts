import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  modalVisible = true
  watchVideo(event) {
    console.log(event, 'in app component');
  }
}
