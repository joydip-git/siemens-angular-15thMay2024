import { NgModule } from '@angular/core';
import { PostListComponent } from './post-list/post-list.component';
import { CommonModule } from '@angular/common';
import { SERVICE_TOKEN, SERVICE_TYPE } from '../config/constants';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PostListComponent
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [PostListComponent],
  providers: [
    //PostService
    {
      provide: SERVICE_TOKEN,
      useClass: SERVICE_TYPE
    }
  ]
})
export class PostModule { }
