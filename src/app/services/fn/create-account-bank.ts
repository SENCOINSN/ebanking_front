import {
  HttpClient,
  HttpContext,
  HttpResponse,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import {
  filter,
  map,
} from 'rxjs/operators';

import { AccountBankRequest } from '../../models/account-bank-request';
import { StrictHttpResponse } from '../generics/strict-http-response';
import { RequestBuilder } from '../request-builder';

export interface Account$Params{
    body: AccountBankRequest;
}

export function saveAccount(http:HttpClient,
    rootUrl: string,
    params: Account$Params,context?: HttpContext):Observable<StrictHttpResponse<string>> {

    const requestBody = new RequestBuilder(rootUrl,saveAccount.PATH, 'post')
    if(params){
        requestBody.body(params.body, 'application/json');
    }
    return http.request(
        requestBody.build({
            responseType:'text',
            accept:'*/*',
            context: context
        })
            
        ).pipe(
           filter((r:any): r is HttpResponse<any> => r instanceof HttpResponse),
           map((r:HttpResponse<any>)=>{
             return (r as HttpResponse<any>).clone({body: String((r as HttpResponse<any>).body)}) as StrictHttpResponse<string>;
           })
        )
}


saveAccount.PATH = '/api/v1/comptes/create';