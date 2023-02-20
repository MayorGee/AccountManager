import AccountModel from '../model/AccountModel';

const getters = {
    getAccounts(state) {
        if (state.accountsNameFilter) {
            return AccountModel.filterAccountsByName(state.accounts, state.accountsNameFilter);
        }

        if (state.accountsTagFilter) {
            return AccountModel.filterAccountsByTag(state.accounts, state.accountsTagFilter);
        }

        return state.accounts;
    },

    getEditAccountFormData(state) {
        return state.editAccountFormData;
    },

    getAccountsNameFilter(state) {
        return state.accountsNameFilter;
    },

    isEditFormHidden(state) {
        return state.isEditFormHidden;
    },

    getAccountsTagFilter(state) {
        return state.accountsTagFilter;
    }
}

export default getters;