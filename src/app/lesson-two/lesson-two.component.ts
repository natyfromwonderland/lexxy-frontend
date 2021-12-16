import { Lesson } from './../models/lesson-db.models';
import { PupilService } from './../services/pupil.service';
import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Pupil } from '../models/pupil.models';
import { LanguageService } from '../services/language.service';
import { Router } from '@angular/router';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-lesson-two',
  templateUrl: './lesson-two.component.html',
  styleUrls: ['./lesson-two.component.css']
})
export class LessonTwoComponent implements OnInit, AfterViewInit {

  pupil$!: Pupil;
  lesson!: Lesson;
  coins!: number;
  
  
  answers: string[] = ["la robe", "la chemise", "les pantalons"];

  constructor(private elementRef: ElementRef, private pupilService: PupilService, 
    private langService: LanguageService, private router: Router) { }

  ngOnInit(): void {
    this.pupilService.getPupilByUsername(JSON.parse(localStorage.getItem('profile')!).email).subscribe(
      (data) => {
        this.pupil$=data;
      });
    this.langService.getLessonById(2).subscribe(
      (data) => {
        this.lesson=data;
        this.coins=data.points;
      });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.answers, event.previousIndex, event.currentIndex);
  }


  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundImage = 'url("assets/backgrounds/bg-moon.png")';
  }

  moveNext(){
  this.pupilService.addCoins(this.pupil$.email, this.coins).subscribe();
  this.router.navigate(['lesson/', 3]);
  }

}
