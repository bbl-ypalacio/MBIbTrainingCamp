import { Pipe, PipeTransform } from '@angular/core';
import { AtmTransaction } from '../models/atm.interface';

@Pipe({
  name: 'depositOnly'
})
export class DepositOnlyPipe implements PipeTransform {

  transform(value: Array<AtmTransaction>, args?: any): any {
    return value.filter(item => item.transactionType == args)
  }

}
