<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Grupo Dabroy - Sincronización de Talleres de Motos</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- FontAwesome para Iconos -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Google Fonts (Inter) -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            -webkit-tap-highlight-color: transparent;
        }
        /* Ocultar barra de scroll en navegadores */
        ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
        }
        ::-webkit-scrollbar-track {
            background: #f1f5f9;
        }
        ::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 8px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #94a3b8;
        }
        /* Optimización de canvas de firma */
        #signature-canvas {
            touch-action: none;
            cursor: crosshair;
        }
    </style>
</head>
<body class="bg-slate-900 text-slate-100 min-h-screen flex flex-col selection:bg-amber-500 selection:text-slate-950">

    <!-- BANNER DE ESTADO OFFLINE GLOBAL -->
    <div id="offline-global-banner" class="hidden bg-gradient-to-r from-amber-600 to-amber-700 text-slate-950 text-center py-2 px-4 text-xs font-black flex items-center justify-center gap-2 animate-pulse sticky top-0 z-50 shadow-md">
        <i class="fa-solid fa-plane-slash text-sm"></i>
        <span>MODO SIN CONEXIÓN: Las órdenes se guardarán de forma segura en este celular y se sincronizarán solas cuando vuelva el internet.</span>
    </div>

    <!-- HEADER DE CONTROL GENERAL -->
    <header class="bg-slate-950 border-b border-slate-800 sticky top-0 z-40 shadow-xl">
        <div class="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8 flex justify-between items-center">
            
            <!-- Branding principal -->
            <div class="flex items-center space-x-3">
                <div class="bg-gradient-to-tr from-amber-600 to-amber-400 text-slate-950 p-2.5 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20">
                    <i class="fa-solid fa-motorcycle text-xl"></i>
                </div>
                <div>
                    <h1 class="text-md sm:text-xl font-extrabold tracking-tight">Grupo <span class="text-amber-500">Dabroy</span></h1>
                    <div class="flex items-center gap-1.5">
                        <span id="connection-indicator" class="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-ping"></span>
                        <p id="connection-text" class="text-[9px] sm:text-xs text-slate-400 font-medium">Conectado - Sincronización Activa</p>
                    </div>
                </div>
            </div>
            
            <!-- Selector de Entorno (Móvil vs PC) -->
            <div class="bg-slate-900 p-1 rounded-xl flex space-x-1 border border-slate-800">
                <button onclick="switchMode('mobile')" id="btn-mode-mobile" class="px-3 py-2 rounded-lg text-xs font-bold flex items-center space-x-1.5 transition-all duration-200">
                    <i class="fa-solid fa-mobile-screen"></i>
                    <span class="hidden sm:inline">Modo Móvil (Mecánico)</span>
                </button>
                <button onclick="switchMode('desktop')" id="btn-mode-desktop" class="px-3 py-2 rounded-lg text-xs font-bold flex items-center space-x-1.5 transition-all duration-200">
                    <i class="fa-solid fa-laptop"></i>
                    <span class="hidden sm:inline">Modo PC (Administración)</span>
                </button>
            </div>
        </div>
    </header>

    <!-- NOTIFICACIONES TEMPORALES (TOASTS) -->
    <div id="toast-container" class="fixed top-24 right-4 z-50 space-y-2 pointer-events-none max-w-sm w-full"></div>

    <!-- MAIN WRAPPER -->
    <main class="flex-grow max-w-7xl w-full mx-auto p-3 sm:p-6 lg:p-8">

        <!-- ======================= MODO MÓVIL: MECÁNICO EN CAMPO ======================= -->
        <section id="section-mobile" class="hidden space-y-6 max-w-lg mx-auto">
            
            <!-- Indicador móvil de cola pendiente -->
            <div id="mobile-queue-indicator" class="hidden bg-slate-950 border border-amber-500/30 rounded-2xl p-4 flex items-center justify-between shadow-lg">
                <div class="flex items-center gap-3">
                    <div class="bg-amber-500/10 text-amber-500 p-2.5 rounded-xl">
                        <i class="fa-solid fa-cloud-arrow-up text-lg animate-bounce"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-black text-white">Cola de Envío Offline</h4>
                        <p id="mobile-queue-count" class="text-[10px] text-slate-400">Hay 0 órdenes en espera de conexión.</p>
                    </div>
                </div>
                <button onclick="forceSyncQueue()" class="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-[10px] text-amber-500 font-bold py-1.5 px-3 rounded-lg transition-colors">
                    Sincronizar Ya
                </button>
            </div>

            <!-- Encabezado de la interfaz móvil -->
            <div class="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex items-center justify-between shadow-lg">
                <div class="space-y-1">
                    <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20">
                        <i class="fa-solid fa-helmet-safety mr-1"></i> CONTROL DE CAMPO
                    </span>
                    <h2 class="text-lg font-bold text-white">Orden de Trabajo</h2>
                </div>
                <button onclick="loadMockFields()" class="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs text-amber-400 font-semibold py-1.5 px-3 rounded-lg transition-colors">
                    <i class="fa-solid fa-wand-magic-sparkles mr-1"></i> Demo Moto
                </button>
            </div>

            <!-- Formulario de la Orden -->
            <form id="mobile-order-form" onsubmit="submitFieldOrder(event)" class="space-y-5 bg-slate-950 border border-slate-800 rounded-2xl p-5 shadow-xl">
                
                <!-- Datos generales del servicio -->
                <div class="space-y-4">
                    <!-- Mecánico -->
                    <div>
                        <label class="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Nombre del Mecánico <span class="text-amber-500">*</span></label>
                        <div class="relative">
                            <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
                                <i class="fa-solid fa-wrench"></i>
                            </span>
                            <input type="text" id="mob-mech" required placeholder="Ej. Roberto Martínez" 
                                class="pl-10 w-full rounded-xl bg-slate-900 border border-slate-700 text-slate-100 placeholder:text-slate-500 focus:border-amber-500 focus:ring focus:ring-amber-500/20 transition-all p-3 text-sm">
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                        <!-- Número de orden -->
                        <div>
                            <label class="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">No. de Orden <span class="text-amber-500">*</span></label>
                            <div class="relative">
                                <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
                                    <i class="fa-solid fa-hashtag"></i>
                                </span>
                                <input type="text" id="mob-order-num" required placeholder="Ej. OR-8812" 
                                    class="pl-10 w-full rounded-xl bg-slate-900 border border-slate-700 text-slate-100 placeholder:text-slate-500 focus:border-amber-500 focus:ring focus:ring-amber-500/20 transition-all p-3 text-sm font-semibold">
                            </div>
                        </div>
                        <!-- Fecha -->
                        <div>
                            <label class="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Fecha <span class="text-amber-500">*</span></label>
                            <div class="relative">
                                <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
                                    <i class="fa-solid fa-calendar-day"></i>
                                </span>
                                <input type="date" id="mob-date" required 
                                    class="pl-10 w-full rounded-xl bg-slate-900 border border-slate-700 text-slate-100 focus:border-amber-500 focus:ring focus:ring-amber-500/20 transition-all p-3 text-sm">
                            </div>
                        </div>
                    </div>

                    <!-- Vehículo (Moto) -->
                    <div>
                        <label class="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Identificación de la Motocicleta</label>
                        <div class="relative">
                            <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
                                <i class="fa-solid fa-motorcycle"></i>
                            </span>
                            <input type="text" id="mob-vehicle" placeholder="Ej. Yamaha FZ25 2023 - M-904XCD" 
                                class="pl-10 w-full rounded-xl bg-slate-900 border border-slate-700 text-slate-100 placeholder:text-slate-500 focus:border-amber-500 focus:ring focus:ring-amber-500/20 transition-all p-3 text-sm">
                        </div>
                    </div>

                    <!-- Diagnóstico / Observaciones -->
                    <div>
                        <label class="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Observación / Diagnóstico de la Moto <span class="text-amber-500">*</span></label>
                        <textarea id="mob-observations" required rows="2" placeholder="Describa fallas, fugas de aceite o ruidos en cadena..." 
                            class="w-full rounded-xl bg-slate-900 border border-slate-700 text-slate-100 placeholder:text-slate-500 focus:border-amber-500 focus:ring focus:ring-amber-500/20 transition-all p-3 text-sm"></textarea>
                    </div>
                </div>

                <!-- REPUESTOS Y MATERIALES CON PANEL RÁPIDO PARA CELULARES -->
                <div class="space-y-4 pt-3 border-t border-slate-800">
                    <div>
                        <h3 class="text-xs font-bold text-amber-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                            <i class="fa-solid fa-gears"></i> Repuestos de Motos Usados
                        </h3>
                        <p class="text-[11px] text-slate-400">Selecciona de los más comunes o añade manualmente abajo.</p>
                    </div>

                    <!-- Grid de Selección Rápida en Celular (Optimizado para taller de motos) -->
                    <div class="grid grid-cols-2 gap-2">
                        <button type="button" onclick="fastAddPart('Aceite de Moto 4T (Litro)', 1)" class="p-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-[11px] font-bold flex items-center justify-between text-left transition-colors">
                            <span>🛢️ Aceite 4T (Litro)</span>
                            <i class="fa-solid fa-plus text-amber-500"></i>
                        </button>
                        <button type="button" onclick="fastAddPart('Filtro de Aceite de Moto', 1)" class="p-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-[11px] font-bold flex items-center justify-between text-left transition-colors">
                            <span>⚙️ Filtro de Aceite</span>
                            <i class="fa-solid fa-plus text-amber-500"></i>
                        </button>
                        <button type="button" onclick="fastAddPart('Pastillas de Freno Moto (Set)', 1)" class="p-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-[11px] font-bold flex items-center justify-between text-left transition-colors">
                            <span>🛑 Pastillas Freno</span>
                            <i class="fa-solid fa-plus text-amber-500"></i>
                        </button>
                        <button type="button" onclick="fastAddPart('Kit de Arrastre (Cadena/Piñón/Cat)', 1)" class="p-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-[11px] font-bold flex items-center justify-between text-left transition-colors">
                            <span>⛓️ Kit de Arrastre</span>
                            <i class="fa-solid fa-plus text-amber-500"></i>
                        </button>
                        <button type="button" onclick="fastAddPart('Bujía de Moto (Afinación)', 1)" class="p-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-[11px] font-bold flex items-center justify-between text-left transition-colors">
                            <span>⚡ Bujía de Moto</span>
                            <i class="fa-solid fa-plus text-amber-500"></i>
                        </button>
                        <button type="button" onclick="fastAddPart('Filtro de Aire Moto', 1)" class="p-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-[11px] font-bold flex items-center justify-between text-left transition-colors">
                            <span>💨 Filtro de Aire</span>
                            <i class="fa-solid fa-plus text-amber-500"></i>
                        </button>
                    </div>

                    <!-- Tabla de Repuestos agregados para enviar -->
                    <div class="bg-slate-900 rounded-xl border border-slate-800 p-3">
                        <div class="flex justify-between items-center mb-2.5">
                            <span class="text-[11px] font-bold text-slate-400 uppercase">Items en la Orden</span>
                            <button type="button" onclick="addMobilePartRow()" class="text-[11px] text-amber-500 hover:text-amber-400 font-bold flex items-center gap-1">
                                <i class="fa-solid fa-circle-plus"></i> Añadir personalizado
                            </button>
                        </div>
                        <div id="mob-parts-list" class="space-y-2">
                            <!-- Inyectado dinámicamente -->
                        </div>
                        <div id="mob-parts-empty" class="text-center py-6 text-slate-500 text-xs">
                            <i class="fa-solid fa-boxes-stacked text-xl mb-1.5 block"></i>
                            Presione los botones rápidos de arriba o agregue un repuesto personalizado.
                        </div>
                    </div>
                </div>

                <!-- SECCIÓN DE FIRMA DIGITAL DEL MECÁNICO -->
                <div class="space-y-3 pt-3 border-t border-slate-800">
                    <div class="flex justify-between items-center">
                        <label class="block text-xs font-bold text-slate-400 uppercase tracking-wider">Firma de Conformidad en Campo</label>
                        <button type="button" onclick="clearSignature()" class="text-[10px] text-rose-400 hover:text-rose-300 font-semibold">
                            <i class="fa-solid fa-eraser"></i> Borrar Firma
                        </button>
                    </div>
                    <div class="bg-slate-900 rounded-xl border border-slate-700 overflow-hidden relative">
                        <canvas id="signature-canvas" class="w-full h-24 bg-slate-950 block"></canvas>
                        <p class="absolute bottom-1 right-2 text-[9px] text-slate-500 pointer-events-none select-none">Firme con el dedo aquí</p>
                    </div>
                </div>

                <!-- Botón de Envío -->
                <button type="submit" class="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black py-4 rounded-xl text-sm tracking-wide shadow-lg shadow-amber-500/10 flex items-center justify-center gap-2 transition-transform active:scale-[0.98]">
                    <i id="submit-icon" class="fa-solid fa-cloud-arrow-up text-lg"></i>
                    <span id="submit-text">ENVIAR ORDEN AL INSTANTE</span>
                </button>
            </form>
        </section>


        <!-- ======================= MODO ESCRITORIO: ADMINISTRACIÓN EN PC ======================= -->
        <section id="section-desktop" class="hidden space-y-6">
            
            <!-- Dashboard de Resumen superior en PC -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div class="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex items-center space-x-3.5 shadow-md">
                    <div class="bg-amber-500/10 text-amber-500 p-3 rounded-xl"><i class="fa-solid fa-clipboard-list text-xl"></i></div>
                    <div>
                        <p class="text-[11px] font-bold text-slate-400 uppercase">Órdenes Totales</p>
                        <h3 id="dash-total-orders" class="text-xl font-extrabold text-white">0</h3>
                    </div>
                </div>
                <div class="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex items-center space-x-3.5 shadow-md">
                    <div class="bg-blue-500/10 text-blue-400 p-3 rounded-xl"><i class="fa-solid fa-spinner text-xl animate-spin"></i></div>
                    <div>
                        <p class="text-[11px] font-bold text-slate-400 uppercase">Sin Conciliar</p>
                        <h3 id="dash-pending-orders" class="text-xl font-extrabold text-white">0</h3>
                    </div>
                </div>
                <div class="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex items-center space-x-3.5 shadow-md">
                    <div class="bg-emerald-500/10 text-emerald-400 p-3 rounded-xl"><i class="fa-solid fa-check-double text-xl"></i></div>
                    <div>
                        <p class="text-[11px] font-bold text-slate-400 uppercase">Sin Discrepancias</p>
                        <h3 id="dash-ok-orders" class="text-xl font-extrabold text-white">0</h3>
                    </div>
                </div>
                <div class="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex items-center space-x-3.5 shadow-md">
                    <div class="bg-rose-500/10 text-rose-400 p-3 rounded-xl"><i class="fa-solid fa-circle-exclamation text-xl"></i></div>
                    <div>
                        <p class="text-[11px] font-bold text-slate-400 uppercase">Con Alertas</p>
                        <h3 id="dash-alert-orders" class="text-xl font-extrabold text-white">0</h3>
                    </div>
                </div>
            </div>

            <!-- Estructura de Doble Columna (Perfecta para PC) -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                <!-- COLUMNA IZQUIERDA: Listado y buscador de Órdenes del Campo -->
                <div class="lg:col-span-4 space-y-4">
                    <div class="bg-slate-950 border border-slate-800 p-5 rounded-2xl shadow-xl flex flex-col h-[650px]">
                        <div class="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                            <h3 class="font-bold text-white text-sm flex items-center gap-2">
                                <i class="fa-solid fa-inbox text-amber-500"></i> Buzón de Campo (En Vivo)
                            </h3>
                            <span id="badge-total-list" class="bg-amber-500 text-slate-950 text-xs px-2.5 py-0.5 rounded-full font-black">0</span>
                        </div>

                        <!-- Buscador y filtro de estado -->
                        <div class="space-y-2 mb-3">
                            <div class="relative">
                                <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
                                    <i class="fa-solid fa-magnifying-glass text-xs"></i>
                                </span>
                                <input type="text" id="pc-order-search" oninput="filterFieldOrders()" placeholder="Buscador por No. de orden o mecánico..." 
                                    class="pl-9 w-full rounded-xl bg-slate-900 border border-slate-700 text-xs focus:border-amber-500 p-2.5 text-slate-100">
                            </div>
                            <div class="grid grid-cols-3 gap-1">
                                <button onclick="setFilter('all')" id="filter-all" class="text-[10px] py-1.5 rounded-lg font-bold bg-slate-800 text-white transition-colors">Todos</button>
                                <button onclick="setFilter('pending')" id="filter-pending" class="text-[10px] py-1.5 rounded-lg font-bold bg-slate-900 border border-slate-800 text-slate-400 transition-colors">Pendiente</button>
                                <button onclick="setFilter('compared')" id="filter-compared" class="text-[10px] py-1.5 rounded-lg font-bold bg-slate-900 border border-slate-800 text-slate-400 transition-colors">Analizado</button>
                            </div>
                        </div>

                        <!-- Lista de Órdenes -->
                        <div id="pc-orders-container" class="space-y-2.5 overflow-y-auto flex-grow pr-1">
                            <!-- Inyectado vía JavaScript -->
                        </div>
                    </div>
                </div>

                <!-- COLUMNA DERECHA: Panel Detallado de Comparación / Conciliación -->
                <div class="lg:col-span-8 space-y-6">
                    
                    <!-- Estado Inicial Sin Selección -->
                    <div id="pc-empty-state" class="bg-slate-950 rounded-2xl border border-slate-800 shadow-xl p-12 text-center flex flex-col items-center justify-center h-[650px]">
                        <div class="bg-slate-900 border border-slate-800 p-6 rounded-full text-slate-500 mb-4 animate-bounce">
                            <i class="fa-solid fa-code-compare text-4xl"></i>
                        </div>
                        <h3 class="text-md font-bold text-white">Seleccione una orden del buzón</h3>
                        <p class="text-xs text-slate-400 max-w-sm mt-1">Haga clic en una de las órdenes enviadas por los mecánicos desde el campo para ingresar su factura y realizar el análisis de discrepancia de inmediato.</p>
                    </div>

                    <!-- Panel Activo de Comparación -->
                    <div id="pc-active-state" class="hidden space-y-6">
                        
                        <!-- Info de la Orden de Campo -->
                        <div class="bg-slate-950 p-5 rounded-2xl border border-slate-800 shadow-xl">
                            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-800 pb-4 mb-4">
                                <div class="space-y-1">
                                    <div class="flex items-center gap-2">
                                        <h3 class="text-base font-extrabold text-white">Orden: <span id="active-order-title" class="text-amber-500">OR-XXXX</span></h3>
                                        <span id="active-status-badge" class="px-2 py-0.5 rounded text-[10px] font-black uppercase"></span>
                                    </div>
                                    <p class="text-xs text-slate-400">
                                        Mecánico: <span id="active-mech-name" class="font-bold text-slate-200"></span> | 
                                        Motocicleta: <span id="active-vehicle-name" class="font-bold text-slate-200"></span>
                                    </p>
                                </div>
                                <div class="text-right">
                                    <p id="active-order-date" class="text-xs text-slate-500 font-medium"></p>
                                    <button onclick="simulatePrint()" class="text-[10px] bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 px-2.5 py-1.5 rounded-lg mt-1 font-bold">
                                        <i class="fa-solid fa-print mr-1"></i> Imprimir Reporte
                                    </button>
                                </div>
                            </div>
                            <div>
                                <h4 class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Reporte / Observaciones del Mecánico en Campo:</h4>
                                <p id="active-observations" class="text-xs text-slate-300 mt-1.5 bg-slate-900 border border-slate-800 p-3 rounded-xl italic"></p>
                            </div>
                            <!-- Renderizado de la Firma -->
                            <div class="mt-4 pt-3 border-t border-slate-800/80 flex justify-between items-center">
                                <span class="text-[10px] text-slate-500 font-bold uppercase">Evidencia de Firma:</span>
                                <div id="active-signature-preview" class="bg-slate-900 p-1 border border-slate-800 rounded-lg">
                                    <!-- Inyectado como imagen -->
                                </div>
                            </div>
                        </div>

                        <!-- Comparativa dual: Orden Mecánico vs Factura Física -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                            
                            <!-- Izquierda: Repuestos Solicitados por Mecánico -->
                            <div class="bg-slate-950 p-5 rounded-2xl border border-slate-800 shadow-xl flex flex-col justify-between">
                                <div>
                                    <div class="flex justify-between items-center mb-4 pb-2 border-b border-slate-800">
                                        <h4 class="font-bold text-xs text-amber-500 flex items-center gap-1.5 uppercase tracking-wider">
                                            <i class="fa-solid fa-square-check"></i> 1. Orden del Mecánico
                                        </h4>
                                        <span id="count-order-items" class="bg-slate-900 text-amber-500 text-[10px] px-2 py-0.5 rounded font-bold">0 ítems</span>
                                    </div>
                                    <div id="list-order-items" class="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                                        <!-- Inyectado dinámicamente -->
                                    </div>
                                </div>
                                <div class="mt-4 pt-3 border-t border-slate-800/80 flex justify-between items-center">
                                    <span class="text-[9px] text-slate-500 font-medium">Enviado vía App Celular</span>
                                    <button onclick="copiarAlFacturador()" class="text-[10px] font-bold bg-slate-900 hover:bg-slate-800 border border-slate-700 text-amber-400 hover:text-amber-300 flex items-center gap-1 px-3 py-1.5 rounded-lg transition-colors">
                                        <i class="fa-solid fa-share-all"></i> Autocompletar Factura
                                    </button>
                                </div>
                            </div>

                            <!-- Derecha: Datos de Facturación -->
                            <div class="bg-slate-950 p-5 rounded-2xl border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden">
                                <!-- Loader de Inteligencia Artificial para el escaneo -->
                                <div id="invoice-ai-loader" class="hidden absolute inset-0 bg-slate-950/90 backdrop-blur-sm z-30 flex flex-col items-center justify-center space-y-3.5 p-6 text-center">
                                    <div class="relative">
                                        <div class="w-16 h-16 rounded-full border-4 border-amber-500/20 border-t-amber-500 animate-spin"></div>
                                        <div class="absolute inset-0 flex items-center justify-center">
                                            <i class="fa-solid fa-brain text-amber-500 text-xl animate-pulse"></i>
                                        </div>
                                    </div>
                                    <div class="space-y-1">
                                        <h5 class="text-sm font-black text-white">Grupo Dabroy AI Scanner</h5>
                                        <p class="text-[11px] text-slate-400">Analizando el documento de la factura del proveedor...</p>
                                        <p class="text-[9px] text-amber-500/80 animate-pulse">Procesando texto, repuestos y cantidades con Gemini...</p>
                                    </div>
                                </div>

                                <div>
                                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-800">
                                        <h4 class="font-bold text-xs text-slate-200 flex items-center gap-1.5 uppercase tracking-wider">
                                            <i class="fa-solid fa-file-invoice-dollar text-amber-500"></i> 2. Factura del Proveedor
                                        </h4>
                                        <div class="flex flex-wrap gap-1.5 items-center">
                                            <!-- Botón de Escanear con Cámara -->
                                            <button onclick="triggerInvoiceCamera()" class="bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-500 text-[10px] font-black px-2 py-1.5 rounded-lg flex items-center gap-1 transition-all">
                                                <i class="fa-solid fa-camera"></i> Escanear
                                            </button>
                                            <input type="file" id="invoice-camera-input" accept="image/*" capture="environment" class="hidden" onchange="processInvoiceFile(event)">
                                            
                                            <!-- Botón de Subir Archivo (Imágenes y PDFs) -->
                                            <button onclick="triggerInvoiceUpload()" class="bg-slate-800 hover:bg-slate-750 border border-slate-700 text-slate-200 text-[10px] font-black px-2 py-1.5 rounded-lg flex items-center gap-1 transition-all">
                                                <i class="fa-solid fa-file-arrow-up"></i> Subir Archivo
                                            </button>
                                            <input type="file" id="invoice-file-input" accept="image/*, application/pdf" class="hidden" onchange="processInvoiceFile(event)">
                                            
                                            <button onclick="addInvoiceItemRow()" class="text-[10px] font-bold text-slate-400 hover:text-white flex items-center gap-0.5 ml-auto">
                                                <i class="fa-solid fa-plus-circle"></i> Línea
                                            </button>
                                        </div>
                                    </div>

                                    <!-- Campos generales de Factura -->
                                    <div class="grid grid-cols-2 gap-2 mb-3">
                                        <div>
                                            <label class="block text-[9px] font-bold text-slate-400 uppercase">Factura No. <span class="text-amber-500">*</span></label>
                                            <input type="text" id="fac-no" placeholder="Ej. F-9021" 
                                                class="w-full rounded-lg bg-slate-900 border border-slate-800 p-2 text-xs text-white placeholder:text-slate-600 focus:border-amber-500">
                                        </div>
                                        <div>
                                            <label class="block text-[9px] font-bold text-slate-400 uppercase">Proveedor / Emisor</label>
                                            <input type="text" id="fac-vendor" placeholder="Ej. Autopartes" 
                                                class="w-full rounded-lg bg-slate-900 border border-slate-800 p-2 text-xs text-white placeholder:text-slate-600 focus:border-amber-500">
                                        </div>
                                    </div>

                                    <!-- Items en Factura -->
                                    <div id="list-invoice-items" class="space-y-2 max-h-[160px] overflow-y-auto pr-1">
                                        <!-- Inyectado dinámicamente -->
                                    </div>
                                    <div id="empty-invoice-alert" class="text-center py-4 text-[11px] text-slate-500">
                                        <p class="italic">Cargue datos o copie la orden del mecánico para iniciar.</p>
                                    </div>
                                </div>

                                <div class="mt-4 pt-3 border-t border-slate-800/80">
                                    <button onclick="executeReconciliation()" class="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-transform active:scale-[0.98]">
                                        <i class="fa-solid fa-magnifying-glass-chart"></i> Ejecutar Análisis de Diferencias
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- MÓDULO DE DIAGNÓSTICO DE CONCILIACIÓN -->
                        <div id="analysis-result-box" class="hidden bg-slate-950 border border-slate-800 rounded-2xl shadow-xl overflow-hidden">
                            
                            <!-- Cabecera de Estado -->
                            <div id="analysis-header" class="p-4 border-b flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                <div>
                                    <h4 class="font-extrabold text-xs text-slate-200 uppercase tracking-wide flex items-center gap-1.5">
                                        <i class="fa-solid fa-list-check"></i> Dashboard de Discrepancias
                                    </h4>
                                    <p class="text-[10px] text-slate-400 mt-0.5">Control de correspondencia de repuestos autorizados en campo.</p>
                                </div>
                                <div id="analysis-overall-badge"></div>
                            </div>

                            <!-- Panel de Estadísticas Rápidas -->
                            <div class="grid grid-cols-2 sm:grid-cols-4 border-b border-slate-800 bg-slate-900/40">
                                <div class="p-3 border-r border-b sm:border-b-0 border-slate-800 text-center">
                                    <span class="text-[9px] font-bold text-slate-400 uppercase">Correctos</span>
                                    <p id="diag-matches" class="text-lg font-bold text-emerald-400 mt-0.5">0</p>
                                </div>
                                <div class="p-3 border-r border-b sm:border-b-0 border-slate-800 text-center">
                                    <span class="text-[9px] font-bold text-slate-400 uppercase">Sin Facturar (Falta)</span>
                                    <p id="diag-missing" class="text-lg font-bold text-amber-500 mt-0.5">0</p>
                                </div>
                                <div class="p-3 border-r border-slate-800 text-center">
                                    <span class="text-[9px] font-bold text-slate-400 uppercase">Extras en Factura</span>
                                    <p id="diag-extra" class="text-lg font-bold text-rose-500 mt-0.5">0</p>
                                </div>
                                <div class="p-3 text-center">
                                    <span class="text-[9px] font-bold text-slate-400 uppercase">Error Cantidad</span>
                                    <p id="diag-qty" class="text-lg font-bold text-indigo-400 mt-0.5">0</p>
                                </div>
                            </div>

                            <!-- Tabla Analítica -->
                            <div class="p-4">
                                <div class="overflow-x-auto">
                                    <table class="w-full text-left text-xs">
                                        <thead>
                                            <tr class="text-slate-500 uppercase tracking-wider border-b border-slate-800 text-[10px]">
                                                <th class="pb-2 w-5/12">Nombre del Repuesto</th>
                                                <th class="pb-2 w-2/12 text-center">Cant. Orden</th>
                                                <th class="pb-2 w-2/12 text-center">Cant. Factura</th>
                                                <th class="pb-2 w-3/12 text-right">Diagnóstico del Almacén</th>
                                            </tr>
                                        </thead>
                                        <tbody id="analysis-table-body" class="divide-y divide-slate-800/60">
                                            <!-- Inyectado vía JS -->
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <!-- Acciones de Aprobación -->
                            <div class="bg-slate-900/60 px-4 py-3 flex justify-between items-center border-t border-slate-800">
                                <span class="text-[10px] text-slate-500 italic">Sincronizado digitalmente</span>
                                <div class="flex gap-2">
                                    <button onclick="approveAndArchive()" class="bg-emerald-600 hover:bg-emerald-700 text-slate-950 font-extrabold px-4 py-2 rounded-lg text-xs flex items-center gap-1 shadow transition-colors">
                                        <i class="fa-solid fa-lock"></i> Cerrar & Archivar Orden
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </section>

    </main>

    <!-- FOOTER GENERAL -->
    <footer class="bg-slate-950 text-slate-500 text-xs py-5 border-t border-slate-800 mt-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
            <p class="font-bold text-slate-400">Grupo Dabroy &copy; 2026</p>
            <p class="text-[10px]">Herramienta premium optimizada para mecánicos de motos en campo y administradores de taller en oficina de Grupo Dabroy con soporte offline.</p>
        </div>
    </footer>

    <!-- LÓGICA / JAVASCRIPT CON SOPORTE DE FIREBASE / LOCALSTORAGE / OFFLINE QUEUE -->
    <script type="module">
        import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
        import { getAuth, signInAnonymously, signInWithCustomToken } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
        import { getFirestore, doc, setDoc, onSnapshot, collection } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

        const appId = typeof __app_id !== 'undefined' ? __app_id : 'grupo-dabroy-motos';
        let db = null;
        let auth = null;
        let useFirebase = false;

        // Lista de órdenes locales o sincronizadas
        let orders = [];
        let currentFilter = 'all'; // all, pending, compared
        let selectedOrderId = null;
        let activeInvoiceList = []; // Estructura dinámica de ítems de factura en el editor

        // Variable global para vigilar el estado de red de forma reactiva
        let isOnline = navigator.onLine;

        // Datos de Demostración Iniciales (Adaptados para Motos)
        const mockOrders = [
            {
                id: "ord-demo-1",
                mechanic: "Gabriel Juárez (Ruta 4)",
                orderNum: "OR-201",
                date: "2026-07-01",
                vehicle: "Yamaha FZ25 2022 - M-402DFG",
                observations: "Cliente reporta fuerte ruido metálico en la transmisión trasera. Se detecta kit de arrastre totalmente desgastado y pastillas de freno traseras al límite.",
                status: "pending",
                parts: [
                    { name: "Aceite de Moto 4T (Litro)", qty: 2 },
                    { name: "Filtro de Aceite de Moto", qty: 1 },
                    { name: "Kit de Arrastre (Cadena/Piñón/Cat)", qty: 1 },
                    { name: "Pastillas de Freno Moto (Set)", qty: 1 }
                ],
                invoice: null,
                comparisonResult: null,
                signature: ""
            },
            {
                id: "ord-demo-2",
                mechanic: "Alejandro Ruiz (Taller Sur)",
                orderNum: "OR-202",
                date: "2026-07-04",
                vehicle: "Honda CB190R 2023 - M-901BVC",
                observations: "Servicio mayor preventivo por kilometraje. Afinación completa y ajuste de válvulas.",
                status: "compared",
                parts: [
                    { name: "Bujía de Moto (Afinación)", qty: 1 },
                    { name: "Filtro de Aire Moto", qty: 1 },
                    { name: "Aceite de Moto 4T (Litro)", qty: 1 }
                ],
                invoice: {
                    no: "FAC-9844",
                    vendor: "MotoRepuestos Express",
                    items: [
                        { name: "Bujía de Moto (Afinación)", qty: 1 },
                        { name: "Filtro de Aire Moto", qty: 1 },
                        { name: "Aceite de Moto 4T (Litro)", qty: 1 },
                        { name: "Spray Limpiador de Carburadores / Inyectores", qty: 1 } // Extra no autorizado
                    ]
                },
                comparisonResult: {
                    overall: 'danger',
                    matches: 3,
                    missing: 0,
                    extra: 1,
                    qtyDiff: 0,
                    details: [
                        { name: "Bujía de Moto (Afinación)", orderQty: 1, invoiceQty: 1, status: "match", desc: "Coincide perfectamente" },
                        { name: "Filtro de Aire Moto", orderQty: 1, invoiceQty: 1, status: "match", desc: "Coincide perfectamente" },
                        { name: "Aceite de Moto 4T (Litro)", orderQty: 1, invoiceQty: 1, status: "match", desc: "Coincide perfectamente" },
                        { name: "Spray Limpiador de Carburadores / Inyectores", orderQty: 0, invoiceQty: 1, status: "extra", desc: "Agregado en Factura pero no reportado por el mecánico" }
                    ]
                },
                signature: ""
            }
        ];

        // Inicialización principal
        window.onload = async function() {
            initSignaturePad();
            setupConnectivityListeners();
            await connectToCloud();
            
            // Detectar el ancho del dispositivo para abrir el modo por defecto adecuado
            if (window.innerWidth >= 1024) {
                switchMode('desktop');
            } else {
                switchMode('mobile');
            }

            // Setear la fecha del día en campo móvil de forma segura
            const dateInput = document.getElementById('mob-date');
            if (dateInput) {
                dateInput.valueAsDate = new Date();
            }

            // Revisar cola pendiente offline al arrancar
            updateOfflineQueueIndicator();
        };

        // ======================= MONITOREO DE CONEXIÓN EN CALIENTE =======================
        function setupConnectivityListeners() {
            window.addEventListener('online', () => {
                isOnline = true;
                handleConnectivityChange();
                syncOfflineQueue(); // Sincronización automática de órdenes en segundo plano
            });

            window.addEventListener('offline', () => {
                isOnline = false;
                handleConnectivityChange();
            });

            // Forzar primer chequeo visual
            handleConnectivityChange();
        }

        function handleConnectivityChange() {
            const banner = document.getElementById('offline-global-banner');
            const indicator = document.getElementById('connection-indicator');
            const txt = document.getElementById('connection-text');
            const submitIcon = document.getElementById('submit-icon');
            const submitText = document.getElementById('submit-text');

            if (isOnline) {
                // Modo Online
                banner.classList.add('hidden');
                indicator.className = "w-2 h-2 rounded-full bg-emerald-500 inline-block animate-ping";
                txt.innerText = useFirebase ? "Sincronizando en la Nube Firestore" : "Modo Local (Online)";
                
                if (submitIcon && submitText) {
                    submitIcon.className = "fa-solid fa-cloud-arrow-up text-lg";
                    submitText.innerText = "ENVIAR ORDEN AL INSTANTE";
                }
            } else {
                // Modo Offline
                banner.classList.remove('hidden');
                indicator.className = "w-2 h-2 rounded-full bg-amber-500 inline-block animate-pulse";
                txt.innerText = "Trabajando sin Internet";
                
                if (submitIcon && submitText) {
                    submitIcon.className = "fa-solid fa-hard-drive text-lg";
                    submitText.innerText = "GUARDAR EN CELULAR (SIN RED)";
                }
            }
        }

        // ======================= CONEXIÓN FIREBASE O LOCALSTORAGE =======================
        async function connectToCloud() {
            try {
                if (typeof __firebase_config !== 'undefined' && __firebase_config) {
                    const firebaseConfig = JSON.parse(__firebase_config);
                    const app = initializeApp(firebaseConfig);
                    db = getFirestore(app);
                    auth = getAuth(app);

                    if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
                        await signInWithCustomToken(auth, __initial_auth_token);
                    } else {
                        await signInAnonymously(auth);
                    }

                    useFirebase = true;
                    handleConnectivityChange(); // Refrescar indicadores
                    
                    // Escuchar cambios en vivo
                    onSnapshot(collection(db, 'artifacts', appId, 'public', 'data', 'orders'), (snapshot) => {
                        orders = [];
                        snapshot.forEach(docSnap => {
                            orders.push({ id: docSnap.id, ...docSnap.data() });
                        });
                        
                        if (orders.length === 0) {
                            mockOrders.forEach(async (item) => {
                                const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'orders', item.id);
                                await setDoc(docRef, item);
                            });
                        }
                        
                        updateSystemUI();
                    }, (err) => {
                        console.error("Error en Firebase Snapshot, usando local:", err);
                        setupLocalFallback();
                    });

                } else {
                    setupLocalFallback();
                }
            } catch (e) {
                console.error("Conexión fallida. Activando modo local offline.", e);
                setupLocalFallback();
            }
        }

        function setupLocalFallback() {
            useFirebase = false;
            handleConnectivityChange();

            const saved = localStorage.getItem("grupodabroy_cloud_data");
            if (saved) {
                orders = JSON.parse(saved);
            } else {
                orders = mockOrders;
                localStorage.setItem("grupodabroy_cloud_data", JSON.stringify(orders));
            }
            updateSystemUI();
        }

        async function saveOrderData(orderObj) {
            if (useFirebase && isOnline) {
                try {
                    const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'orders', orderObj.id);
                    await setDoc(docRef, orderObj);
                } catch (e) {
                    queueOfflineOrder(orderObj);
                    console.error("Fallo al escribir en la nube, encolado offline.", e);
                }
            } else {
                // Si no hay Firebase o no hay internet, se guarda directo en el listado local
                const idx = orders.findIndex(o => o.id === orderObj.id);
                if (idx > -1) {
                    orders[idx] = orderObj;
                } else {
                    orders.unshift(orderObj);
                }
                localStorage.setItem("grupodabroy_cloud_data", JSON.stringify(orders));
                
                // Si estamos en un móvil sin internet, además lo metemos en la cola de reenvío
                if (!isOnline && orderObj.status === 'pending') {
                    queueOfflineOrder(orderObj);
                }

                updateSystemUI();
            }
        }

        // ======================= COLA OFFLINE (MEMORIA DE CELULAR) =======================
        function queueOfflineOrder(orderObj) {
            let queue = [];
            const savedQueue = localStorage.getItem("grupodabroy_offline_queue");
            if (savedQueue) {
                queue = JSON.parse(savedQueue);
            }
            
            // Evitar duplicados en cola
            if (!queue.find(q => q.id === orderObj.id)) {
                queue.push(orderObj);
                localStorage.setItem("grupodabroy_offline_queue", JSON.stringify(queue));
            }

            updateOfflineQueueIndicator();
            showToast("⚠️ Sin señal: Guardada localmente en tu celular.", "info");
        }

        function updateOfflineQueueIndicator() {
            const ind = document.getElementById('mobile-queue-indicator');
            const txt = document.getElementById('mobile-queue-count');
            
            let queue = [];
            const savedQueue = localStorage.getItem("grupodabroy_offline_queue");
            if (savedQueue) {
                queue = JSON.parse(savedQueue);
            }

            if (queue.length > 0) {
                ind.classList.remove('hidden');
                txt.innerText = `Tienes ${queue.length} orden(es) pendientes por sincronizar en la nube de la oficina.`;
            } else {
                ind.classList.add('hidden');
            }
        }

        async function syncOfflineQueue() {
            const savedQueue = localStorage.getItem("grupodabroy_offline_queue");
            if (!savedQueue) return;

            const queue = JSON.parse(savedQueue);
            if (queue.length === 0) return;

            showToast(`🔄 Sincronizando ${queue.length} orden(es) offline...`, "info");

            let successfulSyncCount = 0;
            const remainingQueue = [];

            for (let order of queue) {
                if (useFirebase && isOnline) {
                    try {
                        const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'orders', order.id);
                        await setDoc(docRef, order);
                        successfulSyncCount++;
                    } catch (e) {
                        console.error("Fallo reenvío de orden " + order.orderNum, e);
                        remainingQueue.push(order); // Retener en cola si falla de nuevo
                    }
                } else {
                    remainingQueue.push(order);
                }
            }

            if (successfulSyncCount > 0) {
                showToast(`✅ ¡Enviadas! ${successfulSyncCount} ordenes sincronizadas con la oficina.`, "success");
            }

            localStorage.setItem("grupodabroy_offline_queue", JSON.stringify(remainingQueue));
            updateOfflineQueueIndicator();
        }

        // Permitir que el mecánico intente sincronizar manualmente pulsando un botón
        window.forceSyncQueue = async function() {
            if (!isOnline) {
                showToast("Aún sigues sin internet. Busca señal para poder sincronizar.", "error");
                return;
            }
            await syncOfflineQueue();
        }

        function updateSystemUI() {
            renderPCList();
            calculateDashboards();
        }

        // ======================= CAMBIO DE MODOS MÓVIL / PC =======================
        window.switchMode = function(mode) {
            const btnMobile = document.getElementById('btn-mode-mobile');
            const btnDesktop = document.getElementById('btn-mode-desktop');
            const secMobile = document.getElementById('section-mobile');
            const secDesktop = document.getElementById('section-desktop');

            if (mode === 'mobile') {
                btnMobile.className = "px-3 py-2 rounded-lg text-xs font-black bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20";
                btnDesktop.className = "px-3 py-2 rounded-lg text-xs font-bold text-slate-400 hover:text-white transition-all";
                secMobile.classList.remove('hidden');
                secDesktop.classList.add('hidden');
                updateOfflineQueueIndicator();
            } else {
                btnDesktop.className = "px-3 py-2 rounded-lg text-xs font-black bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20";
                btnMobile.className = "px-3 py-2 rounded-lg text-xs font-bold text-slate-400 hover:text-white transition-all";
                secDesktop.classList.remove('hidden');
                secMobile.classList.add('hidden');
                updateSystemUI();
            }
        }

        // ======================= SECCIÓN MÓVIL: ACCIONES Y DIBUJO =======================
        let canvas, ctx, isDrawing = false;
        
        function initSignaturePad() {
            canvas = document.getElementById('signature-canvas');
            if (!canvas) return;
            ctx = canvas.getContext('2d');
            
            const resize = () => {
                const rect = canvas.getBoundingClientRect();
                canvas.width = rect.width;
                canvas.height = rect.height;
                ctx.strokeStyle = '#f59e0b'; // Color Amber 500
                ctx.lineWidth = 2.5;
                ctx.lineCap = 'round';
            };
            
            window.addEventListener('resize', resize);
            setTimeout(resize, 100);

            // Eventos Mouse
            canvas.addEventListener('mousedown', startDraw);
            canvas.addEventListener('mousemove', draw);
            canvas.addEventListener('mouseup', stopDraw);
            canvas.addEventListener('mouseleave', stopDraw);

            // Eventos Táctiles (Móviles)
            canvas.addEventListener('touchstart', (e) => {
                const touch = e.touches[0];
                const rect = canvas.getBoundingClientRect();
                startDraw({ clientX: touch.clientX, clientY: touch.clientY });
                e.preventDefault();
            });
            canvas.addEventListener('touchmove', (e) => {
                const touch = e.touches[0];
                draw({ clientX: touch.clientX, clientY: touch.clientY });
                e.preventDefault();
            });
            canvas.addEventListener('touchend', stopDraw);
        }

        function startDraw(e) {
            isDrawing = true;
            ctx.beginPath();
            const rect = canvas.getBoundingClientRect();
            ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
        }

        function draw(e) {
            if (!isDrawing) return;
            const rect = canvas.getBoundingClientRect();
            ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
            ctx.stroke();
        }

        function stopDraw() {
            isDrawing = false;
        }

        window.clearSignature = function() {
            if (ctx && canvas) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
        }

        // Simulación de carga rápida de datos de demostración
        window.loadMockFields = function() {
            document.getElementById('mob-mech').value = "Mario Estrada (Ruta Express)";
            document.getElementById('mob-order-num').value = "OR-" + Math.floor(100 + Math.random() * 900);
            document.getElementById('mob-vehicle').value = "Suzuki Gixxer 150 - M-112HJK";
            document.getElementById('mob-observations').value = "Mantenimiento general. Cambio de aceite de motor de 4 tiempos, cambio de filtro de aceite y ajuste y lubricación de cadena de transmisión.";
            
            // Limpiar items anteriores
            document.getElementById('mob-parts-list').innerHTML = "";
            document.getElementById('mob-parts-empty').classList.add('hidden');
            
            // Agregar algunos items iniciales de prueba para moto
            fastAddPart("Aceite de Moto 4T (Litro)", 1);
            fastAddPart("Filtro de Aceite de Moto", 1);

            showToast("Datos de motocicleta cargados de prueba", "info");
        }

        window.fastAddPart = function(name, defaultQty) {
            document.getElementById('mob-parts-empty').classList.add('hidden');
            const container = document.getElementById('mob-parts-list');
            
            let duplicated = false;
            const rows = container.querySelectorAll('.mob-part-row');
            rows.forEach(row => {
                const nameInput = row.querySelector('.part-name');
                if (nameInput.value === name) {
                    const qtyInput = row.querySelector('.part-qty');
                    qtyInput.value = parseInt(qtyInput.value) + defaultQty;
                    duplicated = true;
                }
            });

            if (duplicated) return;

            addMobilePartRow(name, defaultQty);
        }

        window.addMobilePartRow = function(name = "", qty = 1) {
            const emptyLabel = document.getElementById('mob-parts-empty');
            if (emptyLabel) emptyLabel.classList.add('hidden');
            
            const container = document.getElementById('mob-parts-list');
            const div = document.createElement('div');
            div.className = "mob-part-row flex items-center gap-2 bg-slate-950 p-2 rounded-xl border border-slate-800";
            div.innerHTML = `
                <input type="text" placeholder="Repuesto" value="${name}" required
                    class="part-name flex-grow bg-slate-900 border border-slate-700 text-slate-100 p-2 text-xs rounded-lg">
                
                <div class="flex items-center shrink-0">
                    <button type="button" onclick="adjustMobQty(this, -1)" class="px-2.5 py-1.5 bg-slate-800 text-slate-300 rounded-l-lg text-xs font-black">-</button>
                    <input type="number" min="1" value="${qty}" required
                        class="part-qty w-10 text-center bg-slate-900 border-y border-slate-800 text-xs p-1.5 font-bold">
                    <button type="button" onclick="adjustMobQty(this, 1)" class="px-2.5 py-1.5 bg-slate-800 text-slate-300 rounded-r-lg text-xs font-black">+</button>
                </div>

                <button type="button" onclick="deleteMobRow(this)" class="text-rose-500 hover:text-rose-400 p-1">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            `;
            container.appendChild(div);
        }

        window.adjustMobQty = function(btn, delta) {
            const input = btn.parentNode.querySelector('.part-qty');
            let val = parseInt(input.value) || 1;
            val += delta;
            if (val < 1) val = 1;
            input.value = val;
        }

        window.deleteMobRow = function(btn) {
            btn.closest('.mob-part-row').remove();
            const container = document.getElementById('mob-parts-list');
            if (container.children.length === 0) {
                document.getElementById('mob-parts-empty').classList.remove('hidden');
            }
        }

        // Enviar la orden desde el móvil al servidor / localstorage
        window.submitFieldOrder = async function(e) {
            e.preventDefault();

            const mech = document.getElementById('mob-mech').value.trim();
            const orderNum = document.getElementById('mob-order-num').value.trim();
            const date = document.getElementById('mob-date').value;
            const vehicle = document.getElementById('mob-vehicle').value.trim() || "Genérico / Sin Placa";
            const obs = document.getElementById('mob-observations').value.trim();

            const partRows = document.querySelectorAll('.mob-part-row');
            if (partRows.length === 0) {
                showToast("Por favor, agregue al menos un repuesto a la orden", "error");
                return;
            }

            const parts = [];
            for (let row of partRows) {
                const name = row.querySelector('.part-name').value.trim();
                const qty = parseInt(row.querySelector('.part-qty').value) || 1;
                if (!name) {
                    showToast("Por favor llene todos los nombres de repuesto", "error");
                    return;
                }
                parts.push({ name, qty });
            }

            // Convertir la firma en Imagen Base64 de forma segura
            let signature = "";
            if (canvas) {
                signature = canvas.toDataURL();
            }

            const newOrderObj = {
                id: "ord-" + Date.now(),
                mechanic: mech,
                orderNum: orderNum,
                date: date,
                vehicle: vehicle,
                observations: obs,
                status: "pending",
                parts: parts,
                invoice: null,
                comparisonResult: null,
                signature: signature
            };

            await saveOrderData(newOrderObj);

            // Limpiar formulario móvil
            document.getElementById('mobile-order-form').reset();
            document.getElementById('mob-parts-list').innerHTML = "";
            document.getElementById('mob-parts-empty').classList.remove('hidden');
            clearSignature();
            
            const dateInput = document.getElementById('mob-date');
            if (dateInput) {
                dateInput.valueAsDate = new Date();
            }

            if (isOnline) {
                showToast(`¡Excelente! Orden ${orderNum} enviada a la oficina en tiempo real.`, "success");
            }

            if (window.innerWidth >= 1024) {
                switchMode('desktop');
                selectOrder(newOrderObj.id);
            }
        }

        // ======================= SECCIÓN DE ESCRITORIO: BUZÓN Y COMPARADOR =======================
        function calculateDashboards() {
            document.getElementById('dash-total-orders').innerText = orders.length;
            document.getElementById('dash-pending-orders').innerText = orders.filter(o => o.status === 'pending').length;
            document.getElementById('dash-ok-orders').innerText = orders.filter(o => o.comparisonResult?.overall === 'match').length;
            document.getElementById('dash-alert-orders').innerText = orders.filter(o => o.comparisonResult && o.comparisonResult.overall !== 'match').length;
        }

        window.setFilter = function(filter) {
            currentFilter = filter;
            const btnAll = document.getElementById('filter-all');
            const btnPending = document.getElementById('filter-pending');
            const btnCompared = document.getElementById('filter-compared');

            btnAll.className = "text-[10px] py-1.5 rounded-lg font-bold bg-slate-900 border border-slate-800 text-slate-400 transition-colors";
            btnPending.className = "text-[10px] py-1.5 rounded-lg font-bold bg-slate-900 border border-slate-800 text-slate-400 transition-colors";
            btnCompared.className = "text-[10px] py-1.5 rounded-lg font-bold bg-slate-900 border border-slate-800 text-slate-400 transition-colors";

            if (filter === 'all') {
                btnAll.className = "text-[10px] py-1.5 rounded-lg font-bold bg-amber-500 text-slate-950 transition-colors shadow-sm";
            } else if (filter === 'pending') {
                btnPending.className = "text-[10px] py-1.5 rounded-lg font-bold bg-amber-500 text-slate-950 transition-colors shadow-sm";
            } else {
                btnCompared.className = "text-[10px] py-1.5 rounded-lg font-bold bg-amber-500 text-slate-950 transition-colors shadow-sm";
            }

            renderPCList();
        }

        window.filterFieldOrders = function() {
            renderPCList();
        }

        function renderPCList() {
            const container = document.getElementById('pc-orders-container');
            const searchVal = document.getElementById('pc-order-search').value.toLowerCase();
            container.innerHTML = "";

            let list = [...orders];

            if (currentFilter === 'pending') {
                list = list.filter(o => o.status === 'pending');
            } else if (currentFilter === 'compared') {
                list = list.filter(o => o.status === 'compared');
            }

            if (searchVal) {
                list = list.filter(o => 
                    o.orderNum.toLowerCase().includes(searchVal) || 
                    o.mechanic.toLowerCase().includes(searchVal) ||
                    o.vehicle.toLowerCase().includes(searchVal)
                );
            }

            document.getElementById('badge-total-list').innerText = list.length;

            if (list.length === 0) {
                container.innerHTML = `
                    <div class="text-center py-10 text-slate-600 text-xs">
                        <i class="fa-solid fa-clipboard-question text-3xl mb-2"></i>
                        <p>No se encontraron órdenes</p>
                    </div>
                `;
                return;
            }

            list.forEach(order => {
                const isSelected = selectedOrderId === order.id;
                
                let badge = "";
                if (order.status === 'pending') {
                    badge = `<span class="bg-amber-500/10 text-amber-500 border border-amber-500/20 text-[9px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">Pendiente</span>`;
                } else {
                    const res = order.comparisonResult?.overall || 'match';
                    if (res === 'match') {
                        badge = `<span class="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[9px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">Conciliado</span>`;
                    } else if (res === 'warning') {
                        badge = `<span class="bg-amber-500/10 text-amber-500 border border-amber-500/20 text-[9px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">Detalles</span>`;
                    } else {
                        badge = `<span class="bg-rose-500/10 text-rose-400 border border-rose-500/20 text-[9px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">Discrepancia</span>`;
                    }
                }

                const card = document.createElement('div');
                card.onclick = () => selectOrder(order.id);
                card.className = `p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                    isSelected 
                        ? 'border-amber-500 bg-amber-500/5 shadow-lg' 
                        : 'border-slate-800 bg-slate-900/40 hover:bg-slate-900 hover:border-slate-700'
                }`;
                card.innerHTML = `
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-xs font-black text-white">${order.orderNum}</span>
                        ${badge}
                    </div>
                    <div class="space-y-1">
                        <p class="text-xs text-slate-300 flex items-center gap-1.5"><i class="fa-solid fa-wrench text-[10px] text-amber-500/70"></i> ${order.mechanic}</p>
                        <p class="text-[11px] text-slate-400 flex items-center gap-1.5"><i class="fa-solid fa-motorcycle text-[10px]"></i> ${order.vehicle}</p>
                    </div>
                    <div class="mt-2 pt-2 border-t border-slate-800 flex justify-between items-center text-[10px] text-slate-500">
                        <span><i class="fa-solid fa-clock"></i> ${order.date}</span>
                        <span class="font-bold text-slate-300 bg-slate-800 px-2 py-0.5 rounded-full">${order.parts.length} piezas</span>
                    </div>
                `;
                container.appendChild(card);
            });
        }

        window.selectOrder = function(id) {
            selectedOrderId = id;
            const order = orders.find(o => o.id === id);
            if (!order) return;

            renderPCList();

            document.getElementById('pc-empty-state').classList.add('hidden');
            document.getElementById('pc-active-state').classList.remove('hidden');

            // Cargar metadata
            document.getElementById('active-order-title').innerText = order.orderNum;
            document.getElementById('active-mech-name').innerText = order.mechanic;
            document.getElementById('active-vehicle-name').innerText = order.vehicle;
            document.getElementById('active-order-date').innerHTML = `<i class="fa-solid fa-calendar-alt"></i> Recibida: ${order.date}`;
            document.getElementById('active-observations').innerText = order.observations || "El mecánico no reportó observaciones.";

            // Cargar firma digital
            const signContainer = document.getElementById('active-signature-preview');
            if (order.signature && order.signature.length > 50) {
                signContainer.innerHTML = `<img src="${order.signature}" alt="Firma" class="h-10 bg-slate-950 rounded border border-slate-800">`;
            } else {
                signContainer.innerHTML = `<span class="text-[10px] text-slate-600 italic">No firmado</span>`;
            }

            // Badge de Estado Actual
            const badge = document.getElementById('active-status-badge');
            if (order.status === 'pending') {
                badge.className = "px-2 py-0.5 rounded text-[10px] font-black uppercase bg-amber-500/10 text-amber-500 border border-amber-500/20";
                badge.innerText = "Pendiente de Conciliación";
            } else {
                badge.className = "px-2 py-0.5 rounded text-[10px] font-black uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20";
                badge.innerText = "Conciliada & Archivada";
            }

            // Mostrar ítems de la orden
            const orderPartsContainer = document.getElementById('list-order-items');
            orderPartsContainer.innerHTML = "";
            document.getElementById('count-order-items').innerText = `${order.parts.length} repuestos`;
            
            order.parts.forEach(part => {
                const itemDiv = document.createElement('div');
                itemDiv.className = "bg-slate-900 border border-slate-800 p-2 rounded-xl flex justify-between items-center";
                itemDiv.innerHTML = `
                    <span class="text-xs text-slate-300 font-bold">${part.name}</span>
                    <span class="bg-slate-800 text-amber-500 px-2 py-0.5 rounded font-black text-xs">Cant: ${part.qty}</span>
                `;
                orderPartsContainer.appendChild(itemDiv);
            });

            // Cargar factura
            if (order.invoice) {
                document.getElementById('fac-no').value = order.invoice.no || "";
                document.getElementById('fac-vendor').value = order.invoice.vendor || "";
                activeInvoiceList = JSON.parse(JSON.stringify(order.invoice.items));
            } else {
                document.getElementById('fac-no').value = "";
                document.getElementById('fac-vendor').value = "";
                activeInvoiceList = [];
            }
            rebuildInvoiceEditor();

            if (order.comparisonResult) {
                renderReconciliationResults(order.comparisonResult);
            } else {
                document.getElementById('analysis-result-box').classList.add('hidden');
            }
        }

        window.addInvoiceItemRow = function() {
            activeInvoiceList.push({ name: "", qty: 1 });
            rebuildInvoiceEditor();
        }

        window.deleteInvoiceItemRow = function(index) {
            activeInvoiceList.splice(index, 1);
            rebuildInvoiceEditor();
        }

        window.syncInvoiceItem = function(index, field, value) {
            if (field === 'qty') {
                activeInvoiceList[index][field] = parseInt(value) || 1;
            } else {
                activeInvoiceList[index][field] = value;
            }
        }

        window.copiarAlFacturador = function() {
            const order = orders.find(o => o.id === selectedOrderId);
            if (!order) return;

            activeInvoiceList = JSON.parse(JSON.stringify(order.parts));
            rebuildInvoiceEditor();
            showToast("La orden de campo ha sido transferida a la factura", "success");
        }

        window.triggerInvoiceCamera = function() {
            const input = document.getElementById('invoice-camera-input');
            if (input) input.click();
        }

        window.triggerInvoiceUpload = function() {
            const input = document.getElementById('invoice-file-input');
            if (input) input.click();
        }

        window.processInvoiceFile = async function(event) {
            const file = event.target.files[0];
            if (!file) return;

            toggleInvoiceLoader(true);
            showToast("Procesando documento con Inteligencia Artificial...", "info");

            try {
                const base64Data = await convertFileToBase64(file);
                let mimeType = file.type || "image/jpeg";
                
                // Forzar tipos compatibles si el navegador no provee el tipo correcto basado en la extensión del archivo
                if (file.name.toLowerCase().endsWith('.pdf')) {
                    mimeType = "application/pdf";
                } else if (file.name.toLowerCase().endsWith('.png')) {
                    mimeType = "image/png";
                } else if (file.name.toLowerCase().endsWith('.webp')) {
                    mimeType = "image/webp";
                }

                const extractedData = await scanInvoiceWithGemini(base64Data, mimeType);

                if (extractedData) {
                    document.getElementById('fac-no').value = extractedData.invoiceNumber || "";
                    document.getElementById('fac-vendor').value = extractedData.vendor || "";
                    activeInvoiceList = extractedData.items || [];
                    rebuildInvoiceEditor();
                    showToast("¡Factura procesada y cargada con éxito!", "success");
                } else {
                    showToast("No pudimos leer la estructura de la factura. Ingrésela manualmente.", "error");
                }
            } catch (error) {
                console.error("Error al procesar la factura:", error);
                showToast("Error en el escáner de IA. Intente con otra imagen o PDF.", "error");
            } finally {
                toggleInvoiceLoader(false);
                event.target.value = ""; // Reiniciar input
            }
        }

        function toggleInvoiceLoader(show) {
            const loader = document.getElementById('invoice-ai-loader');
            if (loader) {
                if (show) loader.classList.remove('hidden');
                else loader.classList.add('hidden');
            }
        }

        function convertFileToBase64(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    const base64 = reader.result.split(',')[1];
                    resolve(base64);
                };
                reader.onerror = error => reject(error);
            });
        }

        async function scanInvoiceWithGemini(base64Data, mimeType = "image/png") {
            const apiKey = ""; // Suministrado en runtime por la plataforma Canvas
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`;

            const systemPrompt = `Actúa como un extractor contable experto para el taller mecánico de motos de "Grupo Dabroy". Analiza el documento de la factura provisto (puede ser una imagen o un PDF) y extrae la información estructurada precisa.
            
            Debes mapear y limpiar los nombres de los repuestos que identifiques en el archivo para que coincidan lo mejor posible con nombres técnicos simples de taller de motocicletas (ej. Aceite 4T, Bujía de Moto, Pastillas de Freno, Kit de Arrastre, etc.).`;

            const payload = {
                contents: [
                    {
                        role: "user",
                        parts: [
                            { text: "Lee y procesa los datos de este documento de factura de repuestos de motos." },
                            {
                                inlineData: {
                                    mimeType: mimeType,
                                    data: base64Data
                                }
                            }
                        ]
                    }
                ],
                generationConfig: {
                    responseMimeType: "application/json",
                    responseSchema: {
                        type: "OBJECT",
                        properties: {
                            invoiceNumber: { type: "STRING", description: "Número de factura o serie correlativa." },
                            vendor: { type: "STRING", description: "Nombre comercial del proveedor que emite la factura." },
                            items: {
                                type: "ARRAY",
                                items: {
                                    type: "OBJECT",
                                    properties: {
                                        name: { type: "STRING", description: "Descripción del repuesto limpio o servicio." },
                                        qty: { type: "INTEGER", description: "Cantidad adquirida en la factura." }
                                    },
                                    required: ["name", "qty"]
                                }
                            }
                        },
                        required: ["invoiceNumber", "vendor", "items"]
                    }
                },
                systemInstruction: {
                    parts: [{ text: systemPrompt }]
                }
            };

            let retries = 3;
            let delay = 1000;
            while (retries > 0) {
                try {
                    const response = await fetch(apiUrl, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    });

                    if (!response.ok) {
                        if (response.status === 429) throw new Error("Throttling...");
                        throw new Error("HTTP " + response.status);
                    }

                    const result = await response.json();
                    const jsonText = result.candidates?.[0]?.content?.parts?.[0]?.text;
                    if (jsonText) {
                        return JSON.parse(jsonText);
                    }
                    return null;
                } catch (err) {
                    retries--;
                    if (retries === 0) throw err;
                    await new Promise(r => setTimeout(r, delay));
                    delay *= 2;
                }
            }
            return null;
        }

        function rebuildInvoiceEditor() {
            const container = document.getElementById('list-invoice-items');
            const alert = document.getElementById('empty-invoice-alert');
            container.innerHTML = "";

            if (activeInvoiceList.length === 0) {
                alert.classList.remove('hidden');
                return;
            } else {
                alert.classList.add('hidden');
            }

            activeInvoiceList.forEach((item, index) => {
                const row = document.createElement('div');
                row.className = "flex items-center gap-1.5 bg-slate-900 p-1.5 rounded-lg border border-slate-800";
                row.innerHTML = `
                    <input type="text" placeholder="Repuesto facturado" value="${item.name}" required
                        oninput="syncInvoiceItem(${index}, 'name', this.value)"
                        class="flex-grow bg-slate-950 border border-slate-800 rounded p-1.5 text-xs text-white">
                    
                    <input type="number" min="1" value="${item.qty}" required
                        oninput="syncInvoiceItem(${index}, 'qty', this.value)"
                        class="w-10 text-center bg-slate-950 border border-slate-800 rounded p-1.5 text-xs text-amber-500 font-bold">

                    <button type="button" onclick="deleteInvoiceItemRow(${index})" class="text-rose-500 hover:text-rose-400 p-1">
                        <i class="fa-solid fa-minus-circle"></i>
                    </button>
                `;
                container.appendChild(row);
            });
        }

        // ======================= ENGINE: COMPARADOR DE ORDEN VS FACTURA =======================
        window.executeReconciliation = async function() {
            const order = orders.find(o => o.id === selectedOrderId);
            if (!order) return;

            const facNo = document.getElementById('fac-no').value.trim();
            const facVendor = document.getElementById('fac-vendor').value.trim() || "No especificado";

            if (!facNo) {
                showToast("Es obligatorio ingresar un Número de Factura para auditar.", "error");
                return;
            }

            const cleanText = (str) => {
                if (!str) return "";
                return str.toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .replace(/[^a-z0-9]/g, " ")
                    .replace(/\s+/g, " ")
                    .trim();
            };

            const ordMap = {};
            order.parts.forEach(p => {
                const norm = cleanText(p.name);
                ordMap[norm] = { name: p.name, qty: p.qty, checked: false };
            });

            const facMap = {};
            activeInvoiceList.forEach(p => {
                const norm = cleanText(p.name);
                if (facMap[norm]) {
                    facMap[norm].qty += p.qty;
                } else {
                    facMap[norm] = { name: p.name, qty: p.qty, checked: false };
                }
            });

            const diagnostics = [];
            let ok = 0;
            let missing = 0;
            let extra = 0;
            let qtyDiff = 0;

            Object.keys(ordMap).forEach(key => {
                const oItem = ordMap[key];
                const fItem = facMap[key];

                if (fItem) {
                    oItem.checked = true;
                    fItem.checked = true;

                    if (oItem.qty === fItem.qty) {
                        ok++;
                        diagnostics.push({
                            name: oItem.name,
                            orderQty: oItem.qty,
                            invoiceQty: fItem.qty,
                            status: "match",
                            desc: "Piezas y cantidades coinciden perfectamente."
                        });
                    } else {
                        qtyDiff++;
                        diagnostics.push({
                            name: oItem.name,
                            orderQty: oItem.qty,
                            invoiceQty: fItem.qty,
                            status: "qty-diff",
                            desc: `Error de cantidades (Campo: ${oItem.qty} vs Factura: ${fItem.qty}).`
                        });
                    }
                } else {
                    missing++;
                    diagnostics.push({
                        name: oItem.name,
                        orderQty: oItem.qty,
                        invoiceQty: 0,
                        status: "missing",
                        desc: "El mecánico reportó el cambio de esta pieza pero no se cobró."
                    });
                }
            });

            Object.keys(facMap).forEach(key => {
                const fItem = facMap[key];
                if (!fItem.checked) {
                    extra++;
                    diagnostics.push({
                        name: fItem.name,
                        orderQty: 0,
                        invoiceQty: fItem.qty,
                        status: "extra",
                        desc: "Cobrado en factura. NO reportado/solicitado en el campo."
                    });
                }
            });

            let overall = "match";
            if (qtyDiff > 0 || extra > 0) {
                overall = "danger";
            } else if (missing > 0) {
                overall = "warning";
            }

            const compResult = {
                overall: overall,
                matches: ok,
                missing: missing,
                extra: extra,
                qtyDiff: qtyDiff,
                details: diagnostics
            };

            order.invoice = {
                no: facNo,
                vendor: facVendor,
                items: JSON.parse(JSON.stringify(activeInvoiceList))
            };
            order.comparisonResult = compResult;
            order.status = 'compared';

            await saveOrderData(order);
            renderReconciliationResults(compResult);
            showToast("Auditoría de correspondencia completada.", "success");
        }

        function renderReconciliationResults(result) {
            const box = document.getElementById('analysis-result-box');
            box.classList.remove('hidden');

            const header = document.getElementById('analysis-header');
            const badgeContainer = document.getElementById('analysis-overall-badge');

            if (result.overall === 'match') {
                header.className = "p-4 border-b border-emerald-500/30 bg-emerald-500/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2";
                badgeContainer.innerHTML = `
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-black bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 gap-1.5">
                        <i class="fa-solid fa-check-circle"></i> CONCILIADO EXITOSAMENTE
                    </span>
                `;
            } else if (result.overall === 'warning') {
                header.className = "p-4 border-b border-amber-500/30 bg-amber-500/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2";
                badgeContainer.innerHTML = `
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-black bg-amber-500/10 text-amber-400 border border-amber-500/30 gap-1.5">
                        <i class="fa-solid fa-triangle-exclamation"></i> ADVERTENCIA: PIEZAS FALTANTES
                    </span>
                `;
            } else {
                header.className = "p-4 border-b border-rose-500/30 bg-rose-500/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2";
                badgeContainer.innerHTML = `
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-black bg-rose-500/10 text-rose-400 border border-rose-500/30 gap-1.5 animate-pulse">
                        <i class="fa-solid fa-triangle-exclamation"></i> ALERTA: DISCREPANCIAS EN FACTURA
                    </span>
                `;
            }

            document.getElementById('diag-matches').innerText = result.matches;
            document.getElementById('diag-missing').innerText = result.missing;
            document.getElementById('diag-extra').innerText = result.extra;
            document.getElementById('diag-qty').innerText = result.qtyDiff;

            const tbody = document.getElementById('analysis-table-body');
            tbody.innerHTML = "";

            result.details.forEach(det => {
                let badge = "";
                let bgClass = "bg-slate-900/10";
                
                if (det.status === 'match') {
                    badge = `<span class="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[9px] px-2 py-0.5 rounded font-bold uppercase">Correcto</span>`;
                } else if (det.status === 'qty-diff') {
                    badge = `<span class="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-[9px] px-2 py-0.5 rounded font-bold uppercase">Cantidad incorrecta</span>`;
                    bgClass = "bg-indigo-500/[0.03]";
                } else if (det.status === 'missing') {
                    badge = `<span class="bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[9px] px-2 py-0.5 rounded font-bold uppercase">Sin Cobrar</span>`;
                    bgClass = "bg-amber-500/[0.03]";
                } else {
                    badge = `<span class="bg-rose-500/10 text-rose-400 border border-rose-500/20 text-[9px] px-2 py-0.5 rounded font-bold uppercase">No Solicitado</span>`;
                    bgClass = "bg-rose-500/[0.03]";
                }

                const tr = document.createElement('tr');
                tr.className = `transition-all ${bgClass} hover:bg-slate-800/40`;
                tr.innerHTML = `
                    <td class="py-3 font-semibold text-slate-200 text-xs">${det.name}</td>
                    <td class="py-3 text-center text-slate-400 font-bold">${det.orderQty || '-'}</td>
                    <td class="py-3 text-center text-slate-400 font-bold">${det.invoiceQty || '-'}</td>
                    <td class="py-3 text-right">
                        <div class="flex flex-col items-end">
                            ${badge}
                            <span class="text-[10px] text-slate-400 mt-1">${det.desc}</span>
                        </div>
                    </td>
                `;
                tbody.appendChild(tr);
            });

            box.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }

        window.approveAndArchive = async function() {
            const idx = orders.findIndex(o => o.id === selectedOrderId);
            if (idx === -1) return;

            orders[idx].status = 'compared';
            await saveOrderData(orders[idx]);

            showToast("La orden ha sido totalmente validada y resguardada.", "success");

            selectedOrderId = null;
            document.getElementById('pc-empty-state').classList.remove('hidden');
            document.getElementById('pc-active-state').classList.add('hidden');
            document.getElementById('analysis-result-box').classList.add('hidden');
        }

        window.simulatePrint = function() {
            window.print();
        }

        function showToast(message, type = "success") {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');

            let icon = '<i class="fa-solid fa-circle-check text-emerald-400"></i>';
            let borderClasses = "border-emerald-500/30 bg-slate-950 text-white shadow-emerald-500/5";
            
            if (type === 'error') {
                icon = '<i class="fa-solid fa-circle-exclamation text-rose-400"></i>';
                borderClasses = "border-rose-500/30 bg-slate-950 text-white shadow-rose-500/5";
            } else if (type === 'info') {
                icon = '<i class="fa-solid fa-circle-info text-amber-400"></i>';
                borderClasses = "border-amber-500/30 bg-slate-950 text-white shadow-amber-500/5";
            }

            toast.className = `pointer-events-auto flex items-center space-x-3.5 p-4 rounded-xl border shadow-xl ${borderClasses} text-xs font-semibold transform translate-y-2 opacity-0 transition-all duration-300 w-full`;
            toast.innerHTML = `
                <div class="text-base">${icon}</div>
                <div class="flex-grow">${message}</div>
                <button onclick="this.parentElement.remove()" class="text-slate-500 hover:text-white transition-colors"><i class="fa-solid fa-xmark"></i></button>
            `;

            container.appendChild(toast);

            setTimeout(() => {
                toast.classList.remove('translate-y-2', 'opacity-0');
            }, 10);

            setTimeout(() => {
                toast.classList.add('opacity-0', 'translate-y-[-10px]');
                setTimeout(() => toast.remove(), 300);
            }, 5000);
        }
    </script>
</body>
</html>
