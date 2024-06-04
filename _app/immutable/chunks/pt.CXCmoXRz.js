const e={main:{name:"MKV Extract",description:"Extraia arquivos MKV online, diretamente do seu navegador","file-count":"{count, plural, =0 {Clique ou solte arquivos aqui para extrair} =1 {1 arquivo aberto} other {# arquivos abertos}}","automatic-mode":"Modo Automático","manual-mode":"Modo Manual","automatic-mode-explained":"Fluxos (como legendas e anexos) serão extraídos e compactados em um arquivo ZIP com base nos filtros definidos nas configurações.","manual-mode-explained":"Uma lista de fluxos (como legendas e anexos) será exibida após a abertura dos arquivos, com o padrão definido nas configurações{folderEnabled, select, true {, então você pode escolher entre extraí-los para um arquivo ZIP ou uma pasta.} other {}}.","file-loading":"Aguarde enquanto {count, plural, =1 {o arquivo está} other {os arquivos estão}} carregando","zip-select":"Extrair para um arquivo ZIP","folder-select":"Extrair para uma pasta","folder-select-tooltip":"Por favor, NÃO selecione a pasta Downloads, pastas do sistema ou qualquer outra pasta que possa conter conteúdo sensível à privacidade."},streams:{"no-selected-closed":"Nenhum fluxo selecionado, clique nos fluxos para selecioná-los","no-selected-open":"Nenhum fluxo selecionado, clique aqui para selecionar fluxos",selected:"{count, plural, =1 {1 fluxo} other {# fluxos}} selecionados","metadata-name":"{count, plural, =0 {metadados de arquivo e fluxos} =1 {metadados de arquivo, fluxos e capítulo} other {metadados de arquivo, fluxos e capítulos}}"},status:{loading:"Processando {count, plural, =1 {arquivo} other {arquivos}}...","extraction-pending":"Aguardando para iniciar a extração",extracting:"Extraindo...",finished:"Extração finalizada",skipped:"Extração ignorada","load-error":"Não foi possível carregar o arquivo","extraction-error":"Não foi possível extrair os fluxos","partial-extraction-error":"Não foi possível extrair alguns fluxos"},header:{"home-page":"Página Inicial",settings:"Configurações",help:"Ajuda",classic:"Clássico","color-scheme":"Alterar esquema de cores",download:"Ver o mkvextract original",github:"Ver o projeto no GitHub",locale:"Traduções"},locales:{en:"English/Inglês",pt:"Português",zh:"中文/Mandarim",es:"Español/Espanhol",ar:"العربية/Árabe",fr:"Français/Francês"},settings:{title:"Configurações",subtitle_extraction_mode:"Modo de extração de legendas",all_subtitles:"Extrair todas as legendas",lang_subtitles:"Extrair legendas por idioma",skip_subtitles:"Ignorar legendas",subtitle_languages:"Idiomas de legenda filtrados",subtitle_languages_helper:"Digite códigos de idioma de 3 letras separados por espaço (por exemplo: por, cmn, hin, spa, fra)",attachment_extraction_mode:"Modo de extração de anexos",all_attachments:"Extrair todos os anexos",skip_attachments:"Ignorar anexos",metadata_extraction_mode:"Modo de extração de metadados",json_metadata:"Extrair metadados em um arquivo .json",skip_metadata:"Ignorar metadados",video_extraction_mode:"Modo de extração de vídeo",all_video:"Extrair vídeos",skip_video:"Ignorar vídeo",audio_extraction_mode:"Modo de extração de áudio",all_audio:"Extrair todas as faixas de áudio",skip_audio:"Ignorar áudio",subtitle_file_template:"Modelo de arquivo de legenda",attachment_file_template:"Modelo de arquivo de anexo",metadata_file_template:"Modelo de arquivo de metadados",video_file_template:"Modelo de arquivo de vídeo",audio_file_template:"Modelo de arquivo de áudio",file_collision_mode:"Modo de colisão de arquivos",rename_files:"Renomear arquivos conflitantes",skip_collisions:"Ignorar colisões",reset_options:"Restaurar opções padrão",info:"Informações",stream_containers_info:"Os fluxos serão extraídos usando seu próprio contêiner sempre que possível, caso contrário, tentará usar um contêiner MP4/M4A de fluxo único ou, então, usará um contêiner MKV/MKA de fluxo único.",file_format_placeholders_title:"Espaços reservados de formato de arquivo compatíveis",filename_placeholder:"nome do arquivo",filename_no_ext_placeholder:"nome do arquivo sem extensão",track_name_placeholder:"nome da faixa",track_number_placeholder:"TrackNumber: número da faixa",language_placeholder:"idioma da faixa (código de 3 letras)",attachment_filename_placeholder:"nome do arquivo de anexo",folder_creation_placeholder:"Você pode usar '/' para criar pastas"},help:{title:"Ajuda",description_part1:"Esta aplicação web usa ",description_link_text:"uma versão WASM do FFmpeg",description_part2:" para extrair fluxos de arquivos de vídeo.",experiment_description:"Este projeto começou como um experimento para fornecer uma maneira de renderizar arquivos Matroska em navegadores, extraindo seus fluxos e remuxando-os em contêineres MP4 (formalmente ISO/IEC 14496-14:2003), pois naquela época a maioria dos navegadores não suportava renderização de vídeos usando o contêiner Matroska, mas permitia vídeos que usavam o contêiner MP4.",abandoned_project_note:"O projeto acabou sendo abandonado, mas como a parte de extração parecia útil, esta versão que usa FFmpeg como base foi criada. Agora ele suporta a extração de mais tipos de fluxos, tem mais opções e também suporta a extração de fluxos de arquivos MP4."},faq:{title:"Perguntas frequentes",why_javascript:"Por que requer JavaScript?",javascript_explanation:"Porque nenhum arquivo é enviado para nenhum servidor, o aplicativo funciona inteiramente no navegador.",why_no_url:"Por que não há suporte para especificar uma URL?",no_url_explanation_part1:"Porque ele funciona em um navegador e, na maioria dos casos, as páginas não podem acessar o conteúdo de outras páginas (consulte ",no_url_explanation_link_text:"Política de mesma origem",no_url_explanation_part2:")",why_not_working:"Por que algum arquivo meu não está funcionando?",not_working_explanation:"Este projeto está em desenvolvimento. Veja o registro de erros e, se você realmente acha que o problema está no aplicativo e não no arquivo corrompido, abra um problema no GitHub.",why_mp4_mkv:"Por que alguns fluxos são extraídos para arquivos MP4 ou MKV?",mp4_mkv_explanation:"Para reduzir o tamanho de compilação do FFmpeg, ele não inclui multiplexadores para formatos como H264 e H265. Se você acha que vale a pena incluir um determinado muxer, abra um problema no GitHub.",why_not_downloads:"Por que não posso extrair para a pasta Downloads?",not_downloads_explanation_part1:'Porque se você permitir o acesso à pasta Downloads para qualquer site, ele pode tentar ler seus downloads e vazar seus dados. Infelizmente, a especificação atual do mecanismo que lida com isso não tem nenhum mecanismo para evitar isso além de bloquear totalmente o acesso a essa pasta. Crie uma nova pasta e use-a. Aliás, o Firefox e muitos outros navegadores não implementam esse recurso porque, como você pode imaginar, apesar de ser bastante útil para desenvolvedores, ele abre uma brecha de segurança. O Chromium também bloqueia o caractere "~" de nomes de arquivos, mesmo que ',not_downloads_explanation_link_text:"não seja um caractere reservado na maioria dos sistemas de arquivos",not_downloads_explanation_part2:", o que é muito estranho e é levado em consideração neste aplicativo.",why_ffmpeg:"Por que FFmpeg?",ffmpeg_explanation:"O plano original era pegar o código mkvextract original e compilá-lo para WASM, mas usar o FFmpeg parecia mais fácil, pois já existem algumas implementações WASM dele.",why_corporate:"Por que esse design parece tão corporativo?",corporate_explanation:"Porque é o Carbon Design da IBM: eu estava procurando uma biblioteca de componentes Svelte com muitos componentes e modo escuro, também estava cansado do Material Design, então escolhi este."}};export{e as default};
