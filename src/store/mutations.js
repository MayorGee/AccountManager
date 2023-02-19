const mutations = {
    setAccounts(state, accounts) {
        state.accounts = accounts;
    },

    showEditForm(state) {
        state.isEditFormHidden = false;
    },

    hideEditAccountForm(state) {
        state.isEditFormHidden = true;
    },

    setEditFormData(state, accountToEdit) {
        state.editAccountFormData = accountToEdit;
    }
}

export default mutations;