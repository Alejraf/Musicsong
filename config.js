/*
  Configuración de Vibra: aquí van los datos que NO son secretos.
  NUNCA pegues aquí el Access Token de Mercado Pago ni ninguna clave que empiece con APP_USR-.
  Las claves secretas se quedan solo en Render.
*/
window.VIBRA_CONFIG = {
  // Poner en false para apagar toda la publicidad.
  adsEnabled: true,

  // Pega aquí SOLO el código de un BANNER de Monetag (el <script> o <div> que te da su panel).
  // No uses pop-under, notificaciones push ni enlaces directos.
  // Si lo dejas vacío (''), no se muestra ningún anuncio.
  adSnippet: '',

  // Alto de la zona del banner, en píxeles (por ejemplo 50, 100 o 250).
  adHeight: 100,

  // true: al tocar un banner se abre la web del anunciante en otra pestaña (necesario para que el banner funcione).
  adAllowClicks: true,

  // Dirección que abre el pago de Mercado Pago (tu servidor en Render o un link de pago).
  // Si la dejas vacía, el botón de pago avisa que aún no está configurado.
  checkoutUrl: '',

  // Dirección de tu servidor en Render que confirma un código de activación.
  // Vibra la llama así: <verifyUrl>?code=EL_CODIGO   y espera una respuesta JSON: { "valid": true }
  verifyUrl: ''
};
