import {
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
} from '@angular/core';

import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-account-list',
  imports: [],
  templateUrl: './account-list.html',
  styleUrl: './account-list.css'
})
export class AccountList implements OnInit {
  
  private accountService = inject(AccountService);
  accounts: any = [];
  datas:any = [];
  isAdmin:any;
  pages:any = [];
  page = 0;
  pageSize = 10;

  constructor(private cdr:ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadAccounts();
   
  }

  loadAccounts(): void {
    this.accountService.findAllAccounts(
      {
        page: this.page,
        size: this.pageSize
      }
    ).subscribe({
      next: (resp) => {
        console.log('Accounts loaded successfully:', resp.data);
        this.accounts = resp.data;
        this.datas = this.accounts.content;     
         this.pages = Array(this.accounts.totalPages)
          .fill(0)
          .map((x, i) => i);
           this.cdr.detectChanges();
      },
      
      error: (err) => {
        console.error('Error loading accounts:', err);
      }
    });
  }


   gotToPage(page: number) {
    this.page = page;
    this.loadAccounts();
  }

  goToFirstPage() {
    this.page = 0;
    this.loadAccounts();
  }

  goToPreviousPage() {
    this.page --;
    this.loadAccounts();
  }

  goToLastPage() {
    this.page = this.accounts.totalPages as number - 1;
    this.loadAccounts();
  }

  goToNextPage() {
    this.page++;
    this.loadAccounts();
  }

  get isLastPage() {
    return this.page === this.accounts.totalPages as number - 1;
  }

  deleteAccount(accountId: string): void {
  }

}
