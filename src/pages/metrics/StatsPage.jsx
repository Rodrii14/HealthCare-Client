// src/pages/metrics/StatsPage.jsx

export default function StatsPage() {
  // Más adelante aquí podemos leer qué métrica se quiere ver
  // (por query param o por estado global) y mostrar sus detalles.

  return (
    <div className="w-full min-h-screen bg-fondocolor flex flex-col items-center px-4 py-8">
      <div className="bg-fondocolor3 w-full max-w-3xl rounded-3xl p-6 shadow-lg">
        <h1 className="text-2xl md:text-3xl font-font text-letracolor2 mb-4">
          Detalle de métricas
        </h1>

        <p className="text-letracolor1 font-font mb-3">
          Aquí podrás ver el estado de tus métricas (Normal, Alerta, Crítico)
          según los rangos definidos por el sistema.
        </p>

        <div className="mt-4 space-y-4">
          <div className="border border-letracolor2/40 rounded-2xl p-4">
            <h2 className="text-letracolor2 font-font text-lg mb-1">
              Próximamente
            </h2>
            <p className="text-letracolor1 text-sm">
              En siguientes sprints conectaremos esta pantalla con los datos
              reales de tu peso, presión arterial, glucosa, etc., y se
              mostrarán etiquetas como{" "}
              <span className="text-green-400 font-semibold">Normal</span>,{" "}
              <span className="text-yellow-400 font-semibold">Alerta</span> o{" "}
              <span className="text-red-400 font-semibold">Crítico</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
