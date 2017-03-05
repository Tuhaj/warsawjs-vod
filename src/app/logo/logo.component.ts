import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  src = "http://warsawjs.com/assets/images/logo/logo-transparent-240x240.png";
  @Input()
  width: 'small' | 'medium' | 'large' = 'medium';
  size: number;

  sizes = new Map<string, number>([['thumb', 100],['small', 250], ['medium', 400], ['large', 800]]);

  constructor() {
  }

  ngOnInit() {
    this.size = this.sizes.get(this.width);
  }


}
