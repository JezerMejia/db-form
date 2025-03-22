# DBForm

Proyecto de Base de Datos creado con NestJS, Handlebars y Alpine.js para añadir,
editar y eliminar Productos en una base de datos de MSSQL.

## Setup

Clonar el repo:

```sh
git clone https://github.com/JezerMejia/db-form db-form
```

Instalar las dependencias con pnpm (usar `corepack install` u otros métodos para
instalar pnpm):

```sh
pnpm install
```

Setear las variables de entorno:

```env
SQL_SERVER=localhost
SQL_USER=sa
SQL_PASSWORD=Usuario123.
SQL_DATABASE=DBForm
```

Ejecutar el script SQL de la base de datos.

Finalmente ejecuta el servidor y entras a http://localhost:3000:

```
pnpm run start
```
