import { LanguageService } from './../services/language.service';
import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Lesson } from '../models/lesson-db.models';
import { Pupil } from '../models/pupil.models';
import { PupilService } from '../services/pupil.service';

@Component({
  selector: 'app-lesson-one',
  templateUrl: './lesson-one.component.html',
  styleUrls: ['./lesson-one.component.css']
})
export class LessonOneComponent implements OnInit, AfterViewInit {

  pupil$!: Pupil;
  lesson!: Lesson;
  coins!: number;
  speech: any;
  speechData: any;
  text: string = `Je m’appelle Jenny. Je suis une fille et j’ai treize ans. 
  Je vais à l’école. J’ai deux frères. Le premier s’appelle Thomas, 
  il a quatorze ans. Le second s’appelle Jon et il a neuf ans. 
  Mes frères et moi parlons français et anglais à la maison. 
  J'apprends l'anglais à l'école. J'aime lire et aller au zoo. 
  J'aime beaucoup les animaux.`;

  constructor(private elementRef: ElementRef, private pupilService: PupilService, 
    private router: Router, private langService: LanguageService) { }

  ngOnInit(): void {
    this.pupilService.getPupilByUsername(JSON.parse(localStorage.getItem('profile')!).email).subscribe(
      (data) => {
        this.pupil$=data;
      });
    this.langService.getLessonById(1).subscribe(
      (data) => {
        this.lesson=data;
        this.coins=data.points;
      });
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundImage = 'url("assets/backgrounds/bg-dark.png")';
}

moveNext(){
  this.pupilService.addCoins(this.pupil$.email, this.coins).subscribe();
  this.router.navigate(['lesson/', 2]);
}

playAudio(){
  let audio = new Audio();
  audio.src = "../../../assets/voice.mp3";
  audio.load();
  audio.play();
  this.pupilService.addCoins(this.pupil$.email, 5).subscribe();
}

}
