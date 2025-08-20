import { Component } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import Swal from 'sweetalert2';

import { AccountBankRequest } from '../../models/account-bank-request';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-account-creation',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './account-creation.html',
  styleUrl: './account-creation.css'
})
export class AccountCreation {
  accountRequest:AccountBankRequest={
    adresseTitulaire: '',
    codePostalTitulaire: '',
    emailTitulaire: '',
    nomTitulaire: '',
    numeroTelephone: '',
    paysTitulaire: '',
    prenomTitulaire: '',
    villeTitulaire: '',
    typeCompte: '',
    soldeInitial: 0
  }

  constructor(private accountService: AccountService) {}


  createAccount(){
    console.log('accountRequest body ', this.accountRequest);
   this.accountService.saveAccount({
      body: this.accountRequest
    }).subscribe({
      next:(resp)=>{
        console.log('Account created successfully with ID:', resp);
        this.showAllertSuccess(resp);
      },
      error:(err)=>{
        console.log(err);
        this.showAllertError();
      }
    });

  }
  showAllertError(){
    Swal.fire({
      title: 'Erreur',
      text: 'Une erreur est survenue lors de la création du compte. Veuillez réessayer.',
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }


  showAllertSuccess(accountId:string){
    Swal.fire({
      title: 'Compte créé',
      text: `Votre compte a été créé avec succès. Votre identifiant de compte est : ${accountId}`,
      icon: 'success',
      confirmButtonText: 'OK'
    });
  }
}


