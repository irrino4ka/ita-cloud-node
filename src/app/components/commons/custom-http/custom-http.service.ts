import { Injectable, Inject } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { HTTP_CONFIG_CONST } from './custom-http.const';
import { HttpConfigConst } from './custom-http.const.interface';

@Injectable()
export class CustomHttpService {
  private url: string;

constructor(
  private http: HttpClient,
  @Inject(HTTP_CONFIG_CONST) private httpConfigConst: HttpConfigConst,
) {
  this.url = this.httpConfigConst.apiUrl;
 }

public init(path: string): void {
    this.url += `/${path}`;
}
public get(path: string, id?: string): Observable<any> {
   return this.http.get(id ? `${this.url}/${path}?id=${id}` : `${this.url}/${path}`);
}

public update(path: string, id: string, objectToBeUpdated: any): Observable<any> {
  return this.http.put(
      `${this.url}/${path}/${id}`,
      objectToBeUpdated
  );
}

}
