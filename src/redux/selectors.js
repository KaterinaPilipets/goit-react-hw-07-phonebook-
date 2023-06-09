export const selectFilter = state => state.filter.filter;
export const selectContacts = state => state.contacts.contacts;
export const selectError = state => state.contacts.error;
export const selectLoader = state => state.contacts.isLoading;
export const selectFilteredContacts = state => {
  const contacts = selectContacts(state);
  const filter = selectFilter(state).toLowerCase().trim();

  return contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(filter)
  );
};
