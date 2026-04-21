import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts, getBlogPostBySlug } from '@/lib/blog-posts'
import { Button } from '@/components/ui/Button'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) notFound()

  // Simple markdown-like rendering: convert ## headings, ### headings, **bold**, and --- to HTML
  const renderContent = (text: string) => {
    return text
      .trim()
      .split('\n')
      .map((line, i) => {
        if (line.startsWith('### ')) {
          return (
            <h3 key={i} className="text-xl font-bold text-gray-900 mt-6 mb-3">
              {line.slice(4)}
            </h3>
          )
        }
        if (line.startsWith('## ')) {
          return (
            <h2 key={i} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              {line.slice(3)}
            </h2>
          )
        }
        if (line.startsWith('---')) {
          return <hr key={i} className="my-8 border-gray-200" />
        }
        if (line.startsWith('- ')) {
          return (
            <li key={i} className="ml-6 list-disc text-gray-700 mb-1">
              {renderInline(line.slice(2))}
            </li>
          )
        }
        if (line.startsWith('**') && line.endsWith('**')) {
          return (
            <p key={i} className="font-semibold text-gray-900 mt-4 mb-1">
              {line.slice(2, -2)}
            </p>
          )
        }
        if (line.trim() === '') return <div key={i} className="h-2" />
        return (
          <p key={i} className="text-gray-700 leading-relaxed mb-2">
            {renderInline(line)}
          </p>
        )
      })
  }

  const renderInline = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/)
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i}>{part.slice(2, -2)}</strong>
      }
      return part
    })
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-700 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link
              href="/blog"
              className="text-green-200 hover:text-white text-sm font-medium transition-colors"
            >
              ← Volver al Blog
            </Link>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">{post.icon}</span>
            <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{post.title}</h1>
          <div className="flex items-center gap-6 text-green-200 text-sm">
            <span>📅 {post.date}</span>
            <span>⏱ {post.readTime} de lectura</span>
          </div>
        </div>
      </section>

      {/* Article content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-md p-8 md:p-12">
            <p className="text-lg text-gray-600 mb-8 italic border-l-4 border-green-500 pl-4">
              {post.excerpt}
            </p>
            <div className="prose prose-gray max-w-none">
              {renderContent(post.content)}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 bg-green-50 rounded-xl p-8 text-center">
            <p className="text-2xl mb-2">💬</p>
            <h2 className="text-xl font-bold text-gray-900 mb-2">¿Tienes alguna pregunta?</h2>
            <p className="text-gray-600 mb-6">
              Julieth te asesora de forma gratuita y sin compromiso. Contacta ahora y recibe una respuesta personalizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button href="/contact" variant="primary">
                Solicitar asesoría gratuita
              </Button>
              <Button
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '34695135678'}`}
                variant="outline"
              >
                💬 Escribir por WhatsApp
              </Button>
            </div>
          </div>

          {/* Related posts */}
          {otherPosts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Más artículos</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {otherPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-3xl">{related.icon}</span>
                      <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                        {related.category}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm mb-2 line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="text-xs text-gray-500">{related.readTime} de lectura</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
