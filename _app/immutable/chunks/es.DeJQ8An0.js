const e={main:{name:"MKV Extract",description:"Extrae archivos MKV en línea, directamente desde tu navegador","file-count":"{count, plural, =0 {Haz clic o suelta archivos aquí para extraer} =1 {1 archivo abierto} other {# archivos abiertos}}","automatic-mode":"Modo Automático","manual-mode":"Modo Manual","automatic-mode-explained":"Los flujos (como subtítulos y anexos) serán extraídos y comprimidos en un archivo ZIP basado en los filtros establecidos en la configuración.","manual-mode-explained":"Se mostrará una lista de flujos (como subtítulos y anexos) después de abrir los archivos, con la configuración predeterminada establecida{folderEnabled, select, true {, luego puedes elegir entre extraerlos a un archivo ZIP o a una carpeta.} other {}}.","file-loading":"Por favor, espera mientras {count, plural, =1 {el archivo se está} other {los archivos se están}} cargando","zip-select":"Extraer a un archivo ZIP","folder-select":"Extraer a una carpeta","folder-select-tooltip":"Por favor, NO selecciones la carpeta de Descargas ni carpetas del sistema ni ninguna otra carpeta que pueda contener contenido sensible a la privacidad."},streams:{"no-selected-closed":"No se seleccionaron flujos, haz clic en los flujos para seleccionarlos","no-selected-open":"No se seleccionaron flujos, haz clic aquí para seleccionar flujos",selected:"{count, plural, =1 {1 flujo} other {# flujos}} seleccionados","metadata-name":"{count, plural, =0 {metadatos de archivo y flujos} =1 {metadatos de archivo, flujos y capítulo} other {metadatos de archivo, flujos y capítulos}}"},status:{loading:"Procesando {count, plural, =1 {archivo} other {archivos}}...","extraction-pending":"Esperando para comenzar la extracción",extracting:"Extrayendo...",finished:"Extracción finalizada",skipped:"Extracción omitida","load-error":"No se pudo cargar el archivo","extraction-error":"No se pudo extraer los flujos","partial-extraction-error":"No se pudo extraer algunos flujos"},header:{"home-page":"Página Principal",settings:"Configuraciones",help:"Ayuda",classic:"Clásico","color-scheme":"Cambiar esquema de colores",download:"Ver el mkvextract original",github:"Ver el proyecto en GitHub",locale:"Traducciones"},locales:{en:"English/Inglés",pt:"Português/Portugués",zh:"中文/Mandarín",es:"Español"},settings:{title:"Configuraciones",subtitle_extraction_mode:"Modo de extracción de subtítulos",all_subtitles:"Extraer todos los subtítulos",lang_subtitles:"Extraer subtítulos por idioma",skip_subtitles:"Omitir subtítulos",subtitle_languages:"Idiomas de subtítulos filtrados",subtitle_languages_helper:"Introduce códigos de idioma de 3 letras separados por espacio (por ejemplo: por, cmn, hin, spa, fra)",attachment_extraction_mode:"Modo de extracción de anexos",all_attachments:"Extraer todos los anexos",skip_attachments:"Omitir anexos",metadata_extraction_mode:"Modo de extracción de metadatos",json_metadata:"Extraer metadatos en un archivo .json",skip_metadata:"Omitir metadatos",video_extraction_mode:"Modo de extracción de video",all_video:"Extraer videos",skip_video:"Omitir video",audio_extraction_mode:"Modo de extracción de audio",all_audio:"Extraer todas las pistas de audio",skip_audio:"Omitir audio",subtitle_file_template:"Plantilla de archivo de subtítulos",attachment_file_template:"Plantilla de archivo de anexos",metadata_file_template:"Plantilla de archivo de metadatos",video_file_template:"Plantilla de archivo de video",audio_file_template:"Plantilla de archivo de audio",file_collision_mode:"Modo de colisión de archivos",rename_files:"Renombrar archivos en conflicto",skip_collisions:"Omitir colisiones",reset_options:"Restaurar opciones predeterminadas",info:"Información",stream_containers_info:"Los flujos serán extraídos usando su propio contenedor siempre que sea posible, de lo contrario, intentará usar un contenedor MP4/M4A de flujo único, o un contenedor MKV/MKA de flujo único.",file_format_placeholders_title:"Marcadores de posición de formato de archivo compatibles",filename_placeholder:"nombre del archivo",filename_no_ext_placeholder:"nombre del archivo sin extensión",track_name_placeholder:"nombre de la pista",track_number_placeholder:"TrackNumber: número de la pista",language_placeholder:"idioma de la pista (código de 3 letras)",attachment_filename_placeholder:"nombre del archivo adjunto",folder_creation_placeholder:"Puedes usar '/' para crear carpetas"},help:{title:"Ayuda",description_part1:"Esta aplicación web utiliza ",description_link_text:"una versión WASM de FFmpeg",description_part2:" para extraer flujos de archivos de video. AVISO: esta traducción fue proporcionada por una máquina y puedes ayudar a este proyecto corrigiendo los errores en ella.",experiment_description:"Este proyecto comenzó como un experimento para proporcionar una forma de renderizar archivos Matroska en navegadores, extrayendo sus flujos y remuxándolos en contenedores MP4 (formalmente ISO/IEC 14496-14:2003), ya que en ese momento la mayoría de los navegadores no admitían la reproducción de videos utilizando el contenedor Matroska, pero permitían videos que utilizaban el contenedor MP4.",abandoned_project_note:"El proyecto finalmente fue abandonado, pero como la parte de extracción parecía útil, se creó esta versión que utiliza FFmpeg como base. Ahora soporta la extracción de más tipos de flujos, tiene más opciones y también soporta la extracción de flujos de archivos MP4."},faq:{title:"Preguntas Frecuentes",why_javascript:"¿Por qué requiere JavaScript?",javascript_explanation:"Porque ningún archivo se envía a ningún servidor, la aplicación funciona completamente en el navegador.",why_no_url:"¿Por qué no hay soporte para especificar una URL?",no_url_explanation_part1:"Porque funciona en un navegador y, en la mayoría de los casos, las páginas no pueden acceder al contenido de otras páginas (consulta ",no_url_explanation_link_text:"Política del mismo origen",no_url_explanation_part2:")",why_not_working:"¿Por qué algunos de mis archivos no funcionan?",not_working_explanation:"Este proyecto está en desarrollo. Consulta el registro de errores y, si realmente crees que el problema está en la aplicación y no en tu archivo que está corrupto, abre un problema en GitHub.",why_mp4_mkv:"¿Por qué algunos flujos se extraen a archivos MP4 o MKV?",mp4_mkv_explanation:"Para reducir el tamaño de la compilación de FFmpeg, no incluye multiplexores para formatos como H264 y H265. Si crees que vale la pena incluir un determinado multiplexor, abre un problema en GitHub.",why_not_downloads:"¿Por qué no puedo extraer a la carpeta de Descargas?",not_downloads_explanation_part1:'Porque si permites el acceso a la carpeta de Descargas a cualquier sitio, podría intentar leer tus descargas y filtrar tus datos. Lamentablemente, la especificación actual del mecanismo que maneja esto no tiene ningún mecanismo para evitarlo aparte de bloquear totalmente el acceso a esa carpeta. Crea una nueva carpeta y úsala. Por cierto, Firefox y muchos otros navegadores no implementan esta función porque, como puedes imaginar, a pesar de ser bastante útil para los desarrolladores, abre una brecha de seguridad. También Chromium bloquea el carácter "~" de los nombres de archivos, aunque ',not_downloads_explanation_link_text:"no es un carácter reservado en la mayoría de los sistemas de archivos",not_downloads_explanation_part2:", lo cual es muy extraño y está considerado en esta aplicación.",why_ffmpeg:"¿Por qué FFmpeg?",ffmpeg_explanation:"El plan original era tomar el código original de mkvextract y compilarlo a WASM, pero usar FFmpeg parecía más fácil, ya que existen algunas implementaciones WASM de este.",why_svelte:"¿Por qué Svelte?",svelte_explanation:"Quería probarlo. Aún no me gusta cómo maneja la reactividad, me recuerda a Mithril: tanto Mithril como Svelte tienen ciertos casos en los que los cambios no se detectan automáticamente (cambios en funciones asíncronas no rastreadas y cambios en objetos/arrays, respectivamente), lo que requiere soluciones manuales. Vue es mejor en este aspecto, ya que usa proxies que permiten detectar siempre los cambios (a costa del rendimiento, lo cual es insignificante para esta aplicación). Además, los estilos con ámbito predeterminado causaron más dolores de cabeza de los que esperaba.",why_corporate:"¿Por qué este diseño parece tan corporativo?",corporate_explanation:"Porque es el Carbon Design de IBM: estaba buscando una biblioteca de componentes Svelte con muchos componentes y modo oscuro, también estaba cansado del Material Design, así que elegí este."},error:{404:"Página no encontrada.",500:"Error!",message:"Oh, cielos...",default:"Ha ocurrido un error."}};export{e as default};
