/* -------------------------------------------------------------
   BASE DE DATOS DE EQUIPOS - CENTRO DE PROTOTIPADO
   ------------------------------------------------------------- */
const EQUIPOS_DB = {
    ender3: {
        id: "ender3",
        name: "Impresora 3D Ender-3 V3",
        category: "Fusión de Filamento (FDM)",
        shortDesc: "Impresora FDM de alta velocidad para prototipado rápido de piezas mecánicas y carcasas en PLA, PETG y TPU.",
        materials: "PLA, PETG, TPU, ABS (con cabina)",
        area: "220 x 220 x 250 mm",
        features: [
            "Extrusor directo de doble engranaje 'Sprite' ideal para filamentos flexibles.",
            "Nivelación automática CR-Touch de 25 puntos para una primera capa perfecta.",
            "Velocidad de impresión máxima de 250 mm/s con aceleración de 2500 mm/s².",
            "Cama de acero de resorte PC magnética y flexible para fácil desprendimiento."
        ],
        steps: [
            "<strong>Encendido y Verificación:</strong> Enciende el interruptor trasero. Verifica que la cama de impresión esté limpia y sin residuos.",
            "<strong>Preparación del Filamento:</strong> Inserta el rollo en el soporte superior, corta la punta a 45° e introdúcelo en el extrusor presionando la palanca del extrusor directo.",
            "<strong>Precalentamiento:</strong> En el menú de la pantalla, selecciona 'Prepare' > 'Preheat PLA' (o PETG). Espera a que la boquilla alcance los 200°C y la cama los 60°C.",
            "<strong>Laminación de Archivo:</strong> Abre Creality Print o Cura en tu PC, importa tu modelo .STL, configura los parámetros (relleno 20%, capa 0.2mm) y exporta el archivo .GCODE a la tarjeta SD.",
            "<strong>Inicio del Trabajo:</strong> Inserta la tarjeta SD en la ranura lateral, selecciona 'Print from SD' en la pantalla, elige tu archivo y monitorea la primera capa."
        ],
        safety: "La boquilla se calienta a 260°C y la cama a 110°C. Mantén las manos alejadas del área de movimiento mientras esté activa.",
        maintLast: "02/06/2026 - Lubricación de ejes",
        maintFreq: "Cada 50 horas de uso",
        maintTasks: [
            "Limpiar la cama magnética con alcohol isopropílico (IPA) al 99% antes de imprimir.",
            "Revisar la tensión de las correas de los ejes X e Y (deben sonar como cuerda de guitarra al tocarlas).",
            "Limpiar e inspeccionar la boquilla para remover filamento quemado o acumulado.",
            "Lubricar las varillas roscadas del eje Z con grasa de litio fina."
        ]
    },
    laser: {
        id: "laser",
        name: "Cortadora Láser CFL-CMA 1390",
        category: "Corte y Grabado",
        shortDesc: "Cortadora por láser de CO2 industrial CFL-CMA 1390 para corte de gran formato de alta precisión y grabado superficial de materiales orgánicos y plásticos.",
        materials: "Acrílico, MDF, Madera contrachapada, Cuero, Cartón (PROHIBIDO: PVC, Vinilo y Policarbonato por gases tóxicos)",
        area: "1300 x 900 mm (Tubo de 100W)",
        features: [
            "Tubo láser de CO2 de 100W de potencia con refrigeración líquida activa (Chiller CW-5200).",
            "Cabezal de enfoque de alta resolución con puntero rojo de posicionamiento.",
            "Área de trabajo expandida de 1300 x 900 mm con mesa de elevación motorizada.",
            "Controlador digital Ruida compatible con software RDWorks y LightBurn."
        ],
        steps: [
            "<strong>Sistemas Auxiliares:</strong> Enciende primero el Chiller (enfriador de agua) y comprueba que no tenga alarmas. Luego enciende el extractor de humo y el compresor de asistencia de aire.",
            "<strong>Encendido de la Máquina:</strong> Gira la llave de seguridad de la cortadora y presiona el botón de encendido principal.",
            "<strong>Carga de Material y Enfoque:</strong> Coloca el material plano sobre la colmena. Usa la pieza de calibración metálica para ajustar la distancia focal (distancia entre la boquilla y el material).",
            "<strong>Preparación del Archivo:</strong> Diseña en vectores (.DXF o .AI). En LightBurn, asigna colores diferentes para 'Cortar' (velocidad baja, potencia alta) y 'Grabar' (velocidad alta, potencia baja) y envía el archivo vía USB o Red.",
            "<strong>Ejecución y Monitoreo:</strong> Posiciona el cabezal en el origen deseado, presiona 'Frame' para ver el área de corte y, si todo está despejado, presiona 'Start'. NUNCA dejes la máquina sola durante el corte."
        ],
        safety: "Láser Clase 4 invisible. Use gafas de protección obligatoriamente. Riesgo alto de incendio: mantenga un extintor de CO2 cerca y vigile el proceso continuamente.",
        maintLast: "31/05/2026 - Limpieza de ópticos",
        maintFreq: "Semanal / 20 horas de uso",
        maintTasks: [
            "Limpiar los tres espejos reflectores y la lente de enfoque utilizando papel óptico y alcohol isopropílico.",
            "Limpiar los residuos de corte y hollín acumulados en las guías de los ejes X e Y y lubricar ligeramente.",
            "Vaciar la bandeja de retención de piezas caídas debajo de la cama de colmena.",
            "Verificar el nivel de agua destilada y temperatura del Chiller (debe estar entre 18°C y 22°C)."
        ]
    },
    plotter: {
        id: "plotter",
        name: "Plotter de Impresión/Corte",
        category: "Formato Ancho",
        shortDesc: "Plotter híbrido de inyección de tinta y corte de contornos para vinilos adhesivos, planos arquitectónicos y cartelería.",
        materials: "Vinilo autoadhesivo, Papel bond, Papel fotográfico, Lona banner, Vinilo textil",
        area: "Ancho de material hasta 1300 mm",
        features: [
            "Cabezal de impresión micro-piezoeléctrico de alta definición con tintas solventes.",
            "Cuchilla de corte integrada con fuerza de presión regulable por software.",
            "Sistema de calefacción de material delantero y trasero para secado rápido.",
            "Rodillos de tracción ajustables con sensor óptico de registro."
        ],
        steps: [
            "<strong>Carga de Material:</strong> Inserta el rollo de material en el eje trasero. Pásalo por la ranura y asegúralo bajando la palanca de rodillos de presión. Ajusta los rodillos en las marcas.",
            "<strong>Encendido y Test:</strong> Enciende el plotter. La máquina medirá el ancho del material automáticamente. Realiza un 'Nozzle Test' (prueba de inyectores) para verificar la calidad de impresión.",
            "<strong>Configuración de Archivo:</strong> Prepara el archivo con líneas de corte en una capa dedicada ('CutContour' en color plano). En el software RIP (como VersaWorks), configura la escala y distribución.",
            "<strong>Envío de Trabajo:</strong> Envía el trabajo a imprimir y cortar. Si solo es corte de vinilo, configura la presión de la cuchilla (fuerza en gramos) mediante pruebas de corte pequeñas.",
            "<strong>Post-Proceso:</strong> Espera a que el material seque completamente antes de manipularlo o depilar el vinilo."
        ],
        safety: "No obstruyas el movimiento del carro de cabezales. Evita inhalar vapores de tintas solventes prolongadamente; mantén el área ventilada.",
        maintLast: "28/05/2026 - Purga de inyectores",
        maintFreq: "Semanal",
        maintTasks: [
            "Realizar ciclo de limpieza de cabezales automático al iniciar la jornada.",
            "Limpiar manualmente con hisopos de espuma y líquido limpiador especial alrededor del cabezal y la estación de tapado (capping).",
            "Limpiar la banda del codificador (encoder strip) con un paño seco y libre de pelusas.",
            "Inspeccionar el contenedor de residuo de tintas y desechar de forma segura si está lleno."
        ]
    },
    resin: {
        id: "resin",
        name: "Anycubic Photon 2",
        category: "Resina Estereolitografía (SLA)",
        shortDesc: "Impresora de resina LCD/MSLA de alta resolución, ideal para prototipos con detalles microscópicos, joyería y piezas dentales.",
        materials: "Resina fotosensible UV 405nm (Estándar, ABS-like, Flexible, Dental)",
        area: "119 x 73 x 150 mm (Resolución 4K)",
        features: [
            "Pantalla LCD monocromática 4K de 5.9 pulgadas para detalles de hasta 34 micras.",
            "Matriz de luz LCR (Light Contrast Resin) que garantiza exposición uniforme de luz UV.",
            "Tanque de resina con película FEP de liberación rápida y marcas de nivel máximo.",
            "Eje Z con carril guía lineal doble para mayor estabilidad y reducción del z-wobble."
        ],
        steps: [
            "<strong>Medidas de Protección:</strong> Colócate guantes de nitrilo, mascarilla para vapores orgánicos y gafas de seguridad antes de manipular la resina.",
            "<strong>Preparación del Tanque:</strong> Verifica que la película FEP en el fondo del tanque esté tensa, limpia y sin marcas. Asegura el tanque con los tornillos laterales.",
            "<strong>Laminación del Modelo:</strong> Carga el modelo en Anycubic Photon Workshop o Lychee Slicer. Añade soportes (obligatorio en resina) e inclina la pieza a 45° para reducir tensión. Exporta en formato .pw2.",
            "<strong>Carga de Insumos y Arranque:</strong> Agita bien la botella de resina durante 1 minuto. Viértela lentamente en el tanque hasta cubrir la mitad del nivel. Inserta la USB, selecciona el archivo e inicia.",
            "<strong>Post-Procesamiento (CRÍTICO):</strong> Retira la plataforma. Desprende las piezas con la espátula. Lávalas en alcohol isopropílico (IPA) durante 5-10 minutos en la estación de lavado. Luego cúralas bajo luz UV durante 3-5 minutos."
        ],
        safety: "La resina líquida es tóxica e irritante al contacto con la piel. NUNCA la deseches por el desagüe. Cura los residuos líquidos bajo el sol para solidificarlos antes de botarlos.",
        maintLast: "01/06/2026 - Cambio de película FEP",
        maintFreq: "Mensual / Ante fallas de impresión",
        maintTasks: [
            "Limpiar la plataforma de impresión metálica con alcohol isopropílico para retirar resina curada residual.",
            "Filtrar la resina del tanque de vuelta a la botella usando un colador especial si se sospecha que hay trozos curados flotando.",
            "Inspeccionar el estado de la película FEP buscando perforaciones, opacidad excesiva o arrugas.",
            "Limpiar la pantalla LCD de exposición UV utilizando toallitas de microfibra y alcohol isopropílico."
        ]
    },
    "robotic-arm": {
        id: "robotic-arm",
        name: "Brazo Robótico szgh-P1500-B-6",
        category: "Automatización",
        shortDesc: "Brazo robótico articulado industrial szgh-P1500-B-6 de 6 ejes para entrenamiento en programación, Pick-and-Place, y simulación de manufactura a gran escala.",
        materials: "Piezas de manipulación y herramientas con carga útil de hasta 6 kg",
        area: "Alcance radial de hasta 1500 mm (Carga útil 6 kg)",
        features: [
            "Brazo articulado de 6 grados de libertad con alcance radial de 1500 mm y carga útil de 6 kg.",
            "Controlador industrial SZGH con parada de emergencia redundante de doble canal.",
            "Teach Pendant SZGH de última generación para programación de trayectorias complejas.",
            "Servomotores de alta precisión con encoders absolutos en cada articulación."
        ],
        steps: [
            "<strong>Inspección Visual:</strong> Verifica que no haya personas ni obstáculos dentro del radio de alcance del brazo. Comprueba las mangueras neumáticas.",
            "<strong>Encendido del Controlador:</strong> Gira el interruptor de la cabina de control. Espera a que el sistema operativo del Teach Pendant inicie por completo.",
            "<strong>Liberación de Frenos:</strong> Presiona el interruptor de habilitación (Deadman switch) en la parte trasera del Teach Pendant en su posición intermedia. Presiona 'Habilitar Motores' en la pantalla.",
            "<strong>Movimiento Manual (Jogging):</strong> Selecciona el sistema de coordenadas (Joint o Cartesiano). Usa las teclas o el joystick del Teach Pendant a baja velocidad (T1, máx 250 mm/s) para mover el brazo.",
            "<strong>Ejecución de Programa:</strong> Carga el programa deseado (ej. Ciclo Pick and Place). Haz un ciclo de prueba en velocidad T1 (20%) verificando trayectorias. Pasa a modo automático (T2/Auto) solo tras validar."
        ],
        safety: "Área de peligro de colisión. NUNCA ingreses al rango de acción mientras el brazo tenga los motores habilitados. Use el botón de parada de emergencia inmediatamente ante cualquier desvío.",
        maintLast: "15/05/2026 - Verificación de cables y encoders",
        maintFreq: "Semestral / 500 horas de uso",
        maintTasks: [
            "Revisar el estado de los cables de potencia y señales en las articulaciones móviles en busca de desgaste o cortes.",
            "Verificar el correcto funcionamiento del botón de parada de emergencia en el panel y en la consola.",
            "Limpiar el polvo y viruta metálica del cuerpo del brazo con aire comprimido suave y paño seco.",
            "Comprobar el desgaste de los engranajes y la holgura en las articulaciones X/Y/Z."
        ]
    },
    cnc: {
        id: "cnc",
        name: "CNC 3018 Router",
        category: "Fresado y Grabado",
        shortDesc: "Mini ruteadora CNC para fresado y taladrado de tarjetas de circuito impreso (PCBs), maderas blandas y grabado de plásticos.",
        materials: "Cobre (PCBs), Acrílico, Madera, MDF, PVC blando",
        area: "300 x 180 x 45 mm (Husillo 775)",
        features: [
            "Husillo de motor 775 (12-36V) con velocidad de rotación de hasta 10,000 RPM.",
            "Estructura robusta de aluminio y perfiles de baquelita de fácil ensamblaje.",
            "Motores paso a paso NEMA 17 de alta precisión en los ejes X, Y y Z.",
            "Controladora offline y puerto USB compatible con firmware GRBL v1.1."
        ],
        steps: [
            "<strong>Sujeción de Pieza:</strong> Asegura firmemente el material a la cama ranurada de aluminio utilizando las mordazas metálicas. Asegúrate de que los tornillos no obstruyan el paso de la fresa.",
            "<strong>Herramienta:</strong> Instala la broca o fresa adecuada en el portaherramientas ER11 y apriétalo firmemente con las dos llaves de boca.",
            "<strong>Conexión y Software:</strong> Conecta la CNC al computador mediante el cable USB. Abre el software Candle o UGS (Universal Gcode Sender) y comprueba la comunicación.",
            "<strong>Establecer el Cero (WCS):</strong> Con los controles manuales de la pantalla, posiciona la fresa exactamente en la esquina inferior izquierda del material (X0 Y0). Baja el eje Z lentamente hasta que la punta apenas toque la superficie (puedes usar el sensor Z-probe) y presiona 'Zero X', 'Zero Y' y 'Zero Z'.",
            "<strong>Ejecutar Trabajo:</strong> Carga el archivo de código G (.NC o .GCODE). Enciende el husillo desde el software y presiona 'Send'. Mantén los ojos protegidos con gafas de seguridad."
        ],
        safety: "Fresa girando a altas revoluciones. Riesgo de proyecciones de virutas de cobre/aluminio. Use gafas de protección. No acerque las manos al área de fresado mientras el husillo gire.",
        maintLast: "03/06/2026 - Calibración e inspección general",
        maintFreq: "Cada 20 horas de uso",
        maintTasks: [
            "Aspirar minuciosamente todo el polvo y virutas de madera, acrílico o cobre acumulados en las guías y tuercas de bronce.",
            "Lubricar las varillas guía lisas de los tres ejes con unas gotas de aceite mineral o lubricante seco de teflón.",
            "Apretar los acoples flexibles de aluminio de los acoplamientos de los motores paso a paso.",
            "Revisar el desgaste de las escobillas de carbón del motor del husillo si el giro se vuelve intermitente."
        ]
    }
};

/* -------------------------------------------------------------
   VARIABLES DE ESTADO GLOBAL DE LA APP
   ------------------------------------------------------------- */
let currentView = "scan-view";
let selectedMachineId = null;
let html5QrScanner = null;
let currentCameraId = null;
let activeCameras = [];
let isFlashlightOn = false;

// Variables de Three.js para la visualización holográfica
let scene, camera, renderer, animationFrameId;
let currentMesh = null;
let canvasContainer = null;

// Variables de estado para Realidad Aumentada Real (Cámara y WebXR)
let arCameraStream = null;
let xrSession = null;
let xrHitTestSource = null;
let xrReferenceSpace = null;
let arMode = 'none'; // 'camera' | 'webxr' | 'none'
let arModelPlaced = false;
let reticleMesh = null;
let arGestureMode = 'move'; // 'move' | 'rotate'

/* -------------------------------------------------------------
   INICIALIZACIÓN DEL SISTEMA
   ------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
    // Configurar URL por defecto para el generador de QR (IP local o actual de navegación)
    const currentUrl = window.location.origin + window.location.pathname;
    document.getElementById("qr-app-url").value = currentUrl;

    // Asignar listeners del Splash
    document.getElementById("btn-start").addEventListener("click", startSystem);
    
    // Configurar botones de navegación
    const navButtons = document.querySelectorAll(".nav-item");
    navButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const target = btn.getAttribute("data-target");
            switchView(target);
            
            // Actualizar clase activa en botones
            navButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
        });
    });

    // Configurar botones del modal de simulación
    document.getElementById("btn-open-simulate").addEventListener("click", openSimulationModal);
    document.querySelector(".close-modal").addEventListener("click", closeSimulationModal);
    
    const simOptions = document.querySelectorAll(".sim-option");
    simOptions.forEach(opt => {
        opt.addEventListener("click", () => {
            const id = opt.getAttribute("data-id");
            closeSimulationModal();
            triggerAROverlay(id);
        });
    });

    // Cerrar panel AR overlay
    document.querySelector(".close-ar-panel").addEventListener("click", closeAROverlay);

    // Alternar visibilidad de panel AR (Minimizar / Mostrar)
    const btnToggleHud = document.getElementById("btn-toggle-hud");
    const hudPanelEl = document.querySelector(".ar-hud-panel");
    const toggleHudText = document.getElementById("toggle-hud-text");
    if (btnToggleHud && hudPanelEl) {
        btnToggleHud.addEventListener("click", () => {
            const isCollapsed = hudPanelEl.classList.toggle("hud-collapsed");
            if (toggleHudText) {
                toggleHudText.innerText = isCollapsed ? "MOSTRAR INFO" : "OCULTAR INFO";
            }
            const icon = btnToggleHud.querySelector("i");
            if (icon) {
                icon.className = isCollapsed ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down";
            }
        });
    }

    // Configurar tabs dentro del panel AR
    const hudTabs = document.querySelectorAll(".hud-tab-btn");
    hudTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            hudTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            
            const targetPane = tab.getAttribute("data-tab");
            const panes = document.querySelectorAll(".tab-pane");
            panes.forEach(pane => pane.classList.remove("active"));
            document.getElementById(targetPane).classList.add("active");
        });
    });

    // Configurar botón para alternar cámara
    document.getElementById("btn-toggle-camera").addEventListener("click", toggleCamera);
    document.getElementById("btn-toggle-flashlight").addEventListener("click", toggleFlashlight);

    // Configurar botones de control AR manual (Mover, Rotar, Profundidad, Escala)
    const btnGestureMode = document.getElementById("btn-gesture-mode");
    const labelGestureMode = document.getElementById("gesture-mode-label");
    if (btnGestureMode) {
        btnGestureMode.addEventListener("click", () => {
            if (arGestureMode === 'move') {
                arGestureMode = 'rotate';
                if (labelGestureMode) labelGestureMode.innerText = "ROTAR";
                btnGestureMode.querySelector("i").className = "fa-solid fa-arrows-spin";
            } else {
                arGestureMode = 'move';
                if (labelGestureMode) labelGestureMode.innerText = "MOVER";
                btnGestureMode.querySelector("i").className = "fa-solid fa-arrows-up-down-left-right";
            }
        });
    }

    const sliderDepth = document.getElementById("slider-ar-depth");
    if (sliderDepth) {
        sliderDepth.addEventListener("input", (e) => {
            const depth = parseFloat(e.target.value);
            if (currentMesh && arMode !== 'none') {
                currentMesh.position.z = -depth;
            }
        });
    }

    const sliderScale = document.getElementById("slider-ar-scale");
    if (sliderScale) {
        sliderScale.addEventListener("input", (e) => {
            const scaleVal = parseFloat(e.target.value);
            if (currentMesh) {
                currentMesh.scale.set(scaleVal, scaleVal, scaleVal);
            }
        });
    }

    // Inicializar catálogo de equipos
    renderExploreView();

    // Configurar sección de etiquetas QR en el panel admin
    setupAdminQRSection();

    // Formulario de Reporte de Fallas
    document.getElementById("fault-report-form").addEventListener("submit", submitFaultReport);

    // Cargar librerías y revisar si hay un hash inicial en la URL (ej. #machine=cnc)
    checkUrlHash();
    window.addEventListener("hashchange", checkUrlHash);
});

/* -------------------------------------------------------------
   ACCIONES DE NAVEGACIÓN Y VISTAS
   ------------------------------------------------------------- */
function startSystem() {
    const splash = document.getElementById("splash-screen");
    const appContainer = document.getElementById("app-container");

    splash.classList.remove("active");

    // Mostrar el contenedor ANTES de iniciar la cámara
    // para que #qr-reader tenga dimensiones reales en el DOM
    appContainer.classList.remove("hidden");
    appContainer.style.opacity = 0;

    // Pedir permiso de cámara mientras aún estamos en el gesto del clic
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
            stream.getTracks().forEach(track => track.stop());
        }).catch(() => {});
    }

    // Fade out del splash
    setTimeout(() => {
        splash.classList.add("hidden");
        appContainer.style.transition = "opacity 0.5s ease";
        appContainer.style.opacity = 1;
    }, 200);

    // Iniciar escáner después de que el layout se renderice
    setTimeout(() => {
        startScanner();
    }, 350);
}

function switchView(viewId) {
    if (currentView === viewId) return;

    // Desactivar vista actual
    const currentViewEl = document.getElementById(currentView);
    currentViewEl.classList.remove("active");
    setTimeout(() => {
        currentViewEl.classList.add("hidden");
        
        // Activar nueva vista
        const newViewEl = document.getElementById(viewId);
        newViewEl.classList.remove("hidden");
        setTimeout(() => {
            newViewEl.classList.add("active");
        }, 50);
    }, 150);

    currentView = viewId;

    // Si nos alejamos del escaner AR, apagar la cámara trasera para no consumir batería
    if (viewId !== "scan-view") {
        stopScanner();
        closeAROverlay();
    } else {
        startScanner();
    }
}

function checkUrlHash() {
    const hash = window.location.hash;
    if (hash && hash.includes("machine=")) {
        const machineId = hash.split("machine=")[1];
        if (EQUIPOS_DB[machineId]) {
            // Asegurarnos de entrar al contenedor de la app
            document.getElementById("splash-screen").classList.add("hidden");
            document.getElementById("app-container").classList.remove("hidden");
            
            // Forzar vista de escáner activa
            switchView("scan-view");
            const navBtnScan = document.getElementById("nav-btn-scan");
            const navButtons = document.querySelectorAll(".nav-item");
            navButtons.forEach(b => b.classList.remove("active"));
            navBtnScan.classList.add("active");
            
            // Retrasar levemente para esperar que la vista se dibuje
            setTimeout(() => {
                triggerAROverlay(machineId);
            }, 300);
        }
    }
}

/* -------------------------------------------------------------
   LÓGICA DEL ESCANER DE CÁMARA (html5-qrcode)
   ------------------------------------------------------------- */
function startScanner() {
    if (html5QrScanner) {
        return; // Ya está corriendo
    }

    // Limpiar contenedor por si quedó algún elemento residual
    const qrContainer = document.getElementById("qr-reader");
    if (qrContainer) {
        qrContainer.innerHTML = "";
    }

    // qrbox responsive: más pequeño en móviles
    const isMobile = window.innerWidth < 580;
    const qrSize = isMobile ? Math.min(window.innerWidth * 0.5, 180) : 220;
    const qrConfig = {
        fps: 10,
        qrbox: { width: qrSize, height: qrSize }
    };

    try {
        if (typeof Html5Qrcode === 'undefined') {
            console.warn("Html5Qrcode no está cargado.");
            fallbackNoCamera("Library not loaded");
            return;
        }

        // 1. Enumerar cámaras en paralelo para el botón de cambiar cámara
        Html5Qrcode.getCameras().then(devices => {
            if (devices && devices.length > 0) {
                activeCameras = devices;
                currentCameraId = devices[0].id;
                const toggleCamBtn = document.getElementById("btn-toggle-camera");
                if (devices.length > 1) {
                    toggleCamBtn.style.display = "flex";
                } else {
                    toggleCamBtn.style.display = "none";
                }
            }
        }).catch(() => {});

        // 2. Iniciar escáner con facingMode:environment (más confiable en móviles)
        html5QrScanner = new Html5Qrcode("qr-reader");
        html5QrScanner.start(
            { facingMode: "environment" },
            qrConfig,
            onQrScanSuccess,
            onQrScanFailure
        ).then(() => {
            try {
                if (html5QrScanner.getRunningTrackCapabilities().torch) {
                    document.getElementById("btn-toggle-flashlight").classList.remove("hidden");
                }
            } catch (e) {
                console.warn("No se pudo verificar soporte de linterna: ", e);
            }
        }).catch(err => {
            console.error("Error al iniciar lector de cámara: ", err);
            // 3. Fallback: intentar con la primera cámara enumerada
            if (activeCameras.length > 0) {
                html5QrScanner = new Html5Qrcode("qr-reader");
                html5QrScanner.start(
                    activeCameras[0].id,
                    qrConfig,
                    onQrScanSuccess,
                    onQrScanFailure
                ).then(() => {
                    try {
                        if (html5QrScanner.getRunningTrackCapabilities().torch) {
                            document.getElementById("btn-toggle-flashlight").classList.remove("hidden");
                        }
                    } catch (e) { console.warn(e); }
                }).catch(err2 => {
                    console.error("Fallback de cámara también falló:", err2);
                    fallbackNoCamera(err2);
                });
            } else {
                fallbackNoCamera(err);
            }
        });
    } catch (e) {
        console.error("Falla crítica en startScanner: ", e);
        fallbackNoCamera(e);
    }
}

function stopScanner() {
    if (html5QrScanner) {
        const scannerRef = html5QrScanner;
        html5QrScanner = null;
        isFlashlightOn = false;
        document.getElementById("btn-toggle-flashlight").classList.add("hidden");
        return scannerRef.stop().catch(err => {
            console.warn("Error deteniendo el escaner (no crítico): ", err);
        });
    }
    return Promise.resolve();
}

function toggleCamera() {
    if (!html5QrScanner || activeCameras.length <= 1) return;

    let currentIndex = activeCameras.findIndex(c => c.id === currentCameraId);
    let nextIndex = (currentIndex + 1) % activeCameras.length;
    let nextCameraId = activeCameras[nextIndex].id;
    
    html5QrScanner.stop().then(() => {
        currentCameraId = nextCameraId;
        isFlashlightOn = false;
        document.getElementById("btn-toggle-flashlight").classList.add("hidden");
        
        const isMobile = window.innerWidth < 580;
        const qrSize = isMobile ? Math.min(window.innerWidth * 0.5, 180) : 220;
        const qrConfig = {
            fps: 10,
            qrbox: { width: qrSize, height: qrSize }
        };

        html5QrScanner.start(
            currentCameraId, 
            qrConfig, 
            onQrScanSuccess, 
            onQrScanFailure
        ).then(() => {
            if (html5QrScanner.getRunningTrackCapabilities().torch) {
                document.getElementById("btn-toggle-flashlight").classList.remove("hidden");
            }
        });
    });
}

function toggleFlashlight() {
    if (!html5QrScanner) return;
    
    isFlashlightOn = !isFlashlightOn;
    html5QrScanner.applyVideoConstraints({
        advanced: [{ torch: isFlashlightOn }]
    }).then(() => {
        const btn = document.getElementById("btn-toggle-flashlight");
        if (isFlashlightOn) {
            btn.innerHTML = `<i class="fa-solid fa-lightbulb" style="color: var(--cyan); text-shadow: 0 0 10px var(--cyan);"></i>`;
        } else {
            btn.innerHTML = `<i class="fa-solid fa-lightbulb"></i>`;
        }
    }).catch(err => {
        console.error("No se pudo alternar la linterna: ", err);
        isFlashlightOn = !isFlashlightOn;
    });
}

// Bandera para evitar detección doble mientras se procesa el QR
let isProcessingQR = false;

function onQrScanSuccess(decodedText, decodedResult) {
    // Evitar disparos múltiples mientras se procesa el QR anterior
    if (isProcessingQR) return;

    // Buscar si el texto escaneado coincide con alguna URL con hash de máquina, o directamente el ID
    let machineId = null;
    
    if (EQUIPOS_DB[decodedText]) {
        machineId = decodedText;
    } else if (decodedText.includes("machine=")) {
        machineId = decodedText.split("machine=")[1];
    } else {
        // Buscar coincidencia parcial
        for (let key in EQUIPOS_DB) {
            if (decodedText.toLowerCase().includes(key.toLowerCase())) {
                machineId = key;
                break;
            }
        }
    }

    if (machineId && EQUIPOS_DB[machineId]) {
        isProcessingQR = true;

        // Disparar flash de éxito en pantalla
        const flashEl = document.getElementById("scanner-glow");
        flashEl.classList.remove("hidden");
        setTimeout(() => flashEl.classList.add("hidden"), 400);

        // Detener la cámara y luego abrir el overlay
        stopScanner().then(() => {
            setTimeout(() => {
                triggerAROverlay(machineId);
                isProcessingQR = false;
            }, 150); // Small cooldown buffer
        });
    }
}

function onQrScanFailure(error) {
    // Silenciar errores comunes de búsqueda de código en cuadros vacíos
}

function fallbackNoCamera(error) {
    console.warn("La cámara no está disponible o el navegador bloqueó el permiso. Usando interfaz de simulación.", error);
    
    let errMsg = "SIN CÁMARA (USA BOTÓN SIMULAR)";
    
    // Detectar si no es un contexto seguro
    if (window.location.protocol !== 'https:' && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
        errMsg = "ERROR: REQUIERE HTTPS PARA LA CÁMARA";
        alert("⚠️ Seguridad del Navegador:\nPara escanear códigos QR en tu celular, los navegadores móviles exigen estrictamente que la página se sirva bajo una conexión segura (HTTPS) o localhost.\n\nPor favor, usa un túnel HTTPS (como ngrok) para cargar la app en tu celular, o usa el botón 'Simular QR' para probar la aplicación en tu computador.");
    } else {
        alert("⚠️ Acceso a Cámara No Disponible:\nNo se pudo acceder a la cámara. Esto puede deberse a:\n1. El permiso de cámara fue denegado o está bloqueado por el navegador.\n2. No hay cámaras físicas en este dispositivo.\n3. Otra aplicación está utilizando la cámara.\n\nPuedes usar el botón 'Simular QR' para probar todas las funciones de Realidad Aumentada.");
    }
    
    const statusText = document.querySelector(".hud-status-text");
    if (statusText) {
        statusText.innerText = errMsg;
    }
}

/* -------------------------------------------------------------
   SIMULADOR DE DETECCIÓN AR (MODAL)
   ------------------------------------------------------------- */
function openSimulationModal() {
    document.getElementById("simulation-modal").classList.remove("hidden");
}

function closeSimulationModal() {
    document.getElementById("simulation-modal").classList.add("hidden");
}

/* -------------------------------------------------------------
   REALIDAD AUMENTADA OVERLAY & DETALLES
   ------------------------------------------------------------- */
function triggerAROverlay(machineId) {
    selectedMachineId = machineId;
    const machine = EQUIPOS_DB[machineId];

    // Actualizar campos de texto del HUD
    document.getElementById("machine-hud-name").innerText = machine.name;
    document.getElementById("machine-badge-category").innerText = machine.category;
    document.getElementById("machine-hud-desc").innerText = machine.shortDesc;
    
    // Specs Tab
    document.getElementById("spec-materials").innerText = machine.materials;
    document.getElementById("spec-area").innerText = machine.area;
    
    const featuresList = document.getElementById("machine-features-list");
    featuresList.innerHTML = "";
    machine.features.forEach(feat => {
        const li = document.createElement("li");
        li.innerText = feat;
        featuresList.appendChild(li);
    });

    // Usage Tab
    const stepsList = document.getElementById("machine-usage-steps");
    stepsList.innerHTML = "";
    machine.steps.forEach(step => {
        const li = document.createElement("li");
        li.innerHTML = step;
        stepsList.appendChild(li);
    });
    
    const warningBanner = document.querySelector("#tab-usage .alert-banner.warning span");
    warningBanner.innerHTML = `<strong>Seguridad:</strong> ${machine.safety}`;

    // Maintenance Tab
    document.getElementById("maint-last-date").innerText = machine.maintLast;
    document.getElementById("maint-frequency").innerText = machine.maintFreq;

    const maintList = document.getElementById("machine-maintenance-checklist");
    maintList.innerHTML = "";
    
    // Cargar estado de checklist guardado localmente
    const savedChecks = JSON.parse(localStorage.getItem(`maint_check_${machineId}`) || "[]");

    machine.maintTasks.forEach((task, index) => {
        const label = document.createElement("label");
        label.className = "maint-check-item";
        
        const isChecked = savedChecks.includes(index);
        
        label.innerHTML = `
            <input type="checkbox" data-index="${index}" ${isChecked ? 'checked' : ''}>
            <span class="maint-check-desc">${task}</span>
        `;
        
        // Listener para guardar en LocalStorage
        label.querySelector("input").addEventListener("change", (e) => {
            const currentChecks = JSON.parse(localStorage.getItem(`maint_check_${machineId}`) || "[]");
            if (e.target.checked) {
                if (!currentChecks.includes(index)) currentChecks.push(index);
            } else {
                const i = currentChecks.indexOf(index);
                if (i > -1) currentChecks.splice(i, 1);
            }
            localStorage.setItem(`maint_check_${machineId}`, JSON.stringify(currentChecks));
        });

        maintList.appendChild(label);
    });

    // Resetear formulario de fallas
    document.getElementById("fault-report-form").reset();
    document.getElementById("fault-report-form").classList.remove("hidden");
    document.getElementById("report-success-msg").classList.add("hidden");

    // Reiniciar al tab Specs por defecto
    const hudTabs = document.querySelectorAll(".hud-tab-btn");
    hudTabs.forEach(t => t.classList.remove("active"));
    document.querySelector('[data-tab="tab-specs"]').classList.add("active");
    
    const panes = document.querySelectorAll(".tab-pane");
    panes.forEach(pane => pane.classList.remove("active"));
    document.getElementById("tab-specs").classList.add("active");

    // Iniciar con el panel de información minimizado por defecto
    const hudPanel = document.querySelector(".ar-hud-panel");
    if (hudPanel) {
        hudPanel.classList.add("hud-collapsed");
        const btnToggleHud = document.getElementById("btn-toggle-hud");
        const toggleHudText = document.getElementById("toggle-hud-text");
        if (btnToggleHud) {
            const icon = btnToggleHud.querySelector("i");
            if (icon) icon.className = "fa-solid fa-chevron-up";
            if (toggleHudText) toggleHudText.innerText = "MOSTRAR INFO";
        }
    }

    // Mostrar el contenedor AR Overlay
    document.getElementById("ar-overlay-view").classList.remove("hidden");

    // Iniciar cámara y visor AR real
    startARCamera(machineId);
}

function closeAROverlay() {
    document.getElementById("ar-overlay-view").classList.add("hidden");
    
    // Detener la cámara AR y limpiar estados AR
    stopARCamera();
    
    // Limpiar escena de Three.js
    if (renderer) {
        renderer.setAnimationLoop(null);
        renderer.dispose();
        const container = document.getElementById("hologram-canvas-container");
        const canvas = container.querySelector("canvas");
        if (canvas) container.removeChild(canvas);
        scene = null;
        camera = null;
        renderer = null;
        currentMesh = null;
        reticleMesh = null;
    }

    // Reiniciar el escaner de cámara si estamos en la vista de escaneo
    if (currentView === "scan-view") {
        setTimeout(() => {
            if (!html5QrScanner) {
                startScanner();
            }
        }, 400);
    }
    
    selectedMachineId = null;
    
    // Remover hash de la url de forma limpia
    history.replaceState(null, null, ' ');
}

/* -------------------------------------------------------------
   LÓGICA Y CONFIGURACIÓN DE REALIDAD AUMENTADA REAL (CAMARA Y WEBXR)
   ------------------------------------------------------------- */
async function startARCamera(machineId, forceFallback = false) {
    selectedMachineId = machineId;
    arModelPlaced = false;

    const videoBg = document.getElementById("ar-camera-bg");
    const arOverlay = document.getElementById("ar-overlay-view");
    const arModeBadge = document.getElementById("ar-mode-badge");
    const arModeText = document.getElementById("ar-mode-text");
    const btnArPlace = document.getElementById("btn-ar-place");
    const controlsOverlay = document.getElementById("ar-controls-overlay");

    // Reset UI por defecto
    if (videoBg) videoBg.classList.add("hidden");
    if (btnArPlace) btnArPlace.classList.add("hidden");
    if (arModeBadge) arModeBadge.classList.add("hidden");
    if (controlsOverlay) controlsOverlay.classList.add("hidden");

    // Resetear los deslizadores y el modo de gesto
    arGestureMode = 'move';
    const btnGestureMode = document.getElementById("btn-gesture-mode");
    const labelGestureMode = document.getElementById("gesture-mode-label");
    if (btnGestureMode) {
        btnGestureMode.querySelector("i").className = "fa-solid fa-arrows-up-down-left-right";
        if (labelGestureMode) labelGestureMode.innerText = "MOVER";
    }

    // Configurar sliders a valores por defecto
    document.getElementById("slider-ar-depth").value = 1.8;
    document.getElementById("slider-ar-scale").value = 1.0;

    // Intentar WebXR (ARCore en Android) primero
    let webxrSupported = false;
    if (navigator.xr && !forceFallback) {
        try {
            webxrSupported = await navigator.xr.isSessionSupported('immersive-ar');
        } catch (e) {
            console.warn("WebXR isSessionSupported falló:", e);
        }
    }

    if (webxrSupported) {
        arMode = 'webxr';
        if (arOverlay) arOverlay.classList.add("ar-active");
        if (arModeBadge) {
            arModeBadge.classList.remove("hidden");
            if (arModeText) arModeText.innerText = "MODO AR (WEBXR SURFACE)";
        }
        if (controlsOverlay) controlsOverlay.classList.remove("hidden");
        
        // Fix: WebXR requiere un "User Gesture" para iniciar.
        // Como venimos del escaneo automático, debemos pedir un toque manual.
        if (btnArPlace) {
            btnArPlace.classList.remove("hidden");
            btnArPlace.innerHTML = '<i class="fa-solid fa-vr-cardboard"></i><span> INICIAR ENTORNO AR</span>';
            
            // Reemplazar nodo para limpiar eventos previos
            const newBtn = btnArPlace.cloneNode(true);
            btnArPlace.parentNode.replaceChild(newBtn, btnArPlace);
            
            newBtn.onclick = async () => {
                newBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i><span> CARGANDO...</span>';
                try {
                    arMode = 'webxr'; // Cambiar el modo antes de iniciar WebXR
                    await startWebXRSession(machineId);
                } catch (err) {
                    console.warn("Fallo al iniciar sesión WebXR tras toque de usuario, usando fallback:", err);
                    newBtn.classList.add("hidden");
                    startARCamera(machineId, true);
                }
            };
        }
        
        // Mostrar el modelo en modo de vista previa antes de entrar a AR
        arMode = 'preview';
        initHologram3D(machineId);
        
        return;
    }

    // Fallback Nivel 1: Cámara trasera usando getUserMedia
    arMode = 'camera';
    if (arOverlay) arOverlay.classList.add("ar-active");
    if (arModeBadge) {
        arModeBadge.classList.remove("hidden");
        if (arModeText) arModeText.innerText = "MODO AR (VISTA DE CÁMARA)";
    }
    if (controlsOverlay) controlsOverlay.classList.remove("hidden");

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: { ideal: "environment" },
                    width: { ideal: 1280 },
                    height: { ideal: 720 }
                },
                audio: false
            });
            arCameraStream = stream;
            if (videoBg) {
                videoBg.srcObject = stream;
                videoBg.classList.remove("hidden");
                // Esperar metadatos para que el video tenga dimensiones correctas
                await new Promise(resolve => videoBg.onloadedmetadata = resolve);
                videoBg.play().catch(e => console.warn("videoBg.play() falló:", e));
            }
        } catch (err) {
            console.error("No se pudo iniciar la cámara trasera:", err);
            // Fallback Nivel 2: Visor holográfico clásico (fondo oscuro)
            arMode = 'none';
            if (arOverlay) arOverlay.classList.remove("ar-active");
            if (controlsOverlay) controlsOverlay.classList.add("hidden");
            if (arModeBadge) {
                arModeBadge.classList.remove("hidden");
                if (arModeText) arModeText.innerText = "MODO VISOR 3D (SIN CÁMARA)";
            }
        }
    } else {
        arMode = 'none';
        if (arOverlay) arOverlay.classList.remove("ar-active");
        if (controlsOverlay) controlsOverlay.classList.add("hidden");
        if (arModeBadge) {
            arModeBadge.classList.remove("hidden");
            if (arModeText) arModeText.innerText = "MODO VISOR 3D (SIN CÁMARA)";
        }
    }

    // Inicializar Three.js en el modo correspondiente
    initHologram3D(machineId);
}

async function startWebXRSession(machineId) {
    // Initialize beforexrselect to prevent WebXR select events when interacting with HUD
    const overlayView = document.getElementById('ar-overlay-view');
    overlayView.addEventListener('beforexrselect', ev => {
        if (ev.target.closest('.ar-hud-panel') || ev.target.closest('.scanner-controls')) {
            ev.preventDefault();
        }
    });

    // Inicializar Three.js escena (con fondo transparente y habilitado para WebXR)
    initHologram3D(machineId);

    const sessionInit = { 
        requiredFeatures: ['local-floor', 'hit-test', 'dom-overlay'],
        domOverlay: { root: document.getElementById('ar-overlay-view') }
    };
    const session = await navigator.xr.requestSession('immersive-ar', sessionInit);
    
    xrSession = session;
    renderer.xr.enabled = true;
    await renderer.xr.setSession(session);

    // Ocultar video de cámara estándar ya que WebXR maneja la transparencia/passthrough nativa
    const videoBg = document.getElementById("ar-camera-bg");
    if (videoBg) videoBg.classList.add("hidden");

    // Mostrar el botón para anclar el modelo
    // Mostrar el botón para anclar el modelo
    const btnArPlace = document.getElementById("btn-ar-place");
    if (btnArPlace) {
        btnArPlace.classList.remove("hidden");
        btnArPlace.innerHTML = '<i class="fa-solid fa-location-dot"></i><span> FIJAR MODELO AQUÍ</span>';
        
        const newBtn = btnArPlace.cloneNode(true);
        btnArPlace.parentNode.replaceChild(newBtn, btnArPlace);
        
        newBtn.onclick = () => {
            arModelPlaced = true;
            newBtn.classList.add("hidden");
        };
    }

    // Obtener los espacios de referencia
    const viewerSpace = await session.requestReferenceSpace('viewer');
    xrHitTestSource = await session.requestHitTestSource({ space: viewerSpace });
    xrReferenceSpace = await session.requestReferenceSpace('local-floor');

    session.addEventListener('end', () => {
        stopWebXRSession();
    });
    session.addEventListener('select', onXRSessionSelect);
}

function onXRSessionSelect() {
    if (arMode === 'webxr' && !arModelPlaced) {
        if (reticleMesh && reticleMesh.visible) {
            arModelPlaced = true;
            const btnArPlace = document.getElementById("btn-ar-place");
            if (btnArPlace) btnArPlace.classList.add("hidden");
        }
    }
}

function stopARCamera() {
    if (xrSession) {
        xrSession.end();
        xrSession = null;
    }
    
    if (arCameraStream) {
        arCameraStream.getTracks().forEach(track => track.stop());
        arCameraStream = null;
    }

    const videoBg = document.getElementById("ar-camera-bg");
    if (videoBg) {
        videoBg.srcObject = null;
        videoBg.classList.add("hidden");
    }

    const arOverlay = document.getElementById("ar-overlay-view");
    if (arOverlay) {
        arOverlay.classList.remove("ar-active");
    }

    const btnArPlace = document.getElementById("btn-ar-place");
    if (btnArPlace) {
        btnArPlace.classList.add("hidden");
    }

    const arModeBadge = document.getElementById("ar-mode-badge");
    if (arModeBadge) {
        arModeBadge.classList.add("hidden");
    }

    const controlsOverlay = document.getElementById("ar-controls-overlay");
    if (controlsOverlay) {
        controlsOverlay.classList.add("hidden");
    }

    arMode = 'none';
    arModelPlaced = false;
    xrHitTestSource = null;
    xrReferenceSpace = null;
}

function stopWebXRSession() {
    xrSession = null;
    xrHitTestSource = null;
    xrReferenceSpace = null;
    arModelPlaced = false;
    
    // Si el overlay sigue abierto, volver al modo de cámara como fallback
    const arOverlay = document.getElementById("ar-overlay-view");
    if (selectedMachineId && arOverlay && !arOverlay.classList.contains("hidden")) {
        startARCamera(selectedMachineId, true);
    }
}

/* -------------------------------------------------------------
   SISTEMA DE HOLOGRAMAS 3D INTERACTIVOS (THREE.JS)
   ------------------------------------------------------------- */
// Mapeo de archivos GLB para cada equipo
const MODEL_FILES = {
    ender3: "Modelos 3d/Ender-3 V3.glb",
    laser: "Modelos 3d/CFL-CMA 1390.glb",
    resin: "Modelos 3d/Anycubic Photon.glb",
    "robotic-arm": "Modelos 3d/szgh-P1500-B-6.glb",
    cnc: "Modelos 3d/CNC3018.glb"
};

function initHologram3D(machineId) {
    canvasContainer = document.getElementById("hologram-canvas-container");
    
    // Limpieza previa por seguridad
    const oldCanvas = canvasContainer.querySelector("canvas");
    if (oldCanvas) canvasContainer.removeChild(oldCanvas);
    if (renderer) {
        renderer.setAnimationLoop(null);
    }
    if (animationFrameId) cancelAnimationFrame(animationFrameId);

    // Dimensiones
    const width = canvasContainer.clientWidth || window.innerWidth;
    const height = canvasContainer.clientHeight || (window.innerHeight * 0.4);

    // Escena
    scene = new THREE.Scene();

    // Cámara
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    if (arMode !== 'none') {
        // En AR, la cámara se sitúa a nivel de los ojos (1.6m) y mira hacia enfrente (z = -2)
        camera.position.set(0, 1.6, 0);
        camera.lookAt(0, 1.2, -2);
    } else {
        // Visor holográfico clásico
        camera.position.set(0, 4, 8);
        camera.lookAt(0, 0.5, 0);
    }

    // Renderizador con soporte transparente
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    if (arMode !== 'none') {
        renderer.setClearColor(0x000000, 0); // transparente
    }
    canvasContainer.appendChild(renderer.domElement);

    // Fondo de escena
    if (arMode === 'none') {
        scene.background = new THREE.Color(0x0a0e27);
    } else {
        scene.background = null;
    }

    // Luces
    const ambientLight = new THREE.AmbientLight(0xffffff, arMode !== 'none' ? 0.7 : 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00f0ff, arMode !== 'none' ? 1.8 : 1.5, 20);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
    
    const pointLightGreen = new THREE.PointLight(0x94b43b, arMode !== 'none' ? 1.2 : 1.0, 20);
    pointLightGreen.position.set(-5, 3, -5);
    scene.add(pointLightGreen);

    const dirLight = new THREE.DirectionalLight(0xffffff, arMode !== 'none' ? 1.5 : 1.0);
    dirLight.position.set(2, 5, 3);
    scene.add(dirLight);

    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    if (arMode === 'webxr' || arMode === 'camera') {
        // En AR el modelo es "fijo" y el usuario se mueve
        controls.enableZoom = false;
        controls.enablePan = false;
        controls.enabled = false; // Desactivados temporalmente
    }

    // Agregar rejilla de base holográfica solo en visor clásico
    if (arMode === 'none') {
        const gridHelper = new THREE.GridHelper(6, 12, 0x00f0ff, 0x004455);
        gridHelper.position.y = -0.5;
        scene.add(gridHelper);
    }

    // Agregar retículo de posicionamiento si es WebXR
    if (arMode === 'webxr') {
        const reticleGeo = new THREE.RingGeometry(0.12, 0.15, 32);
        reticleGeo.rotateX(-Math.PI / 2);
        const reticleMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff, side: THREE.DoubleSide });
        reticleMesh = new THREE.Mesh(reticleGeo, reticleMat);
        reticleMesh.visible = false;
        scene.add(reticleMesh);
    }

    // Obtener referencias de UI para estado de carga
    const glitchText = canvasContainer.querySelector(".hologram-glitch-text");
    const subText = canvasContainer.querySelector(".hologram-sub-text");

    const activeScene = scene;

    // Verificar si el equipo tiene un modelo 3D asignado
    if (MODEL_FILES[machineId]) {
        if (glitchText) glitchText.innerText = "CARGANDO MODELO 3D...";
        if (subText) subText.innerText = "Espere un momento, procesando geometría...";

        const loader = new THREE.GLTFLoader();
        loader.load(
            MODEL_FILES[machineId],
            (gltf) => {
                // Si la escena activa cambió antes de terminar la carga, descartar
                if (scene !== activeScene) return;

                if (glitchText) glitchText.innerText = arMode !== 'none' ? "REALIDAD AUMENTADA LISTA" : "CONEXIÓN HOLOGRÁFICA ESTABLE";
                if (subText) subText.innerText = arMode === 'webxr' ? "Apunta al suelo y presiona ANCLAR o toca la pantalla" : "Gira la representación táctilmente";

                const group = new THREE.Group();

                // Aplicar estilo según el modo (holograma translúcido vs AR sólido realista)
                gltf.scene.traverse((child) => {
                    if (child.isMesh) {
                        if (arMode !== 'none') {
                            // En modo AR mantenemos el material y texturas originales
                            if (child.material) {
                                child.material.transparent = true;
                                child.material.opacity = 0.95;
                                child.material.side = THREE.DoubleSide;
                            }
                        } else {
                            child.material = new THREE.MeshStandardMaterial({
                                color: 0x00a8ff,
                                emissive: 0x001122,
                                roughness: 0.4,
                                metalness: 0.8,
                                transparent: true,
                                opacity: 0.6,
                                side: THREE.DoubleSide
                            });

                            // Agregar malla de alambre brillante (wireframe) superpuesta (solo holograma)
                            const wireframe = new THREE.WireframeGeometry(child.geometry);
                            const line = new THREE.LineSegments(wireframe);
                            line.material.color.setHex(0x00f0ff);
                            line.material.transparent = true;
                            line.material.opacity = 0.25;
                            child.add(line);
                        }
                    }
                });

                // Aplicar rotaciones correctivas específicas según la máquina
                if (machineId === "resin") {
                    gltf.scene.rotation.x = Math.PI;
                } else if (machineId === "robotic-arm") {
                    gltf.scene.rotation.x = Math.PI;
                    gltf.scene.rotation.z = Math.PI;
                } else if (machineId === "ender3") {
                    gltf.scene.rotation.x = -Math.PI / 2;
                }

                // Forzar actualización de matrices antes de calcular la bounding box
                gltf.scene.updateMatrixWorld(true);

                // Centrar y escalar automáticamente usando la caja delimitadora (post-rotación)
                const box = new THREE.Box3().setFromObject(gltf.scene);
                const size = new THREE.Vector3();
                box.getSize(size);
                const center = new THREE.Vector3();
                box.getCenter(center);

                const maxDim = Math.max(size.x, size.y, size.z);
                let targetSize = 2.5; // Visor normal
                if (arMode === 'webxr') targetSize = 1.0;
                else if (arMode === 'camera') targetSize = 0.8;
                else if (arMode === 'preview') targetSize = 1.4; // Proporcional a la pantalla antes de AR
                
                const scale = targetSize / (maxDim || 1);

                gltf.scene.scale.set(scale, scale, scale);

                // Alinear el modelo según el modo
                if (arMode === 'camera') {
                    // Colocar perfectamente frente a la cámara
                    const yOffset = 1.0 - (box.min.y * scale) - (size.y * scale / 2);
                    gltf.scene.position.set(-center.x * scale, yOffset, -2.5 - center.z * scale);
                } else if (arMode === 'preview') {
                    // En vista previa, un poco más abajo para dar espacio al botón superior y que no se pierda
                    const yOffset = -0.5 - (box.min.y * scale);
                    gltf.scene.position.set(-center.x * scale, yOffset, -center.z * scale);
                } else {
                    // En WebXR o visor normal, centrado en Z para alinearse al retículo o base
                    const yOffset = (arMode === 'webxr' ? 0.0 : -0.5) - (box.min.y * scale);
                    gltf.scene.position.set(-center.x * scale, yOffset, -center.z * scale);
                }

                group.add(gltf.scene);
                currentMesh = group;
                scene.add(currentMesh);
            },
            undefined,
            (error) => {
                if (scene !== activeScene) return;
                console.error("Error cargando modelo GLB:", error, "Usando fallback procedimental.");
                if (glitchText) glitchText.innerText = "FALLBACK PROCEDIMENTAL ACTIVO";
                if (subText) subText.innerText = "Gira la representación táctilmente";
                createProceduralHologram(machineId);
            }
        );
    } else {
        createProceduralHologram(machineId);
    }

    // Interacción táctil para rotar el modelo (para modo cámara o visor)
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    
    const startDrag = (x, y) => {
        isDragging = true;
        previousMousePosition = { x, y };
    };

    const drag = (x, y) => {
        if (!isDragging || !currentMesh) return;
        
        const deltaMove = {
            x: x - previousMousePosition.x,
            y: y - previousMousePosition.y
        };

        if (arMode !== 'none' && arGestureMode === 'move') {
            // Mover el modelo en los ejes X/Y de la pantalla
            currentMesh.position.x += deltaMove.x * 0.005;
            currentMesh.position.y -= deltaMove.y * 0.005;
        } else {
            // Rotar el modelo
            currentMesh.rotation.y += deltaMove.x * 0.007;
            currentMesh.rotation.x += deltaMove.y * 0.007;
        }

        previousMousePosition = { x, y };
    };

    const stopDrag = () => {
        isDragging = false;
    };

    // Mouse Listeners
    renderer.domElement.addEventListener('mousedown', (e) => startDrag(e.clientX, e.clientY));
    renderer.domElement.addEventListener('mousemove', (e) => drag(e.clientX, e.clientY));
    window.addEventListener('mouseup', stopDrag);

    // Touch Listeners
    renderer.domElement.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
            startDrag(e.touches[0].clientX, e.touches[0].clientY);
        }
    });
    renderer.domElement.addEventListener('touchmove', (e) => {
        if (e.touches.length === 1) {
            drag(e.touches[0].clientX, e.touches[0].clientY);
        }
    });
    renderer.domElement.addEventListener('touchend', stopDrag);

    // Ciclo de animación unificado para WebXR y Standard
    let clock = new THREE.Clock();
    
    function animate(timestamp, frame) {
        const elapsedTime = clock.getElapsedTime();

        // Lógica de Hit Test para WebXR
        if (frame && arMode === 'webxr' && xrHitTestSource) {
            const hitTestResults = frame.getHitTestResults(xrHitTestSource);
            if (hitTestResults.length > 0) {
                const hit = hitTestResults[0];
                const pose = hit.getPose(xrReferenceSpace);
                
                if (!arModelPlaced) {
                    if (reticleMesh) {
                        reticleMesh.visible = true;
                        reticleMesh.position.set(
                            pose.transform.position.x,
                            pose.transform.position.y,
                            pose.transform.position.z
                        );
                        reticleMesh.quaternion.copy(pose.transform.orientation);
                    }
                    if (currentMesh) {
                        currentMesh.visible = true;
                        currentMesh.position.copy(reticleMesh.position);
                        currentMesh.quaternion.copy(reticleMesh.quaternion);
                    }
                } else {
                    if (reticleMesh) reticleMesh.visible = false;
                }
            } else {
                if (reticleMesh) reticleMesh.visible = false;
            }
        }

        if (currentMesh) {
            // Rotación pasiva lenta (desactivada por solicitud)
            /*
            if (!isDragging) {
                if (arMode !== 'webxr' || arModelPlaced) {
                    currentMesh.rotation.y += 0.006;
                }
            }
            */
            
            // Animación especial por máquina
            animateProceduralHologram(machineId, elapsedTime);
        }

        // Efecto de parpadeo holográfico
        pointLight.intensity = (arMode !== 'none' ? 1.5 : 1.2) + Math.sin(elapsedTime * 6) * 0.2;

        renderer.render(scene, camera);
    }
    
    renderer.setAnimationLoop(animate);

    // Redimensionado del canvas
    window.addEventListener("resize", onWindowResize);
}

function onWindowResize() {
    if (!renderer || !camera || !canvasContainer) return;
    const width = canvasContainer.clientWidth;
    const height = canvasContainer.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
}

/* -------------------------------------------------------------
   CONSTRUCCIÓN DE GEOMETRÍAS PROCEDURALES PARA HOLOGRAMAS
   ------------------------------------------------------------- */
function createProceduralHologram(machineId) {
    const group = new THREE.Group();
    
    // Material holográfico común (Wireframe azul cian brillante)
    const holoMaterial = new THREE.MeshBasicMaterial({
        color: 0x00f0ff,
        wireframe: true,
        transparent: true,
        opacity: 0.8
    });
    
    const solidMaterial = new THREE.MeshBasicMaterial({
        color: 0x003865,
        transparent: true,
        opacity: 0.15
    });

    switch(machineId) {
        case "ender3": // IMPRESORA 3D
            // Base cama
            const baseGeo = new THREE.BoxGeometry(2.5, 0.2, 2.5);
            const base = new THREE.Mesh(baseGeo, holoMaterial);
            group.add(base);

            // Pórtico vertical Z
            const frameGeo = new THREE.BoxGeometry(0.15, 2.8, 2.2);
            const frame = new THREE.Mesh(frameGeo, holoMaterial);
            frame.position.set(0, 1.4, 0);
            group.add(frame);

            // Carro X y Extrusor
            const headGroup = new THREE.Group();
            headGroup.name = "extruderGroup";
            
            // Eje horizontal
            const railGeo = new THREE.BoxGeometry(2.4, 0.1, 0.15);
            const rail = new THREE.Mesh(railGeo, holoMaterial);
            headGroup.add(rail);

            // Cabezal extrusor
            const headGeo = new THREE.BoxGeometry(0.4, 0.4, 0.4);
            const head = new THREE.Mesh(headGeo, holoMaterial);
            head.name = "extruderHead";
            head.position.set(0, 0, 0.15);
            headGroup.add(head);

            headGroup.position.set(0, 1.5, 0);
            group.add(headGroup);

            // Cama de impresión (placa interna)
            const bedGeo = new THREE.BoxGeometry(1.8, 0.05, 1.8);
            const bed = new THREE.Mesh(bedGeo, holoMaterial);
            bed.name = "printBed";
            bed.position.set(0, 0.15, 0);
            group.add(bed);
            
            // Pieza siendo impresa virtualmente
            const printPartGeo = new THREE.OctahedronGeometry(0.5, 1);
            const printPart = new THREE.Mesh(printPartGeo, holoMaterial);
            printPart.name = "printPart";
            printPart.position.set(0, 0.4, 0);
            group.add(printPart);
            break;

        case "laser": // CORTADORA LÁSER
            // Cabina exterior
            const cabGeo = new THREE.BoxGeometry(4.0, 1.8, 2.8);
            const cab = new THREE.Mesh(cabGeo, holoMaterial);
            cab.position.y = 0.5;
            group.add(cab);

            // Colmena/Cama interior
            const bedLGeo = new THREE.BoxGeometry(3.6, 0.1, 2.4);
            const bedL = new THREE.Mesh(bedLGeo, holoMaterial);
            bedL.position.y = 0.0;
            group.add(bedL);

            // Pórtico móvil Y
            const gantryLGeo = new THREE.BoxGeometry(3.6, 0.1, 0.1);
            const gantryL = new THREE.Mesh(gantryLGeo, holoMaterial);
            gantryL.name = "gantryL";
            gantryL.position.set(0, 0.3, 0);
            group.add(gantryL);

            // Cabezal Láser X
            const headLGeo = new THREE.BoxGeometry(0.2, 0.4, 0.2);
            const headL = new THREE.Mesh(headLGeo, holoMaterial);
            headL.name = "headL";
            headL.position.set(0, 0.15, 0);
            gantryL.add(headL);

            // Rayo Láser Virtual (Línea)
            const beamPoints = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, -0.3, 0)];
            const beamGeo = new THREE.BufferGeometry().setFromPoints(beamPoints);
            const beamMat = new THREE.LineBasicMaterial({ color: 0xff3333 });
            const beam = new THREE.Line(beamGeo, beamMat);
            beam.name = "laserBeam";
            headL.add(beam);
            break;

        case "plotter": // PLOTTER
            // Patas de soporte
            const legLGeo = new THREE.BoxGeometry(0.15, 1.4, 1.2);
            const legL = new THREE.Mesh(legLGeo, holoMaterial);
            legL.position.set(-1.8, 0.2, 0);
            group.add(legL);

            const legR = legL.clone();
            legR.position.x = 1.8;
            group.add(legR);

            // Cuerpo horizontal principal
            const bodyGeo = new THREE.BoxGeometry(3.9, 0.6, 0.8);
            const bodyP = new THREE.Mesh(bodyGeo, holoMaterial);
            bodyP.position.y = 1.0;
            group.add(bodyP);

            // Rollo de papel trasero
            const rollGeo = new THREE.CylinderGeometry(0.25, 0.25, 3.4, 8);
            rollGeo.rotateZ(Math.PI / 2);
            const roll = new THREE.Mesh(rollGeo, holoMaterial);
            roll.position.set(0, 0.8, -0.4);
            group.add(roll);

            // Papel que sale
            const paperGeo = new THREE.PlaneGeometry(3.3, 1.2);
            paperGeo.rotateX(Math.PI / 3);
            const paper = new THREE.Mesh(paperGeo, holoMaterial);
            paper.position.set(0, 0.7, 0.2);
            group.add(paper);
            
            // Carro de impresión
            const carriageGeo = new THREE.BoxGeometry(0.3, 0.4, 0.4);
            const carriage = new THREE.Mesh(carriageGeo, holoMaterial);
            carriage.name = "plotterCarriage";
            carriage.position.set(0, 1.0, 0.22);
            group.add(carriage);
            break;

        case "resin": // IMPRESORA RESINA SLA
            // Base cúbica
            const resBaseGeo = new THREE.BoxGeometry(2.0, 1.4, 2.0);
            const resBase = new THREE.Mesh(resBaseGeo, holoMaterial);
            resBase.position.y = 0.2;
            group.add(resBase);

            // Tanque de resina (Vat)
            const vatGeo = new THREE.BoxGeometry(1.6, 0.2, 1.6);
            const vat = new THREE.Mesh(vatGeo, holoMaterial);
            vat.position.y = 1.0;
            group.add(vat);

            // Eje guía Z vertical trasero
            const rodGeo = new THREE.CylinderGeometry(0.06, 0.06, 2.0, 6);
            const rod = new THREE.Mesh(rodGeo, holoMaterial);
            rod.position.set(0, 1.9, -0.6);
            group.add(rod);

            // Brazo de soporte plataforma
            const armGroup = new THREE.Group();
            armGroup.name = "resinArmGroup";
            armGroup.position.set(0, 1.5, 0);

            const supportArmGeo = new THREE.BoxGeometry(0.15, 0.15, 0.6);
            const supportArm = new THREE.Mesh(supportArmGeo, holoMaterial);
            supportArm.position.set(0, 0.15, -0.3);
            armGroup.add(supportArm);

            // Plataforma de construcción
            const buildPlatGeo = new THREE.BoxGeometry(1.3, 0.1, 1.3);
            const buildPlat = new THREE.Mesh(buildPlatGeo, holoMaterial);
            buildPlat.position.y = 0.1;
            armGroup.add(buildPlat);

            // Objeto colgante impreso
            const resinPartGeo = new THREE.ConeGeometry(0.4, 0.8, 5);
            resinPartGeo.rotateX(Math.PI); // Colgando
            const resinPart = new THREE.Mesh(resinPartGeo, holoMaterial);
            resinPart.position.y = -0.35;
            armGroup.add(resinPart);

            group.add(armGroup);

            // Tapa acrílica transparente (Envoltorio virtual)
            const coverGeo = new THREE.BoxGeometry(1.9, 1.8, 1.9);
            const coverMat = new THREE.MeshBasicMaterial({
                color: 0xff9f1c,
                wireframe: true,
                transparent: true,
                opacity: 0.3
            });
            const cover = new THREE.Mesh(coverGeo, coverMat);
            cover.position.y = 1.8;
            group.add(cover);
            break;

        case "robotic-arm": // BRAZO ROBÓTICO
            // Cilindro Base
            const rBaseGeo = new THREE.CylinderGeometry(0.7, 0.8, 0.6, 8);
            const rBase = new THREE.Mesh(rBaseGeo, holoMaterial);
            rBase.position.y = -0.2;
            group.add(rBase);

            // Articulación 1 (Hombro)
            const shoulderGeo = new THREE.SphereGeometry(0.4, 8, 8);
            const shoulder = new THREE.Mesh(shoulderGeo, holoMaterial);
            shoulder.position.y = 0.3;
            group.add(shoulder);

            // Segmento Brazo Inferior
            const arm1Geo = new THREE.CylinderGeometry(0.2, 0.25, 1.6, 6);
            arm1Geo.translate(0, 0.8, 0); // Desplazar pivote al hombro
            const arm1 = new THREE.Mesh(arm1Geo, holoMaterial);
            arm1.name = "robotArm1";
            shoulder.add(arm1);

            // Articulación 2 (Codo)
            const elbowGeo = new THREE.SphereGeometry(0.35, 8, 8);
            const elbow = new THREE.Mesh(elbowGeo, holoMaterial);
            elbow.name = "robotElbow";
            elbow.position.y = 1.6;
            arm1.add(elbow);

            // Segmento Brazo Superior
            const arm2Geo = new THREE.CylinderGeometry(0.15, 0.2, 1.4, 6);
            arm2Geo.translate(0, 0.7, 0);
            const arm2 = new THREE.Mesh(arm2Geo, holoMaterial);
            arm2.name = "robotArm2";
            elbow.add(arm2);

            // Articulación 3 (Muñeca)
            const wristGeo = new THREE.SphereGeometry(0.25, 8, 8);
            const wrist = new THREE.Mesh(wristGeo, holoMaterial);
            wrist.name = "robotWrist";
            wrist.position.y = 1.4;
            arm2.add(wrist);

            // Pinza Final
            const toolGeo = new THREE.BoxGeometry(0.2, 0.3, 0.3);
            const tool = new THREE.Mesh(toolGeo, holoMaterial);
            tool.name = "robotTool";
            tool.position.y = 0.25;
            wrist.add(tool);
            
            // Dedos pinza
            const fingerLGeo = new THREE.BoxGeometry(0.06, 0.2, 0.08);
            fingerLGeo.translate(-0.08, 0.1, 0);
            const fingerL = new THREE.Mesh(fingerLGeo, holoMaterial);
            fingerL.name = "robotFingerL";
            tool.add(fingerL);
            
            const fingerR = fingerL.clone();
            fingerR.name = "robotFingerR";
            fingerR.geometry = fingerLGeo.clone().translate(0.16, 0, 0);
            tool.add(fingerR);
            break;

        case "cnc": // CNC 3018 ROUTER
            // Marco base aluminio
            const frameCGeo = new THREE.BoxGeometry(2.8, 0.15, 2.4);
            const frameC = new THREE.Mesh(frameCGeo, holoMaterial);
            group.add(frameC);

            // Guías lineales Y (inferiores)
            const railsY1Geo = new THREE.CylinderGeometry(0.05, 0.05, 2.3, 6);
            railsY1Geo.rotateX(Math.PI / 2);
            const railsY1 = new THREE.Mesh(railsY1Geo, holoMaterial);
            railsY1.position.set(-0.8, 0.1, 0);
            group.add(railsY1);
            
            const railsY2 = railsY1.clone();
            railsY2.position.x = 0.8;
            group.add(railsY2);

            // Cama de fresado móvil (Eje Y)
            const bedCGeo = new THREE.BoxGeometry(2.0, 0.08, 1.6);
            const bedC = new THREE.Mesh(bedCGeo, holoMaterial);
            bedC.name = "cncBed";
            bedC.position.set(0, 0.2, 0);
            group.add(bedC);

            // Columnas del pórtico X (verticales)
            const postLGeo = new THREE.BoxGeometry(0.15, 1.8, 0.4);
            const postL = new THREE.Mesh(postLGeo, holoMaterial);
            postL.position.set(-1.1, 0.9, 0);
            group.add(postL);

            const postR = postL.clone();
            postR.position.x = 1.1;
            group.add(postR);

            // Barra transversal X
            const barXGeo = new THREE.BoxGeometry(2.2, 0.2, 0.15);
            barXGeo.translate(0, 1.2, 0);
            const barX = new THREE.Mesh(barXGeo, holoMaterial);
            group.add(barX);

            // Conjunto Husillo (Ejes X / Z)
            const spindleGroup = new THREE.Group();
            spindleGroup.name = "cncSpindleGroup";
            spindleGroup.position.set(0, 1.2, 0.25);

            // Motor Husillo
            const motorGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.6, 8);
            const motor = new THREE.Mesh(motorGeo, holoMaterial);
            spindleGroup.add(motor);

            // Fresa de corte (collet + bit)
            const bitGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.3, 4);
            bitGeo.translate(0, -0.4, 0);
            const bit = new THREE.Mesh(bitGeo, holoMaterial);
            bit.name = "cncBit";
            spindleGroup.add(bit);

            group.add(spindleGroup);
            break;
    }

    currentMesh = group;
    // Elevar el grupo ligeramente para centrarlo
    currentMesh.position.y = 0.5;
    scene.add(currentMesh);
}

/* -------------------------------------------------------------
   ANIMACIÓN INTERNA DE LOS HOLOGRAMAS PROCEDURALES
   ------------------------------------------------------------- */
function animateProceduralHologram(machineId, elapsedTime) {
    if (!currentMesh) return;

    switch(machineId) {
        case "ender3": // IMPRESORA 3D
            const extruder = currentMesh.getObjectByName("extruderGroup");
            const printBed = currentMesh.getObjectByName("printBed");
            const extruderHead = currentMesh.getObjectByName("extruderHead");
            const printPart = currentMesh.getObjectByName("printPart");

            if (extruder && printBed && extruderHead && printPart) {
                // Movimiento oscilatorio del extrusor en X
                extruderHead.position.x = Math.sin(elapsedTime * 3) * 0.8;
                
                // Movimiento de cama en Y (profundidad en Z del 3D)
                printBed.position.z = Math.cos(elapsedTime * 2) * 0.5;
                
                // Movimiento de subida en Z (eje Y del 3D)
                const heightY = 1.0 + Math.sin(elapsedTime * 0.2) * 0.8;
                extruder.position.y = heightY;
                
                // Escala de la pieza conforme "crece"
                const scaleVal = 0.5 + (heightY - 1.0) * 0.5;
                printPart.scale.set(scaleVal, scaleVal, scaleVal);
                printPart.position.y = 0.15 + (scaleVal * 0.25);
            }
            break;

        case "laser": // CORTADORA LÁSER
            const gantryL = currentMesh.getObjectByName("gantryL");
            const headL = currentMesh.getObjectByName("headL");
            const laserBeam = currentMesh.getObjectByName("laserBeam");

            if (gantryL && headL && laserBeam) {
                // Movimiento pórtico Y (eje Z de Three.js)
                gantryL.position.z = Math.sin(elapsedTime * 1.5) * 0.8;
                
                // Movimiento cabezal X (eje X de Three.js)
                headL.position.x = Math.cos(elapsedTime * 2.5) * 1.2;

                // Parpadeo de rayo láser
                laserBeam.visible = Math.sin(elapsedTime * 25) > 0.0;
            }
            break;

        case "plotter": // PLOTTER
            const carriage = currentMesh.getObjectByName("plotterCarriage");
            if (carriage) {
                // Movimiento rápido de lado a lado
                carriage.position.x = Math.sin(elapsedTime * 4) * 1.4;
            }
            break;

        case "resin": // IMPRESORA RESINA SLA
            const resinArm = currentMesh.getObjectByName("resinArmGroup");
            if (resinArm) {
                // Movimiento lento arriba/abajo (Eje Y)
                // Simula sumergir y levantar
                resinArm.position.y = 1.2 + Math.sin(elapsedTime * 0.8) * 0.4;
            }
            break;

        case "robotic-arm": // BRAZO ROBÓTICO
            const arm1 = currentMesh.getObjectByName("robotArm1");
            const elbow = currentMesh.getObjectByName("robotElbow");
            const wrist = currentMesh.getObjectByName("robotWrist");
            const tool = currentMesh.getObjectByName("robotTool");
            const fingerL = currentMesh.getObjectByName("robotFingerL");
            const fingerR = currentMesh.getObjectByName("robotFingerR");

            if (arm1 && elbow && wrist && tool) {
                // Rotaciones articuladas continuas suaves
                arm1.rotation.z = Math.sin(elapsedTime * 1.0) * 0.3;
                elbow.rotation.z = Math.cos(elapsedTime * 1.2) * 0.4;
                wrist.rotation.x = Math.sin(elapsedTime * 1.5) * 0.5;
                tool.rotation.y = elapsedTime * 0.8;
                
                // Pinza abriendo y cerrando
                const grip = 0.04 + Math.sin(elapsedTime * 4) * 0.03;
                if (fingerL && fingerR) {
                    fingerL.position.x = -grip;
                    fingerR.position.x = grip;
                }
            }
            break;

        case "cnc": // CNC ROUTER
            const cncSpindle = currentMesh.getObjectByName("cncSpindleGroup");
            const cncBit = currentMesh.getObjectByName("cncBit");
            const cncBed = currentMesh.getObjectByName("cncBed");

            if (cncSpindle && cncBit && cncBed) {
                // Giro rápido de fresa
                cncBit.rotation.y += 0.8;
                
                // Desplazamiento X e Y
                cncSpindle.position.x = Math.sin(elapsedTime * 2) * 0.6;
                cncBed.position.z = Math.cos(elapsedTime * 1.5) * 0.5;
                
                // Pequeño cabeceo en Z (eje Y del 3D)
                cncSpindle.position.y = 1.2 + Math.sin(elapsedTime * 3) * 0.15;
            }
            break;
    }
}

/* -------------------------------------------------------------
   RENDERIZADO DE CATÁLOGO / PANTALLA EXPLICACIÓN
   ------------------------------------------------------------- */
function renderExploreView() {
    const listContainer = document.getElementById("explore-equipos-list");
    listContainer.innerHTML = "";

    for (let key in EQUIPOS_DB) {
        const item = EQUIPOS_DB[key];
        
        const card = document.createElement("div");
        card.className = "machine-card glassmorphism";
        
        // Asignar ícono según categoría
        let iconClass = "fa-solid fa-cube";
        if (key === "laser") iconClass = "fa-solid fa-bolt";
        if (key === "plotter") iconClass = "fa-solid fa-print";
        if (key === "resin") iconClass = "fa-solid fa-flask";
        if (key === "robotic-arm") iconClass = "fa-solid fa-robot";
        if (key === "cnc") iconClass = "fa-solid fa-screwdriver-wrench";

        card.innerHTML = `
            <div class="card-img-placeholder">
                <i class="${iconClass}"></i>
            </div>
            <div class="card-body">
                <span class="card-category">${item.category}</span>
                <h3>${item.name}</h3>
                <p>${item.shortDesc}</p>
                <div class="card-footer">
                    <button class="btn btn-secondary btn-full btn-view-specs" data-id="${item.id}">
                        <i class="fa-solid fa-circle-info"></i> VER MANUAL
                    </button>
                </div>
            </div>
        `;

        // Agregar listener para ir directamente a la vista AR / Manual
        card.querySelector(".btn-view-specs").addEventListener("click", () => {
            switchView("scan-view");
            // Cambiar botones activos de barra de navegación
            document.querySelectorAll(".nav-item").forEach(b => b.classList.remove("active"));
            document.getElementById("nav-btn-scan").classList.add("active");
            
            setTimeout(() => {
                triggerAROverlay(item.id);
            }, 200);
        });

        listContainer.appendChild(card);
    }
}

/* -------------------------------------------------------------
   ADMINISTRACIÓN Y GENERADOR DE ETIQUETAS QR
   ------------------------------------------------------------- */
let qrCodeGenerator = null;

function setupAdminQRSection() {
    const select = document.getElementById("qr-select-machine");
    select.innerHTML = "";
    
    // Cargar selectores
    for (let key in EQUIPOS_DB) {
        const option = document.createElement("option");
        option.value = key;
        option.innerText = EQUIPOS_DB[key].name;
        select.appendChild(option);
    }

    // Listener para cambiar vista previa de la etiqueta
    select.addEventListener("change", updatePrintTagPreview);
    document.getElementById("qr-app-url").addEventListener("input", updatePrintTagPreview);
    
    // Botón Imprimir
    document.getElementById("btn-print-tag").addEventListener("click", () => {
        window.print();
    });

    // Generar primera vista previa
    updatePrintTagPreview();
}

function updatePrintTagPreview() {
    const select = document.getElementById("qr-select-machine");
    const machineId = select.value;
    const appUrlInput = document.getElementById("qr-app-url").value.trim();
    
    const machine = EQUIPOS_DB[machineId];
    if (!machine) return;

    // Actualizar textos de la etiqueta oficial
    document.getElementById("tag-preview-title").innerText = machine.name;
    document.getElementById("tag-preview-category").innerText = machine.category.toUpperCase();
    
    const specsContainer = document.querySelector(".tag-specs");
    let descriptionText = "";
    if (machineId === "ender3") descriptionText = "Prototipado rápido de piezas mecánicas y carcasas plásticas.";
    if (machineId === "laser") descriptionText = "Corte de contornos de alta precisión y grabado de madera/acrílico.";
    if (machineId === "plotter") descriptionText = "Impresión de planos de gran formato, cartelería y corte de vinilos.";
    if (machineId === "resin") descriptionText = "Modelos tridimensionales con alto nivel de detalle fotocurable.";
    if (machineId === "robotic-arm") descriptionText = "Simulación e integración de procesos de automatización industrial.";
    if (machineId === "cnc") descriptionText = "Fresado de placas de circuito impreso (PCB) y grabado 2D/3D.";

    specsContainer.innerHTML = `
        <p><strong>Uso:</strong> ${descriptionText}</p>
        <p><strong>Área de Trabajo:</strong> ${machine.area}</p>
        <p><strong>Ubicación:</strong> Centro de Prototipado UNAL.</p>
    `;

    // Calcular URL del código QR
    // URL base + hash de la máquina. Ej: http://localhost:5500/#machine=cnc
    let delimiter = appUrlInput.endsWith("/") ? "" : "/";
    // Si la URL del input ya tiene un hash o query string, lo manejamos
    let qrUrl = appUrlInput;
    if (qrUrl.includes("#")) {
        qrUrl = qrUrl.split("#")[0];
    }
    qrUrl = `${qrUrl}#machine=${machineId}`;

    // Limpiar QR previo
    const qrContainer = document.getElementById("tag-qrcode");
    qrContainer.innerHTML = "";

    // Generar nuevo código QR usando la librería QRCode.js
    qrCodeGenerator = new QRCode(qrContainer, {
        text: qrUrl,
        width: 100,
        height: 100,
        colorDark: "#003865", // Azul institucional en el código QR
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}

/* -------------------------------------------------------------
   ENVÍO DE REPORTE DE FALLAS (SIMULADO)
   ------------------------------------------------------------- */
function submitFaultReport(e) {
    e.preventDefault();
    
    const user = document.getElementById("report-user").value;
    const severity = document.getElementById("report-severity").value;
    const desc = document.getElementById("report-desc").value;
    
    console.log(`REPORTE DE FALLA REGISTRADO:
    Equipo: ${selectedMachineId}
    Usuario: ${user}
    Severidad: ${severity}
    Descripción: ${desc}
    Fecha: ${new Date().toLocaleString()}
    `);

    // Mostrar mensaje de éxito y ocultar formulario
    document.getElementById("fault-report-form").classList.add("hidden");
    
    const successMsg = document.getElementById("report-success-msg");
    successMsg.classList.remove("hidden");
    
    // Guardar en la base de datos local un log simulado
    const incidentLog = JSON.parse(localStorage.getItem("incident_logs") || "[]");
    incidentLog.push({
        machineId: selectedMachineId,
        user,
        severity,
        desc,
        date: new Date().toISOString()
    });
    localStorage.setItem("incident_logs", JSON.stringify(incidentLog));
}
