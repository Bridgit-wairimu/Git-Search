import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule}  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitSearchService {
  private username: string;
  private clientid : '4b2700b235d17b6dcff6'
  private clientsecret: '1f972fb28c813f8ba4be44505ab7a3ff49b5f64a'
  // getGithubRepos: any;
  
  constructor( private http: HttpClient ){
    console.log("service now working");
    this.username = 'Bridgit-wairimu';
  }
    getGithubRepos(){
            return this.http.get('https://api.github.com/users/' + this.username + '?this.client_id' + this.clientid + '&client_secret' + this.clientsecret);
   }

   getProfileRepos(){
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?this.client_id' + this.clientid + '&client_secret' + this.clientsecret);

   }
  }
