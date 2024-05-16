import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {
  posts?: Post[];
  isDataFetchingOver = false
  errorMessage = ''

  constructor(private ps: PostService) {

  }
  ngOnInit(): void {
    //this.posts = this.ps.getPosts()
    // setTimeout(
    //   () => {
    this.ps
      .getPosts()
      .subscribe({
        next: (data) => {
          this.posts = data
          this.errorMessage = ''
          this.isDataFetchingOver = true
        },
        error: (err) => {
          this.posts = undefined
          this.errorMessage = err.message
          this.isDataFetchingOver = true
        }
      })
    //   },
    //   2000
    // )
  }
}
