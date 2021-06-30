import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.components';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ // register dependencies 
    CoursesService
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
