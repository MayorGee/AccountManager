import { Account } from '../abstracts/common';
import FetchClient from './FetchClient';

export  default class AccountApi {
    public static async getAccounts(): Promise<Account[]> {
        const accounts = await FetchClient.get('http://localhost:3333/accounts') as unknown as Account[];

        return accounts;
    }
}