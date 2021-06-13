import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactFailure,
  delContactRequest,
  delContactSuccess,
  delContactFailure,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsFailure,
} from './contacts-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
// http://localhost:3000

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get(
      'https://connections-api.herokuapp.com/contacts',
    );
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsFailure(error.message));
  }
};

const addContact = values => dispatch => {
  // console.log(values);
  const contact = {
    name: values.name,
    number: values.number,
  };
  dispatch(addContactRequest());
  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(err => dispatch(addContactFailure(err.message)));
};

const deleteContact = contactId => dispatch => {
  dispatch(delContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(delContactSuccess(contactId)))
    .catch(err => dispatch(delContactFailure(err.message)));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchContacts, addContact, deleteContact };
