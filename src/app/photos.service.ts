import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface UnshpashResponse {
  urls: {
    regular: string;
  }
}
@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  constructor(private http: HttpClient) { 
  }

  getPhoto() {
    return this.http.get<UnshpashResponse>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID D5L4ckdMbX01pkGlxwfV4XUE5qmw2ONbgeeKc4zYuvg'
      }
    });
  }
}
