import { Component, OnInit } from '@angular/core';
import { GitSearchService}  from '../git-search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class  SearchComponent implements OnInit {
  profile: object;
  repos: object;
  username: string;
  

  constructor( private GitSearchService: GitSearchService) {
    
   }

searchProfile(){
  this.GitSearchService.checkProfile(this.username);
  this.GitSearchService.getGithubRepos().subscribe(profile =>{
    console.log(profile);
    this.profile = profile;
  });

  this.GitSearchService.getProfileRepos().subscribe(repos =>{
    console.log(repos);
    this.repos = repos;
  })

}

  ngOnInit(){
  }

}