'use client';

import { useEffect, useState } from 'react';
import ProjectCard from '@/components/project-card';

type Proyecto = {
  id: number;
  titulo: string;
  descripcion: string;
  tecnologias: string;
  enlace: string;
  imagen_url: string;
  autor: string;
};

export default function Showroom() {
  const [proyectos, setProyectos] = useState<Proyecto[]>([]);

  useEffect(() => {
    const fetchProyectos = async () => {
      const res = await fetch('/api/projects');
      const data = await res.json();
      setProyectos(data); 
    };

    fetchProyectos();
  }, []);

  return (
  <div className="max-w-6xl mx-auto px-4 py-8">
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {proyectos.slice(0, 3).map((p) => (
        <ProjectCard key={p.id} proyecto={p} />
      ))}
    </div>
  </div>
);
}
