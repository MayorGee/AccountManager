import { Account } from '../abstracts/Interface';
import { State } from './types';

const mutations = {
    setAccounts(state: State, accounts: Account[]) {
        state.accounts = accounts;
    },

    toggleEditForm(state: State) {
        state.isEditFormHidden = !state.isEditFormHidden;
    },

    setEditFormData(state: State, accountToEdit: Account) {
        state.editAccountFormData = accountToEdit;
    },

    addAccount(state: State, newAccount: Account) {
        state.accounts.push(newAccount);
    },

    setAccountsNameFilter(state: State, filterValue: string) {
        state.accountsNameFilter = filterValue;
    },

    setAccountsTagFilter(state: State, filterValue: string) {
        state.accountsTagFilter = filterValue;
    }
}

export default mutations;