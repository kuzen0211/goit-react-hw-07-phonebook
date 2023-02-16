import { Title } from './App.styled';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';

export const App = () => {
  return (
    <>
      <Title>Phonebook</Title>
      <Form />
      <Title>Contacts</Title>
      <Contacts />
    </>
  );
};
