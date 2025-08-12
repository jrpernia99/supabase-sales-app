# Supabase Sales Web System

Este proyecto propone reemplazar un fichero de Excel con un sistema web hospedado en Firebase y con su backend en Supabase.  
El archivo original, **Reporte de Ventas_Desarrollo.xlsx**, contenía un listado de ventas con múltiples columnas (fecha de venta, vendedor, canal, producto, importes, referencias de pago, etc.) que ahora se modelan en una base de datos PostgreSQL gestionada por Supabase.  

## Estructura del proyecto

```
supabase-sales-app/
├── data/
│   └── reporte_dorelis.csv    # Exportación del Excel original a CSV para importarla en Supabase
├── sql/
│   └── create_table.sql       # Script SQL para crear la tabla en Supabase
├── public/
│   ├── index.html             # Página principal de la aplicación
│   └── app.js                 # Lógica de la interfaz que se conecta a Supabase
└── README.md                  # Este documento
```

## Cómo utilizar este proyecto

1. **Crea una base de datos en Supabase**. Desde el panel de Supabase, crea un nuevo proyecto. Obtén el `SUPABASE_URL` y el `SUPABASE_ANON_KEY` que se usarán en la interfaz.

2. **Crea la tabla**. Ejecuta el script SQL `sql/create_table.sql` desde la consola SQL de Supabase. Esto creará la tabla `reporte_ventas` con los campos correspondientes a cada columna del Excel.

3. **Importa los datos**. En la sección *Table Editor* de Supabase, selecciona la tabla `reporte_ventas` y utiliza la opción **Import Data** para subir el fichero `data/reporte_dorelis.csv`. Asegúde de que los campos se mapeen correctamente según su nombre.

4. **Configura tu aplicación Firebase**. Crea un nuevo proyecto en Firebase y habilita el hosting. Despliega la carpeta `public` como contenido estático usando `firebase deploy`. En el archivo `public/app.js`, sustituye las variables `SUPABASE_URL` y `SUPABASE_ANON_KEY` por tus credenciales reales de Supabase.

5. **Prueba la aplicación**. Una vez desplegada, la página mostrará una tabla con los registros de venta cargados desde Supabase. Se realiza la conexión mediante la librería `@supabase/supabase-js` sin necesidad de backend adicional.

## Estructura de la tabla

La tabla `reporte_ventas` tiene los siguientes campos:

| Columna               | Tipo        | Descripción                                              |
|-----------------------|-------------|----------------------------------------------------------|
| id                    | serial      | Clave primaria incremental                               |
| fecha_venta           | timestamp   | Fecha y hora de la venta                                 |
| vendedor              | text        | Nombre del vendedor                                      |
| canal_venta           | text        | Canal por el que se realizó la venta                     |
| producto              | text        | Producto vendido                                         |
| ambito                | text        | Ámbito de la venta (por ejemplo: nacional, internacional) |
| aerolinea             | text        | Aerolínea asociada (si aplica)                           |
| localizador           | text        | Código localizador                                       |
| boleto                | numeric     | Número de boleto                                         |
| varios_boletos        | text        | Identificador para múltiples boletos                     |
| id_varios_boletos     | text        | Identificador alternativo para varios boletos            |
| id_o_cedula           | text        | Documento de identidad del cliente                       |
| apellido_nombre       | text        | Apellidos y nombres del cliente                          |
| venta_kiu             | numeric     | Importe de la venta según KIU                            |
| venta                 | numeric     | Importe de la venta                                      |
| monto_bs_a_cobrar     | numeric     | Monto en bolívares a cobrar                              |
| t_bcv                 | text        | Tipo de cambio aplicado                                  |
| aux_efectivo          | numeric     | Monto pagado en efectivo                                 |
| aux_zelle             | numeric     | Monto pagado por Zelle                                   |
| total_pago            | numeric     | Total del pago realizado                                 |
| validacion_pago       | text        | Estado de la validación del pago                         |
| diferencia            | numeric     | Diferencia entre pago y venta                            |
| aux_pm_bs             | numeric     | Monto pagado por Pago Móvil en bolívares                 |
| forma_de_pago         | text        | Forma de pago utilizada                                   |
| pago_bs               | numeric     | Monto pagado en bolívares                                |
| ref_pm_bs             | numeric     | Referencia de Pago Móvil en bolívares                    |
| zelle                 | numeric     | Monto pagado por Zelle                                   |
| ref_zelle             | text        | Referencia de pago de Zelle                              |

## Notas

* **Placeholder de credenciales:** Las credenciales de Supabase (`SUPABASE_URL` y `SUPABASE_ANON_KEY`) deben ser reemplazadas en `public/app.js` para que la aplicación funcione. Nunca subas estas claves a un repositorio público.
* **Migración sencilla:** Al ser Supabase una base de datos PostgreSQL estándar, puedes exportar la información y migrarla cuando lo necesites.
