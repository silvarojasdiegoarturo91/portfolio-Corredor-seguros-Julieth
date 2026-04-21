import { Metadata } from 'next'
import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { blogPosts } from '@/lib/blog-posts'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Artículos y consejos sobre seguros, finanzas personales y protección familiar.',
}

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
              <Link key={post.id} href={`/blog/${post.slug}`} className="block">
                <Card hover className="flex flex-col h-full cursor-pointer">
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
                  <p className="text-green-600 text-sm font-semibold mt-3 hover:text-green-700">
                    Leer artículo →
                  </p>
                </Card>
              </Link>
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
