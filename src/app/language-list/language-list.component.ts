import { Language } from './../models/language.models';
import { Component, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Learning } from '../models/learning.models';
import { PupilService } from '../services/pupil.service';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.css']
})
export class LanguageListComponent implements OnInit, AfterViewInit {

  languages$!: Observable<Language[]>;
  name: string = "";
  langsAvailable!: Language[];
  pupilId!: number;
  langId!:number;
  
  dataChanged(event: any) {
    this.langService.getLangByName(event.target.value).subscribe(
      result =>{
        this.langId=result.id;
      }
    );
  }

  constructor( 
    private router: Router,
    private pupilService: PupilService,
    private elementRef: ElementRef,
    private langService: LanguageService
    ) { }

    ngOnInit(): void {
      this.languages$ = this.pupilService.getAllLangsByPupil(JSON.parse(localStorage.getItem('profile')!).email);
      this.langService.getLangs().subscribe(
        result => {
          this.langsAvailable=result;
        }
      );
      this.pupilService.getPupilByUsername(JSON.parse(localStorage.getItem('profile')!).email).subscribe(
        result =>{
          this.pupilId=result.id;
        }
      );
    }
  
    removeLang(id: number): void {
      this.pupilService.deleteLanguage(id).subscribe();
      this.reloadPage();
    }
  
    addLang(name: any): void {
  
      let newLang: Learning = {
        id: 0,
        langId: this.langId,
        pupilId: this.pupilId
      };
      this.pupilService.addLanguage(newLang).subscribe();
      this.reloadPage();
    }
  
    reloadPage(){
      window.location.reload();
    }
  
    goToLessons(id: number){
      this.router.navigate(['/lang', id]);
    }

    ngAfterViewInit() {
      this.elementRef.nativeElement.ownerDocument
          .body.style.backgroundImage = 'url("assets/backgrounds/bg-moon-planet.png")';
  }

}
