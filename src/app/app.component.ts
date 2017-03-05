import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  modalVisible = false;
  source: '';

  watchVideo(event) {
    console.log(event, 'in app component');
    this.modalVisible = true;
    this.source = event;
  }

  closeVideo() {
    this.modalVisible = false;
    this.source = '';
  }
}
