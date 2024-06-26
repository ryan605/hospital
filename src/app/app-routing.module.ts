import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { BlogsComponent } from './blogs/blogs.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'services',component:ServicesComponent},
  {path: 'about',component: AboutComponent},
  {path: 'blogs',component: BlogsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
