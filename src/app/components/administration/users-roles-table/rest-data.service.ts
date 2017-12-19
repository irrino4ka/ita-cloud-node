import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { DataService } from './data.service.interface';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TABLE_CONST } from './table.const';
import { TableConst } from './table.const.interface';

@Injectable()
export class RestDataService<T> implements DataService<T> {

  private data: T[];
  private apiUrl: string;

  constructor(private http: HttpClient,
              @Inject(TABLE_CONST) public tableRoleConst: TableConst) {
    this.apiUrl = this.tableRoleConst.apiUrl;
    this.data = [];
    this.reload();
  }

  public list(): Observable<T[]> {
    return Observable.of(this.data);
  }

  public add(element: T): void {
    this.http.post( this.apiUrl, element)
      .subscribe(() => this.reload());
  }

  public update(id: string, property: string, newValue: string): void {
    this.http.get( this.apiUrl + id)
      .subscribe((e) => {
        e[property] = newValue;
        this.http.put( (this.apiUrl + id), e).subscribe(() => this.reload());
      });
  }

  public delete(id: string): void {
    this.http.delete(this.apiUrl + id)
      .subscribe(() => this.reload());
  }

  private reload() {
    this.http.get<T[]>(this.apiUrl)
      .subscribe((data) => {
        this.data.splice(0, this.data.length);
        this.data.push(...data);
      });
  }
}
