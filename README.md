# Video Games


## Comenzando

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._


## Pre-requisitos

_Instalar Docker_

### Guia para instalar docker en Mac

```
https://docs.docker.com/desktop/install/mac-install/

```

### Guia para instalar docker en Windows

```
https://docs.docker.com/desktop/install/windows-install/

```
### Guia para instalar docker en Linux

```
https://docs.docker.com/desktop/install/linux-install/

```

## Instalación

_Guia para correr el proyecto._

_Crear imagen docker a partir del docker-compose-yml._

```
$ docker-compose build
```

## Iniciar los contenedores.

_inicia o crea los contenedores._

```
$ docker compose up
```

## Conectar la base de datos Postgres en la Pgadmin.


Obtener el IPAddress del container en la cual esta corriendo la base de datos

_Paso 1_

Obtener el ID del contenedor

1. Ejecutando el comando

```
$ docker ps -a
```


2. Desde la aplicación docker desktop

<img src="https://github.com/Zapata9664/video-games-be/blob/main/src/assets/dockerDesktopExample.png">

_Paso 2_
Ecnontrar el **IPAdress** del contenedor donde esta corriendo la base de datos:

```
$ docker inspect <IDContenedor>
```

_Paso 3_

Despues de iniciar el proyecto:

Ingresar a la direccion donde se localiza la pagina administradora

```
http://localhost:5555/
```

_Paso 4_

Inicia sesion:

    Usuario: "admin@admin.com"

    Contraseña: admin

_Paso 5_

Dar click en "agregar nuevo servidor" he ingresar los siguientes datos:

    1. En la pestaña conexion: **IPADRESS**

    2. Usuario: postgres

    3. Contraseña: postgres

**NOTA**: Si desea cambiar el usuario o contraseña de la base de datos debe ingresar al archivo Dockerfile y cambiar los campos environment de postgres.


## Visualizar Swagger generado de la APi.

```
http://localhost:3000/api
```

