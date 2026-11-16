/*
  Rutas de arranque de Vibra: listas ya armadas para que el usuario empiece sin buscar nada.
  Cada ruta tiene título y descripción en español (es) y portugués (pt), y los vídeos pueden ser
  distintos para cada idioma. Para añadir una ruta, copia un bloque y cambia los datos.
  El código de un vídeo es lo que va después de "v=" en su enlace de YouTube (11 caracteres).
  Los vídeos son de terceros: si alguno deja de estar disponible, simplemente reemplázalo.
*/
window.VIBRA_RUTAS = [
  {
    id: 'guitarra', cat: 'musica', emoji: '🎸',
    title: { es: 'Guitarra desde cero', pt: 'Violão do zero' },
    desc: {
      es: 'De tu primera clase a tus primeras canciones, en 4 pasos.',
      pt: 'Da primeira aula às primeiras músicas, em 4 passos.'
    },
    items: {
      es: ['pcpn2zGiG3M', 'F2cUwBYk5hk', '69c2YVt4hh8', 'AntRVryERkE'],
      pt: ['YfHBlSRoZdQ', 'ZVMjrY3BGJs', 'GwYraQ56QW8', 'KfakD7w_zAc']
    }
  },
  {
    id: 'ingles', cat: 'idiomas', emoji: '🗣️',
    title: { es: 'Inglés desde cero', pt: 'Inglês do zero' },
    desc: {
      es: 'Tus primeras clases de inglés, una detrás de otra.',
      pt: 'Suas primeiras aulas de inglês, uma depois da outra.'
    },
    items: {
      es: ['uZGx3irSJAU', '7E9p0-YApSg', 'ymCe8dwKbtM'],
      pt: ['S45kHeWnT0M', 'fVZhgNAXMd0', 'mopCehECMu0', 'fy5K6QyJCPQ']
    }
  },
  {
    id: 'fitness', cat: 'fitness', emoji: '💪',
    title: { es: 'Rutinas en casa', pt: 'Treinos em casa' },
    desc: {
      es: 'Cuatro rutinas para empezar sin equipo. Si tienes alguna condición de salud, consulta antes a tu médico.',
      pt: 'Quatro treinos para começar sem equipamento. Se você tem alguma condição de saúde, consulte antes seu médico.'
    },
    items: {
      es: ['8I17t1Sl9C4', 'yla0tnrelTA', 'GUnMuWC_vR8', 'q12mV3CN0JU'],
      pt: ['V-2f1U4l_5w', 'U1dHduBn3Xs', 'Ga6z8DpoRy4', 'nQ40N0ZWFXs']
    }
  },
  {
    id: 'cocina', cat: 'cocina', emoji: '🍳',
    title: { es: 'Cocina para principiantes', pt: 'Cozinha para iniciantes' },
    desc: {
      es: 'Lo básico y recetas fáciles para perderle el miedo a la cocina.',
      pt: 'O básico e receitas fáceis para perder o medo da cozinha.'
    },
    items: {
      es: ['FgnNgfwXGCw', 'kX9ceN_IOAk', 'PnYhaz-ghfU', 'DAxP0Xfy8eU'],
      pt: ['S-4GC5zHj80', '7Bl3pHMtskw', '0LyCs6-KXeo', '7NnJYJDNPJQ']
    }
  },
  {
    id: 'estudio', cat: 'estudio', emoji: '📚',
    title: { es: 'Estudia mejor', pt: 'Estude melhor' },
    desc: {
      es: 'Técnicas de estudio con respaldo para aprender más en menos tiempo.',
      pt: 'Técnicas de estudo com respaldo para aprender mais em menos tempo.'
    },
    items: {
      es: ['LwAwo2x6q5M', 'FDm_ID5SROc', 'iTquug-8urc', 'DYasu9nj2Og'],
      pt: ['y8KMqzsNT9w', 'qCrEAKv4MQg', 'riSwK4SlJto', 'OZ1LESM9G0I']
    }
  }
];
