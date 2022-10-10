import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { timeout, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DownloadVideoService {

  constructor(private http: HttpClient) {}

  getVideo(id: string) {
    return this.http.get('http://localhost:2216/download/youtube/{id}'
      .replace('{id}', id),
      { responseType: 'blob' }
    ).pipe(
    catchError((error: Error) => {
        return throwError(error);
    })
  );
  }
}
