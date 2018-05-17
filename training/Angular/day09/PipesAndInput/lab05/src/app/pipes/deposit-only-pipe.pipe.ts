import { Pipe, PipeTransform } from '@angular/core';
import { TransactionListComponent } from '../components/transaction-list/transaction-list.component';

@Pipe({
  name: 'depositOnlyPipe'
})
export class DepositOnlyPipePipe implements PipeTransform {

  transform(transactions: TransactionListComponent[]) {
    return transactions.filter(transactions => transactions.type == 'Deposit');
  }




}
