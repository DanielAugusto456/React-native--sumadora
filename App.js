import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import InicioScreen from './src/screens/InicioScreen';
import SumadoraScreen from './src/screens/SumadoraScreen';
import LetrasScreen from './src/screens/LetrasScreen';
import TablaScreen from './src/screens/TablaScreen';
import ExperienciaScreen from './src/screens/ExperienciaScreen';
import { colores } from './src/theme';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: colores.primario },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            tabBarActiveTintColor: colores.primario,
          }}
        >
          <Tab.Screen
            name="Inicio"
            component={InicioScreen}
            options={{ title: 'Página Inicial' }}
          />
          <Tab.Screen
            name="Sumadora"
            component={SumadoraScreen}
            options={{ title: 'Sumadora' }}
          />
          <Tab.Screen
            name="Letras"
            component={LetrasScreen}
            options={{ title: 'Número a Letras' }}
          />
          <Tab.Screen
            name="Tabla"
            component={TablaScreen}
            options={{ title: 'Tabla de Multiplicar' }}
          />
          <Tab.Screen
            name="Experiencia"
            component={ExperienciaScreen}
            options={{ title: 'Experiencia' }}
          />
        </Tab.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
