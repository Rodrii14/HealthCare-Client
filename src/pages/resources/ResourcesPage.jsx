// src/pages/resources/ResourcesPage.jsx
import { useState } from "react";

const resources = [
  {
    id: 1,
    title: "Guía básica de alimentación saludable",
    type: "Artículo",
    description:
      "Recomendaciones para armar un plato equilibrado con frutas, verduras, cereales integrales, proteínas magras y grasas saludables.",
    content: [
      "Llena la mitad del plato con frutas y verduras de distintos colores.",
      "Elige cereales integrales (avena, arroz integral, pan integral, pasta integral) como base de tus comidas.",
      "Incluye una fuente de proteína magra en cada comida: pescado, pollo sin piel, legumbres, huevo, tofu o frutos secos.",
      "Prefiere aceites vegetales (oliva, canola, girasol) y evita frituras frecuentes y grasas trans.",
      "Reduce el consumo de bebidas azucaradas, dulces y comida ultraprocesada; toma agua la mayor parte del día.",
    ],
    url: "https://nutritionsource.hsph.harvard.edu/healthy-eating-plate/",
    urlLabel: "Ver artículo completo",
  },
  {
    id: 2,
    title: "Rutinas ligeras para personas ocupadas",
    type: "Rutinas por grupo muscular",
    description:
      "Ejemplos de rutina tipo upper/lower (tren superior/inferior) usando ejercicios básicos de musculación para cada grupo muscular.",
    content: [
      "Organiza tu semana en 2 a 4 días de entrenamiento: por ejemplo, 2 días de tren superior (upper) y 2 días de tren inferior (lower).",
      "Día de tren superior: combina empujes (pecho, hombros, tríceps) y jalones (espalda, bíceps) con 1–2 ejercicios básicos por grupo muscular.",
      "Día de tren inferior: incluye ejercicios para cuádriceps, glúteos, isquiotibiales y pantorrillas; agrega trabajo de core (abdominales y zona lumbar).",
      "Empieza con 2–3 series de 10–15 repeticiones por ejercicio, con pesos ligeros que te permitan mantener buena técnica.",
      "Para escoger ejercicios concretos por grupo muscular, apóyate en la Enciclopedia de Ejercicios de Musculación y revisa la técnica recomendada.",
    ],
    url: "https://www.realfitness.cl/admin/imagenes/descargas/Enciclopedia%20de%20ejercicios%20de%20musculacion.pdf",
    urlLabel: "Abrir PDF",
    videoUrl: "https://www.youtube.com/watch?v=pZjlekeb2uY",
  },
  {
    id: 3,
    title: "Control de presión arterial en casa",
    type: "Artículo",
    description:
      "Pasos y consejos para tomarte la presión de forma correcta y registrar tus valores en casa.",
    content: [
      "Utiliza un tensiómetro automático de manguito que se coloque en la parte superior del brazo; los modelos de muñeca no son tan precisos.",
      "Siéntate con la espalda apoyada, pies en el suelo y brazo apoyado a la altura del corazón; descansa al menos 5 minutos antes de medir.",
      "Coloca el manguito sobre la piel (no sobre la ropa) y sigue las indicaciones del fabricante.",
      "Realiza al menos dos mediciones con 1 minuto de diferencia y anota los resultados con fecha y hora.",
      "Comparte tus registros con tu profesional de salud para ayudar a ajustar tratamiento y monitorear tu presión arterial.",
    ],
    url: "https://www.goredforwomen.org/es/health-topics/high-blood-pressure/understanding-blood-pressure-readings/monitoring-your-blood-pressure-at-home",
    urlLabel: "Ver guía oficial",
  },
  {
    id: 4,
    title: "Hábitos para mejorar la calidad del sueño",
    type: "Artículo",
    description:
      "Cambios sencillos de higiene del sueño que pueden ayudarte a dormir mejor y descansar más.",
    content: [
      "Mantén un horario regular: intenta acostarte y levantarte a la misma hora todos los días, incluso fines de semana.",
      "Crea una rutina relajante antes de dormir: leer, escuchar música suave o practicar respiración profunda.",
      "Evita pantallas (celular, computadora, TV) al menos 30–60 minutos antes de acostarte, porque la luz azul dificulta conciliar el sueño.",
      "Cuida el ambiente de tu habitación: que sea oscura, silenciosa y fresca; usa cortinas opacas y reduce ruidos si es posible.",
      "Limita la cafeína, nicotina y comidas muy pesadas en las horas previas a dormir; si los problemas de sueño continúan, consulta con un profesional.",
    ],
    url: "https://www.sleepfoundation.org/sleep-hygiene",
    urlLabel: "Ver artículo completo",
  },
];

export default function ResourcesPage() {
  const [selectedResource, setSelectedResource] = useState(null);

  const handleMainButtonClick = (item) => {
    // Para el recurso 2 abrimos directamente el PDF
    if (item.id === 2 && item.url) {
      window.open(item.url, "_blank", "noopener,noreferrer");
      return;
    }
    // Para los demás mostramos el detalle abajo
    setSelectedResource(item);
  };

  return (
    <div className="w-full min-h-screen bg-fondocolor flex flex-col items-center px-4 py-8">
      {/* Encabezado */}
      <div className="bg-fondocolor3 w-full max-w-6xl rounded-3xl p-6 shadow-lg mb-6">
        <h1 className="text-2xl md:text-3xl font-font text-letracolor2 mb-2">
          Recursos de Salud
        </h1>
        <p className="text-letracolor1 font-font mb-1">
          Aquí encontrarás material de apoyo para aprender más sobre tu salud y
          cómo cuidarla.
        </p>
        <p className="text-letracolor1 font-font text-sm opacity-80">
          Esta sección puede ampliarse en futuros sprints con videos, documentos
          descargables y enlaces a fuentes oficiales.
        </p>
      </div>

      {/* Tarjetas de recursos */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {resources.map((item) => (
          <div
            key={item.id}
            className="bg-fondocolor3 rounded-2xl p-4 shadow-md border border-fondocolor2"
          >
            <p className="text-xs uppercase tracking-wide text-letracolor2 font-font mb-1">
              {item.type}
            </p>
            <h2 className="text-lg md:text-xl font-font text-letracolor1 mb-2">
              {item.title}
            </h2>
            <p className="text-sm text-letracolor1 font-font mb-3">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {/* Botón principal */}
              <button
                type="button"
                onClick={() => handleMainButtonClick(item)}
                className="px-4 py-2 rounded-full bg-letracolor2 text-white text-sm font-font hover:bg-blue-600 transition-all duration-300"
              >
                {item.id === 2 ? "Ver PDF" : "Ver recurso"}
              </button>

              {/* Botón extra para el video del recurso 2 */}
              {item.id === 2 && item.videoUrl && (
                <a
                  href={item.videoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-full bg-fondocolor2 text-letracolor2 text-sm font-font hover:bg-black/40 transition-all duration-300"
                >
                  Ver video
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Panel de detalle del recurso seleccionado (para todos menos el 2) */}
      {selectedResource && (
        <div className="w-full max-w-6xl bg-fondocolor3 rounded-3xl p-6 shadow-lg border border-fondocolor2">
          <p className="text-xs uppercase tracking-wide text-letracolor2 font-font mb-1">
            {selectedResource.type}
          </p>
          <h2 className="text-xl md:text-2xl font-font text-letracolor1 mb-3">
            {selectedResource.title}
          </h2>
          <p className="text-sm text-letracolor1 font-font mb-4">
            {selectedResource.description}
          </p>

          <ul className="list-disc list-inside space-y-2 text-sm text-letracolor1 font-font">
            {selectedResource.content.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>

          {/* Botón al artículo/PDF si tiene URL */}
          {selectedResource.url && (
            <a
              href={selectedResource.url}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 px-4 py-2 rounded-full bg-fondocolor2 text-letracolor2 text-sm font-font hover:bg-black/40 transition-all duration-300"
            >
              {selectedResource.urlLabel || "Ver recurso externo"}
            </a>
          )}

          <button
            type="button"
            className="mt-4 ml-3 text-sm text-letracolor1 font-font hover:underline"
            onClick={() => setSelectedResource(null)}
          >
            Cerrar recurso
          </button>
        </div>
      )}
    </div>
  );
}
