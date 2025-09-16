import { BankAccount } from "./BankAccount";
import { IBankAccount } from "./IBankAccount";

export class ChequingAccount extends BankAccount implements IBankAccount {
    private numberOfWithdrawals : number = 0;
    private readonly TRANSFEE:number = 10;

/**
 * Construct a checking account providing the initial balance
 * @param initialBalance the initial balance amount
 */
constructor(initialBalance:number) {
    super(initialBalance);
}



/**
 * Withdrawal funds from savings. Cannot overdraw the account
 * @param amount the amount of the withdrawal
 */
    withdrawalAmount(amount: number): void {
        this.numberOfWithdrawals++;
        let amountOfWithdrawal: number = amount;

       // We owe a transaction fee every fifth withdrawal
        if(this.numberOfWithdrawals % 5 === 0) {
            amountOfWithdrawal += this.TRANSFEE;
        }

        if(this.accountBalance < amountOfWithdrawal) {
            this.numberOfWithdrawals--;
            throw new Error("Insuficient funds");
        }
    }

    /**
     * Every 5 deposits we incur interest at the define rate
     * @param amount the amount to deposit
     */
    depositAmount(amount: number): void {
     this.accountBalance += amount;
    }
    getBalance(): number {
        return this.accountBalance;
    }
    printBalance(): string {
          let formatedBalance=new Intl.NumberFormat('en-CA', {
            style:'currency',
            currency:'EUR'
        }).format(this.accountBalance);
        return `Your checking account balance is ${formatedBalance}`;
    }

}