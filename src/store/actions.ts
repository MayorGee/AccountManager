import { ActionTree } from 'vuex';
import { Account } from '../abstracts/Interface';
import AccountApi from '../model/AccountApi';
import AccountModel from '../model/AccountModel';
import { State } from './types';

const actions: ActionTree<State, any> = {
    async loadAccounts({ commit }) {
        const accounts = await AccountApi.getAccounts();
        
        commit('setAccounts', accounts);
    },

    async addAccount({ commit }, submittedAccount: Account) {
        const newAccount = AccountModel.addIdToAccount(submittedAccount);

        commit('addAccount', newAccount);
    },

    async editAccount({ commit }, accountToEdit: Account) {
        commit('toggleEditForm');
        commit('setEditFormData', accountToEdit);
    },

    async deleteAccount({ commit, state }, accountToDelete: Account) {
        const accounts = AccountModel.deleteAccount(state.accounts, accountToDelete.id);
        
        commit('setAccounts', accounts)
    },

    async toggleEditAccountForm({ commit }) {
        commit('toggleEditForm')
    }
}

export default actions;