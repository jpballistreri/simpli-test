# simpli-test

Renombrar archivo de variables de entorno ".env\_\_" a ".env"

Ejecutar docker-compose up -d --build

Se generan 2 contenedores:
Los puertos se pueden cambiar desde el archivo .env antes de ejecutar docker-compose.

simpli_test_api (depende de simple_test_db)
port: 3002
simpli_test_db
port: 5432

Opcional, pgadmin.
Ejecutar docker-compose -f docker-compose-pgadmin.yml up -d

Si simpli_test_api no encuentra datos en simpl_test_db, carga mockups.
La carpeta con los archivos CSV por tabla se encuentra en ./mock_data

simpli_test_pgadmin
http://127.0.0.1:8082/login
user: username@email.com
passw: password

Mejoras hechas:
Tabla Posts y Leads relacionadas 1-n
En los GET de los endpoints, al no ingresar {id}, devuelve todos los datos del dealer.

Performance/Mejoras que se podrían hacer.
Manejo de transacciones con Sequelize.
Indices a las tablas relacionales
por ej, en el caso de/api/dealer/{id}/posts/search?text=”post title | vehicle name | accessory name”
para no tener que hacer un fullscan, se aplican indices a los ids de las tablas)

cache inicial/loader para trabajar datos en memoria.
