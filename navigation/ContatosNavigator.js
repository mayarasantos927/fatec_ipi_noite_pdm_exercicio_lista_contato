import { createStackNavigator } from 'react-navigation-stack';
import ListContactView from '../views/ListContactView';
import NewContactView from '../views/NewContactView';
import { createAppContainer } from 'react-navigation';


const ContatosNavigator = createStackNavigator({
    ListaDeContatos: ListContactView,
    NovoContato: NewContactView
});

export default createAppContainer(ContatosNavigator);
