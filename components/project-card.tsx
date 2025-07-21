import React from 'react'

type Proyecto = {
  id: number
  titulo: string
  descripcion: string
  tecnologias: string
  enlace: string
  imagen_url: string
  autor: string
}

export default function ProjectCard({ proyecto }: { proyecto: Proyecto }) {
  return (
    <div className="bg-white/5 border border-white/20 rounded-lg backdrop-blur-xl shadow-2xl shadow-black/20 hover:bg-white/15 hover:scale-105 hover:shadow-2xl hover:shadow-purple-400/10 transition-all duration-500 group cursor-pointer overflow-hidden"
>
      <img
        src={proyecto.imagen_url}
        alt={proyecto.titulo}
        className="w-full h-48 object-cover  transition-transform duration-500"
      />
      <div className="p-6 space-y-3">
        <h3 className="text-white font-semibold text-lg group-hover:text-purple-300 transition-colors duration-300 flex items-center gap-2">
          <span>🚀</span> {proyecto.titulo}
        </h3>
        <p className="text-gray-300 text-sm">{proyecto.descripcion}</p>
        <div className="flex flex-wrap gap-2">
          {proyecto.tecnologias.split(',').map((tech, i) => (
            <span key={i} className="bg-purple-500/20 hover:scale-105 text-purple-300 px-2 py-0.5 rounded text-xs">
              {tech.trim()}
            </span>
          ))}
        </div>
        <a
          href={proyecto.enlace}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline hover:text-blue-300 transition-colors duration-300 text-sm inline-block"
        >
          🔗 Ver proyecto
        </a>
        <p className="text-[#b9bbbe] text-xs pt-2 border-t border-white/10 mt-4">
          Publicado por {proyecto.autor}
        </p>
        
      </div>
    </div>
  )
}