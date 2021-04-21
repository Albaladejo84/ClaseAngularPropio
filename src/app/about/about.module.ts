import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about/about.component';
import { LinksComponent } from './about/links/links.component';
import { InfoComponent } from './about/info/info.component';
import { RouterModule } from '@angular/router';
import { AboutRoutingModule } from './about-routing.module';
import { AuthorsComponent } from './about/authors/authors.component';
import { AuthorComponent } from './about/authors/author/author.component';


@NgModule({
  declarations: [AboutComponent, LinksComponent, InfoComponent, AuthorsComponent, AuthorComponent],
  imports: [
    CommonModule,
    RouterModule,
    AboutRoutingModule
  ],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }
