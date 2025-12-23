const productos = {
    /*Montañeras*/
    "Epic 8 Expert Di2": {
        imagen: "montañeras,/Epic 8 Expert Di2.webp",
        precio: "S/ 21,940",
        descripcion: "MTB de cross-country (XC) profesional. Versión ultraligera con cambios electrónicos Di2 y suspensión optimizada."
    },
    "Epic 8 Pro": {
        imagen: "montañeras,/Epic 8 Pro.webp",
        precio: "S/39,815 ",
        descripcion: "MTB de cross-country (XC) de alta gama. Destaca por su eficiencia de pedaleo y ligereza extrema."
    },
    "Fuel EX 9.8 GX AXS T-Type Gen 6": {
        imagen: "montañeras,/Fuel EX 9.8 GX AXS T-Type Gen 6.png",
        precio: "S/29,990",
        descripcion: "MTB de trail/pista en carbono. Equipada con cambios inalámbricos y suspensión versátil para todo tipo de senderos."
    },
    "Session 8": {
        imagen: "montañeras,/Session 8.png",
        precio: "S/21,900",
        descripcion: "MTB de descenso en aluminio. Diseñada para máxima estabilidad y velocidad en pistas extremas."
    },
    "Slash 9.8 XT Gen 5": {
        imagen: "montañeras,/Slash 9.8 XT Gen 5.png",
        precio: "S/22,990",
        descripcion: "MTB de enduro en carbono. Una bicicleta rígida y rápida para impactos fuertes y competición."
    },
    /*Ruta*/
    "Madone SL 6 Gen 8": {
        imagen: "ruta,/Madone SL 6 Gen 8.png",
        precio: "S/22 990",
        descripcion: "Bicicleta de carretera aerodinámica en carbono OCLV 500. Incluye cambios electrónicos Shimano 105 Di2 y ruedas de carbono."
    },
    "Madone SL 5 Gen 8": {
        imagen: "ruta,/Madone SL 5 Gen 8.png",
        precio: "S/15,490",
        descripcion: "Bicicleta de carretera aerodinámica en carbono. Opción más accesible con cambios mecánicos y componentes de aleación."
    },
    "Crux Expert": {
        imagen: "ruta,/Crux Expert.webp",
        precio: "S/25,500",
        descripcion: "La gravel más ligera del mundo. Equipada con cambios inalámbricos SRAM Rival eTap AXS y neumáticos de alto agarre."
    },
    "Diverge Comp Carbon": {
        imagen: "ruta,/Diverge Comp Carbon.webp",
        precio: "S/17,250",
        descripcion: "Bicicleta de gravel versátil. Diseñada para ser rápida, estable y divertida en terrenos mixtos y rutas largas."
    },
    "Speed Concept SLR 7": {
        imagen: "ruta,/Speed Concept SLR 7.png",
        precio: "S/47,900",
        descripcion: "Bicicleta de triatlón de alta gama. Máxima aerodinámica, tecnología IsoSpeed y sistemas integrados de hidratación."
    },

    
    /*Niños*/
    "Precaliber 16 Freno Contrapedal": {
        imagen: "niños/Precaliber 16 Freno Contrapedal.png",
        precio: "S/1,290",
        descripcion: "Bicicleta con freno de contrapedal y rueditas desmontables. Ideal para niños de 4 a 5 años; incluye manija en el asiento para guía de los padres."
    },
    "Precaliber 12": {
        imagen: "niños/Precaliber 12.jpeg",
        precio: "S/890",
        descripcion: "Primera bicicleta con pedales para niños de 3 a 4 años. Incluye rueditas fáciles de quitar y manija de apoyo en el asiento."
    },
    "Kickster": {
        imagen: "niños/Kickster.jpeg",
        precio: "S/690",
        descripcion: "Bicicleta de equilibrio (sin pedales) para niños de 85 cm a 1 metro. Perfecta para aprender a balancearse antes de pasar a los pedales."
    },
    "Hotwalk": {
        imagen: "niños/Hotwalk.webp",
        precio: "S/1,070",
        descripcion: "Bicicleta de inicio temprano (desde los 18 meses). Diseñada para ser ultra estable, segura y facilitar el aprendizaje sin caídas."
    },
    "Riprock Coaster 16": {
        imagen: "niños/Riprock Coaster 16.webp",
        precio: "S/1,350",
        descripcion: "Bicicleta de iniciación en senderos. Combina la seguridad del freno de contrapedal con tracción y control para terrenos más rugosos."
    },
    /*Urbanas*/
    "Roll 2.0": {
        imagen: "urbanas,/Roll 2.0.webp",
        precio: "S/ 2,815",
        descripcion: "Bicicleta urbana cómoda y vertical con neumáticos anchos de gran agarre, ideal para iniciarse en el ejercicio con estabilidad y confianza."
    },
    "Roll 2.0 Low Entry": {
            imagen: "urbanas,/Roll 2.0 Low Entry.webp",
            precio: "S/ 2,815",
            descripcion: "Versión de cuadro bajo para subir y bajar fácilmente; ofrece una conducción suave y estable con frenos de disco mecánicos confiables."
    },
    "FX Sport AL 3": {
            imagen: "urbanas,/FX Sport AL 3.png",
            precio: "S/ 5,000",
            descripcion: "Bicicleta de aluminio ligera y versátil con transmisión de 10 velocidades, preparada tanto para el asfalto como para caminos de grava."
    },
    "Verve 2 Lowstep Gen 5": {
            imagen: "urbanas,/Verve 2 Lowstep Gen 5.png",
            precio: "S/ 3,490",
            descripcion: "Híbrida de confort con geometría de acceso bajo, frenos hidráulicos y poste de asiento con suspensión para paseos diarios relajados."
    },
    "FX 3 Disc Gen 3": {
            imagen: "urbanas,/FX 3 Disc Gen 3.png",
            precio: "S/ 3,999",
            descripcion: "Híbrida de alto rendimiento con tijera de carbono y transmisión 1x, equilibrando velocidad para ejercicio y utilidad para traslados diarios."
    },

    /*Cascos*/
    "Casco Trek Charge WaveCel Commuter": {
        imagen: "cascos,/Casco Trek Charge WaveCel Commuter.png",
        precio: "S/ 299",
        descripcion: "Casco diseñado para e-bikes y traslados urbanos; ofrece un ajuste cómodo y protección avanzada con tecnología WaveCel."
    },
    "Casco Integral de Bicicleta Altitude FW-092": {
            imagen: "cascos,/Casco Integral de Bicicleta Altitude FW-092.webp",
            precio: "S/ 159",
            descripcion: "Protección integral obligatoria para downhill y freeride; cuenta con mentonera integrada para proteger el rostro en pistas extremas."
    },
    "Casco Gambit": {
            imagen: "cascos,/Casco Gambit.webp",
            precio: "S/ 800",
            descripcion: "Casco integral con certificación de descenso que ofrece la ventilación y ligereza de un casco abierto sin sacrificar seguridad."
    },
    "Casco Ciclismo Ruta Trek Ballista Mips": {
            imagen: "cascos,/Casco Ciclismo Ruta Trek Ballista Mips.webp",
            precio: "S/ 650",
            descripcion: "Casco de alto rendimiento aerodinámico para ruta, diseñado para ser sorprendentemente ligero, fresco y veloz."
    },
    "Casco Ciclismo Montaña Bontrager Blaze WaveCel": {
            imagen: "cascos,/Casco Ciclismo Montaña Bontrager Blaze WaveCel.png",
            precio: "S/ 900",
            descripcion: "Casco MTB de máxima calificación en seguridad, con tecnología WaveCel ligera y cobertura de oídos extraíble."
    },
    "S-Works Prevail 3": {
            imagen: "cascos,/S-Works Prevail 3.webp",
            precio: "S/ 540",
            descripcion: "El casco definitivo para escaladas y calor, con canales de aire optimizados que aumentan la superficie de ventilación significativamente."
    },

    /*Indumentarias*/
    "Guantes Largos Ciclismo Bontrager Quantum": {
        imagen: "indumentarias/Guantes Largos Ciclismo Bontrager Quantum.png",
        precio: "S/ 80",
        descripcion: "Guantes de dedos completos con acolchado estratégico, diseñados para ofrecer comodidad y protección en cada rodada."
    },
    "Guantes de Trail Air Hombre": {
            imagen: "indumentarias/Guantes de Trail Air Hombre.webp",
            precio: "S/ 85",
            descripcion: "Guantes de trail ultra ventilados con palma perforada, ideales para mantener las manos frescas en días calurosos de montaña."
    },
    "Zapatillas de Carretera S-Works 7": {
            imagen: "indumentarias/Zapatillas de Carretera S-Works 7.webp",
            precio: "S/ 1,155",
            descripcion: "Calzado de élite con suela de carbono Powerline™, diseñado para una transferencia de potencia máxima y confort sin compromisos."
    },
    "Zapatilla Ciclismo Montaña Bontrager Flatline": {
            imagen: "indumentarias/Zapatilla Ciclismo Montaña Bontrager Flatline.png",
            precio: "S/ 490",
            descripcion: "Zapatillas duraderas y optimizadas para pedales planos, brindando máxima confianza y sensibilidad sobre el terreno."
    },
    "Jersey Ciclismo Altitude Pure Hombre Azul": {
            imagen: "indumentarias/Jersey Ciclismo Altitude Pure Hombre Azul.png",
            precio: "S/ 109",
            descripcion: "Prenda técnica transpirable con tres bolsillos posteriores, diseñada para absorber la humedad y mejorar el rendimiento."
    },
    "Tricota Ciclismo Bontrager Kalia Amarillo": {
            imagen: "indumentarias/Tricota Ciclismo Bontrager Kalia Amarillo.webp",
            precio: "S/ 200",
            descripcion: "Maillot femenino que combina elegancia y sencillez, ideal para ciclistas de fitness que buscan comodidad dentro y fuera de la ruta."
    },
    "SHORT GIANT RIVAL BLACK": {
            imagen: "indumentarias/SHORT GIANT RIVAL BLACK.jpg",
            precio: "S/ 130",
            descripcion: "Short de alto rendimiento con badana de alta densidad y protección UV, perfecto para rutas de hasta 4 horas de duración."
    },
};

// Obtener ID del producto de la URL
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

// Elementos del DOM
const nombreProducto = document.getElementById("nombre-producto");
const imagenProducto = document.getElementById("imagen-producto");
const precioProducto = document.getElementById("precio-producto");
const descripcionProducto = document.getElementById("descripcion-producto");
const botonCarrito = document.getElementById("agregar-carrito");

// Mostrar información del producto
if(id && productos[id]){
    nombreProducto.textContent = id;
    imagenProducto.src = productos[id].imagen;
    imagenProducto.alt = id;
    precioProducto.textContent = productos[id].precio;
    descripcionProducto.textContent = productos[id].descripcion;
} else {
    nombreProducto.textContent = "Producto no encontrado";
    descripcionProducto.textContent = "";
    precioProducto.textContent = "";
    imagenProducto.style.display = "none";
    botonCarrito.style.display = "none";
}

// Agregar al carrito (simple usando localStorage)
botonCarrito.addEventListener("click", () => {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push({
        id: id,
        nombre: nombreProducto.textContent,
        precio: precioProducto.textContent,
        imagen: imagenProducto.src
    });
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert("Producto agregado al carrito");
});