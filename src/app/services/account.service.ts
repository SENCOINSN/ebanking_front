import {
  HttpClient,
  HttpContext,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  map,
  Observable,
} from 'rxjs';

import {
  Account$Params,
  saveAccount,
} from './fn/create-account-bank';
import { ApiConfiguration } from './generics/api-configuration';
import { BaseService } from './generics/base-service';
import { StrictHttpResponse } from './generics/strict-http-response';

@Injectable({
  providedIn: 'root'
})
export class AccountService extends BaseService{
  constructor(config:ApiConfiguration,http:HttpClient) {
    super(config, http);
  }

  // Path to the saveAccount function
  static readonly saveAccountPath = '/api/v1/comptes/create';
  

  saveAccount$Response(params: Account$Params, context?: HttpContext):Observable<StrictHttpResponse<string>> {
    return saveAccount(this.http, this.rootUrl, params, context);
  }

  saveAccount(params: Account$Params, context?: HttpContext):Observable<string> {
    return this.saveAccount$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }
}
