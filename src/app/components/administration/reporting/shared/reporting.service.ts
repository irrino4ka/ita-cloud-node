import { Injectable } from '@angular/core';
import { UserData } from './reporting';
import { Observable } from 'rxjs/Observable';
import { CustomHttpService } from '../../../commons/custom-http/custom-http.service';

@Injectable()
export class ReportingService {

  constructor( private customHttpService: CustomHttpService ) { }

  public getUsersData(): Observable<UserData> {
    return this.customHttpService.get(`reporting`);
  }
}
