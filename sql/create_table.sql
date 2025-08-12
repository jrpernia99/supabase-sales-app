-- Script para crear la tabla de reporte de ventas en Supabase (PostgreSQL)
-- Ejecuta este script en la sección SQL de tu proyecto Supabase.

CREATE TABLE IF NOT EXISTS public.reporte_ventas (
    id serial PRIMARY KEY,
    fecha_venta timestamp,
    vendedor text,
    canal_venta text,
    producto text,
    ambito text,
    aerolinea text,
    localizador text,
    boleto numeric,
    varios_boletos text,
    id_varios_boletos text,
    id_o_cedula text,
    apellido_nombre text,
    venta_kiu numeric,
    venta numeric,
    monto_bs_a_cobrar numeric,
    t_bcv text,
    aux_efectivo numeric,
    aux_zelle numeric,
    total_pago numeric,
    validacion_pago text,
    diferencia numeric,
    aux_pm_bs numeric,
    forma_de_pago text,
    pago_bs numeric,
    ref_pm_bs numeric,
    zelle numeric,
    ref_zelle text
);
