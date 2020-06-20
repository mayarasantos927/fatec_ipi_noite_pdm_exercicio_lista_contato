import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ContactInput from './components/ContactInput';
import ContactItem from './components/ContactItem';
0
export default function App() {

  let [ contacts, setContacts ] = useState([]);
  let [countContacts, setCountContacts] = useState(0);

  const addContact = (name, number) => {
    let contact = {name: name, number: number};
    
    if (name == '' || number == '') return alert('Preencha todos campos!');
    
    setContacts( contacts => {
     setCountContacts(countContacts + 1);
     return [ {key: countContacts.toString(), value: contact }, ...contacts ]
    });
  }

  const deleteAll = () => {
    setContacts([]);
  }

  const removeContact = (keyDeleteNow) => {
    setContacts(contacts => {
      return contacts.filter((contact) => {
        return contact.key !== keyDeleteNow
      });
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.contactListText}>Agenda de Contatos</Text>
      <ContactInput onAddContact={addContact} onDeleteAll={deleteAll} />
      <View>
        <FlatList 
          data={contacts}
          renderItem={
            contact => 
            <ContactItem 
              name={contact.item.value.name}
              number={contact.item.value.number}
              keyDelete={contact.item.key}
              onDelete={removeContact}
            />
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    justifyContent: 'center',
  },
  insertContact: {
    justifyContent: 'space-around'
  },
  numberTextInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: '#B0BEC5',
    marginLeft: 10,
    marginBottom: 10
  },
  nameTextInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: '#B0BEC5',
    marginLeft: 10
  },
  sectionTextInput: {
    flexDirection: 'row',
    padding: 10
  },
  contactListText: {
    textAlign: 'center',
    fontSize: 22,
    color: '#FF5722',
    fontWeight: 'bold'
  },
  contactView: {
    marginTop: 10,
    padding: 16,
    backgroundColor: '#FFCCBC',
    marginBottom: 8,
    borderRadius: 8,
    width: '90%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  }
});
