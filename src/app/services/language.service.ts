import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  readonly baseURL:string = "http://localhost:8000/app";

  constructor(private http: HttpClient) { }

  getLangById(id: number) : Observable<any> {
    return this.http.get<any>(this.baseURL + '/lang/' + id);
  }

  getLangByName(name: string) : Observable<any> {
    return this.http.get<any>(this.baseURL + '/lang/name/' + name);
  }

  getLangs() : Observable<any> {
    return this.http.get<any>(this.baseURL + '/lang');
  }

  getLessonsByLang(id: number) : Observable<any> {
    return this.http.get<any>(this.baseURL + '/lesson/lang/' + id);
  }

  getLessonById(id: number) : Observable<any>{
    return this.http.get<any>(this.baseURL + '/lesson/' + id);
  }
}
