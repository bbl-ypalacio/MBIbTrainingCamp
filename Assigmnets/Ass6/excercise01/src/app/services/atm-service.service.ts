import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { Subject }    from 'rxjs/Subject';
 
import { AtmResponse ,AtmResponseOperation,AtmResponseTransactions } from '../models/atm.interface';

@Injectable()
export class AtmServiceService {
   
    public onUpdatedTransactions$ = new Subject<void>();
    public onUpdateAccountNumber$ = new Subject<void>();

    private END_POINT = "http://localhost:3000/atm";
    private accountNumber : string;
    public accountValid   : boolean;
 
  constructor( public http: HttpClient) { }

  setAccountNumber(arg:string){
      this.accountExists(arg).then ( resp => {
          if (resp.status == 0 ){
                this.accountNumber = arg;
                this.accountValid = true;
                this.onUpdateAccountNumber$.next();
          }
          else {
               this.accountValid = false;
          }
      });
 
  }
  
  getAccountNumber(){
      return this.accountNumber;
  }


  isAlive () : Observable<AtmResponse > {
     return  this.http.get<AtmResponse>(this.END_POINT);
  }

   accountExists(acct : string ) : Promise<AtmResponse>{

    return new Promise ( (success,reject) =>{

        let FINDACCOUNT  = '/find/' + acct;
        this.http.get<AtmResponse>(this.END_POINT + FINDACCOUNT )
           .subscribe (
               resp => { success(resp); },
               err  => { reject(err); }
           );
       });
    }

   getCurrentBalance(acct : string) : Observable<AtmResponseOperation> {
       let BALANCE = `/${acct}`;
       return this.http.get<AtmResponseOperation>(this.END_POINT + BALANCE );
   }

   withDraw(acct : string, amount:number) : Promise<AtmResponseOperation> {
       
       let WITHDRAW = `/withdraw/${acct}/amount/${amount}`;
       
       return new Promise ( (success,reject) => {
                this.http.get<AtmResponseOperation>(this.END_POINT + WITHDRAW ).subscribe (
                      resp => { success(resp) },
                      err =>  { reject(err) },
                      () =>   { //on completed
                                    console.log('onUpdatedTransactions.next()');
                                    this.onUpdatedTransactions$.next(); 
                                }
                );
       });   
    }

  deposit(acct : string, amount:number) : Promise<AtmResponseOperation> {

      let DEPOSIT  = `/deposit/${acct}/amount/${amount}`;
      
      return new Promise ( (success,reject)=> {
           this.http.get<AtmResponseOperation>(this.END_POINT + DEPOSIT).subscribe(
               resp => { success(resp) },
               err =>  {  reject(err) },
               () =>   {    console.log('onUpdatedTransactions.next()');
                             this.onUpdatedTransactions$.next();
                       }           
           );
      });
  }

  getLastOperations(acct:string) : Observable<AtmResponseTransactions> {

     let TRANSACTIONS = `/transactions/${acct}`;
     return this.http.get<AtmResponseTransactions>(this.END_POINT + TRANSACTIONS);
  }

}