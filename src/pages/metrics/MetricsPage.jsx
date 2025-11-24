import { useEffect, useState } from "react";
import { getAllData, deleteData } from "./../../assets/services/stats.services";

export default function MetricsPage() {
  const [metrics, setMetrics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [endpoint, setEndpoint] = useState("");

  const handleDelete = async (id) => {
    const token = sessionStorage.getItem("toke");
    await deleteData(token, endpoint, id);
    fetchMetrics();
  };

  const fetchMetrics = async () => {
    if (!endpoint) return;
    setLoading(true);
    setError(null);

    try {
      const token = sessionStorage.getItem("toke");
      const _data = await getAllData(token, endpoint);
      setMetrics(_data);
    } catch (err) {
      setError("Error obteniendo datos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMetrics();
  }, [endpoint]);

  return (
    <div className="w-full min-h-screen bg-fondocolor flex flex-col items-center px-4 py-8">
      <div className="bg-fondocolor3 w-full max-w-5xl rounded-3xl p-6 shadow-lg">
        <h1 className="text-2xl md:text-3xl font-font text-letracolor2 mb-4">
          Métricas de Salud
        </h1>

        <div className="flex justify-end">
          <select
            className="mb-4 p-2 rounded-lg bg-white shadow"
            value={endpoint}
            onChange={(e) => setEndpoint(e.target.value)}
          >
            <option value="">Seleccione la categoría</option>
            <option value="weight">Peso</option>
            <option value="body">% Grasa corporal</option>
            <option value="colesterol">Colesterol</option>
            <option value="muscular">% Masa muscular</option>
            <option value="pressure">Presión arterial</option>
            <option value="glucose">Glucosa en la sangre</option>
          </select>
        </div>

        {loading && <p className="text-letracolor2">Cargando datos...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!loading && !error && metrics.length > 0 && (
          <table className="w-full bg-white rounded-xl shadow-md overflow-hidden">
            <thead className="bg-fondocolor2 text-letracolor1">
              <tr>
                {endpoint === "pressure" ? (
                  <>
                    <th className="p-3 text-center">Presion Sistolica</th>
                    <th className="p-3 text-center">Presion Diastolica</th>
                  </>
                ) : (
                  <th className="p-3 text-center">Medida</th>
                )}
                <th className="p-3 text-center">Fecha de Registro</th>
                <th className="p-3 text-center">Acción</th>
              </tr>
            </thead>
            <tbody>
              {metrics.map((m, index) => (
                <tr key={index} className="border-b last:border-none">
                  {endpoint === "pressure" ? (
                    <>
                      <td className="p-3 text-center">{m.sys}</td>
                      <td className="p-3 text-center">{m.dis}</td>
                    </>
                  ) : (
                    <td className="p-3 text-center">{m.values}</td>
                  )}
                  <td className="p-3 text-center">{m.date}</td>
                  <td className="p-3 text-center">
                    <button
                      className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                      onClick={() => handleDelete(m._id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
