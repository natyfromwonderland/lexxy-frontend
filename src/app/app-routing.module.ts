import { ShopComponent } from './shop/shop.component';
import { LessonTwoComponent } from './lesson-two/lesson-two.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PupilProfileComponent } from './pupil-profile/pupil-profile.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { LessonOneComponent } from './lesson-one/lesson-one.component';
import { LessonThreeComponent } from './lesson-three/lesson-three.component';
import { LanguageListComponent } from './language-list/language-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'pupil/profile',
    component: PupilProfileComponent,
    pathMatch: 'full',
    canActivate:[AuthGuard]
  },
  {
    path: 'languages',
    component: LanguageListComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'lang/:langId',
    component: LessonsListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'lesson/1',
    component: LessonOneComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'lesson/2',
    component: LessonTwoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'lesson/3',
    component: LessonThreeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'shop',
    component: ShopComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
