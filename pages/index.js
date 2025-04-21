"use client"

import { useState } from "react"
import Head from "next/head"
import { motion } from "framer-motion"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import FloatingCubesBackground from "../components/FloatingCubes"
import { Box, Image } from "@chakra-ui/react"

const MotionBox = motion(Box)

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation("common")

  // Lista de Soluções
  const solutions = t("solutions", { returnObjects: true }) || []

  // Ensure solutions is always an array
  //const solutionsArray = Array.isArray(solutions) ? solutions : []
  const solutionsItems = t("solutions.items", { returnObjects: true })
  const solutionsArray = Array.isArray(solutionsItems) ? solutionsItems : []

  // Para a seção de projetos
  const projectItems = t("projects.items", { returnObjects: true })
  const projectsArray = Array.isArray(projectItems) ? projectItems : []

  // Para a seção de equipe
  const teamMembers = t("team.members", { returnObjects: true })
  const teamArray = Array.isArray(teamMembers) ? teamMembers : []

  // Para a seção de blog
  const blogPosts = t("blog.posts", { returnObjects: true })
  const postsArray = Array.isArray(blogPosts) ? blogPosts : []

  // Para as estatísticas
  const statsItems = t("about.stats", { returnObjects: true })
  const statsArray = Array.isArray(statsItems) ? statsArray : []

  return (
    <div className="relative bg-gray-900 text-gray-200">
      <Head>
        <title>{t("pageTitle", "CreateCubic")}</title>
        <meta name="description" content={t("pageDescription")} />
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
            <Image src="/images/logo.png" alt="CreateCubic Logo" className="h-10 w-auto" />
          </motion.div>

          {/* Navegação */}
          <nav className="hidden md:flex space-x-8 text-lg font-semibold font-dosis uppercase">
            <a href="#inicio" className="nav-link">
              {t("nav.home")}
            </a>
            <a href="#sobre" className="nav-link">
              {t("nav.about")}
            </a>
            <a href="#projetos" className="nav-link">
              {t("nav.projects")}
            </a>
            <a href="#solucoes" className="nav-link">
              {t("nav.solutions")}
            </a>
            <a href="#equipe" className="nav-link">
              {t("nav.team")}
            </a>
            <a href="#blog" className="nav-link">
              {t("nav.blog")}
            </a>
            <a href="#contato" className="nav-link">
              {t("nav.contact")}
            </a>
          </nav>

          {/* Menu Mobile */}
          <div className="md:hidden">
            <button className="text-gray-200 focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
              <a href="#inicio" className="nav-link">
                {t("nav.home")}
              </a>
              <a href="#sobre" className="nav-link">
                {t("nav.about")}
              </a>
              <a href="#projetos" className="nav-link">
                {t("nav.projects")}
              </a>
              <a href="#solucoes" className="nav-link">
                {t("nav.solutions")}
              </a>
              <a href="#equipe" className="nav-link">
                {t("nav.team")}
              </a>
              <a href="#blog" className="nav-link">
                {t("nav.blog")}
              </a>
              <a href="#contato" className="nav-link">
                {t("nav.contact")}
              </a>
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
          <motion.h2
            className="text-6xl font-kanit text-rose-500 glow-text mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {t("hero.title")}
          </motion.h2>
          <motion.p
            className="text-xl font-lekton text-gray-300 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {t("hero.description")}
          </motion.p>
          <motion.div
            className="flex space-x-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <button className="glass-button bg-gradient-to-r from-rose-500 to-rose-700 glow-button px-6 py-3 rounded-full text-white font-dosis uppercase transition transform hover:scale-105">
              {t("hero.exploreButton")}
            </button>
            <button className="glass-button border border-rose-500 text-rose-500 px-6 py-3 rounded-full font-dosis uppercase transition transform hover:bg-rose-600 hover:text-white">
              {t("hero.contactButton")}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Nossas Soluções */}
      <section
        id="solucoes"
        className="py-24 px-8 bg-gray-800 text-gray-200 min-h-screen flex items-center justify-center"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-6xl font-kanit text-rose-500 mb-12">{t("solutions.title")}</h3>
          <p className="text-xl font-lekton text-gray-400 mb-16">{t("solutions.description")}</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {solutionsArray.map((solution, index) => (
              <motion.div
                key={index}
                className="bg-gray-700 p-8 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300 flex flex-col items-center"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 + index * 0.1 }}
              >
                <motion.div
                  className="mb-6"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                >
                  <Image
                    src={solution.icon || "/placeholder.svg"}
                    alt={`${solution.title} Icon`}
                    className="w-20 h-20"
                  />
                </motion.div>
                <strong className="text-2xl font-kanit text-rose-500 mb-4">{solution.title}</strong>
                <p className="text-lg font-lekton text-gray-400">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 px-8 bg-gray-900 text-gray-200 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h3
                className="text-6xl font-kanit text-rose-500 mb-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {t("about.title")}
              </motion.h3>
              <motion.p
                className="text-xl font-lekton text-gray-400 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {t("about.description")}
              </motion.p>
              <motion.p
                className="text-lg text-gray-300 mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {t("about.content")}
              </motion.p>
              <motion.div
                className="grid grid-cols-3 gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {statsArray?.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-rose-500 mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image src="/about/team.jpg" alt="Our Team" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-rose-500/10 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-24 px-8 bg-gray-800 text-gray-200 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <motion.h3
            className="text-6xl font-kanit text-rose-500 mb-6 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t("projects.title")}
          </motion.h3>
          <motion.p
            className="text-xl font-lekton text-gray-400 mb-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t("projects.description")}
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsArray?.map((project, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                  <div className="text-sm text-rose-400 mb-2">{project.category}</div>
                  <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                  <p className="text-gray-300 text-sm opacity-0 transform transition-all duration-300 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipe" className="py-24 px-8 bg-gray-900 text-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h3
            className="text-6xl font-kanit text-rose-500 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t("team.title")}
          </motion.h3>
          <motion.p
            className="text-xl font-lekton text-gray-400 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t("team.description")}
          </motion.p>

          <div className="grid md:grid-cols-3 gap-12">
            {teamArray?.map((member, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative mb-6 overflow-hidden rounded-xl aspect-square">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-rose-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h4 className="text-2xl font-bold mb-2">{member.name}</h4>
                <p className="text-gray-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 px-8 bg-gray-800 text-gray-200">
        <div className="max-w-7xl mx-auto">
          <motion.h3
            className="text-6xl font-kanit text-rose-500 mb-6 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t("blog.title")}
          </motion.h3>
          <motion.p
            className="text-xl font-lekton text-gray-400 mb-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t("blog.description")}
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12">
            {postsArray?.map((post, index) => (
              <motion.article
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative mb-6 overflow-hidden rounded-xl aspect-video">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="text-sm text-rose-400 mb-2">{new Date(post.date).toLocaleDateString()}</div>
                <h4 className="text-2xl font-bold mb-4 group-hover:text-rose-400 transition-colors">{post.title}</h4>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <button className="text-rose-400 font-medium group-hover:text-rose-300 transition-colors">
                  {t("blog.readMore")} →
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 px-8 bg-gray-900 text-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <motion.h3
                className="text-6xl font-kanit text-rose-500 mb-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {t("contact.title")}
              </motion.h3>
              <motion.p
                className="text-xl font-lekton text-gray-400 mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {t("contact.description")}
              </motion.p>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-rose-500/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium mb-1">Address</div>
                    <div className="text-gray-400">{t("contact.info.address")}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-rose-500/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium mb-1">Email</div>
                    <div className="text-gray-400">{t("contact.info.email")}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-rose-500/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium mb-1">Phone</div>
                    <div className="text-gray-400">{t("contact.info.phone")}</div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.form
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="name">
                  {t("contact.form.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:border-rose-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="email">
                  {t("contact.form.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:border-rose-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="message">
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:border-rose-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 rounded-lg bg-rose-500 text-white font-medium hover:bg-rose-600 transition-colors"
              >
                {t("contact.form.submit")}
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-8 bg-black bg-opacity-10 backdrop-blur-lg text-gray-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h5 className="text-rose-500 text-2xl font-bold font-fira">&lt;CreateCubic /&gt;</h5>
            <p className="mt-2">{t("footer.slogan")}</p>
          </div>
          <div className="space-x-6">
            <a href="#sobre" className="hover:text-gray-200 transition duration-300">
              {t("nav.about")}
            </a>
            <a href="#projetos" className="hover:text-gray-200 transition duration-300">
              {t("nav.projects")}
            </a>
            <a href="#blog" className="hover:text-gray-200 transition duration-300">
              {t("nav.blog")}
            </a>
            <a href="#contato" className="hover:text-gray-200 transition duration-300">
              {t("nav.contact")}
            </a>
          </div>
        </div>
        <div className="text-center mt-6">
          <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
        </div>
      </footer>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "pt", ["common"])),
    },
  }
}

