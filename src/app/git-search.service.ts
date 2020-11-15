import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule}  from '@angular/common/http';
import {environment} from '../environments/environment';  
import { throwError} from 'rxjs';
import { map ,catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GitSearchService {
  private username: string;
  private clientid : '4b2700b235d17b6dcff6'
  private clientsecret: '1f972fb280813f8babe44505ab7a3ff49b5f64a'


  
  constructor( private http: HttpClient ){
    console.log("service now working");
    this.username = 'Bridgit-wairimu';
  }
    getGithubRepos(){
            return this.http.get('https://api.github.com/users/' + this.username + '?this.client_id' + this.clientid + '&client_secret' + this.clientsecret);
   }

   getProfileRepos(){
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?this.client_id' + this.clientid + '&client_secret' + this.clientsecret)

   }
   checkProfile(username: string){
     this.username = username;
   }

   }
 