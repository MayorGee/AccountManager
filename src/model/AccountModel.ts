import { Account } from "../abstracts/Interface";

export  default class AccountModel {
    public static getAccountFullname(account: Account): string {
        return account.firstName + ' ' + account.lastName;
    }

    public static filterAccountsByName(accounts: Account[], namefilter: string): Account[] {
        return accounts.filter(({ firstName, lastName }) => {
            return firstName.includes(namefilter) || lastName.includes(namefilter);
        });
    }

    public static filterAccountsByTag(accounts: Account[], tagFilter: string): Account[] {
        return accounts.filter(account => {
            return account.tag.includes(tagFilter);
        });
    }

    public static deleteAccount(accounts: Account[], accountId: string): Account[] {
        return accounts.filter(account => account.id !== accountId);
    }

    public static getAccountIndex(accounts: Account[], accountToFind: Account): number {
        const accountIndex = accounts.findIndex(account => account.id === accountToFind.id);

        return accountIndex;
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