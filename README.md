# simpli-test

## Despliegue de stack dockerizado:

- Renombrar archivo de variables de entorno ".env\_\_" a ".env"

- Ejecutar docker-compose up -d --build

Se generan 2 contenedores.
(Los puertos se pueden cambiar desde el archivo .env antes de ejecutar docker-compose.)

    simpli_test_api (depende de simple_test_db)
        - port: 3002

    simpli_test_db
        - port: 5432

> Si simpli_test_api no encuentra datos en simpl_test_db, carga los siguientes mockup desde ./mock_data
>
> - 10 dealers.
> - 20 vehiculos pertenecientes al dealer_id 1.
> - 40 accesorios pertenecuentes al dealer_id 1.

### Opcional - pgadmin.

    docker-compose -f docker-compose-pgadmin.yml up -d

simpli_test_pgadmin

http://127.0.0.1:8082/login

user: username@email.com

passw: password

## Mejoras

Mejoras hechas:

- Tabla Posts y Leads relacionadas 1-n

- Endpoints con metodo GET, devuelve todos los datos de la busqueda al no ingresar {id},

Performance/Mejoras/Pruebas que se podrían hacer:

- Manejo de transacciones con Sequelize.
- Indices a las tablas relacionales
  > por ej, en el caso de/api/dealer/{id}/posts/search?text=”post title | vehicle name | accessory name”
  > para no tener que hacer un fullscan, se podrían aplicar indices a los ids de las tablas.
- cache inicial/loader para trabajar datos en memoria.
