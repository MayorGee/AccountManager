import AccountModel from '../model/AccountModel';
import { State } from './types';

const getters = {
    accounts(state: State) {
        if (state.accountsNameFilter) {
            return AccountModel.filterAccountsByName(state.accounts, state.accountsNameFilter);
        }

        if (state.accountsTagFilter) {
            return AccountModel.filterAccountsByTag(state.accounts, state.accountsTagFilter);
        }

        return state.accounts;
    },

    editAccountFormData(state: State) {
        return state.editAccountFormData;
    },

    accountsNameFilter(state: State) {
        return state.accountsNameFilter;
    },

    isEditFormHidden(state: State) {
        return state.isEditFormHidden;
    },

    accountsTagFilter(state: State) {
        return state.accountsTagFilter;
    }
}

export default getters;