import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloadVideoComponent } from './components/download-video/download-video.component';

const routes: Routes = [
  {
    path: '',
    component: DownloadVideoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
