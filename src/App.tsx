import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Music, 
  Mic2, 
  Guitar, 
  CheckCircle2, 
  MessageCircle, 
  CalendarCheck, 
  MapPin, 
  Clock, 
  Users,
  ChevronDown,
  Star
} from 'lucide-react';

const WHATSAPP_URL = "https://wa.me/556291281434?text=Ol%C3%A1%21+Quero+or%C3%A7amento+para+m%C3%BAsica+ao+vivo.+Data%3A+__%2F__%2F__.+Local%3A+____.+Dura%C3%A7%C3%A3o%3A+____h.+Tipo+de+evento%3A+____.+Formato%3A+Duo%2FTrio%2FCompleto.+P%C3%BAblico%3A+____+pessoas.";

const IMAGES = {
  hero: "https://lh3.googleusercontent.com/d/1SnohHVEjLqBJyHY-v2xgX6vZl79ft8H1",
  about: "https://lh3.googleusercontent.com/d/1WealQsgSvPtc6vJ7XJ1TeIaj_UJ3S-py",
  gallery1: "https://lh3.googleusercontent.com/d/1eeufT6USDMRno7bFaU5_4jaGSl1smPaR",
  gallery2: "https://lh3.googleusercontent.com/d/1f9UaF7VXWckAnExvoeNup8lV9-Fw2m7C",
  gallery3: "https://lh3.googleusercontent.com/d/1fa3UTm7QIMWqUkEzgoMR-NVklInlnfye",
};

function CTAButton({ text, subtext, className = "" }: { text: string, subtext?: string, className?: string }) {
  return (
    <div className={`flex flex-col items-center sm:items-start ${className}`}>
      <a 
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-[#d4af37] px-8 py-4 text-sm font-semibold text-black transition-all hover:bg-[#e5c158] hover:scale-105 active:scale-95"
      >
        <MessageCircle className="h-5 w-5" />
        <span>{text}</span>
      </a>
      {subtext && (
        <span className="mt-2 text-xs text-brand-light/60">{subtext}</span>
      )}
    </div>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-6 text-left"
      >
        <h3 className="text-lg font-medium text-brand-light">{question}</h3>
        <ChevronDown className={`h-5 w-5 text-brand-accent transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-brand-light/70">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark font-sans text-brand-light selection:bg-brand-accent selection:text-black">
      
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-brand-dark/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <Music className="h-6 w-6 text-brand-accent" />
            <span className="font-serif text-xl font-bold tracking-tight">Projeto Mix</span>
          </div>
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-brand-accent/50 px-5 py-2 text-sm font-medium text-brand-accent transition-colors hover:bg-brand-accent hover:text-black"
          >
            <MessageCircle className="h-4 w-4" />
            Consultar data
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 blur-[120px] bg-gradient-to-b from-brand-accent to-transparent rounded-full pointer-events-none" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-accent/30 bg-brand-accent/10 px-3 py-1 text-xs font-medium text-brand-accent mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
                </span>
                Disponibilidade limitada por agenda
              </div>
              
              <h1 className="font-serif text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
                Música ao vivo que levanta o evento, <span className="text-brand-accent italic">sem dor de cabeça.</span>
              </h1>
              
              <p className="mt-6 text-xl text-brand-light/80 leading-relaxed">
                Duo com voz feminina + guitarra. <br className="hidden sm:block" />
                Pop Rock (nacional e internacional) + MPB.
              </p>
              
              <ul className="mt-8 space-y-3 text-brand-light/70">
                {['Festas e aniversários', 'Confraternizações', 'Eventos corporativos', 'Bares, pubs e casas de show'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
                <CTAButton 
                  text="Chamar no WhatsApp e pedir orçamento" 
                  subtext="Resposta rápida. Se você já tiver data, local e duração, melhor ainda."
                />
              </div>
              
              <p className="mt-6 text-sm text-brand-light/50 flex items-center gap-2">
                <CalendarCheck className="h-4 w-4" />
                Desde 2016 levando um repertório certeiro.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:ml-auto"
            >
              <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <img 
                  src={IMAGES.hero} 
                  alt="Projeto Mix Duo" 
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 text-sm font-medium text-white">
                    <MapPin className="h-4 w-4 text-brand-accent" />
                    Goiânia / GO
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why it works */}
      <section className="border-t border-white/5 bg-white/[0.02] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">Por que esse duo funciona tão bem?</h2>
            <p className="mt-4 text-brand-light/70">A presença de uma banda com a logística simplificada de um duo.</p>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Mic2 className="h-6 w-6" />,
                title: "Voz feminina marcante + guitarra",
                desc: "Presença de banda com logística de duo."
              },
              {
                icon: <Music className="h-6 w-6" />,
                title: "Repertório que todo mundo conhece",
                desc: "Pop/rock e MPB no ponto. Hits para cantar junto."
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "Versatilidade real",
                desc: "Do som ambiente elegante ao “vamos fazer a pista cantar”."
              },
              {
                icon: <Star className="h-6 w-6" />,
                title: "Experiência de palco",
                desc: "Iniciamos em 2016 e já tocamos em diversos eventos e palcos de Goiânia."
              }
            ].map((feature, i) => (
              <div key={i} className="rounded-2xl border border-white/5 bg-white/5 p-8 transition-colors hover:bg-white/10">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent/20 text-brand-accent">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-brand-light/70">{feature.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <CTAButton text="Ver disponibilidade e valores" className="items-center" />
          </div>
        </div>
      </section>

      {/* Repertoire */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold sm:text-4xl mb-6">Repertório <br/><span className="text-brand-light/50 text-2xl">(o que você pode esperar)</span></h2>
              
              <div className="space-y-8">
                <div className="border-l-2 border-brand-accent pl-6">
                  <h3 className="text-xl font-semibold mb-2">Pop Rock Internacional</h3>
                  <p className="text-brand-light/70">Clássicos que atravessam gerações e hits para cantar junto.</p>
                </div>
                <div className="border-l-2 border-brand-accent pl-6">
                  <h3 className="text-xl font-semibold mb-2">Pop Rock Nacional</h3>
                  <p className="text-brand-light/70">Energia e nostalgia na medida certa.</p>
                </div>
                <div className="border-l-2 border-brand-accent pl-6">
                  <h3 className="text-xl font-semibold mb-2">MPB</h3>
                  <p className="text-brand-light/70">Momentos mais sofisticados e emocionais.</p>
                </div>
              </div>
              
              <div className="mt-10 rounded-xl bg-brand-accent/10 border border-brand-accent/20 p-6">
                <p className="text-sm text-brand-accent">
                  <strong>Ajuste sob medida:</strong> você pode pedir um “clima” (animado, lounge, acústico, pista) e a gente monta o set.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img src={IMAGES.gallery1} alt="Show ao vivo" className="rounded-2xl object-cover aspect-square w-full" referrerPolicy="no-referrer" />
              <img src={IMAGES.about} alt="Apresentação" className="rounded-2xl object-cover object-[65%_top] aspect-square w-full translate-y-8" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="border-t border-white/5 bg-white/[0.02] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">Formatos disponíveis</h2>
            <p className="mt-4 text-brand-light/70">Você escolhe o tamanho do som para o seu evento.</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="rounded-2xl border border-brand-accent/30 bg-brand-dark p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-brand-accent text-black text-xs font-bold px-3 py-1 rounded-bl-lg">MAIS PEDIDO</div>
              <h3 className="font-serif text-2xl font-semibold mb-2">Duo</h3>
              <p className="text-brand-accent text-sm font-medium mb-6">Voz feminina + Guitarra</p>
              
              <p className="text-sm text-brand-light/50 mb-4 uppercase tracking-wider font-semibold">Ideal para:</p>
              <ul className="space-y-3 text-brand-light/80">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" /> Eventos corporativos, recepções, confraternizações</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" /> Bares e pubs</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" /> Festas com espaço compacto</li>
              </ul>
            </div>
            
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="font-serif text-2xl font-semibold mb-2">Trio / Quarteto / Completo</h3>
              <p className="text-brand-light/60 text-sm font-medium mb-6">Formação sob demanda</p>
              
              <p className="text-sm text-brand-light/50 mb-4 uppercase tracking-wider font-semibold">Podemos adicionar:</p>
              <ul className="space-y-3 text-brand-light/80 mb-6">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent" /> Percussionista</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent" /> Baterista</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent" /> Baixista</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent" /> Guitarrista ou violão</li>
              </ul>
              
              <div className="pt-6 border-t border-white/10">
                <p className="text-sm text-brand-light/70"><strong>O que muda:</strong> mais impacto de palco, dinâmica de banda, maior pressão sonora e “pista” quando o evento pede.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="mb-6 text-brand-light/80">Me diz <strong>tipo de evento + público + tamanho do local</strong> que eu te recomendo o formato certo.</p>
            <CTAButton text="Consultar formato ideal" className="items-center" />
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <img src={IMAGES.gallery3} alt="Eventos" className="rounded-2xl object-cover aspect-[4/3] w-full" referrerPolicy="no-referrer" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-3xl font-bold sm:text-4xl mb-8">Para quais eventos é perfeito?</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Users className="h-5 w-5 text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Eventos corporativos</h3>
                    <p className="text-brand-light/70">Confraternizações, convenções, happy hour, inauguração.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Star className="h-5 w-5 text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Festas</h3>
                    <p className="text-brand-light/70">Aniversário, casamento (recepção), formatura, comemorações.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Music className="h-5 w-5 text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Bares e casas</h3>
                    <p className="text-brand-light/70">Noite pop/rock, MPB, especial temático.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 rounded-xl bg-white/5 p-6 border border-white/10">
                <p className="text-brand-light/90">
                  <strong className="text-brand-accent">Resultado esperado:</strong> gente cantando junto, clima bom e um som com cara de “profissional”, não improviso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-white/5 bg-brand-accent text-black py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">Como funciona a contratação</h2>
            <p className="mt-4 text-black/70 font-medium">Simples, como deveria ser.</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-black/10 -translate-y-1/2 z-0" />
            
            {[
              {
                step: "1",
                title: "Chame no WhatsApp",
                desc: "Clique no botão e inicie a conversa direto com a gente."
              },
              {
                step: "2",
                title: "Envie os detalhes",
                desc: "Data, local (Goiânia/GO), duração e formato desejado."
              },
              {
                step: "3",
                title: "Orçamento e reserva",
                desc: "A gente confirma disponibilidade, passa orçamento e fecha."
              }
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black text-brand-accent text-2xl font-bold mb-6 shadow-xl">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-black/70 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-black/80 hover:scale-105 active:scale-95"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Quero cotar meu evento agora</span>
            </a>
            <p className="mt-4 text-sm font-medium text-black/60">Orçamento no mesmo dia (quando possível)</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold sm:text-4xl mb-6">Sobre o Projeto Mix</h2>
              <div className="space-y-4 text-brand-light/80 text-lg leading-relaxed">
                <p>
                  O <strong>Projeto Mix</strong> (Flávio Corá & Suzana Santos) nasceu em <strong>2016</strong> com uma proposta direta: <strong>música ao vivo bem tocada, bem cantada e com repertório que conversa com o público</strong>.
                </p>
                <p>
                  Ao longo dos anos, nos apresentamos em diversos eventos (festas, confraternizações e corporativos) e <strong>circulamos por bares, pubs e casas de show de Goiânia</strong>, com foco em <strong>Pop Rock (nacional e internacional) e MPB</strong>.
                </p>
                <p className="text-brand-accent font-medium pt-4">
                  Repertório que agrada do 20 ao 60+ sem esforço.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto overflow-hidden rounded-full border-4 border-white/10">
                <img src={IMAGES.about} alt="Flávio Corá & Suzana Santos" className="w-full h-full object-cover object-[65%_top]" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-white/5 bg-white/[0.02] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">O que dizem sobre nós</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Eles foram incríveis! Chegaram no horário, o repertório foi exatamente o que pedimos e animaram a festa toda.",
              "Profissionalismo do início ao fim. O clima do evento ficou perfeito com a voz da Suzana e a guitarra do Flávio.",
              "Contratamos para a confraternização da empresa. Volume super adequado, som de qualidade e organização impecável."
            ].map((text, i) => (
              <div key={i} className="rounded-2xl border border-white/5 bg-brand-dark p-8">
                <div className="flex gap-1 text-brand-accent mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-brand-light/80 italic">"{text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">Perguntas frequentes</h2>
          </div>
          
          <div className="border-t border-white/10">
            <FAQItem 
              question="Vocês tocam em quais cidades?" 
              answer="Base em Goiânia/GO. Outras cidades: sob consulta." 
            />
            <FAQItem 
              question="Dá para ajustar o repertório?" 
              answer="Sim. A gente equilibra pedidos com o que funciona ao vivo." 
            />
            <FAQItem 
              question="Qual o tempo mínimo de show?" 
              answer="Depende do evento. Diga a duração desejada e a gente sugere o melhor formato." 
            />
            <FAQItem 
              question="Vocês levam som/PA?" 
              answer="Depende do local. A gente alinha isso no orçamento (local já tem som vs. a gente levar)." 
            />
            <FAQItem 
              question="Vocês fazem evento corporativo com volume controlado?" 
              answer="Sim. Dá para ser som ambiente ou show. Você escolhe o clima." 
            />
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-brand-accent/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-20 blur-[100px] bg-brand-accent rounded-full pointer-events-none" />
        
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-serif text-4xl font-bold sm:text-5xl lg:text-6xl mb-6">
            Vamos colocar seu evento no nível <span className="italic text-brand-accent">“memória boa”</span>?
          </h2>
          <p className="text-xl text-brand-light/70 mb-10">
            Chama no WhatsApp e me manda: data + local + duração + tipo de evento.
          </p>
          
          <CTAButton 
            text="Falar no WhatsApp e receber orçamento" 
            subtext="Respondo rápido. Sem burocracia."
            className="items-center"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-12">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Music className="h-5 w-5 text-brand-accent" />
            <span className="font-serif text-lg font-bold">Projeto Mix</span>
          </div>
          
          <div className="text-sm text-brand-light/50 text-center md:text-left">
            <p>Goiânia, GO • (62) 9128-1434</p>
            <p>suzanangelica@hotmail.com</p>
          </div>
          
          <div className="text-sm text-brand-light/40">
            © {new Date().getFullYear()} Projeto Mix. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
