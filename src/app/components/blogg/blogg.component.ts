import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { HeaderService, HeaderData } from '../../services/header.service';
import matter from 'gray-matter-browser';  
import MarkdownIt from 'markdown-it';   

@Component({
  selector: 'app-blogg',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './blogg.component.html',
  styleUrls: ['./blogg.component.css']
})


export class BloggComponent implements OnInit {
  private markdownIt = new MarkdownIt();  
  content = '';  
  constructor(
    private activateRoute: ActivatedRoute,
    private http: HttpClient,
    private headerService: HeaderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const slug = this.activateRoute.snapshot.paramMap.get('postId');
    if (slug) {
      this.http.get(`assets/posts/${slug}/post.md`, { responseType: 'text' })
        .subscribe({
          next: (data) => this.manageMarkdownFileData(data), 
          error: (error) => console.log(error)
        });
    }
  }

  manageMarkdownFileData(markdownFile: string | undefined): void {
    if (!markdownFile) {
      return;
    }

    const matterObj = matter(markdownFile);
    const { title = '', subtitle = '', thumbnail = '' } = matterObj.data;
    const headerData: HeaderData = { title, subtitle, thumbnail };
    this.setHeaderData(headerData);
    this.content = this.markdownIt.render(matterObj.content);
  }

  setHeaderData(headerData: HeaderData): void {
    this.headerService.uiData.set(headerData);
  }
}
