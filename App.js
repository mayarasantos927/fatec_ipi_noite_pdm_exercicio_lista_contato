import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  let [ name, setName ] = useState('');
  let [ number, setNumber ] = useState('');
  let [ contacts, setContacts ] = useState([]);
  let [countContacts, setCountContacts] = useState(0);

  // get name
  const getName = (name) => {
    setName(name);
  }

  // get number 
  const getNumber = (number) =>{
    setNumber(number);
  }

  // adc contact 
  const addContact = () => {
    let contact = {name: name, number: number};
    
    if (name == '' || number == '') return alert('Preencha todos campos!');
    
    setContacts( contacts => {
     setCountContacts(countContacts + 1);
     return [ {key: countContacts.toString(), value: contact }, ...contacts ]
    });

    setName('');
    setNumber('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.contactListText}>Agenda de Contatos</Text>
      {/* inserindo opção para adicionar usuário. */}
      <View style={styles.insertContact}> 
        <View style={styles.sectionTextInput}>
          <Text style={{ alignSelf: 'center' }}>Insira o nome:</Text>
          <TextInput style={styles.nameTextInput} onChangeText={getName} value={name} placeholder="Exemplo: Maria" />
        </View>
        <View style={styles.sectionTextInput}>
          <Text style={{ alignSelf: 'center' }}>Insira o número:</Text>
          <TextInput maxLength={11} style={styles.numberTextInput} onChangeText={getNumber} value={number} placeholder="Exemplo: 11945790465" />
        </View>
        <Button color="#FF7043" title="Adicionar contato" onPress={addContact}/>
      </View>
      {/* listando contatos adicionados */}
      <View>
        <FlatList 
          data={contacts}
          renderItem={
            contact => 
            <View style={styles.contactView} key={contact.item.key}>
              <Text style={{ textAlign: 'center' }}>{contact.item.value.name} - {contact.item.value.number}</Text>
            </View>
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
