import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const ContactItem = (props) => {
  return (
    <TouchableOpacity onLongPress={() => props.onDelete(props.keyDelete)}>
      <View style={styles.contactView}>
          <Text style={{ textAlign: 'center' }}>{props.name} - {props.number}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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

  export default ContactItem;