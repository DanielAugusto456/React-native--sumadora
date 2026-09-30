import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { PERFIL } from '../data/perfil';
import { colores, estilosComunes } from '../theme';

export default function InicioScreen() {
  const [errorFoto, setErrorFoto] = useState(false);
  const iniciales = `${PERFIL.nombre.charAt(0) ?? ''}${PERFIL.apellido.charAt(0) ?? ''}`;

  return (
    <ScrollView contentContainerStyle={estilosComunes.contenedor}>
      <View style={styles.tarjeta}>
        {errorFoto ? (
          <View style={styles.iniciales}>
            <Text style={styles.textoIniciales}>{iniciales}</Text>
          </View>
        ) : (
          <Image
            source={PERFIL.foto}
            style={styles.foto}
            onError={() => setErrorFoto(true)}
          />
        )}
        <Text style={styles.nombre}>
          {PERFIL.nombre} {PERFIL.apellido}
        </Text>
        <Text style={styles.correo}>{PERFIL.correo}</Text>
        <View style={styles.fila}>
          <Text style={styles.etiqueta}>Matrícula: </Text>
          <Text style={styles.valor}>{PERFIL.matricula}</Text>
        </View>
        <View style={styles.fila}>
          <Text style={styles.etiqueta}>Carrera: </Text>
          <Text style={styles.valor}>{PERFIL.carrera}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    width: '100%',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  foto: {
    width: 150,
    height: 150,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: colores.primario,
    marginBottom: 16,
  },
  iniciales: {
    width: 150,
    height: 150,
    borderRadius: 12,
    backgroundColor: colores.primario,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  textoIniciales: {
    color: '#fff',
    fontSize: 48,
    fontWeight: 'bold',
  },
  nombre: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colores.texto,
    textAlign: 'center',
  },
  correo: {
    fontSize: 16,
    color: colores.primario,
    marginVertical: 6,
  },
  fila: {
    flexDirection: 'row',
    marginTop: 4,
  },
  etiqueta: {
    fontWeight: 'bold',
    color: colores.texto,
  },
  valor: {
    color: colores.texto,
  },
});
