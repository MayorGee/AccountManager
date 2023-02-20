import AccountApi from '../model/AccountApi';
import AccountModel from '../model/AccountModel';

const actions = {
    async loadAccounts({ commit }) {
        const accounts = await AccountApi.getAccounts();

        commit('setAccounts', accounts);
    },

    async addAccount({ commit }, submittedAccount) {
        const newAccount = AccountModel.addIdToAccount(submittedAccount);

        commit('addAccount', newAccount);
    },

    async editAccount({ commit }, accountToEdit) {
        commit('toggleEditForm');
        commit('setEditFormData', accountToEdit);
    },

    async deleteAccount({ commit }, accountToDelete) {
        const accounts = AccountModel.deleteAccount(state.accounts, accountToDelete.id);
        
        commit('setAccount', accounts)
    },

    async toggleEditAccountForm({ commit }) {
        commit('toggleEditForm')
    }
}

export default actions;