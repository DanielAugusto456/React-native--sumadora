import {
  Linking,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { estilosComunes } from '../theme';

const YOUTUBE_VIDEO_ID = 'RooSjBW6rz4';

export default function ExperienciaScreen() {
  const videoId = YOUTUBE_VIDEO_ID.trim();
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  const abrirEnYouTube = () => {
    if (!videoId) return;
    Linking.openURL(`https://www.youtube.com/watch?v=${videoId}`);
  };

  return (
    <View style={estilosComunes.contenedor}>
      <Text style={estilosComunes.titulo}>Mi Experiencia</Text>
      <View style={styles.videoContenedor}>
        {Platform.OS === 'web' ? (
          <iframe
            src={embedUrl}
            style={{ width: '100%', height: '100%', border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Video de experiencia"
          />
        ) : (
          <WebView
            source={{ uri: embedUrl }}
            style={styles.video}
            allowsFullscreenVideo
          />
        )}
      </View>
      <TouchableOpacity style={estilosComunes.boton} onPress={abrirEnYouTube}>
        <Text style={estilosComunes.textoBoton}>Abrir en YouTube</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  videoContenedor: {
    width: '85%',
    maxWidth: 380,
    height: 215,
    alignSelf: 'center',
    borderRadius: 12,
    overflow: 'hidden',
    marginVertical: 12,
    backgroundColor: '#000',
  },
  video: {
    flex: 1,
  },
});
