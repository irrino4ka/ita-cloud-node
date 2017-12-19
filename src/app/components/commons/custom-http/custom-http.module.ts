import { NgModule } from '@angular/core';

import { HTTP_CONFIG_CONST, httpConfigConst } from './custom-http.const';

import { CustomHttpService } from './custom-http.service';
@NgModule({
  imports: [],
  providers: [
    CustomHttpService,
    {
      provide: HTTP_CONFIG_CONST,
      useValue: httpConfigConst
    }
  ],
  declarations: []
})
export class CustomHttpModule { }
