# BaseApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.1.

## Development server

Run `npm run dev` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## UAT server

Run `npm run uat` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## QA server

Run `npm run qa` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## PRO server

Run `npm run pro` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## PRUEBAS UNITARIAS

### Uso

Ejecutar `npm run test:dev` para visualizar el resultado de las pruebas via local.

## DOCUMENTACIÓN

### Uso

Agregar comentarios con base en jsDoc.<br>
`npm run compodoc:build` para generar la documentación.<br>
`npm run compodoc:serve` para visualizar la documentación en el browser.<br>
`npm run compodoc:build-and-serve` para generar la documentación y abrir el browser.<br>

## LINTER

### Pasos

1. Instalar los paquetes requeridos
2. Correr el comando `ng add @angular-eslint/schematics` para agregar al proyecto.
3. Correr el comando `npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier`
4. Abrir la configuración de VSCode y buscar `formatter`.
5. Definir `Prettier - Code formatter` en `Editor: Default Formater`.
6. Generar el archivo `settings.json` en la carpeta `.vscode` y añadir el siguiente código:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

### Uso

```
ng lint
```

## EXTENSIONES

1. [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
2. [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
3. [JSDoc Generator](https://marketplace.visualstudio.com/items?itemName=crystal-spider.jsdoc-generator)
4. [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
