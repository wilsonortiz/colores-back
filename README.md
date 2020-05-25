# Colors backend

api que proporciona colores para ser usados en los diseños para el Frontend.
Posee los siguientes metodos http:

GET /colores -> Retona la lista de colores con paginación

GET /color/:id -> Retorna un color pasandole previamente un ID de color

POST /color -> Crea un valor en la Base de datos

PUT /color/:id -> Modifica un color pasandole previamente un ID de color, ademas de los nuevos valores a actualizar

DELETE /color/:id -> Eliminar un color pasandole previamente un ID de color


## Tecnologías que utiliza

Nodejs
Express
Sequelize
Postgres
Mocha

## Instalar dependencias 

Es necesario tener node instalado:

 - Ejecutar el comando `npm install` para instalar dependencias
 - Levantar el servidor local con el comando `ng run dev`
 - Url local http://localhost:8080/api/

## Url de producción
 https://floating-bastion-44629.herokuapp.com/api/

## Documentación para el uso de la aplicación
https://documenter.getpostman.com/view/6409697/Szt8fAqN?version=latest