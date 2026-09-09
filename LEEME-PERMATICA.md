# PERMATICA: editar la web en Visual Studio Code

Esta carpeta contiene la primera versión de la web, con seis páginas HTML, estilos, JavaScript e imágenes. El diseño se conserva. No necesitas instalar Node, Ruby, Jekyll ni una base de datos para abrir esta versión.

Repositorio indicado por el usuario: https://github.com/PermaculturaAragon/web-permatica

No se ha podido leer aún el contenido ni la configuración de publicación de ese repositorio. No se han subido cambios ni borrado ramas. Este ZIP es una entrega local; no es un clon de GitHub y no contiene su historial.

## 1. Conserva el repositorio y su rama

Que exista una rama es normal. No borres la rama, el historial ni todo el contenido para empezar. Antes de sustituir archivos, abre el repositorio y comprueba qué hay. Conserva también los cambios locales pendientes.

Si ya tienes este repositorio clonado, abre su carpeta en Visual Studio Code con Archivo > Abrir carpeta. No hace falta clonarlo de nuevo.

Si todavía no lo tienes en el ordenador:

1. En Visual Studio Code, pulsa Ctrl+Shift+P.
2. Ejecuta `Git: Clone` (Git: Clonar).
3. Pega `https://github.com/PermaculturaAragon/web-permatica`.
4. Selecciona una carpeta de tu ordenador donde guardar el proyecto.
5. Pulsa Abrir cuando termine. Si GitHub requiere iniciar sesión, usa el diálogo oficial de autenticación; no pegues contraseñas o tokens en el chat.

Si Git no está disponible, VS Code indicará que falta. Instálalo desde su web oficial y vuelve a abrir VS Code: https://git-scm.com/downloads/win

## 2. Abre esta entrega por separado para verla

1. Descomprime el ZIP fuera de la carpeta de tu repositorio.
2. En Visual Studio Code, abre la carpeta `web-permatica` que contiene `index.html`.
3. Abre `index.html` también en tu navegador mediante el Explorador de Windows.
4. Edita un texto en el archivo HTML, guarda con Ctrl+S y recarga el navegador.

La web funciona así para la revisión local. El formulario es una muestra desactivada y no envía ni guarda datos. El correo alternativo sí es un enlace que abre tu programa de correo.

## 3. Qué archivo se edita para cada cosa

| Qué quieres cambiar | Archivo |
| --- | --- |
| Portada | `index.html` |
| Servicios | `servicios.html` |
| Cinco ejemplos de proyectos | `proyectos.html` |
| Aforador open source | `open-source.html` |
| Presentación del colectivo | `sobre-permatica.html` |
| Contacto y formulario | `contacto.html` |
| Colores, tamaños, distribución y adaptación a móvil | `assets/site.css` |
| Menú móvil y protección del formulario de muestra | `assets/site.js` |
| Logo original | `assets/logo-permatica.jpg` |
| Ilustración de ambiente | `assets/huerto-ilustracion.png` |

El contenido está directamente en los HTML. Puedes buscar frases con Ctrl+F y modificarlas conservando las etiquetas. Las cabeceras, menús y pies se repiten en las seis páginas: si cambias uno, aplica el mismo cambio en todas.

La carpeta `.vscode` aporta configuración de edición: UTF-8, sangría de dos espacios, ajuste de línea y formateo al guardar con los formateadores incorporados. Si tu repositorio ya tiene esa carpeta, conserva su configuración y combina solo los ajustes que necesites.

## 4. Incorporarlo a tu repositorio, después de revisarlo

Si se confirma que `web-permatica` es un repositorio exclusivo para esta web, podemos colocar los seis HTML y la carpeta `assets` en la raíz de su copia local. `index.html` quedará en el primer nivel del repositorio. No copies una carpeta adicional `web-permatica` dentro del repositorio con ese mismo nombre.

No aceptes una sustitución masiva de archivos sin revisar los existentes. Si hay una web anterior, primero identifica qué páginas y recursos se van a sustituir; Git permite conservar y consultar la versión anterior. Si usa Jekyll, una carpeta de publicación o un flujo de GitHub Actions, conserva esa configuración hasta decidir cómo integrar esta entrega.

El ZIP no incluye ninguna carpeta `.git`, configuración de Sites, credencial ni flujo automático de despliegue. Se utiliza la conexión Git del repositorio que hayas clonado.

## 5. Guardar y publicar cambios

En la vista Control de código fuente de Visual Studio Code:

1. Revisa las diferencias de cada archivo.
2. Prepara los cambios con el símbolo `+`.
3. Escribe un mensaje, por ejemplo `Añadir la web de PERMATICA`, y pulsa Commit / Confirmar.
4. Pulsa Push / Insertar para subir ese commit a la rama correspondiente. La acción Sincronizar también puede descargar cambios remotos; revisa su indicación antes de usarla.

Si GitHub Pages ya publica esa rama, subir cambios puede actualizar inmediatamente la web pública. Si necesitas revisar primero, utiliza una rama de trabajo y conserva la rama publicada hasta que esté listo.

Para un repositorio estático independiente sin configuración previa, GitHub permite seleccionar en Settings > Pages > Build and deployment: Deploy from a branch, la rama acordada y `/(root)`. Si ya existe un flujo de publicación, no cambies esa opción sin revisarlo. No se ha activado GitHub Pages desde esta conversación.

## Pendientes de la web

- Conectar el formulario a `infopermatica@gmail.com` mediante un servicio de envío y comprobar la recepción real.
- Incorporar la política de privacidad y los datos legales del responsable antes de activar la recogida de datos.
- Revisar y publicar la documentación, los componentes exactos, la calibración, el código y la licencia del aforador. No hay todavía descargas ni un enlace de repositorio verificado para ese proyecto DIY.

## Reglas del proyecto

- Logo original intacto: no redibujar, recolorear, recortar ni alterar sus proporciones.
- Mensaje principal: «Permacultura y domótica open source».
- Proyecto colectivo de Permacultura Aragón, sin presentarlo como una iniciativa individual ni utilizar Torre Escribana como laboratorio de la marca.
- Español, servicios completos y presupuesto personalizado, sin límites territoriales en el mensaje comercial.
- Recursos permanece oculto. Solo el aforador se presenta inicialmente como ejemplo DIY documentable.
- Nombres técnicos como Home Assistant y ESPHome dentro de los proyectos.
- La imagen del huerto es una ilustración conceptual generada, no la fotografía de una instalación propia.
- No simular envíos correctos, ahorros medidos, testimonios, repositorios o descargas inexistentes.

## Documentación oficial consultada

- VS Code: clonar, editar y trabajar con Git: https://code.visualstudio.com/docs/sourcecontrol/quickstart
- GitHub Pages: configurar la publicación: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
