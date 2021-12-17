import { Learning } from './../models/learning.models';
import { Language } from './../models/language.models';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pupil } from '../models/pupil.models';
import { AuthService } from '@auth0/auth0-angular';
import { PupilService } from '../services/pupil.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AvatarService } from '../services/avatar.service';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-pupil-profile',
  templateUrl: './pupil-profile.component.html',
  styleUrls: ['./pupil-profile.component.css']
})
export class PupilProfileComponent implements OnInit, AfterViewInit {

  restoredSession: any;
  profileJson!: string;
  email!: string;
  img$!:string;
  username!: string;
  id!: number;
  level!: number;
  coins!: number;
  user!: AuthService["user$"];
  userDetails: Pupil;
  avatarId!: number;
  isImageLoading: boolean = false;
  leaders!: Pupil[];

  

  constructor(private pupilSevice: PupilService, private activatedRoute: ActivatedRoute, public auth: AuthService,
    private elementRef: ElementRef, private router: Router, private httpClient: HttpClient, 
    private imageService: AvatarService, private langService: LanguageService) {
      this.userDetails= localStorage.UserDetails;
     }

     ngOnInit(): void {
       
      //GET AUTHENTICATION
      this.auth.user$.subscribe(
        (profile) => {
          // (this.profileJson = JSON.stringify(profile, null, 2)),
          localStorage.setItem('profile', JSON.stringify(profile, null, 2)); 
          let tempDetails=JSON.parse(localStorage.getItem('profile')!);
          this.pupilSevice.getPupilByUsername(tempDetails.email).subscribe(
            (data) => {
                if( data!="" && data!=null){
                this.userDetails=data;
                localStorage.setItem('UserDetails', JSON.stringify(this.userDetails));
                }
                else{
                tempDetails.username=tempDetails.nickname;
                this.pupilSevice.postPupilDetails(tempDetails).subscribe(
                    (data) => {
                            this.userDetails=data;
                            if(this.userDetails.username==null){
                               this.userDetails=tempDetails.nickname;
                              }
                    localStorage.setItem('UserDetails', JSON.stringify(this.userDetails));
                  },
              );
            }
            });

  
          if( this.userDetails.avatarId!=null && this.userDetails.avatarId!=0){
              this.imageService.getImage(this.userDetails.avatarId).subscribe(
               result => {
                  this.img$ = result.name;
               }
             );
            
          }
          this.userDetails=localStorage.UserDetails,
          this.username=localStorage.UserDetails.username,
          this.email=localStorage.UserDetails.email,
          this.avatarId=localStorage.UserDetails.avatarId,
          this.coins = localStorage.UserDetails.coins,
          this.level = localStorage.UserDetails.level
          
        },
      );

      this.pupilSevice.getTopPupils().subscribe(
        result => {
          this.leaders=result;
        }
      );

      console.log(this.img$);
      console.log(this.userDetails.username);
    }

    goToLessons(id: number){
      this.router.navigate(['/lang', id]);
    }

    public getUserDetails(details: Pupil): Pupil{
      this.pupilSevice.getPupilByUsername(details.email).subscribe(
        (data) => {
          details.id=data.id;
          details.username=data.username;
          details.email=data.email;
          details.level=data.level;
          details.avatarId=data.avatarId;
          details.coins=data.coins;
       });
       return details;
       }
       
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundImage = 'url("assets/backgrounds/bg-dark.png")';
}

reloadPage(){
  window.location.reload();
}


}
