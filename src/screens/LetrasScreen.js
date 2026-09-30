import { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { estilosComunes } from '../theme';
import { numeroALetras } from '../utils/numeroALetras';

export default function LetrasScreen() {
  const [valor, setValor] = useState('');
  const [letras, setLetras] = useState('');
  const [error, setError] = useState('');

  const traducir = () => {
    const n = Number(valor.trim());
    if (valor.trim() === '' || !Number.isInteger(n)) {
      setError('Ingresa un número entero del 1 al 1000.');
      setLetras('');
      return;
    }
    if (n < 1 || n > 1000) {
      setError('El número debe estar entre 1 y 1000.');
      setLetras('');
      return;
    }
    setError('');
    setLetras(numeroALetras(n));
  };

  return (
    <View style={estilosComunes.contenedor}>
      <Text style={estilosComunes.titulo}>Número a Letras</Text>

      <TextInput
        style={estilosComunes.input}
        placeholder="Ej: 42"
        keyboardType="number-pad"
        maxLength={4}
        value={valor}
        onChangeText={setValor}
      />

      <TouchableOpacity style={estilosComunes.boton} onPress={traducir}>
        <Text style={estilosComunes.textoBoton}>Traducir</Text>
      </TouchableOpacity>

      {error !== '' && <Text style={estilosComunes.error}>{error}</Text>}

      {letras !== '' && (
        <View style={estilosComunes.resultado}>
          <Text style={estilosComunes.resultadoTexto}>{letras}</Text>
        </View>
      )}
    </View>
  );
}
