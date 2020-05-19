import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from 'url';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseHttpClientService<T> {

  private baseApiUrl: string = 'blah url';
  constructor(private httpClient: HttpClient) { }
  abstract controller: string;

  post<Y>(action: string, model: T) : Promise<Y> {
    return this.httpClient.post<Y>(this.getUrl(action),model).toPromise();
  }
  private getUrl(action: string){
    return new URL(action, this.baseApiUrl).href;
  }

}
