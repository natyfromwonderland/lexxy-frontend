
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PupilProfileComponent } from './pupil-profile/pupil-profile.component';
import { ShopComponent } from './shop/shop.component';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PupilService } from './services/pupil.service';
import { ShopItemService } from './services/shop-item.service';
import {MatIconModule} from '@angular/material/icon'
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { SignupButtonComponent } from './signup-button/signup-button.component';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';
import { LoadingComponent } from './loading/loading.component';
import { LoginButtonComponent } from './login-button/login-button.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { AuthButtonComponent } from './auth-button/auth-button.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddLangModal } from './modal/add-lang.modal';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { LessonOneComponent } from './lesson-one/lesson-one.component';
import { LessonTwoComponent } from './lesson-two/lesson-two.component';
import { LessonThreeComponent } from './lesson-three/lesson-three.component';
import { NextButtonComponent } from './next-button/next-button.component';
import { LanguageListComponent } from './language-list/language-list.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    PupilProfileComponent,
    ShopComponent,
    SignupButtonComponent,
    LoadingComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    AuthButtonComponent,
    AddLangModal,
    LessonsListComponent,
    LessonOneComponent,
    LessonTwoComponent,
    LessonThreeComponent,
    NextButtonComponent,
    LanguageListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    AuthModule.forRoot({
      ...env.auth,
      httpInterceptor: {
        allowedList: [`${env.dev.serverUrl}/app*`],
      },
    }),
    NgbModule,
    DragDropModule,
    NgxAudioPlayerModule,
    MatRadioModule
  ],
  providers: [PupilService, 
    {provide:HTTP_INTERCEPTORS, useClass:AuthHttpInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
