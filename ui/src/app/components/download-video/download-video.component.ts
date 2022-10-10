import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { DownloadVideoService } from 'src/app/services/download-video.service';

@Component({
  selector: 'app-root',
  templateUrl: './download-video.component.html',
  styleUrls: ['./download-video.component.scss']
})
export class DownloadVideoComponent {
  loading!: Subscription;
  constructor(private downloadService: DownloadVideoService) { }
  urlVideo = '';

  idFromUrl(url: string) {
    if (url.startsWith('https://www.youtube.com/watch?v=')) {
      return url.slice(32);
    }
    else if (url.startsWith('https://m.youtube.com/watch?v=')) {
      return url.slice(30);
    }
    else
      return url.slice(17);
  }

  download(pdfLink: any) {
    const downloadLink = document.createElement('a');
    downloadLink.href = pdfLink;
    downloadLink.download = 'video.mp4';
    downloadLink.click();
  }

  downloadFile(data: any) {
    const blob = new Blob([data], { type: 'video/mp4' });
    const url= window.URL.createObjectURL(blob);
    window.open(url);
  }

  onSubmit() {
    if (this.urlVideo === '') alert('Please enter url to download video!');
    else {
      this.loading = this.downloadService.getVideo(this.idFromUrl(this.urlVideo))
        .subscribe((res: any) => {
          const reader = new FileReader();
          reader.readAsDataURL(res);
          reader.onloadend = () => {
            const base64data = reader.result;
            this.download(base64data);
          };
      });
    }
  }
}