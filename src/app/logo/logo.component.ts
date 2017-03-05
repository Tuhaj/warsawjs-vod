import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  src: string;
  @Input()
  innerWidth: string;

  constructor() {
    this.src = "http://warsawjs.com/assets/images/logo/logo-transparent-240x240.png"
  }

  ngOnInit() {
    console.log('width', this.width);
  }

}
