import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {
  readonly baseURL:string = "http://localhost:8000/app"; 

  constructor(private http: HttpClient) { }

  public uploadImage(image: File, email: string): Observable<any> {
    const multipartImage = new FormData();  
    multipartImage.append('multipartImage', image);
    return this.http.post(this.baseURL +email+"/image", multipartImage);
  }

  getImage(imageId: number): Observable<Blob> {
    return this.http.get(this.baseURL +"/avatar/"+imageId, { responseType: 'blob' });
  }
}
