import { Play, ExternalLink, Calendar, Tag } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Campanha Publicitária - Marca Fashion',
      description: 'Vídeo promocional completo com direção de arte, filmagem e pós-produção para lançamento de nova coleção.',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Publicidade',
      duration: '2:30',
      year: '2024'
    },
    {
      id: 2,
      title: 'Documentário Corporativo',
      description: 'Produção audiovisual institucional destacando a história e valores de empresa nacional.',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Corporativo',
      duration: '8:45',
      year: '2024'
    },
    {
      id: 3,
      title: 'Clipe Musical - Artista Independente',
      description: 'Direção, filmagem e edição de videoclipe com conceito visual inovador e narrativa envolvente.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Musical',
      duration: '4:12',
      year: '2023'
    },
    {
      id: 4,
      title: 'Série de Conteúdo Digital',
      description: 'Produção mensal de conteúdo para redes sociais com foco em engajamento e conversão.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Social Media',
      duration: '0:45',
      year: '2023'
    },
    {
      id: 5,
      title: 'Making Of Cinematográfico',
      description: 'Registro completo dos bastidores de produção cinematográfica independente.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Cinema',
      duration: '12:30',
      year: '2023'
    },
    {
      id: 6,
      title: 'Evento Corporativo - Cobertura Completa',
      description: 'Captação e edição de evento empresarial com múltiplas câmeras e transmissão ao vivo.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Eventos',
      duration: '45:00',
      year: '2024'
    }
  ];

  const categories = ['Todos', 'Publicidade', 'Corporativo', 'Musical', 'Social Media', 'Cinema', 'Eventos'];

  return (
    <section id="projetos" className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Meus <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Projetos</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes, demonstrando versatilidade 
            e qualidade técnica em diferentes formatos audiovisuais
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                category === 'Todos'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-purple-600/90 text-white px-3 py-1 rounded-full text-sm">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Metadata */}
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.year}
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag className="w-4 h-4" />
                      {project.duration}
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
            Ver Todos os Projetos
          </button>
        </div>
      </div>
    </section>
  );
}
