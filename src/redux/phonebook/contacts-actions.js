import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest',
);
export const fetchContactsSuccess = createAction(
  'contacts/fetchContactsSuccess',
);
export const fetchContactsFailure = createAction('contacts/fetchContactsError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactFailure = createAction('contacts/addContactError');

export const delContactRequest = createAction('contacts/delContactRequest');
export const delContactSuccess = createAction('contacts/delContactSuccess');
export const delContactFailure = createAction('contacts/delContactError');

export const changeFilter = createAction('contacts/changeFilter');
