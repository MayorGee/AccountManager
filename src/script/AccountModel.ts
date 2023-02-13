import { Account } from '../abstracts/common';
import FetchClient from './FetchClient';

export  default class AccountModel {
    public static async getAccounts(): Promise<Account[]> {
        const accounts = await FetchClient.get('http://localhost:3333/accounts') as unknown as Account[];

        return accounts;
    }

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
        return accounts.filter(account => {
            const { firstName, lastName, tag } = account;

            return firstName.includes(filter) || lastName.includes(filter);
        });
    }

    public static filterAccountsByTag(accounts: Account[], tagFilter: string): Account[] {
        return accounts.filter(account => {
            return account.tag.includes(tagFilter);
        });
    }

    public static deleteAccount(accounts: Account[], accountId: string): Account[] {
        return accounts.filter(account => account.id !== +accountId);
    }

    public static addAccount(accounts: Account[], newAccount: Account) {
        accounts.push(newAccount);
    }

    public static setFormValues(formValues: Account, account: Account) {
        const { id, firstName, lastName, avatar, tag } = account;
     
        formValues.id = id;
        formValues.firstName = firstName;
        formValues.lastName = lastName;
        formValues.avatar = avatar;
        formValues.tag = tag;
    }

    public static createNewAccount(formValues: Account): Account {
        const id = Date.now();
        const { firstName, lastName, avatar, tag } = formValues;

        return { id, firstName, lastName, avatar, tag };
    }
}