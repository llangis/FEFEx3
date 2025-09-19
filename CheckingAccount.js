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
exports.ChequingAccount = void 0;
var BankAccount_1 = require("./BankAccount");
var ChequingAccount = /** @class */ (function (_super) {
    __extends(ChequingAccount, _super);
    /**
     * Construct a checking account providing the initial balance
     * @param initialBalance the initial balance amount
     */
    function ChequingAccount(initialBalance) {
        var _this = _super.call(this, initialBalance) || this;
        _this.numberOfWithdrawals = 0;
        _this.TRANSFEE = 10;
        return _this;
    }
    /**
     * Every 5th withdrawal we incur a transaction fee. We cannot overdraw the account
     * @param amount the amount of the withdrawal
     */
    ChequingAccount.prototype.withdrawalAmount = function (amount) {
        this.numberOfWithdrawals++;
        var amountOfWithdrawal = amount;
        // We owe a transaction fee every fifth withdrawal
        if (this.numberOfWithdrawals % 5 === 0) {
            amountOfWithdrawal += this.TRANSFEE;
        }
        if (this.accountBalance < amountOfWithdrawal) {
            this.numberOfWithdrawals--;
            throw new Error("Insuficient funds");
        }
    };
    /**
     * Every 5 deposits we incur interest at the define rate
     * @param amount the amount to deposit
     */
    ChequingAccount.prototype.depositAmount = function (amount) {
        this.accountBalance += amount;
    };
    ChequingAccount.prototype.getBalance = function () {
        return this.accountBalance;
    };
    ChequingAccount.prototype.printBalance = function () {
        var formatedBalance = new Intl.NumberFormat('en-CA', {
            style: 'currency',
            currency: 'EUR'
        }).format(this.accountBalance);
        return "Your checking account balance is ".concat(formatedBalance);
    };
    return ChequingAccount;
}(BankAccount_1.BankAccount));
exports.ChequingAccount = ChequingAccount;
