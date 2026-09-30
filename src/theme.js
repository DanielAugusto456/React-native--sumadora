import { StyleSheet } from 'react-native';

export const colores = {
  primario: '#1B6EC2',
  secundario: '#6c757d',
  fondo: '#f2f4f7',
  texto: '#222',
};

export const estilosComunes = StyleSheet.create({
  contenedor: {
    flexGrow: 1,
    backgroundColor: colores.fondo,
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colores.texto,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  boton: {
    backgroundColor: colores.primario,
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginTop: 4,
  },
  textoBoton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  error: {
    color: '#c0392b',
    marginTop: 10,
    textAlign: 'center',
  },
  resultado: {
    marginTop: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 18,
    width: '100%',
    elevation: 2,
  },
  resultadoTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colores.primario,
    textTransform: 'capitalize',
  },
});
