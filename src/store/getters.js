import AccountModel from '../model/AccountModel';

const getters = {
    accounts(state) {
        if (state.accountsNameFilter) {
            return AccountModel.filterAccountsByName(state.accounts, state.accountsNameFilter);
        }

        if (state.accountsTagFilter) {
            return AccountModel.filterAccountsByTag(state.accounts, state.accountsTagFilter);
        }

        return state.accounts;
    },

    editAccountFormData(state) {
        return state.editAccountFormData;
    },

    accountsNameFilter(state) {
        return state.accountsNameFilter;
    },

    isEditFormHidden(state) {
        return state.isEditFormHidden;
    },

    accountsTagFilter(state) {
        return state.accountsTagFilter;
    }
}

export default getters;