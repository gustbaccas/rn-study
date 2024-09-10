import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TextInput, Switch, TouchableOpacity } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';


export default function App() {
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [selectedValue, setSelectedValue] = useState('')
  const [valor, setValor] = useState(0)
  const [opcao, setOpcao] = useState(false)


  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };


  return (
    <View style={styles.container}>

      <View style={styles.box}>

        <View style={styles.ImageContainer}>

          <Image
            source={require('./src/img/banco-transparente.png')}
            style={styles.Image}
          />

        </View>

      </View>

      <TextInput
        style={styles.input}
        onChangeText={setNome}
        value={nome}
        placeholder='Digite seu nome'
        placeholderTextColor='black'

      />
      <View style={styles.line}>

      </View>

      <TextInput
        style={styles.input}
        onChangeText={setIdade}
        value={idade}
        placeholder='Digite sua idade'
        placeholderTextColor='black'

      />
      <View style={styles.line}>
      </View>

      <View style={styles.container2}>
        <Text style={styles.label}>Sexo:</Text>
        <Picker
          selectedValue={selectedValue}
          style={styles.picker}
          onValueChange={(ItemValue) => setSelectedValue(ItemValue)}
        >
          <Picker.Item label="Masculino" value="masculino" />
          <Picker.Item label="Feminino" value="feminino" />
        </Picker>
      </View>
      <View style={styles.container3}>

        <Text style={styles.valor}> Valor:{formatCurrency(valor)} </Text>
        <Slider
          minimumValue={0}
          maximumValue={10000}
          value={valor}
          onValueChange={(valorSelecionado) => setValor(valorSelecionado)}
        />
      </View>
      <View style={styles.container4}>

        <Text style={styles.estudante}>Estudante:</Text>
        <Switch
          value={opcao}
          onValueChange={(opcaoSelecionada) => setOpcao(opcaoSelecionada)}
        />
      </View>

      <View style={styles.container5}>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>

    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    backgroundColor: '#ffff00',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ImageContainer: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Image: {
    width: 80,
    height: 80,
    resizeMode: 'contain'
  },
  input: {
    fontSize: 20,
    fontWeight: '500',
    height: 70,
    marginHorizontal: '10%',
    width: '80%'
  },
  line: {
    height: 1,
    width: '80%',
    backgroundColor: 'red',
    marginHorizontal: '10%',
    marginTop: -15
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: '10%'
  },
  label: {
    fontSize: 20,
    fontWeight: '500',
    marginRight: 10,
  },
  picker: {
    height: 50,
    width: 290,
    fontWeight: '500'
  },
  container3: {
    marginHorizontal: '10%',
    width: '80%'
  },
  valor: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  container4: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: '10%'
  },
  estudante: {
    fontSize: 20,
    fontWeight: '500'
  },
  button1: {
    backgroundColor: 'yellow',
    width: '90%',
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  container5: {
    marginHorizontal: '15%',
    alignItems: 'center',
    marginTop: 13
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '500'
  }
})


