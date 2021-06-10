import { connect } from 'react-redux';
import Stat from './Stat';
import { getContactsCount } from '../../redux/phonebook/contacts-selectors';

const mapStateToProps = state => ({
  total: getContactsCount(state),
});

export default connect(mapStateToProps)(Stat);
