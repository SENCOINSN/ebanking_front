import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import Keycloak from 'keycloak-js';

@Injectable({
    providedIn: 'root'
})
export class KeycloakService {
    private  _keycloak: Keycloak | undefined;

    constructor(private router: Router){}

    get keycloak(){
        if(!this._keycloak) {
            this._keycloak = new Keycloak({
                url: 'http://212.227.78.64:8080',
                realm: 'sencoin-realm',
                clientId: 'api-paiement-app'
            });
        }
        return this._keycloak
    }

    async init(){
        const authenticated = await this.keycloak.init({
            onLoad: 'login-required',
            //checkLoginIframe: false
        });
    }

    async login() {
        await this.keycloak.login();
    }

    get userId(): string | undefined {
        return this.keycloak?.tokenParsed?.sub;
    }

    get userName(): string | undefined {
        return this.keycloak?.tokenParsed?.['preferred_username'];
    }

    get isTokenExpired(): boolean {
        return this.keycloak?.isTokenExpired() || false;
    }

    get fullName(): string | undefined {
        const firstName = this.keycloak?.tokenParsed?.['given_name'];
        const lastName = this.keycloak?.tokenParsed?.['family_name'];
        return firstName && lastName ? `${firstName} ${lastName}` : undefined;
    }

    logout(){
        return this.keycloak?.logout({
            redirectUri: 'http://localhost:4200'
        });
    }

    accountManagement() {
        return this.keycloak?.accountManagement();
    }
}