import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, Code, Zap, Github, MessageSquare, Users, Sparkles, TrendingUp, Server, Heart } from "lucide-react"
import { FloatingElements } from "@/components/floating-elements"
import { RevealAnimation } from "@/components/reveal-animation"
import { TypingAnimation } from "@/components/typing-animation"
import { AnimatedCounter } from "@/components/animated-counter"
import Showroom from "@/pages/showroom"


export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      <FloatingElements />

      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-20 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10"></div>

      {/* Enhanced floating orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse hover:scale-110 transition-transform duration-1000"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000 hover:scale-110 transition-transform duration-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500 hover:scale-110 transition-transform duration-1000"></div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/10 backdrop-blur-xl bg-white/5 transition-all duration-300 hover:bg-white/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 group">
            <Bot className="w-8 h-8 text-purple-400 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
              ShowroomBot
            </span>
          </div>
          <Button
            variant="outline"
            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/25"
            asChild
          >
            <a href="https://github.com/serxa92/ShowroomBot" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <RevealAnimation delay={200}>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-xl rounded-full px-6 py-3 mb-8 shadow-lg hover:bg-white/15 hover:scale-105 transition-all duration-300 cursor-pointer">
              <Sparkles className="w-4 h-4 text-purple-300 animate-spin" />
              <span className="text-white/90 text-sm font-medium">Bot de Discord para desarrolladores</span>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={400}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Comparte tus
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-pink-400 hover:to-purple-400 transition-all duration-500">
                {" "}
                proyectos
              </span>
              <br />
              con estilo
            </h1>
          </RevealAnimation>

          <RevealAnimation delay={600}>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              <TypingAnimation
                text="Un bot de Discord diseñado para comunidades de programadores y estudiantes que quieren mostrar sus creaciones de manera profesional y organizada."
                speed={40}
              />
            </p>
          </RevealAnimation>

          <RevealAnimation delay={800}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-purple-600/80 hover:bg-purple-700/80 text-white px-8 py-3 backdrop-blur-xl border border-purple-500/30 shadow-lg hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 group"
                asChild
              >
                <a
                  href="https://discord.com/api/oauth2/authorize?client_id=1355223505251205223&permissions=2048&scope=bot%20applications.commands"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Bot className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Invitar Bot
                </a>
              </Button>
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* Stats Section */}
      <RevealAnimation>
        <section className="py-12 px-4 bg-white/5 backdrop-blur-xl border-y border-white/10">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  <AnimatedCounter end={14} suffix="+" />
                </div>
                <div className="text-gray-300 flex items-center justify-center gap-2">
                  <Server className="w-4 h-4" />
                  Servidores activos
                </div>
              </div>
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-pink-400 mb-2">
                  <AnimatedCounter end={200} suffix="+" />
                </div>
                <div className="text-gray-300 flex items-center justify-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Proyectos compartidos
                </div>
              </div>
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  <AnimatedCounter end={500} suffix="+" />
                </div>
                <div className="text-gray-300 flex items-center justify-center gap-2">
                  <Heart className="w-4 h-4" />
                  Desarrolladores felices
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealAnimation>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <RevealAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">¿Qué hace ShowroomBot?</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Transforma la manera en que tu comunidad comparte proyectos con un sistema intuitivo y visualmente
                atractivo
              </p>
            </div>
          </RevealAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            <RevealAnimation delay={200}>
              <Card className="bg-white/10 border-white/20 backdrop-blur-xl shadow-2xl shadow-black/20 hover:bg-white/15 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 group cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/30 group-hover:scale-110 transition-all duration-300">
                    <MessageSquare className="w-6 h-6 text-purple-400 group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-white group-hover:text-purple-300 transition-colors duration-300">
                    Comando Simple
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Solo usa{" "}
                    <code className="bg-purple-500/20 px-2 py-1 rounded text-purple-300 group-hover:bg-purple-500/30 transition-colors duration-300">
                      /proyecto
                    </code>{" "}
                    para abrir un formulario interactivo
                  </CardDescription>
                </CardHeader>
              </Card>
            </RevealAnimation>

            <RevealAnimation delay={400}>
              <Card className="bg-white/10 border-white/20 backdrop-blur-xl shadow-2xl shadow-black/20 hover:bg-white/15 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 group-hover:scale-110 transition-all duration-300">
                    <Code className="w-6 h-6 text-blue-400 group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-white group-hover:text-blue-300 transition-colors duration-300">
                    Información Completa
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Captura descripción, tecnologías utilizadas y enlaces de manera organizada
                  </CardDescription>
                </CardHeader>
              </Card>
            </RevealAnimation>

            <RevealAnimation delay={600}>
              <Card className="bg-white/10 border-white/20 backdrop-blur-xl shadow-2xl shadow-black/20 hover:bg-white/15 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 group cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/30 group-hover:scale-110 transition-all duration-300">
                    <Zap className="w-6 h-6 text-green-400 group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-white group-hover:text-green-300 transition-colors duration-300">
                    Vista Previa Automática
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Genera miniaturas automáticamente desde los enlaces compartidos
                  </CardDescription>
                </CardHeader>
              </Card>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* Example Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <RevealAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Ejemplo de uso</h2>
              <p className="text-gray-300 text-lg">Así se ve un proyecto compartido con ShowroomBot</p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={300}>
            <div className="max-w-2xl mx-auto">
              <Card className="bg-white/10 border-white/20 backdrop-blur-xl shadow-2xl shadow-black/20 hover:bg-white/15 hover:scale-[1.02] transition-all duration-500 group">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Bot className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-white font-semibold group-hover:text-purple-300 transition-colors duration-300">
                            ShowroomBot
                          </span>
                          <Badge className="bg-blue-600 text-white text-xs px-2 py-0.5 group-hover:bg-blue-500 transition-colors duration-300">
                            APP
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <span className="text-[#b9bbbe] text-sm">07/04/2025 19:12</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border-l-4 border-cyan-500 shadow-inner group-hover:bg-white/10 transition-colors duration-300">
                    <div className="space-y-3">
                      <h3 className="text-white font-semibold text-lg flex items-center gap-2 group-hover:text-cyan-300 transition-colors duration-300">
                        <span>🚀</span>
                        Asyncterest
                      </h3>

                      <div className="space-y-2">
                        <p className="text-white flex items-start gap-2">
                          <span>💡</span>
                          <span>
                            Web tipo Pinterest. La idea es sencilla, puedes escribir una palabra clave o usar los
                            filtros que cambian cada vez que recargas la página. La app hace peticiones a la API de
                            Unsplash y muestra imágenes relacionadas.
                          </span>
                        </p>

                        <p className="text-white flex items-center gap-2">
                          <span>🛠️</span>
                          <span>HTML | CSS | JS</span>
                        </p>

                        <p className="text-blue-400 flex items-center gap-2 hover:underline cursor-pointer hover:text-blue-300 transition-colors duration-300">
                          <span>🔗</span>
                          <span>Ver proyecto</span>
                        </p>
                      </div>

                      <div className="mt-4 rounded-lg overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pmeVQzr3cb6HTTOjvMC3qbwcUhIO8u.png"
                          alt="Vista previa de Asyncterest - interfaz tipo Pinterest con ideas de decoración de oficina"
                          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      <div className="pt-2 border-t border-white/10">
                        <p className="text-[#b9bbbe] text-sm">Publicado por Sergio Agulla</p>
                      </div>

                      <div className="flex items-center gap-4 pt-2">
                        <div className="flex items-center gap-1 hover:scale-110 transition-transform duration-200 cursor-pointer">
                          <span>👍</span>
                          <span className="text-[#b9bbbe] text-sm">3</span>
                        </div>
                        <div className="flex items-center gap-1 hover:scale-110 transition-transform duration-200 cursor-pointer">
                          <span>🔥</span>
                          <span className="text-[#b9bbbe] text-sm">3</span>
                        </div>
                        <div className="flex items-center gap-1 hover:scale-110 transition-transform duration-200 cursor-pointer">
                          <span>👏</span>
                          <span className="text-[#b9bbbe] text-sm">3</span>
                        </div>
                        <div className="flex items-center gap-1 hover:scale-110 transition-transform duration-200 cursor-pointer">
                          <span>😍</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </RevealAnimation>
        </div>
      </section>
      <section className="py-20 px-4 bg-white/5 backdrop-blur-xl border-y border-white/10">
  <div className="container mx-auto">
    <RevealAnimation>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4"> Proyectos de la comunidad</h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Estos son los proyectos compartidos por los desarrolladores de la comunidad.
        </p>
      </div>
    </RevealAnimation>
    <RevealAnimation delay={300}>
      <Showroom />
    </RevealAnimation>
  </div>
</section>


      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <RevealAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Perfecto para</h2>
            </div>
          </RevealAnimation>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <RevealAnimation delay={200}>
              <Card className="bg-white/10 border-white/20 backdrop-blur-xl shadow-2xl shadow-black/20 hover:bg-white/15 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 group-hover:scale-110 transition-all duration-300">
                    <Users className="w-6 h-6 text-blue-400 group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-white group-hover:text-blue-300 transition-colors duration-300">
                    Comunidades de Programadores
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Ideal para servidores de Discord donde los desarrolladores quieren compartir sus trabajos y recibir
                    feedback de la comunidad.
                  </CardDescription>
                </CardHeader>
              </Card>
            </RevealAnimation>

            <RevealAnimation delay={400}>
              <Card className="bg-white/10 border-white/20 backdrop-blur-xl shadow-2xl shadow-black/20 hover:bg-white/15 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 group cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/30 group-hover:scale-110 transition-all duration-300">
                    <Code className="w-6 h-6 text-green-400 group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-white group-hover:text-green-300 transition-colors duration-300">
                    Estudiantes y Bootcamps
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Perfecto para estudiantes que quieren mostrar su progreso y crear un portafolio de proyectos dentro
                    de su comunidad educativa.
                  </CardDescription>
                </CardHeader>
              </Card>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <RevealAnimation>
        <section className="relative z-10 py-20 px-4 bg-white/5 backdrop-blur-xl border-y border-white/10">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">¿Listo para mejorar tu comunidad?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Invita ShowroomBot a tu servidor de Discord y transforma la manera en que tu comunidad comparte proyectos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-purple-600/80 hover:bg-purple-700/80 text-white px-8 py-3 backdrop-blur-xl border border-purple-500/30 shadow-lg hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 group"
                asChild
              >
                <a
                  href="https://discord.com/api/oauth2/authorize?client_id=1355223505251205223&permissions=2048&scope=bot%20applications.commands"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Bot className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Invitar a Discord
                </a>
              </Button>
            </div>
          </div>
        </section>
      </RevealAnimation>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8 px-4 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-colors duration-300">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4 group">
            <Bot className="w-6 h-6 text-purple-400 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-white font-semibold group-hover:text-purple-300 transition-colors duration-300">
              ShowroomBot
            </span>
          </div>
          <p className="text-gray-400">Hecho por Serxa92 con ❤️ para la comunidad de desarrolladores</p>
        </div>
      </footer>
    </div>
  )
}
