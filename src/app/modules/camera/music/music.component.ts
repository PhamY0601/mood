import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
 image='/assets/images/sources/smile.jpg'
  constructor() { }

  ngOnInit(): void {
  }
  audioList =[
      {
          url: "/assets/audio/Vi_Toi_Con_Song_Tien_Tien.mp3",
          title: "Vì tôi còn sống",
          cover: "/assets/images/sources/smile.jpg"
      }

];


}
