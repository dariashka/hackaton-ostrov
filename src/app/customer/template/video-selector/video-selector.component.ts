import {Component} from '@angular/core';
import {VideoSelectorDialogComponent} from './video-selector-dialog.component';
import {MatDialog} from '@angular/material';
import * as url from 'url';

interface VideoItem {
  url: string;
  videoId?: string;
}

@Component({
  selector: 'app-video-selector',
  templateUrl: './video-selector.component.html',
  styleUrls: ['./video-selector.component.css']
})
export class VideoSelectorComponent {
  private _videoList: Array<VideoItem> = [{
    url: 'https://www.youtube.com/watch?v=ioxatcadaFs',
    videoId: ''
  }].map(x => ({...x, videoId: url.parse(x.url, true).query['v']}));

  public get videoList(): Array<VideoItem> {
    return this._videoList;
  }

  public set videoList(value: Array<VideoItem>) {
    this._videoList = value.map(x => ({...x, videoId: url.parse(x.url, true).query['v']}));

  }


  constructor(public dialog: MatDialog) {
  }

  public getThumbnail(videoId: string) {
    return `http://img.youtube.com/vi/${videoId}/1.jpg`;
  }

  public openDialog(video?: VideoItem): void {
    const dialogRef = this.dialog.open(VideoSelectorDialogComponent, {
      width: '350px',
      data: {url: video && video.url}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.videoList.push({url: result});
      }
    });
  }

}
