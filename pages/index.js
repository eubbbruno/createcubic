// pages/index.js
import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import FloatingCubesBackground from '../components/FloatingCubes';
import City3D from '@/components/City3D';
import CustomCursor from '@/components/CustomCursor';
import { Box, VStack, Heading, Text, SimpleGrid, Image } from "@chakra-ui/react";
import FloatingParticles3D from '@/components/FloatingParticles3D';

const MotionBox = motion(Box);

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lista de Soluções
  const solutions = [
    {
      title: "Websites & E-commerces",
      description: "Criamos plataformas personalizadas para negócios online.",
      icon: "/icons/ecommerce.png",
    },
    {
      title: "Dropshipping Automatizado",
      description: "Automatização completa para seu negócio de dropshipping.",
      icon: "/icons/dropshipping.png",
    },
    {
      title: "Gestão de Tráfego Pago",
      description: "Otimização de campanhas para resultados excepcionais.",
      icon: "/icons/ads.png",
    },
    {
      title: "Apps Mobile",
      description: "Desenvolvimento de aplicativos móveis inovadores.",
      icon: "/icons/mobileapps.png",
    },
    {
      title: "SaaS Personalizado",
      description: "Soluções SaaS adaptadas às suas necessidades.",
      icon: "/icons/saas.png",
    },
    {
      title: "Conteúdo Digital",
      description: "Criação e gestão de conteúdo digital estratégico.",
      icon: "/icons/socialmedia.png",
    },
    {
      title: "Marketing de Afiliados",
      description: "Estratégias eficazes de marketing de afiliados.",
      icon: "/icons/affiliate.png",
    },
    {
      title: "Blockchain & Cripto",
      description: "Projetos baseados em blockchain e criptomoedas.",
      icon: "/icons/blockchain.png",
    },
  ];

  return (
    <div className="relative bg-gray-900 text-gray-200">
      <Head>
        <title>CreateCubic - Agência de Lançamentos</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dosis:wght@400;500;600;700&family=Kanit:wght@400;500;600;700&family=Lekton:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 px-8 py-4 z-20 bg-black bg-opacity-10 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/images/logo.png"
              alt="CreateCubic Logo"
              className="h-10 w-auto"
            />
          </motion.div>

          {/* Navegação */}
          <nav className="hidden md:flex space-x-8 text-lg font-semibold font-dosis uppercase">
            <a href="#inicio" className="nav-link">INÍCIO</a>
            <a href="#sobre" className="nav-link">SOBRE</a>
            <a href="#projetos" className="nav-link">PROJETOS</a>
            <a href="#solucoes" className="nav-link">SOLUÇÕES</a>
            <a href="#equipe" className="nav-link">EQUIPE</a>
            <a href="#blog" className="nav-link">BLOG</a>
            <a href="#contato" className="nav-link">CONTATO</a>
          </nav>

          {/* Menu Mobile */}
          <div className="md:hidden">
            <button
              className="text-gray-200 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Menu Mobile Expandido */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col items-center space-y-4 text-lg font-semibold font-dosis uppercase">
              <a href="#inicio" className="nav-link">INÍCIO</a>
              <a href="#sobre" className="nav-link">SOBRE</a>
              <a href="#projetos" className="nav-link">PROJETOS</a>
              <a href="#solucoes" className="nav-link">SOLUÇÕES</a>
              <a href="#equipe" className="nav-link">EQUIPE</a>
              <a href="#blog" className="nav-link">BLOG</a>
              <a href="#contato" className="nav-link">CONTATO</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative flex flex-col items-center justify-center text-center min-h-screen px-8 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/space-background.jpg")' }}
      >
        <FloatingCubesBackground />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-20">
          <motion.h2 className="text-6xl font-kanit text-indigo-400 glow-text mb-6" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            Inovação que Transforma
          </motion.h2>
          <motion.p className="text-xl font-lekton text-gray-300 max-w-2xl mx-auto mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
            Desenvolvemos soluções digitais que potencializam ideias e impulsionam negócios ao infinito.
          </motion.p>
          <motion.div className="flex space-x-4 justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
            <button className="glass-button bg-gradient-to-r from-blue-500 to-purple-600 glow-button px-6 py-3 rounded-full text-white font-dosis uppercase transition transform hover:scale-105">
              Explore Nossos Projetos
            </button>
            <button className="glass-button border border-indigo-500 text-indigo-500 px-6 py-3 rounded-full font-dosis uppercase transition transform hover:bg-indigo-600 hover:text-white">
              Fale Conosco
            </button>
          </motion.div>
        </div>
      </section>

      {/* Sobre Nós */}
<section id="sobre" className="py-16 px-8 bg-gray-900 text-gray-200 min-h-screen">
  {/* Logos das Ferramentas em Movimento */}
  <div className="overflow-hidden mt-[-2rem] mb-8"> {/* Ajuste para posicionar mais para cima */}
    <div className="flex items-center space-x-16 animate-marquee whitespace-nowrap py-4">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="h-12 w-auto"/>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="Next.js" className="h-12 w-auto"/>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" alt="Adobe" className="h-12 w-auto" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg" alt="Shopify" className="h-12 w-auto" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-original.svg" alt="Facebook" className="h-12 w-auto" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg" alt="Instagram" className="h-12 w-auto" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" alt="Node.js" className="h-12 w-auto" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS" className="h-12 w-auto" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" alt="JavaScript" className="h-12 w-auto" />
    </div>
  </div>

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
    {/* Texto Alinhado à Esquerda */}
    <div>
      <motion.h3
        className="text-xl font-lekton text-left mb-2 text-indigo-200 lowercase"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <span className="mr-2">🧠</span> inovando em cada projeto
      </motion.h3>

      <motion.h2
        className="text-5xl font-kanit text-left mb-6 text-indigo-400"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Quem Somos
      </motion.h2>

      <motion.p
        className="text-lg font-lekton text-gray-400 mb-4 text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Criar ao Cubo é transformar o ordinário no extraordinário. Nosso trabalho é baseado em inovação e criatividade, moldando soluções digitais que transcendem o comum.
      </motion.p>

      <motion.p
        className="text-lg font-lekton text-gray-400 mb-4 text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        O cubo é o símbolo da dimensão infinita onde ideias tomam forma, se multiplicam e crescem. Cada projeto é pensado para impulsionar negócios ao próximo nível.
      </motion.p>

      <motion.p
        className="text-lg font-lekton text-gray-400 mb-6 text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        Com nossa abordagem criativa e estratégica, somos especialistas em transformar ideias em soluções digitais robustas, inovando em cada etapa do processo.
      </motion.p>

      <motion.div
        className="flex space-x-4 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <button className="glass-button bg-gradient-to-r from-blue-500 to-purple-600 glow-button px-6 py-3 rounded-full text-white font-dosis uppercase transition transform hover:scale-105">
          Nossa História
        </button>
        <button className="glass-button border border-indigo-500 text-indigo-500 px-6 py-3 rounded-full font-dosis uppercase transition transform hover:bg-indigo-600 hover:text-white">
          Nossos Valores
        </button>
      </motion.div>
    </div>

    {/* Cidade 3D */}
    <div className="relative flex justify-center items-center h-72">
      <City3D />
    </div>
  </div>
</section>

      {/* Nossos Projetos */}
<section id="projetos" className="py-20 px-8 bg-gray-900 text-gray-200 min-h-screen relative overflow-hidden">
  <div className="max-w-7xl mx-auto">
    <motion.h3
      className="text-6xl font-kanit text-center mb-12 text-indigo-400"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Projetos que Elevam
    </motion.h3>

    <div className="relative grid grid-cols-2 md:grid-cols-3 gap-8 overflow-visible">
      {[
        { id: 1, title: "E-commerce Inteligente", image: "project1.png", description: "Um marketplace que utiliza IA para personalizar a experiência de compra como nunca visto antes." },
        { id: 2, title: "App de Realidade Aumentada", image: "project2.png", description: "Transformando a interação com o mundo físico através de tecnologias imersivas." },
        { id: 3, title: "Plataforma SaaS Inovadora", image: "project3.png", description: "Soluções em nuvem que otimizam processos e aceleram o crescimento empresarial." },
        { id: 4, title: "Gestão Inteligente", image: "project4.png", description: "Ferramenta para otimizar a gestão de empresas com IA." },
        { id: 5, title: "Marketplace Global", image: "project5.png", description: "Um marketplace inovador que conecta o mundo todo." },
        { id: 6, title: "Educação Virtual", image: "project6.png", description: "Plataforma educacional para aprendizado imersivo." },
        { id: 7, title: "Consultoria Digital", image: "project7.png", description: "Consultoria especializada para o crescimento de negócios digitais." },
        { id: 8, title: "Automação de Marketing", image: "project8.png", description: "Automatize suas campanhas de marketing com IA." },
        { id: 9, title: "Gerenciamento de Projetos", image: "project9.png", description: "Ferramenta de gestão de projetos para equipes ágeis." }
      ].map((project, index) => (
        <motion.div
          key={project.id}
          className="bg-gray-800 glass p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110"
          style={{ height: "340px" }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          initial={{ opacity: 0, y: index % 2 === 0 ? -100 : 100, x: index % 3 === 0 ? -50 : 50 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 20, delay: index * 0.1 }}
        >
          <img
            src={`/images/${project.image}`}
            alt={project.title}
            className="w-full h-32 object-cover rounded mb-4"
          />
          <h4 className="text-2xl font-kanit text-indigo-400 mb-2">
            {project.title}
          </h4>
          <p className="text-gray-400 font-lekton mb-4">{project.description}</p>
          <button className="glass-button bg-gradient-to-r from-blue-500 to-purple-600 glow-button px-6 py-3 rounded-full text-white font-dosis uppercase transition transform hover:scale-105">
            Ver Detalhes
          </button>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* Estilos e Animação */}
<style jsx>{`
  .glass {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  }
  
  /* Criação de um movimento mais amplo com rotação */
  @keyframes slow-motion {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
  }
`}</style>



{/* Nossas Soluções */}
<section id="solucoes" className="py-24 px-8 bg-gray-800 text-gray-200 min-h-screen flex items-center justify-center">
  <div className="max-w-7xl mx-auto text-center">
    <h3 className="text-6xl font-kanit text-indigo-400 mb-12">Soluções ao Cubo</h3>
    <p className="text-xl font-lekton text-gray-400 mb-16">
      Criamos produtos inovadores que revolucionam o mercado e impulsionam negócios.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
      {solutions.map((solution, index) => (
        <motion.div
          key={index}
          className="bg-gray-700 p-8 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300 flex flex-col items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 + index * 0.1 }}
        >
          {/* Ícones com Animação */}
          <motion.div
            className="mb-6"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <img
              src={solution.icon}
              alt={`${solution.title} Icon`}
              className="w-20 h-20"
            />
          </motion.div>
          <strong className="text-2xl font-kanit text-indigo-400 mb-4">
            {solution.title}
          </strong>
          <p className="text-lg font-lekton text-gray-400">
            {solution.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* Equipe */}
<section id="equipe" className="py-24 px-8 bg-gray-900 text-gray-200 min-h-screen flex items-center justify-center">
  <div className="max-w-7xl mx-auto text-center">
    <h3 className="text-6xl font-kanit text-indigo-400 mb-12">Mentes que Criam</h3>
    
    {/* Bruno Briote - Centralizado */}
    <motion.div 
      className="flex flex-col items-center text-center mb-12"
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 1 }}
    >
      <img 
        src="/images/bruno-briote.jpg" 
        alt="Bruno Briote" 
        className="w-48 h-60 object-cover rounded-3xl shadow-lg mb-6" 
        style={{ borderRadius: '50px', objectFit: 'cover' }} 
      />
      <h4 className="text-4xl font-kanit text-indigo-400 mb-2">Bruno Briote</h4>
      <p className="text-gray-400 text-lg">Fundador & CEO</p>
    </motion.div>
    </div>
</section>

{/* Depoimentos */}
<section id="depoimentos" className="py-24 px-8 bg-gray-800 text-gray-200 min-h-screen flex items-center justify-center">
  <div className="max-w-6xl mx-auto text-center">
    <h3 className="text-6xl font-kanit text-indigo-400 mb-12">O que falam sobre nós</h3>

    <div className="grid md:grid-cols-2 gap-12 justify-center">
      {/* Depoimento 1 */}
      <motion.div 
        className="bg-gray-900 p-8 rounded-3xl shadow-lg flex flex-col items-center text-center" 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 1 }}
      >
        <p className="text-xl italic text-gray-300 mb-6">
          "A CreateCubic não apenas entregou um produto, mas nos ajudou a redefinir nosso negócio no mundo digital."
        </p>
        <h5 className="text-3xl font-kanit text-indigo-400 mb-1">Lucas Ferreira</h5>
        <span className="text-gray-400 text-lg">CEO da TechNova</span>
      </motion.div>

      {/* Depoimento 2 */}
      <motion.div 
        className="bg-gray-900 p-8 rounded-3xl shadow-lg flex flex-col items-center text-center" 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 1, delay: 0.2 }}
      >
        <p className="text-xl italic text-gray-300 mb-6">
          "Trabalhar com a CreateCubic foi uma experiência transformadora. A criatividade e profissionalismo da equipe são incomparáveis."
        </p>
        <h5 className="text-3xl font-kanit text-indigo-400 mb-1">Sofia Mendes</h5>
        <span className="text-gray-400 text-lg">Fundadora da Artify</span>
      </motion.div>
    </div>
  </div>
</section>

{/* Blog */}
<section id="blog" className="py-24 px-8 bg-gray-900 text-gray-200 min-h-screen relative overflow-hidden flex items-center justify-center">
  <FloatingParticles3D /> {/* Efeito de partículas de cubos flutuantes */}
  <div className="max-w-7xl mx-auto relative z-10">
    <h3 className="text-6xl font-kanit text-indigo-400 text-center mb-16">Insights ao Cubo</h3>
    <div className="grid md:grid-cols-3 gap-12">
      {/* Post 1 */}
      <motion.div
        className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col justify-between"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h4 className="text-2xl font-kanit text-indigo-400 mb-4">A Revolução do Dropshipping em 2023</h4>
        <p className="text-lg font-lekton text-gray-400 mb-6">
          Exploramos as novas fronteiras do comércio eletrônico e como se adaptar a elas.
        </p>
        <a href="#" className="text-indigo-400 hover:underline">Leia Mais</a>
      </motion.div>

      {/* Post 2 */}
      <motion.div
        className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col justify-between"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h4 className="text-2xl font-kanit text-indigo-400 mb-4">Criptomoedas: O Futuro é Agora</h4>
        <p className="text-lg font-lekton text-gray-400 mb-6">
          Entenda como as criptomoedas estão moldando a economia global e as oportunidades que elas trazem.
        </p>
        <a href="#" className="text-indigo-400 hover:underline">Leia Mais</a>
      </motion.div>

      {/* Post 3 */}
      <motion.div
        className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col justify-between"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <h4 className="text-2xl font-kanit text-indigo-400 mb-4">Design UX/UI: Mais que Aparência, Experiência</h4>
        <p className="text-lg font-lekton text-gray-400 mb-6">
          Como o design centrado no usuário impacta o sucesso de produtos digitais.
        </p>
        <a href="#" className="text-indigo-400 hover:underline">Leia Mais</a>
      </motion.div>
    </div>
  </div>
</section>

{/* Contato */}
<section id="contato" className="py-24 px-8 bg-gray-800 text-gray-200 flex items-center justify-center min-h-screen">
  <div className="max-w-3xl mx-auto text-center">
    <h3 className="text-6xl font-kanit text-indigo-400 mb-12">Vamos Criar Juntos</h3>
    <p className="text-xl font-lekton text-gray-400 mb-12">Pronto para elevar suas ideias ao cubo? Entre em contato e descubra como podemos transformar sua visão em realidade.</p>

    <form className="space-y-6">
      <input
        type="text"
        placeholder="Seu Nome"
        className="w-full px-6 py-4 bg-gray-700 text-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <input
        type="email"
        placeholder="Seu Email"
        className="w-full px-6 py-4 bg-gray-700 text-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <textarea
        placeholder="Sua Mensagem"
        className="w-full px-6 py-4 bg-gray-700 text-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 h-40"
      ></textarea>
      <button className="glass-button bg-gradient-to-r from-blue-500 to-purple-600 glow-button px-8 py-4 rounded-full text-white font-dosis uppercase transition transform hover:scale-105">
        Enviar Mensagem
      </button>
    </form>

    <div className="mt-12 text-left">
      <p className="text-lg font-lekton text-gray-400">Email: <span className="text-indigo-400">contato@createcubic.com</span></p>
      <p className="text-lg font-lekton text-gray-400">Telefone: <span className="text-indigo-400">+55 (11) 99999-9999</span></p>
      <p className="text-lg font-lekton text-gray-400">Endereço: <span className="text-indigo-400">Av. Inovação, 1234 – São Paulo, SP</span></p>
    </div>
  </div>
</section>

      {/* Footer */}
<footer className="py-10 px-8 bg-black bg-opacity-10 backdrop-blur-lg text-gray-400">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
    <div className="mb-6 md:mb-0 text-center md:text-left">
      <h5 className="text-indigo-400 text-2xl font-bold font-fira">&lt;CreateCubic /&gt;</h5>
      <p className="mt-2">Criando o futuro, um cubo de cada vez.</p>
    </div>
    <div className="space-x-6">
      <a href="#sobre" className="hover:text-gray-200 transition duration-300">Sobre Nós</a>
      <a href="#projetos" className="hover:text-gray-200 transition duration-300">Projetos</a>
      <a href="#blog" className="hover:text-gray-200 transition duration-300">Blog</a>
      <a href="#contato" className="hover:text-gray-200 transition duration-300">Contato</a>
    </div>
  </div>
  <div className="text-center mt-6">
    <p>&copy; 2023 CreateCubic. Todos os direitos reservados.</p>
  </div>
</footer>
    </div>
  );
}