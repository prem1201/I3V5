
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
// import { catchError } from 'rxjs/operators';

// import { HomePage } from './home';
// import { HttpErrorHandler, HandleError } from '../../app/http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class ForecastService {
  heroesUrl = 'api/heroes';  // URL to web api

  constructor(
    private _http: HttpClient) {

  }

  /** GET heroes from the server */
  //   getHeroes (): Observable<Hero[]> {
  //     return this.http.get<Hero[]>(this.heroesUrl)
  //       .pipe(
  //         catchError(this.handleError('getHeroes', []))
  //       );
  //   }

  /* GET heroes whose name contains search term */
  //   searchHeroes(term: string): Observable<Hero[]> {
  //     term = term.trim();

  //     // Add safe, URL encoded search parameter if there is a search term
  //     const options = term ?
  //      { params: new HttpParams().set('name', term) } : {};

  //     return this.http.get<Hero[]>(this.heroesUrl, options)
  //       .pipe(
  //         catchError(this.handleError<Hero[]>('searchHeroes', []))
  //       );
  //   }

  //////// Save methods //////////

  /** GET: Login to the database */
  getForecastMadeOverReport(): Observable<any> {
    var CONDATA = {
      "Content-Type": "application/json",
      "Authorization":window.localStorage.authToken
    };
    return this._http.get('http://192.168.2.143:3000/users/getForecastMadeOverReport', {
      headers: CONDATA

    })
      .map(response => {
        return response
      })
      .catch(error => {
        console.error(error);
        return Observable.throw(error())
      });
  }
  /** DELETE: delete the hero from the server */
  //   deleteHero (id: number): Observable<{}> {
  //     const url = `${this.heroesUrl}/${id}`; // DELETE api/heroes/42
  //     return this.http.delete(url, httpOptions)
  //       .pipe(
  //         catchError(this.handleError('deleteHero'))
  //       );
  //   }

  /** PUT: update the hero on the server. Returns the updated hero upon success. */
  //   updateHero (hero: Hero): Observable<Hero> {
  //     httpOptions.headers =
  //       httpOptions.headers.set('Authorization', 'my-new-auth-token');

  //     return this.http.put<Hero>(this.heroesUrl, hero, httpOptions)
  //       .pipe(
  //         catchError(this.handleError('updateHero', hero))
  //       );
  //   }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/