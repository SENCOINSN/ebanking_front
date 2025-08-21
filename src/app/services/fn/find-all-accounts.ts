import {
  HttpClient,
  HttpContext,
  HttpResponse,
} from '@angular/common/http';

import {
  filter,
  map,
  Observable,
} from 'rxjs';

import { StrictHttpResponse } from '../generics/strict-http-response';
import { RequestBuilder } from '../request-builder';
import { ApiResponse } from '../responses/api-response';

export interface FindAllAccounts$Params {
    page?: number;
    size?: number;
}


export function findAllAccounts(http:HttpClient,
    rootUrl: string,
    params?: FindAllAccounts$Params,context?: HttpContext):Observable<StrictHttpResponse<ApiResponse>> {
    const rb = new RequestBuilder(rootUrl, findAllAccounts.PATH, 'get');
    if (params) {
        rb.query('page', params.page, {});
        rb.query('size', params.size, {});
    }
    return http.request(
        rb.build({
            responseType: 'json',
            accept: 'application/json',
            context: context
        })
    ).pipe(
        filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
            return r as StrictHttpResponse<ApiResponse>;
        })
    );
}

findAllAccounts.PATH='/api/v1/comptes/all';