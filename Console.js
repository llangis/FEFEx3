"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SavingAccount_1 = require("./SavingAccount");
var CheckingAccount_1 = require("./CheckingAccount");
var savingAccount = new SavingAccount_1.SavingAccount(1000);
var checkingAccount = new CheckingAccount_1.ChequingAccount(100);
console.log(savingAccount.printBalance());
console.log(checkingAccount.printBalance());
