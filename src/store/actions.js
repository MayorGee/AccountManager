import AccountApi from '../model/AccountApi';
import AccountModel from '../model/AccountModel';

const actions = {
    async loadAccounts({ commit }) {
        const accounts = await AccountApi.getAccounts();

        commit('setAccounts', accounts);
    },

    async addAccount({ state }, submittedAccount) {
        const newAccount = AccountModel.addIdToAccount(submittedAccount);
        AccountModel.resetAccount(submittedAccount);
        AccountModel.addAccount(state.accounts, newAccount);
    },

    async editAccount({ commit }, accountToEdit) {
        commit('showEditForm');
        commit('setEditFormData', accountToEdit);
    },

    async deleteAccount({ state }, accountToDelete) {
        state.accounts = AccountModel.deleteAccount(state.accounts, accountToDelete.id);
    },

    async hideEditAccountForm({ commit }) {
        commit('hideEditAccountForm')
    }

}

export default actions;