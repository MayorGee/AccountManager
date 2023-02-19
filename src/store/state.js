const state = {
    accounts: [],

    isEditFormHidden: {
        type: Boolean,
        default: true,
    },

    editAccountFormData: {
        type: Object,
        default: {},
    },
}

export default state;