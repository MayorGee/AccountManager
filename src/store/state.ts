import { State } from './types';

const state: State = {
    accounts: [],
    accountsNameFilter: '',
    accountsTagFilter: '',
    isEditFormHidden: true,
    editAccountFormData: {
        id: '',
        firstName: '',
        lastName: '',
        avatar: '',
        tag: ''
    },
}

export default state;