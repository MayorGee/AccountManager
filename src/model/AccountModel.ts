import { Account } from '../abstracts/common';

export  default class AccountModel {
    public static getAccountFullname(account: Account): String {
        return account.firstName + ' ' + account.lastName;
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
        return accounts.filter(account => account.id !== accountId);
    }

    public static addAccount(accounts: Account[], newAccount: Account) {
        accounts.push(newAccount);
    }

    public static addIdToAccount({ firstName, lastName, avatar, tag } : Account): Account {
        const id = Date.now().toString();
        return { id, firstName, lastName, avatar, tag };
    }

    public static resetAccount(account: Account) {
        for (let property in account) {
            account[property as keyof Account] = '';
        }
    }

    public static getFormData(form: HTMLFormElement): Account {
        //@ts-ignore
        const formData = Object.fromEntries(new FormData(form)) as unknown as Account;
        
        return formData;
    }
}