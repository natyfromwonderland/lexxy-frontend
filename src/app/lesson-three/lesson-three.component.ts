import { LanguageService } from './../services/language.service';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PupilService } from '../services/pupil.service';
import { Lesson } from '../models/lesson-db.models';
import { Pupil } from '../models/pupil.models';

@Component({
  selector: 'app-lesson-three',
  templateUrl: './lesson-three.component.html',
  styleUrls: ['./lesson-three.component.css']
})
export class LessonThreeComponent implements OnInit, AfterViewInit {

  pupil$!: Pupil;
  lesson!: Lesson;
  coins!: number;

  constructor(private elementRef: ElementRef, private pupilService: PupilService, 
    private langService: LanguageService, private router: Router) { }

  ngOnInit(): void {
    this.pupilService.getPupilByUsername(JSON.parse(localStorage.getItem('profile')!).email).subscribe(
      (data) => {
        this.pupil$=data;
      });
    this.langService.getLessonById(3).subscribe(
      (data) => {
        this.lesson=data;
        this.coins=data.points;
      });
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundImage = 'url("assets/backgrounds/bg-dark.png")';
}

updateCns(){
  this.pupilService.addCoins(this.pupil$.email, this.coins).subscribe(
    result => {
      this.pupil$.coins=result.coins;
    }
  );
}

moveNext(){
  this.pupilService.updateLevel(this.pupil$.email).subscribe();
  this.router.navigate(['pupil/profile']);
}


@Input() questionIndex!: number;


questions = [
  {question: "Comment _____ - vous?", 
  options: ["allez", "va", "elle"],
  answer: "allez"},
  {question: "On va _____ cinema ce soir", 
  options: ["au", "a", "a la"],
  answer: "au"}
];

score: number =0;
isCorrect: boolean = false;
isSelected: boolean = false;
@Output() answers =
    new EventEmitter<{user_answer: string, correct_answer: string}>();

    setUserAnswer(option: string) {
      let userAnswer = option;
      let correctAnswer = this.questions[this.questionIndex].answer;
      this.answers.emit(
        {user_answer: userAnswer, correct_answer: correctAnswer});
      if(userAnswer===correctAnswer){
        this.isCorrect=true;
      }
    }

    onItemChange(value: any){
      let correctAnswer = this.questions[this.questionIndex].answer;
      console.log(" Value is : ", value );
      if(value === correctAnswer){
        this.isCorrect=true;
      }
   }

}


