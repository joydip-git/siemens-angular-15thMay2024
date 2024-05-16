import { NgModule } from '@angular/core';
import { PostListComponent } from './post-list/post-list.component';
import { CommonModule } from '@angular/common';
import { PostService } from '../services/post.service';

@NgModule({
  declarations: [
    PostListComponent
  ],
  imports: [CommonModule],
  exports: [PostListComponent],
  providers: [PostService]
})
export class PostModule { }
