import { SavingAccount } from "./SavingAccount";
import { ChequingAccount } from "./CheckingAccount";

let savingAccount : SavingAccount = new SavingAccount(1000);

let checkingAccount : ChequingAccount = new ChequingAccount(100);

console.log(savingAccount.printBalance());
console.log(checkingAccount.printBalance());

try {
savingAccount.withdrawalAmount(1100);
}catch (error) {
    if(error instanceof Error)
console.log(error.message);
}

try {
savingAccount.withdrawalAmount(100);
}catch (error) {
    if(error instanceof Error)
console.log(error.message);
}
console.log(savingAccount.printBalance());

savingAccount.depositAmount(20);
savingAccount.depositAmount(20);
savingAccount.depositAmount(20);
savingAccount.depositAmount(20);
savingAccount.depositAmount(20);//5th withdrawal i get intrest

console.log(savingAccount.printBalance());


console.log('------CHQ ACCOUNT---------');

try{
checkingAccount.withdrawalAmount(20);
checkingAccount.withdrawalAmount(20);
checkingAccount.withdrawalAmount(20);
checkingAccount.withdrawalAmount(20);
checkingAccount.withdrawalAmount(20);// transaction fee of 10$
} catch (error) {
if(error instanceof Error)
{
    console.log(error.message);
}
}
console.log(checkingAccount.printBalance());