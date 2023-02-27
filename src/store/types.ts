import { Account } from '../abstracts/common';

export interface State {
    accounts: Account[],
    accountsNameFilter: string,
    accountsTagFilter: string,
    isEditFormHidden: Boolean,
    editAccountFormData: Account,
}