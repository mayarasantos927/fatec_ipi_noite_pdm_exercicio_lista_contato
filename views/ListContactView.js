import React from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import { HeaderButtons, Item, HeaderButton } from 'react-navigation-header-buttons';
import ButtonHeader from '../components/ButtonHeader';

const ListContactView = () => {
  return (
      <View>
         <Text style={styles.contactListText}>Agenda de Contatos</Text>
      </View>
  );
}

ListContactView.navigationOptions = dadosNav => {
    return {
        headerTitle: 'Adicionar/Listar contatos',
        headerRight:
            <HeaderButtons HeaderButtonComponent={ButtonHeader}>
                <Item
                    title="Adicionar"
                    iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                    onPress={() => { dadosNav.navigation.navigate("NovoContato") }} 
                />
            </HeaderButtons>
    };
}

const styles = StyleSheet.create({
    contactListText: {
        textAlign: 'center',
        fontSize: 22,
        color: '#FF5722',
        fontWeight: 'bold',
        marginTop: 30
    }
});

export default ListContactView;