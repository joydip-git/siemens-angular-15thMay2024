import { Component, Inject, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';
import { SERVICE_TOKEN } from '../../../config/constants';
import { ServiceContract } from '../../services/service-contract';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
  //providers: [PostService]
})
export class PostListComponent implements OnInit {
  posts?: Post[];
  isDataFetchingOver = false
  errorMessage = ''
  filterText = ''
  //private ps: ServiceContract<Post>;

  constructor(@Inject(SERVICE_TOKEN) private ps: ServiceContract<Post>) {
    //this.ps = ps
  }
  updateFilterText(value: string) {
    this.filterText = value
  }
  ngOnInit(): void {
    this.ps
      .getAll()
      .subscribe({
        next: (data) => {
          this.posts = data.slice(0, 10)
          this.errorMessage = ''
          this.isDataFetchingOver = true
        },
        error: (err) => {
          this.posts = undefined
          this.errorMessage = err.message
          this.isDataFetchingOver = true
        }
      })
  }
}
