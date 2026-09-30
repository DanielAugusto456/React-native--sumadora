import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { colores, estilosComunes } from '../theme';

export default function SumadoraScreen() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState('');

  const sumar = () => {
    const a = parseFloat(num1.replace(',', '.'));
    const b = parseFloat(num2.replace(',', '.'));
    if (num1.trim() === '' || num2.trim() === '' || isNaN(a) || isNaN(b)) {
      setError('Ingresa dos números válidos.');
      setResultado(null);
      return;
    }
    setError('');
    setResultado(a + b);
  };

  const limpiar = () => {
    setNum1('');
    setNum2('');
    setResultado(null);
    setError('');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={estilosComunes.contenedor}
    >
      <Text style={estilosComunes.titulo}>Sumadora</Text>

      <TextInput
        style={estilosComunes.input}
        placeholder="Primer número"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />
      <TextInput
        style={estilosComunes.input}
        placeholder="Segundo número"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />

      <View style={styles.botones}>
        <TouchableOpacity style={estilosComunes.boton} onPress={sumar}>
          <Text style={estilosComunes.textoBoton}>Sumar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[estilosComunes.boton, styles.botonSecundario]}
          onPress={limpiar}
        >
          <Text style={estilosComunes.textoBoton}>Limpiar</Text>
        </TouchableOpacity>
      </View>

      {error !== '' && <Text style={estilosComunes.error}>{error}</Text>}

      {resultado !== null && (
        <View style={estilosComunes.resultado}>
          <Text style={estilosComunes.resultadoTexto}>
            Resultado: {resultado}
          </Text>
        </View>
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  botones: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  botonSecundario: {
    backgroundColor: colores.secundario,
  },
});
