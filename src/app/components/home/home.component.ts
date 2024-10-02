import { Component, OnInit } from '@angular/core';
import { PostComponent } from './components/post/post.component'; 
import { HeaderService } from '../../services/header.service'; 
import { HeaderData } from '../../services/header.service';
import { Post2 } from '../../types/post-blog.types';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import MarkdownIt from 'markdown-it';
import matter from 'gray-matter-browser';

type HomeData = {
  posts: Array<string>
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PostComponent,HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  private uiData: HeaderData = {
    title: ' Magia Digital ',
    subtitle: 'Habla con libertad sobre lo que quieras',
    thumbnail:  'assets/Pisaje.jpeg'

  }

   posts: Array<Post2>=[]

  constructor(private headerService: HeaderService,private http: HttpClient) { }

  ngOnInit() {
    const pathHhomeData = '/assets/home/home-data.json'
    this.headerService.uiData.set(this.uiData)
    this.http.get<HomeData>(pathHhomeData).subscribe({
     next:data => {
       const requests = data.posts.map(slug=>
        this.http.get
        (`assets/posts/${slug}/post.md`,{responseType: 'text' }

       ))
       forkJoin(requests).subscribe({
        next: allPostDetails =>{
         this.posts = allPostDetails.map(MarkdownFile =>{
          const{  
            title='',
            subtitle='', 
            slug='',
            author='',
            publicationDate=''} = matter(MarkdownFile).data;
            return{
              title,
              subtitle, 
              slug,
              author,
              publicationDate
            }
         })

        },
        error: error => console.error(error)
        })
      },
      error: error => console.error(error)
    })
  }
}

