import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {
  @ViewChild("video")
  public video?: ElementRef;

  @ViewChild("canvas")
  public canvas?: ElementRef;

  public captures: Array<any>;

  public constructor() {
    this.captures = [];
  }

  public ngOnInit() {}

  public ngAfterViewInit() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        this.video!.nativeElement.srcObject = stream;
        this.video?.nativeElement.play();
      });
    }
  }

  public capture() {
    var context = this.canvas?.nativeElement
        .getContext("2d")
        .drawImage(this.video?.nativeElement, 0, 0, 640, 480);
    this.captures.push(this.canvas?.nativeElement.toDataURL("image/png"));

    const file = this.dataURLtoFile(this.captures[0], 'a1.png');
    console.log(file);
  }

  public dataURLtoFile(dataurl: any, filename:any) {
    var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

}
