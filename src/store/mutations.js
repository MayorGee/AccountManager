const mutations = {
    setAccounts(state, accounts) {
        state.accounts = accounts;
    },

    toggleEditForm(state) {
        state.isEditFormHidden = !state.isEditFormHidden;
    },

    setEditFormData(state, accountToEdit) {
        state.editAccountFormData = accountToEdit;
    },

    addAccount(state, newAccount) {
        state.accounts.push(newAccount);
    },

    setAccountNameFilter(state, filterValue) {
        state.accountsNameFilter = filterValue;
    },

    setAccountTagFilter(state, filterValue) {
        state.accountsTagFilter = filterValue;
    }
}

export default mutations;