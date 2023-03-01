import { Account } from '../abstracts/Interface';

export interface State {
    accounts: Account[],
    accountsNameFilter: string,
    accountsTagFilter: string,
    isEditFormHidden: Boolean,
    editAccountFormData: Account,
}