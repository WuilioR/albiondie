"use client";
import { useState } from 'react';

const mods = [
  { nombre: "Sodium", desc: "Optimización extrema para mejorar los FPS.", link: "https://modrinth.com/mod/sodium" },
  { nombre: "Mythic Metals", desc: "Nuevos minerales, herramientas y armaduras épicas.", link: "https://modrinth.com/mod/mythicmetals" },
  { nombre: "JourneyMap", desc: "Mapa y mini-mapa en tiempo real (tecla J).", link: "https://www.curseforge.com/minecraft/mc-mods/journeymap" },
  { nombre: "Waystones", desc: "Puntos de teletransporte (Waypoints) por el mundo.", link: "https://www.curseforge.com/minecraft/mc-mods/waystones" },
  { nombre: "Iron Chests", desc: "Cofres de metal con mucho más espacio.", link: "https://www.curseforge.com/minecraft/mc-mods/iron-chests" },
  { nombre: "Graves", desc: "Tumbas para recuperar tus cosas al morir.", link: "https://www.curseforge.com/minecraft/mc-mods/yungs-bridges" }, 
  { nombre: "Dungeons and Taverns", desc: "Nuevas estructuras y tabernas con mucho botín.", link: "https://modrinth.com/datapack/dungeons-and-taverns" },
  { nombre: "Traveler's Backpack", desc: "Mochilas para ampliar tu inventario.", link: "https://www.curseforge.com/minecraft/mc-mods/travelers-backpack" },
  { nombre: "Iris Shaders", desc: "Soporte para Shaders gráficos.", link: "https://modrinth.com/mod/iris" },
  { nombre: "FerriteCore", desc: "Mod técnico: Reduce el uso de memoria RAM.", link: "https://modrinth.com/mod/ferritecore" },
];

export default function Home() {
  const [copied, setCopied] = useState(false);
  const ip = "albiondie.holy.gg";
  const driveLink = "https://drive.google.com/file/d/1dLJs85bPH0eelnUW1OXN5sg0aV3X-f0m/view?usp=drive_link";

  const copiarIP = () => {
    navigator.clipboard.writeText(ip);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white font-sans selection:bg-orange-500/30">
      <div className="max-w-4xl mx-auto p-6 md:p-12 space-y-12">
        
        {/* CABECERA / HERO */}
        <header className="text-center py-16 space-y-6">
          <div className="inline-block bg-orange-500/10 border border-orange-500/20 px-4 py-1 rounded-full text-orange-400 text-xs font-bold tracking-widest uppercase">
            Servidor Fabric 1.21.1
          </div>
          <h1 className="text-7xl md:text-8xl font-black tracking-tighter italic leading-none">
            ALBION<span className="text-orange-500 text-glow">DIE</span>
          </h1>
          <p className="text-stone-400 text-lg max-w-md mx-auto">
            Survival técnico y explorativo con optimización avanzada.
          </p>
          
          <div className="pt-4">
            <button 
              onClick={copiarIP}
              className="group relative bg-orange-600 hover:bg-orange-500 px-12 py-6 rounded-2xl transition-all shadow-[0_0_40px_rgba(234,88,12,0.3)] active:scale-95"
            >
              <span className="text-3xl font-mono font-bold tracking-tight">{ip}</span>
              <div className="text-[10px] uppercase font-bold mt-1 tracking-[0.2em] opacity-80">
                {copied ? "¡IP COPIADA!" : "Click para copiar IP"}
              </div>
            </button>
          </div>
        </header>

        {/* AVISO DE RENDIMIENTO */}
        <section className="bg-stone-900/50 border border-stone-800 p-6 rounded-3xl flex items-center gap-6">
          <div className="bg-orange-500 text-black font-bold p-3 rounded-xl">RAM</div>
          <p className="text-stone-300 text-sm italic">
            "Recordatorio: Asigna <strong>4GB o 6GB de RAM</strong> en tu launcher para evitar desconexiones (Connection Reset)."
          </p>
        </section>

        {/* BOTÓN DRIVE */}
        <div className="bg-gradient-to-br from-orange-600 to-orange-800 p-1 rounded-[2.5rem] shadow-2xl">
          <div className="bg-[#121212] rounded-[2.3rem] p-8 md:p-10 text-center md:text-left md:flex items-center justify-between">
            <div className="mb-8 md:mb-0">
              <h2 className="text-3xl font-black mb-2">MODPACK LISTO</h2>
              <p className="text-stone-400 italic">Descarga directa desde Google Drive</p>
            </div>
            <a 
              href={driveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-orange-600 font-black px-12 py-5 rounded-2xl hover:bg-orange-50 hover:scale-105 transition-all shadow-xl"
            >
              DESCARGAR .ZIP
            </a>
          </div>
        </div>

        {/* LISTA DE MODS */}
        <section className="space-y-6">
          <div className="flex items-center gap-4">
            <h3 className="text-2xl font-black tracking-tight uppercase">Modlist</h3>
            <div className="h-[1px] flex-grow bg-stone-800" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mods.map((mod, index) => (
              <div key={index} className="bg-stone-900/30 border border-stone-800/50 p-6 rounded-2xl hover:border-orange-500/30 transition-all group relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-orange-400 group-hover:text-orange-300 transition-colors text-lg">
                      {mod.nombre}
                    </h4>
                    <a 
                      href={mod.link} 
                      target="_blank" 
                      className="text-[9px] font-bold text-stone-500 border border-stone-700 px-2 py-1 rounded-md hover:bg-stone-700 uppercase tracking-tighter"
                    >
                      Info
                    </a>
                  </div>
                  <p className="text-sm text-stone-500 group-hover:text-stone-400 transition-colors leading-relaxed">
                    {mod.desc}
                  </p>
                </div>
                <div className="absolute top-0 right-0 w-16 h-16 bg-orange-500/5 blur-2xl rounded-full -mr-8 -mt-8" />
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-center py-10 opacity-30 text-[10px] tracking-[0.3em] font-bold uppercase">
          Build 2026 • AlbionDie Server
        </footer>
      </div>

      <style jsx global>{`
        .text-glow {
          text-shadow: 0 0 30px rgba(234, 88, 12, 0.4);
        }
      `}</style>
    </div>
  );
}