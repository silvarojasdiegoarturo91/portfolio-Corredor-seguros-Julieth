import { Metadata } from 'next'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Artículos y consejos sobre seguros, finanzas personales y protección familiar.',
}

const blogPosts = [
  {
    id: 1,
    title: '5 razones por las que necesitas un seguro de vida hoy',
    excerpt: 'Muchas personas posponen contratar un seguro de vida sin saber que el mejor momento para hacerlo es ahora. Descubre por qué.',
    category: 'Seguro de Vida',
    date: '15 Dic 2024',
    readTime: '5 min',
    icon: '❤️',
  },
  {
    id: 2,
    title: 'Cómo elegir el mejor seguro de salud para tu familia',
    excerpt: 'Comparar planes de salud puede ser confuso. Te explicamos los factores clave que debes considerar antes de decidir.',
    category: 'Seguro de Salud',
    date: '10 Dic 2024',
    readTime: '7 min',
    icon: '🏥',
  },
  {
    id: 3,
    title: 'Seguro de mascotas: ¿vale la pena la inversión?',
    excerpt: 'Los gastos veterinarios pueden ser inesperadamente altos. Analizamos si un seguro de mascotas es la decisión correcta.',
    category: 'Mascotas',
    date: '5 Dic 2024',
    readTime: '4 min',
    icon: '🐾',
  },
  {
    id: 4,
    title: 'Todo lo que debes saber sobre el seguro de hogar',
    excerpt: 'Tu hogar es tu activo más valioso. Aprende cómo protegerlo correctamente contra los riesgos más comunes.',
    category: 'Seguro de Hogar',
    date: '1 Dic 2024',
    readTime: '6 min',
    icon: '🏠',
  },
  {
    id: 5,
    title: 'Preguntas frecuentes sobre seguros que todos tienen',
    excerpt: 'Resolvemos las dudas más comunes sobre seguros: qué es una prima, cómo tramitar una reclamación, qué cubre y qué no.',
    category: 'Educación Financiera',
    date: '25 Nov 2024',
    readTime: '8 min',
    icon: '❓',
  },
  {
    id: 6,
    title: 'Cómo los seguros te ayudan a planificar tu jubilación',
    excerpt: 'Los seguros de vida con componente de ahorro son una herramienta poderosa para complementar tu pensión de jubilación.',
    category: 'Finanzas Personales',
    date: '20 Nov 2024',
    readTime: '6 min',
    icon: '💰',
  },
]

const categories = ['Todos', 'Seguro de Vida', 'Seguro de Salud', 'Mascotas', 'Seguro de Hogar', 'Educación Financiera']

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-700 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Consejos, guías y todo lo que necesitas saber para tomar decisiones informadas sobre tus seguros
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat === 'Todos'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} hover className="flex flex-col cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{post.icon}</span>
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2 flex-1">{post.title}</h2>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                  <span>📅 {post.date}</span>
                  <span>⏱ {post.readTime} lectura</span>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 mb-4">Más artículos próximamente...</p>
            <Button href="/contact" variant="primary">
              ¿Tienes alguna pregunta? Contáctanos
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-green-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            📬 Recibe consejos en tu email
          </h2>
          <p className="text-gray-600 mb-6">
            Suscríbete y recibe artículos sobre seguros, finanzas y protección familiar directamente en tu bandeja.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Suscribirme
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">Sin spam. Puedes darte de baja cuando quieras.</p>
        </div>
      </section>
    </div>
  )
}
