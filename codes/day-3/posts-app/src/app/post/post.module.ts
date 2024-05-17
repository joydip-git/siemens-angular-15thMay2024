import { NgModule } from '@angular/core';
import { PostListComponent } from './components/post-list/post-list.component';
import { CommonModule } from '@angular/common';
import { SERVICE_TOKEN, SERVICE_TYPE } from '../config/constants';
import { HttpClientModule } from '@angular/common/http';
import { FilterPostPipe } from './pipes/filter-post.pipe';

@NgModule({
  declarations: [
    PostListComponent, FilterPostPipe
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
