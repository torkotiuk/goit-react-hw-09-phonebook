import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Section from '../components/share/Section';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import Modal from '../components/Modal';
import IconButton from '../components/IconButton';
import { ReactComponent as AddIcon } from '../icons/add.svg';
import oper from '../redux/phonebook/contacts-operations';
import {
  getLoading,
  getContactsCount,
} from '../redux/phonebook/contacts-selectors';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './ContactsPage.module.scss';

const ContactsPage = ({ fetchContacts, items, isLoadingContacts }) => {
  const [showModal, setModal] = useState(false);

  useEffect(() => fetchContacts(), [fetchContacts]);

  const toggleModal = () => {
    setModal(!showModal);
  };

  return (
    <Section>
      <IconButton onClick={toggleModal} arial-label="Add contact">
        <h2 className={styles.Title}>Create contact</h2>
        <AddIcon width="40" height="40" fill="green" />
      </IconButton>
      {showModal && (
        <Modal onClose={toggleModal}>
          <h2 className="title_form">Create new contact</h2>
          <ContactForm onCloseModal={toggleModal} />
        </Modal>
      )}
      {isLoadingContacts && <CircularProgress />}
      {/* {itemsLength > 0 ? ( */}
      {items > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p className={styles.Title}>
          You don't have any contacts yet, please add some by clicking
          <strong> Create contact</strong> button
        </p>
      )}
    </Section>
  );
};

const mapStateToProps = state => ({
  isLoadingContacts: getLoading(state),
  items: getContactsCount(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(oper.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
