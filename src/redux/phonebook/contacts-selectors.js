import { createSelector } from '@reduxjs/toolkit';

// stat
export const getContactsCount = state => {
  const contacts = getAllContacts(state);
  return contacts.length;
};

//loading
export const getLoading = state => state.contacts.loading;

//filter
export const getFilter = state => state.contacts.filter;

// === visible contacts ===
const getAllContacts = state => state.contacts.items;

//with memoization (will do memoization when we wait for now arr or obj)
export const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);
