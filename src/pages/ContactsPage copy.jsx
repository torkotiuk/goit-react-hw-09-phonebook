import React, { Component } from 'react';
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
  getVisibleContacts,
} from '../redux/phonebook/contacts-selectors';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './ContactsPage.module.scss';

class ContactsPage extends Component {
  state = {
    showModal: false,
  };

  componentDidMount() {
    this.props.fetchContacts();
  }

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  render() {
    const { length } = this.props.items;
    const itemsLength = length;
    return (
      <Section>
        <IconButton onClick={this.toggleModal} arial-label="Add contact">
          <h2 className={styles.Title}>Create contact</h2>
          <AddIcon width="40" height="40" fill="green" />
        </IconButton>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <h2 className="title_form">Create new contact</h2>
            <ContactForm onCloseModal={this.toggleModal} />
          </Modal>
        )}
        {this.props.isLoadingContacts && <CircularProgress />}
        {itemsLength ? (
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
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: getLoading(state),
  items: getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(oper.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
