"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Transaction_1 = __importDefault(require("../models/Transaction"));
var TransactionsRepository = /** @class */ (function () {
    function TransactionsRepository() {
        this.transactions = [];
    }
    TransactionsRepository.prototype.all = function () {
        // TODO
        return this.transactions;
    };
    TransactionsRepository.prototype.getBalance = function () {
        // TODO
        var balance = this.transactions.reduce(function (result, transaction) {
            if (transaction.type === 'income') {
                result.income += transaction.value;
            }
            if (transaction.type === 'outcome') {
                result.outcome += transaction.value;
            }
            result.total = result.income - result.outcome;
            return result;
        }, {
            income: 0,
            outcome: 0,
            total: 0,
        });
        return balance;
    };
    TransactionsRepository.prototype.create = function (_a) {
        var title = _a.title, value = _a.value, type = _a.type;
        // TODO
        var transaction = new Transaction_1.default({ title: title, value: value, type: type });
        this.transactions.push(transaction);
        return transaction;
    };
    return TransactionsRepository;
}());
exports.default = TransactionsRepository;
