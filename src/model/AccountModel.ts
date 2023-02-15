import { Account } from '../abstracts/common';

export  default class AccountModel {
    public static getAccountFullname(account: Account): String {
        return account.firstName + ' ' + account.lastName;
    }

    public static findAccount(accounts: Account[], accountId: number) {
        return accounts.find(account => account.id === accountId);         
    }

    public static updateAccount(accounts: Account[], edittedAccount: Account) {
        const targetAccount = AccountModel.findAccount(accounts, edittedAccount.id) as Account;
        Object.assign(targetAccount, edittedAccount);
    }

    public static filterAccountsByName(accounts: Account[], filter: string): Account[] {
        return accounts.filter(({ firstName, lastName }) => {
            return firstName.includes(filter) || lastName.includes(filter);
        });
    }

    public static filterAccountsByTag(accounts: Account[], tagFilter: string): Account[] {
        return accounts.filter(({tag}) => {
            return tag.includes(tagFilter);
        });
    }

    public static deleteAccount(accounts: Account[], accountId: string): Account[] {
        return accounts.filter(account => account.id !== +accountId);
    }

    public static addAccount(accounts: Account[], newAccount: Account) {
        accounts.push(newAccount);
    }

    public static addIdToAccount({ firstName, lastName, avatar, tag } : Account): Account {
        const id = Date.now();
        return { id, firstName, lastName, avatar, tag };
    }

    public static resetAccountFormData(accountFormData: any) {
        for (const property of Object.getOwnPropertyNames(accountFormData)) {
            accountFormData[property] = '';
        }
    }
}