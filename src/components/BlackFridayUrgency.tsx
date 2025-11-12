import { useState, useEffect } from "react";
import { Eye, TrendingUp } from "lucide-react";

const BlackFridayUrgency = () => {
  const [viewers, setViewers] = useState(127);
  const [recentPurchases, setRecentPurchases] = useState(3);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show notification after a brief delay
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    // Hide notification after 5 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 6000);

    // Simular visualizações aumentando
    const viewerInterval = setInterval(() => {
      setViewers(prev => {
        const change = Math.floor(Math.random() * 5) - 2; // -2 a +2
        const newValue = prev + change;
        return Math.max(100, Math.min(200, newValue)); // Entre 100 e 200
      });
    }, 8000);

    // Simular compras recentes e re-mostrar notificação
    const purchaseInterval = setInterval(() => {
      setRecentPurchases(Math.floor(Math.random() * 5) + 1); // 1 a 5
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 5000);
    }, 15000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      clearInterval(viewerInterval);
      clearInterval(purchaseInterval);
    };
  }, []);

  return (
    <div className={`fixed top-24 left-4 z-30 space-y-3 transition-all duration-700 ${
      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
    }`}>
      {/* Visualizações ao vivo */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-3 rounded-lg shadow-xl border-2 border-red-400 backdrop-blur-sm animate-pulse">
        <div className="flex items-center gap-2">
          <Eye className="w-5 h-5 animate-pulse" />
          <div className="text-sm font-bold">
            <span className="text-lg">{viewers}</span> pessoas
          </div>
        </div>
        <p className="text-xs mt-1 font-semibold">vendo agora</p>
      </div>

      {/* Compras recentes */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-3 rounded-lg shadow-xl border-2 border-green-400 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5" />
          <div className="text-sm font-bold">
            <span className="text-lg">{recentPurchases}</span> matrículas
          </div>
        </div>
        <p className="text-xs mt-1 font-semibold">na última hora</p>
      </div>

      {/* Urgência de estoque */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white px-4 py-3 rounded-lg shadow-xl border-2 border-orange-400 backdrop-blur-sm">
        <div className="text-sm font-bold">⚡ ÚLTIMAS VAGAS</div>
        <p className="text-xs mt-1 font-semibold">Garanta já o seu!</p>
      </div>
    </div>
  );
};

export default BlackFridayUrgency;
