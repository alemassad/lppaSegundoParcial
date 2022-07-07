# Parcial de programacion para la administracio
***
Se desasrrolló con código HTML, CSS y JavaScript.
Cuenta con 2 páginas:
- Página de login (Inicio de sesión).
- Página de dashboard (tabla con información).
Cada página cuenta con su archivo HTML, CSS y Javascript por separado en estructuras de carpeta estilos,para los archivos.ccs y carpeta script para los archivos.js; además se ha sumado otra carpeta para las imagenes.
para resetear los estilos por defecto se implementó normalize.css Ambas pantallas deberán contar con un
diseño agradable e intuitivo, tratando de respetar los estándares de UI/UX básicos
***
La página de Login contiene 2 input para ingresar un email y una contraseña, sumado a un botón  “Iniciar sesión” para realizar dicha acción dentro de un formulario.
Ambos inputs son llamados desde el archivo script.js para comprobar que los datos estén validadas.
Al momento de realizar el inicio de sesión, se obtienen los datos ingresados desde Javascript y se realizar una request de tipo POST a esta URL “https://basic-server-one.vercel.app/login”.
***
Si la respuesta es exitosa:
1. Redirigimos a la pantalla del Dashboard.
2. Se guardar en LocalStorage un valor indicando que el usuario inició sesión
***Luego en el Dashboard se hace otra request get de lectura a la pagina “https://basic-server-one.vercel.app/users” mostrando el resultado en una tabla HTML. 
***
En el header de esta pantalla existe un botón “Logout” que borra el valor de login guardado en
LocalStorage y se redirecciona a la pantalla de Login.
*****
Programa hecho por Luis Massad alumno UAI para la materia Lenguaje de programacion para la administración.
