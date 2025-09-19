"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavingAccount = void 0;
var BankAccount_1 = require("./BankAccount");
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    /**
     * Construct a saving account providing the initial balance
     * @param initialBalance the initial balance amount
     */
    function SavingAccount(initialBalance) {
        var _this = _super.call(this, initialBalance) || this;
        _this.numberOfDeposits = 0;
        _this.INTEREST = 0.05;
        return _this;
    }
    /**
     * Withdrawal funds from savings. Cannot overdraw the account
     * @param amount the amount of the withdrawal
     */
    SavingAccount.prototype.withdrawalAmount = function (amount) {
        if (amount > this.accountBalance) {
            throw new Error('Insufficient funds');
        }
        else {
            this.accountBalance -= amount;
        }
    };
    /**
     * Every 5 deposits we incur interest at the define rate
     * @param amount the amount to deposit
     */
    SavingAccount.prototype.depositAmount = function (amount) {
        this.numberOfDeposits++;
        if (this.numberOfDeposits % 5 === 0) {
            var tempNewBalance = this.accountBalance + amount;
            this.accountBalance = tempNewBalance * this.INTEREST;
        }
        else {
            this.accountBalance += amount;
        }
    };
    /**
     * Read the current account of balance
     * @returns the balance of the account
     */
    SavingAccount.prototype.getBalance = function () {
        return this.accountBalance;
    };
    /**
     * Prints the account balance for savings
     * @returns the printed balance forrmatted
     */
    SavingAccount.prototype.printBalance = function () {
        var formattedValue = new Intl.NumberFormat('en-CA', {
            style: 'currency',
            currency: 'EUR'
        }).format(this.accountBalance);
        return "Your saving account balance is ".concat(formattedValue);
    };
    return SavingAccount;
}(BankAccount_1.BankAccount));
exports.SavingAccount = SavingAccount;
