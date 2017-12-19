import { InjectionToken } from '@angular/core';

import { HttpConfigConst } from './custom-http.const.interface';

export const HTTP_CONFIG_CONST = new InjectionToken<HttpConfigConst>('http-config.const');

export const httpConfigConst: HttpConfigConst = {
    apiUrl: 'https://ita-app-staging.herokuapp.com'
};
