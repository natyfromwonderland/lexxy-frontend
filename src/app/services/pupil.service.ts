import { Learning } from './../models/learning.models';
import { Pupil } from './../models/pupil.models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from '../models/language.models';

@Injectable({
  providedIn: 'root'
})
export class PupilService {
  readonly baseURL:string = "http://localhost:8000/app";  

  constructor(
    private http: HttpClient
  ) { }


  getAuthDetails() : Observable<any> {
    return this.http.get<any>("https://dev-4oxazovc.eu.auth0.com/userinfo")
  };


    getPupilByUsername(email: string) : Observable<any> {
      return this.http.get<any>(this.baseURL + '/pupil/' + email);
    }

    getPupils() : Observable<any> {
      return this.http.get<any>(this.baseURL + '/pupil');
    }

    getTopPupils() : Observable<any> {
      return this.http.get<any>(this.baseURL + '/pupil/top');
    }

    getAllLangsByPupil(email: string): Observable<Language[]>{
      return this.http.get<Language[]>(`${this.baseURL}/pupil/alllangs?email=${email}`);
    }

    postPupilDetails(pupilDetails: Pupil) : Observable<any> {

      return this.http.post<any>(this.baseURL + '/pupil', pupilDetails);
    }

    addLanguage(learning: Learning) : Observable<any> {
      return this.http.post<any>(this.baseURL + '/pupil/lang/add', learning);
    }

    deleteLanguage(id: number) : Observable<any> {
      return this.http.delete<void>(this.baseURL + '/pupil/lang/remove/' + id);
    }

    addCoins(email: string, lessonId: number): Observable<any>{
      return this.http.put<any>(this.baseURL + '/pupil/coins/add/' + email, lessonId);
    }

    deductCoins(email: string, itemId: number): Observable<any>{
      return this.http.put<any>(this.baseURL + '/pupil/coins/deduct/' + email, itemId);
    }

    updateLevel(email: string): Observable<any>{
      return this.http.put<any>(this.baseURL + '/pupil/level/' + email, email);
    }
}
