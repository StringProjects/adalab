![status](https://img.shields.io/badge/status-wip-green.svg?colorB=00C106)
![readme](https://img.shields.io/badge/readme-Wip-green.svg?colorB=00C106)
![commits](https://img.shields.io/badge/commits-14-blue.svg) 
![techs](https://img.shields.io/badge/techs-javascript—react—html—css—sass—bootstrap-yellow.svg)

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

com/tc39/proposal-class-public-fields) (part of stage 3 proposal).
* [JSX](https://facebook.github.io/react/docs/introducing-jsx.html) and [Flow](https://flowtype.org/) syntax.

Learn more about [different proposal stages](https://babeljs.io/docs/plugins/#presets-stage-x-experimental-presets-).

While we recommend using experimental proposals with some caution, Facebook heavily uses these features in the product code, so we intend to provide [codemods](https://medium.com/@cpojer/effective-javascript-codemods-5a6686bb46fb) if any of these proposals change in the future.## Supported Browsers

By default, the generated project uses the latest version of React.

You can refer [to the React documentation](https://reactjs.org/docs/react-dom.html#browser-support) for more information about supported browsers.



## Tools

This project has been created with Create React App](https://github.com/facebookincubator/create-react-app),
a generating tool that automate to install React and Babel, that will transform ES6 code to ES5 and preconfigure us a project.

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).






# Peluqueria canina 
Proyecto final de programación entorno servidor de 2do año basado en aplicación de registros para peluquería canina.

![status](https://img.shields.io/badge/status-running-green.svg?colorB=00C106) ![readme](https://img.shields.io/badge/readme-OK-green.svg?colorB=00C106) ![database](https://img.shields.io/badge/database-OK-green.svg?colorB=00C106) ![commits](https://img.shields.io/badge/commits-26-blue.svg) ![tag](https://img.shields.io/badge/tag-v0.3-orange.svg)
![template](https://img.shields.io/badge/template-twig-yellow.svg) ![techs](https://img.shields.io/badge/techs-javascript—php—css—bootstrap-yellow.svg)

---

## Estructura del proyecto
La estructura del proyecto está basada 
en MVC (modelo-vista-controlador) y en Api Restfull.
Crea su propia api a `JSON`.



### Contenido y características
- Registro de usuarios
- Login y logout
- Añadir registros, borrarlos y editarlos.


## Instalación

Debes renombrar el archivo `.env.example` a `.env`
con los datos correspondientes a la base de datos. 

## Cargar la base de datos

Para construir la base de datos, 
utiliza el script [`createdb.sql`](https://github.com/AdryDev92/peluqueria_canina/blob/master/createdb.sql)

## Instalación de dependencias
Desde la terminal, usa el siguiente comando:

```
composer update
```

Éste recibe las dependencias desde el `composer.json`

## Configuración de ruta de inicio

```
MAMP -> Preferences -> Web Server -> Document root(clic izquierdo) -> ruta/de/tu/proyecto/carpeta-public
```

### Tecnologías usadas

La aplicación está estructurada utilizando
`php`,`javascript`,`css`,`bootstrap` y `twig`.

