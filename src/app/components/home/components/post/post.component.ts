import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Post2 } from '../../../../types/post-blog.types';



@Component({
  selector: 'app-post',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input() post:Post2={
    title:'',
    subtitle:'',
    slug:'',
    author:'',
    publicationDate:''
  }

}


