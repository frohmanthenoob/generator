import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meme-preview',
  templateUrl: './meme-preview.component.html',
  styleUrls: ['./meme-preview.component.css']
})
export class MemePreviewComponent implements OnInit {
  picID: string;
  constructor() {
    this.picID = 'pic1';
   }

  ngOnInit() {
  }

}
