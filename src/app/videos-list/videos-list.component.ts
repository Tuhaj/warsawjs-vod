import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import { VideosService } from '../services/videos.service';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.css']
})
export class VideosListComponent implements OnInit {

  constructor(private videosList: VideosService) {
  }

  ngOnInit() {
  }

  @Output() watchVideo = new EventEmitter();

  onWatchVideo(hello) {
    console.log('test', hello);
    this.watchVideo.emit(hello);
  }


}
