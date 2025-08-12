// app.js

// Reemplazar estos valores por tu URL y clave anónima de Supabase
// URL de tu proyecto Supabase. Ajustado automáticamente para el proyecto creado
// Nota: mantén la clave anónima como placeholder hasta que actualices con tu propia anon key
const SUPABASE_URL = "https://blmtsgmbalqkpzdmgdrx.supabase.co";
// Clave anónima de Supabase (segura para el frontend)
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsbXRzZ21iYWxxa3B6ZG1nZHJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUwMzcxNjAsImV4cCI6MjA3MDYxMzE2MH0.QOZ3U6FSEJFrQxznGn1AQ_M_9PHowSWiIY5ifgzXWDs";

// Inicializar el cliente de Supabase
const supabase = supabasejs.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/**
 * Obtiene los registros de la tabla `reporte_ventas` y los pinta en la tabla HTML.
 */
async function cargarVentas() {
  const tableBody = document.getElementById('ventas-body');
  const headerRow = document.getElementById('ventas-header-row');

  // Limpiar contenido previo
  tableBody.innerHTML = '';
  headerRow.innerHTML = '';

  try {
    const { data, error } = await supabase
      .from('reporte_ventas')
      .select('*')
      .order('id', { ascending: true });

    if (error) {
      console.error('Error al obtener datos:', error.message);
      tableBody.innerHTML = `<tr><td colspan="100%">Error al obtener los datos: ${error.message}</td></tr>`;
      return;
    }

    if (!data || data.length === 0) {
      tableBody.innerHTML = '<tr><td colspan="100%">No hay registros disponibles</td></tr>';
      return;
    }

    // Crear encabezados a partir de las claves del primer registro
    const campos = Object.keys(data[0]);
    campos.forEach((campo) => {
      const th = document.createElement('th');
      th.textContent = campo;
      headerRow.appendChild(th);
    });

    // Agregar filas
    data.forEach((registro) => {
      const tr = document.createElement('tr');
      campos.forEach((campo) => {
        const td = document.createElement('td');
        const valor = registro[campo] !== null && registro[campo] !== undefined ? registro[campo] : '';
        td.textContent = valor;
        tr.appendChild(td);
      });
      tableBody.appendChild(tr);
    });
  } catch (err) {
    console.error('Error inesperado:', err);
    tableBody.innerHTML = `<tr><td colspan="100%">Error inesperado: ${err.message}</td></tr>`;
  }
}

// Llamar a cargarVentas una vez que la página se haya cargado
document.addEventListener('DOMContentLoaded', cargarVentas);