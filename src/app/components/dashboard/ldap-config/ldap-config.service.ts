import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';

import { LdapConfigData } from './ldap-config.interface';
import { CustomFirebaseService } from '../../commons/custom-firebase/custom-firebase.service';
import { CustomHttpService } from '../../commons/custom-http/custom-http.service';

@Injectable()
export class LdapConfigService {

    constructor(
        private _firebaseService: CustomFirebaseService,
        private _httpService: CustomHttpService,
        private domSanitizer: DomSanitizer
    ) {  }

    public getUserId(): Observable<any> {
        // TODO This funnction will be replaced when user authorization will be implemented.
        // User ID will be recived after user`s authorization.
        return this._httpService.get(`user`);
    }

    public getServerInfo(userId: string): Observable<LdapConfigData>  {
        return this._httpService.get(`ldap-config`, userId);
    }

    public setServerInfo(userId: string, ldapConfig: LdapConfigData): Observable<any> {
        return this._httpService.update(`ldap-config`, userId, ldapConfig);
    }

    public setImagePath(base64textString: string): SafeResourceUrl {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(
            'data:image/jpg;base64,' + base64textString
        );
    }

    public setDataToReturnFromModalWindow(ldapConfig: LdapConfigData) {
        return {
            name: ldapConfig.ldapName,
            hosts: ldapConfig.hosts
        };
    }
}
