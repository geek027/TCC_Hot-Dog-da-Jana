import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Button } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import logo from './assets/Logo1.png';


// Passagem de Parametros
const Stack = createNativeStackNavigator();

// Janela Inicial 0

const JanelaInicial0 = ({ navigation }) => {
  return (
    <View style={styles.ViewInicial}>
      <Image source={logo} style={styles.ImageLogo}></Image>
      <Text style={styles.TextIniial}>Hot Dog da Jana</Text>
      <TouchableOpacity style={styles.BotaoIncial} onPress={() => navigation.navigate("Nova")}>
        <Text sytle={styles.TextBotaoInicial}>Clique aqui!</Text>
      </TouchableOpacity>
    </View>
  );
};

// Nova Janela 1
// Passagem de Parametros
const NovaJanela1 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Nova Janela</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Inicial")}>
        <Text>JANELA ANTERIOR</Text>
      </TouchableOpacity>
    </View>
  );
};

<Stack.Screen name="Nova" component={NovaJanela1} />;

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={JanelaInicial0} />
        <Stack.Screen name="Nova" component={NovaJanela1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


// Criar os Estilos "Styles" e colocar nos componentes
const styles = StyleSheet.create({

  ImageLogo: {
    width: 300,
    height: 300,
    padding: 8,
  },

  BotaoIncial: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 4,
    backgroundColor: "#edc045",
  },

  TextBotaoInicial: {
    fontFamily: "Times New Romam",
    fontSize: 20,
  },

  ViewInicial: {
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center", 
    backgroundColor: '#d1740a',
  },

  TextIniial:{
    fontWeight: 'bold',
    fontFamily: "Times New Romam",
    fontSize: 35,
  },

  MenuInicial: {
    backgroundColor: '#d1740a',
  }

});