import { Lesson } from './../models/lesson-db.models';
import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Language } from '../models/language.models';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit, AfterViewInit {

  // language!: Language;
  lessons!: Lesson[];

  constructor(private elementRef: ElementRef, private languageService: LanguageService,
    private activatedRoute: ActivatedRoute, private router: Router,) { }

  ngOnInit(): void {
    const langId: number = this.activatedRoute.snapshot.params['langId'];
    this.languageService.getLessonsByLang(langId).subscribe(result => {
      this.lessons = result;
    });
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundImage = 'url("assets/backgrounds/bg-dark.png")';
}

goToLesson(id: number){
  this.router.navigate(['/lesson', id]);
}

goBack(){
  this.router.navigate(['pupil/profile']);
}

}
