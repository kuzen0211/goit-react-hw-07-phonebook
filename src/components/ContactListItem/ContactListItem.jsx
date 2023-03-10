import PropTypes from 'prop-types';
import { DeleteBtn, Item } from './ContactListItem.styled';
import { useDeleteContactMutation } from '../redux/contactApi';

export const ContactListItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const upperCaseWord = data => {
    return data[0].toUpperCase() + data.substring(1);
  };

  return (
    <Item key={id}>
      {upperCaseWord(name)}: {number}
      <DeleteBtn type="button" onClick={() => deleteContact(id)}>
        {isDeleting ? 'Deleting...' : 'Delete'}
      </DeleteBtn>
    </Item>
  );
};

ContactListItem.propType = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};
