import { BankAccount } from "./BankAccount";
import { IBankAccount } from "./IBankAccount";

export class SavingAccount extends BankAccount implements IBankAccount {
    private numberOfDeposits : number = 0;
    private readonly INTEREST: number = 0.05;

 

/**
 * Construct a saving account providing the initial balance
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
       if(amount > this.accountBalance) {
        throw new Error('Insufficient funds')
       } else {
        this.accountBalance-= amount;
       }
    }

    /**
     * Every 5 deposits we incur interest at the define rate
     * @param amount the amount to deposit
     */
    depositAmount(amount: number): void {
        this.numberOfDeposits++;

        if(this.numberOfDeposits % 5 === 0) {
            let tempNewBalance:number = this.accountBalance + amount;
            this.accountBalance = tempNewBalance * this.INTEREST;
        } else {
            this.accountBalance += amount;
        }
    }

  /**
   * Read the current account of balance
   * @returns the balance of the account
   */
    getBalance(): number {
        return this.accountBalance;
    }

    /**
     * Prints the account balance for savings
     * @returns the printed balance forrmatted
     */
    printBalance(): string {
        let formattedValue=new Intl.NumberFormat('en-CA', {
            style:'currency',
            currency:'EUR'
        }).format(this.accountBalance);
        return `Your saving account balance is ${formattedValue}`;
    }

}