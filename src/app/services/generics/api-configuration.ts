import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiConfiguration{
    rootUrl: string = 'http://localhost:9191';
}


export interface ApiConfigurationInterface {
    rootUrl: string;
}