import { Component, OnInit } from '@angular/core';
import { GitSearchService}  from '../git-search.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class  ProfileComponent implements OnInit {
  profile: object;
  repos: object;
  username: string;
  // repos: any[];
// profile: any [];

  constructor( private GitSearchService: GitSearchService) {
    
   }

findProfile(){
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
