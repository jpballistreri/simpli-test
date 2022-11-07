# simpli-test

## Stack / librerias

API Nodejs - DB Postgres

- express
- jsonwebtoken
- sequelize (ORM)
- pg (postgres)
- fast-csv (carga de mockups)
  sequelize

Se deja archivo simpli-test.postman_collection exportado de Postman en ./

## Despliegue de stack dockerizado:

- Renombrar archivo de variables de entorno ".env\_\_" a ".env"

- Ejecutar docker-compose up -d --build

Se generan 2 contenedores.
(Los puertos se pueden cambiar desde el archivo .env antes de ejecutar docker-compose.)

    simpli_test_api (depende de simple_test_db)
        - port: 3002

    simpli_test_db
        - port: 5432

> Si simpli_test_api no encuentra datos en simpl_test_db, carga los siguientes mockup desde ./api/mock_data
>
> - 10 dealers.
> - 20 vehículos pertenecientes al dealer_id 1.
> - 40 accesorios pertenecuentes al dealer_id 1.

Para generar JWT:

- Hacer request POST a 'localhost:3002/api/login' enviando un userId y userName ficticios en el body.

  body ej:

        {
        "userId": "d324234",
        "userName": "Juan"
        }

- Se genera JWT, devolviendo cookie con el mismo.
- El JWT es controlado via middleware.

### Opcional - pgadmin.

    docker-compose -f docker-compose-pgadmin.yml up -d

simpli_test_pgadmin

http://127.0.0.1:8082/login

user: username@email.com

passw: password

# Mejoras

Mejoras hechas:

- Tabla Posts y Leads relacionadas 1-n

- Endpoints con método GET, devuelve todos los datos de la búsqueda al no ingresar {id}

Performance/Mejoras/Pruebas que se podrían hacer:

- Manejo de transacciones con Sequelize.
- Paginadores
- Modelado de JSON de respuesta en /api/dealer/{id}/posts/search
- Login con user/pass en db.
- Indices a las tablas relacionales
  > por ej, en el caso de /api/dealer/{id}/posts/search?text= post title | vehicle name | accessory name”
  > para no tener que hacer un fullscan, se podrían aplicar indices a los ids de las tablas.
- ExpressCache para consultas.
- Automatización de pruebas.
