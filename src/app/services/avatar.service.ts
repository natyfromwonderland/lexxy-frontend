import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {
  readonly baseURL:string = "http://localhost:8000/app"; 

  constructor(private http: HttpClient) { }

  public uploadImage(name: string, email: string): Observable<any> {
    return this.http.post<any>(this.baseURL +"/pupil/"+email+"/image", name);
  }

  getImage(imageId: number): Observable<any> {
    return this.http.get<any>(this.baseURL +"/pupil/avatar/"+imageId);
  }
}
