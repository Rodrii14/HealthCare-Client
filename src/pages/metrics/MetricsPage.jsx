// src/pages/metrics/MetricsPage.jsx
export default function MetricsPage() {
  return (
    <div className="w-full min-h-screen bg-fondocolor flex flex-col items-center px-4 py-8">
      <div className="bg-fondocolor3 w-full max-w-5xl rounded-3xl p-6 shadow-lg">
        <h1 className="text-2xl md:text-3xl font-font text-letracolor2 mb-4">
          Métricas de Salud
        </h1>
        <p className="text-letracolor1 font-font mb-2">
          Aquí se mostrarán las métricas globales de tus registros (promedios,
          tendencias y resúmenes).
        </p>
        <p className="text-letracolor1 font-font text-sm opacity-80">
          Por ahora esta sección es informativa, pero la estructura y el diseño
          ya están listos para integrar las gráficas y estadísticas que definan
          en próximos sprints.
        </p>
      </div>
    </div>
  );
}
