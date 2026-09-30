import { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { colores, estilosComunes } from '../theme';

export default function TablaScreen() {
  const [valor, setValor] = useState('');
  const [numero, setNumero] = useState(null);
  const [error, setError] = useState('');

  const generar = () => {
    const n = Number(valor.trim());
    if (valor.trim() === '' || isNaN(n)) {
      setError('Ingresa un número válido.');
      setNumero(null);
      return;
    }
    setError('');
    setNumero(n);
  };

  const filas = numero === null ? [] : Array.from({ length: 13 }, (_, i) => i + 1);

  return (
    <FlatList
      style={styles.contenedor}
      contentContainerStyle={styles.contenido}
      data={filas}
      keyExtractor={(item) => String(item)}
      ListHeaderComponent={
        <View style={styles.cabecera}>
          <Text style={estilosComunes.titulo}>Tabla de Multiplicar</Text>
          <TextInput
            style={estilosComunes.input}
            placeholder="Ej: 7"
            keyboardType="numeric"
            value={valor}
            onChangeText={setValor}
          />
          <TouchableOpacity style={estilosComunes.boton} onPress={generar}>
            <Text style={estilosComunes.textoBoton}>Generar tabla</Text>
          </TouchableOpacity>
          {error !== '' && <Text style={estilosComunes.error}>{error}</Text>}
        </View>
      }
      renderItem={({ item }) => (
        <View style={styles.fila}>
          <Text style={styles.texto}>
            {numero} × {item} = {numero * item}
          </Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: colores.fondo,
  },
  contenido: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 40,
  },
  cabecera: {
    alignItems: 'center',
    marginBottom: 12,
  },
  fila: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    elevation: 1,
  },
  texto: {
    fontSize: 16,
    textAlign: 'center',
  },
});
