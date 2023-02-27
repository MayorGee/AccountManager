import AccountApi from '../model/AccountApi';
import AccountModel from '../model/AccountModel';
import { Account } from '../abstracts/common';

const actions = {
    async loadAccounts({ commit }: any) {
        const accounts = await AccountApi.getAccounts();
        
        commit('setAccounts', accounts);
    },

    async addAccount({ commit }: any, submittedAccount: Account) {
        const newAccount = AccountModel.addIdToAccount(submittedAccount);

        commit('addAccount', newAccount);
    },

    async editAccount({ commit }: any, accountToEdit: Account) {
        commit('toggleEditForm');
        commit('setEditFormData', accountToEdit);
    },

    async deleteAccount({ commit, state }: any, accountToDelete: Account) {
        const accounts = AccountModel.deleteAccount(state.accounts, accountToDelete.id);
        
        commit('setAccounts', accounts)
    },

    async toggleEditAccountForm({ commit }: any) {
        commit('toggleEditForm')
    }
}

export default actions;