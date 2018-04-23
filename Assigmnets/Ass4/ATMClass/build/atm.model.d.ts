export declare class accountModel {
    accountNumber: string;
    currentBalance: number;
}
export declare class accountList {
    accounts: Array<accountModel>;
}
export declare class TransactionModel {
    accountNumber: string;
    dateOfTransaction: Date;
    transactionType: string;
    amount: number;
}
export declare class TransactionList {
    transactions: Array<TransactionModel>;
}
