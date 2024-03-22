import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Repos } from '../models/repos';
import { Repo } from '../models/repo';
import { GitHubUser } from '../models/gitHubUser';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {
  private profileSource = new BehaviorSubject<Profile>(new Profile('Profile name','https://i.stack.imgur.com/l60Hf.png','This is profile bio',0));
  private reposSource = new BehaviorSubject<Repo[]>([]);
  currentProfile = this.profileSource.asObservable();
  currentRepos = this.reposSource.asObservable(); 

  url: string ='https://api.github.com/users/'
  constructor(private http:HttpClient){

  }
  allUserRepos(searchTerm: string): Observable<Repo[]> {
    return this.http.get<Repo[]>(this.url+searchTerm+'/repos').pipe(
      catchError(this.handleError)
    );

  }
  getGitHubUser(searchTerm: string): Observable<GitHubUser>{
    return this.http.get<GitHubUser>(this.url+searchTerm).pipe(
      catchError(this.handleError)
    );
    
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      console.error('An error occurred:', error.error.message);
    } else {
      // Server-side error
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message
    return throwError('Something went wrong. Please try again later.');
  }
  updateProfile(profile: Profile){
    this.profileSource.next(profile);
  }
  updateRepos(repos: Repo[]){
    this.reposSource.next(repos);
  }
}
