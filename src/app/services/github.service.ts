import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  url: string = 'https://api.github.com/users/';
  constructor(private http: HttpClient) {}

  // get user from github
  getUser(username: string) {
    interface ApiResponse {
      bio: string;
      public_repos: number;
      login: string;
      avatar_url: string;
      created_at: Date;
      updated_at: Date;
      name: string;
      full_name: string;
      html_url: string;
    }

    const promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>(this.url + username)
        .toPromise()
        .then(
          (response) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        );
    });
    return promise;
  }

  // get user repos from github
  getRepos(username: string) {
    interface ApiResponse {
      name: string;
      html_url: string;
      description: string;
      updated_at: Date;
      created_at: Date;
      clone_url: string;
    }
    const promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>(this.url + username + '/repos')
        .toPromise()
        .then(
          (response) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        );
    });
    return promise;
  }
}
