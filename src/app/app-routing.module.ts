import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamsComponent } from './exams/exams.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SubjectsComponent } from './subjects/subjects.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'exams', component: ExamsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
