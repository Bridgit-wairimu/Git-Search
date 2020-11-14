import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import {GitSearchService} from './git-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit{
  title = 'github-search';

  githubRepos : any = [];
  constructor (private gitService : GitSearchService) {
    this.getRepositories();
  }
  ngOnInit(): void {
  }

  getRepositories(){
    this.gitService.getGithubRepos().subscribe(repos =>{
      this.githubRepos = repos;
      console.log(JSON.stringify(repos));
    }) 

    }
  }


