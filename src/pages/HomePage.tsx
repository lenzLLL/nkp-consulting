import React, { Children } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FileText,
  Calculator,
  Wifi,
  GraduationCap,
  Award,
  Users,
  BadgeCheck,
  HeartHandshake,
  Star,
  ArrowRight,
  CheckCircle,
  ChevronRight } from
'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
const fadeInUp = {
  initial: {
    opacity: 0,
    y: 24
  },
  animate: {
    opacity: 1,
    y: 0
  },
  transition: {
    duration: 0.6
  }
};
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12
    }
  }
};
const services = [
{
  num: '01',
  icon: FileText,
  title: 'Secrétariat Bureautique',
  desc: 'Saisie & impression, conception de CV professionnels, cartes de visite, flyers, affiches et traduction de documents.',
  items: [
  'Saisie & impression',
  'Conception CV Pro',
  'Cartes de visite',
  'Flyers & affiches'],

  color: 'from-blue-500 to-blue-700',
  bg: 'bg-blue-50'
},
{
  num: '02',
  icon: Calculator,
  title: 'Impôts & Fiscalité',
  desc: "Déclarations fiscales, montage de DSF, création d'entreprise et accompagnement complet pour vos obligations.",
  items: [
  'Déclarations fiscales',
  'Montage DSF',
  "Création d'entreprise",
  'Audit & contrôle'],

  color: 'from-indigo-500 to-indigo-700',
  bg: 'bg-indigo-50'
},
{
  num: '03',
  icon: Wifi,
  title: 'Internet & Cybercafé',
  desc: 'Télédéclarations CNPS, pré-enrôlement CNI/passeport, inscriptions en ligne et cybercafé haut débit.',
  items: [
  'Télédéclaration CNPS',
  'Pré-enrôlement CNI',
  'Inscriptions scolaires',
  'Cybercafé haut débit'],

  color: 'from-sky-500 to-sky-700',
  bg: 'bg-sky-50'
},
{
  num: '04',
  icon: GraduationCap,
  title: 'Formations Professionnelles',
  desc: 'Gestion comptable, bureautique, infographie, électronique et maintenance informatique avec certification.',
  items: [
  'Gestion Comptable',
  'Bureautique Office',
  'Infographie',
  'Maintenance Informatique'],

  color: 'from-nkp-blue to-nkp-navy',
  bg: 'bg-nkp-light'
}];

const advantages = [
{
  icon: Award,
  title: 'Expertise reconnue',
  desc: "Plus de 10 ans d'expérience dans la formation professionnelle au Cameroun."
},
{
  icon: Users,
  title: 'Formateurs qualifiés',
  desc: 'Une équipe pédagogique expérimentée, certifiée et passionnée.'
},
{
  icon: BadgeCheck,
  title: 'Certifications officielles',
  desc: 'Attestations reconnues délivrées à la fin de chaque formation.'
},
{
  icon: HeartHandshake,
  title: 'Accompagnement personnalisé',
  desc: 'Un suivi individuel adapté à votre rythme pour garantir votre réussite.'
}];

const testimonials = [
{
  initials: 'MK',
  name: 'Marie Kouam',
  formation: 'Gestion Comptable',
  quote:
  "Grâce à NKP Consulting, j'ai maîtrisé la gestion comptable et décroché un emploi dans un cabinet. Les formateurs sont excellents et très disponibles."
},
{
  initials: 'JM',
  name: 'Jean Mballa',
  formation: 'Bureautique',
  quote:
  "La formation m'a rendu autonome sur Word, Excel et PowerPoint. Je recommande vivement NKP Consulting à tous ceux qui veulent progresser."
},
{
  initials: 'FN',
  name: 'Fatima Ngo',
  formation: 'Infographie',
  quote:
  "Aujourd'hui je travaille comme graphiste freelance grâce à NKP Consulting. Ils m'ont donné les compétences et la confiance pour réussir."
}];

export function HomePage() {
  return (
    <main className="w-full">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative h-screen md:min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/hero.png"
            alt="NKP Consulting"
            className="w-full h-full object-cover object-center" />

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-nkp-dark/95 via-nkp-dark/80 to-nkp-dark/40" />
          {/* Blue accent overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-nkp-dark/60 via-transparent to-transparent" />
        </div>

        {/* Decorative circles */}
        <div className="absolute right-[10%] w-72 h-72 bg-nkp-blue/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-[5%] w-56 h-56 bg-nkp-blue/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
          

            <motion.h1
              initial={{
                opacity: 0,
                y: 30
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.7,
                delay: 0.1
              }}
              className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">

              Votre Partenaire de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-nkp-blue">
                Confiance
              </span>{' '}
              pour la Formation et le Conseil
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.7,
                delay: 0.2
              }}
              className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">

              NKP Consulting SARL vous accompagne vers l'excellence
              professionnelle grâce à des formations certifiantes et des
              services administratifs complets.
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.7,
                delay: 0.3
              }}
              className="flex flex-col sm:flex-row gap-3 mb-8 sm:mb-12">

              <Link to="/contact">
                <Button size="lg" className="shadow-lg shadow-nkp-blue/30">
                  S'inscrire maintenant
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg">
                  Découvrir nos services
                </Button>
              </Link>
            </motion.div>

            {/* Quick trust signals */}
            <motion.div
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              transition={{
                duration: 0.7,
                delay: 0.5
              }}
              className="flex flex-wrap gap-3">

              {[
              'Formations certifiées',
              'Formateurs experts',
              'Suivi personnalisé'].
              map((item) =>
              <div
                key={item}
                className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">

                  <CheckCircle className="h-4 w-4 text-nkp-blue flex-shrink-0" />
                  {item}
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Stats bar at bottom */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.7,
            delay: 0.6
          }}
          className="hidden sm:block absolute bottom-0 left-0 right-0 bg-nkp-blue/90 backdrop-blur-md border-t border-white/10">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 grid grid-cols-1 sm:grid-cols-3 divide-white/20 sm:divide-x">
            {[
            {
              value: '500+',
              label: 'Étudiants formés'
            },
            {
              value: '4',
              label: "Domaines d'expertise"
            },
            {
              value: '10+',
              label: "Années d'expérience"
            }].
            map((stat) =>
            <div key={stat.label} className="text-center px-4">
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-blue-200 text-xs sm:text-sm mt-0.5">
                  {stat.label}
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 1.2,
            duration: 1
          }}
          className="absolute bottom-28 right-8 hidden lg:flex flex-col items-center gap-2">

          <div className="w-px h-16 bg-gradient-to-b from-transparent to-white/40" />
          <span className="text-white/40 text-xs tracking-widest rotate-90 origin-center translate-y-4">
            SCROLL
          </span>
        </motion.div>
      </section>

      {/* ── ABOUT PREVIEW ────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">
            <motion.div
              initial={{
                opacity: 0,
                x: -30
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.6
              }}>

              <span className="inline-flex items-center gap-2 text-nkp-blue font-semibold text-sm uppercase tracking-wider mb-3">
                <span className="w-8 h-0.5 bg-nkp-blue" />À propos de nous
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-nkp-dark mt-2 mb-6 leading-tight">
                Qui sommes-nous ?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                NKP Consulting SARL est un centre de formation professionnelle
                et de conseil basé à Yaoundé, Cameroun. Depuis plus de 10 ans,
                nous accompagnons les particuliers et les entreprises dans leur
                développement à travers des formations de qualité et des
                services administratifs complets.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Notre mission est de rendre accessible l'excellence
                professionnelle à tous, en offrant des formations certifiantes
                et un accompagnement personnalisé dans les domaines de la
                comptabilité, de la bureautique, de l'infographie et bien plus
                encore.
              </p>
              <Link to="/about">
                <Button variant="outline" className="group">
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 30
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.6
              }}
              className="relative">

              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                <img
                  src="/WhatsApp_Image_2026-02-21_at_10.52.54_AM_(1).jpg"
                  alt="NKP Consulting Formations"
                  className="w-full h-[480px] object-contain object-top" />

                <div className="absolute inset-0 bg-gradient-to-t from-nkp-dark/60 to-transparent pointer-events-none" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-nkp-blue text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold font-heading">10+</div>
                <div className="text-sm text-blue-100">Années d'expérience</div>
              </div>
              {/* Second floating badge */}
          
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="text-center mb-16">

            <span className="inline-flex items-center gap-2 text-nkp-blue font-semibold text-sm uppercase tracking-wider mb-3">
              <span className="w-8 h-0.5 bg-nkp-blue" />
              Ce que nous offrons
              <span className="w-8 h-0.5 bg-nkp-blue" />
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-nkp-dark mt-2 mb-4">
              Nos Services
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Quatre domaines d'expertise pour vous accompagner dans votre
              développement professionnel
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true
            }}
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-8">

            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <motion.div key={svc.num} variants={fadeInUp}>
                  <Link to="/services" className="block group h-full">
                    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full border border-gray-100 group-hover:-translate-y-1">
                      {/* Card header with gradient */}
                      <div
                        className={`bg-gradient-to-r ${svc.color} p-6 flex items-center justify-between`}>

                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                            <Icon className="h-7 w-7 text-white" />
                          </div>
                          <div>
                            <span className="text-white/60 text-xs font-mono">
                              {svc.num}
                            </span>
                            <h3 className="font-heading text-xl font-bold text-white leading-tight">
                              {svc.title}
                            </h3>
                          </div>
                        </div>
                        <ChevronRight className="h-5 w-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
                      </div>

                      {/* Card body */}
                      <div className="p-6">
                        <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                          {svc.desc}
                        </p>
                        <ul className="space-y-2">
                          {svc.items.map((item) =>
                          <li
                            key={item}
                            className="flex items-center gap-2 text-sm text-gray-700">

                              <span className="w-1.5 h-1.5 rounded-full bg-nkp-blue flex-shrink-0" />
                              {item}
                            </li>
                          )}
                        </ul>
                        <div className="mt-5 pt-4 border-t border-gray-100">
                          <span className="text-nkp-blue text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                            Voir tous les détails{' '}
                            <ArrowRight className="h-4 w-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>);

            })}
          </motion.div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/WhatsApp_Image_2026-02-21_at_10.52.53_AM_(1).jpg"
            alt=""
            className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-nkp-dark/90" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="text-center mb-16">

            <span className="inline-flex items-center gap-2 text-blue-300 font-semibold text-sm uppercase tracking-wider mb-3">
              <span className="w-8 h-0.5 bg-blue-300" />
              Nos avantages
              <span className="w-8 h-0.5 bg-blue-300" />
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mt-2">
              Pourquoi nous choisir ?
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true
            }}
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6">

            {advantages.map((adv) => {
              const Icon = adv.icon;
              return (
                <motion.div key={adv.title} variants={fadeInUp}>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm hover:bg-white/10 transition-colors">
                    <div className="w-16 h-16 bg-nkp-blue rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-nkp-blue/30">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-white mb-2">
                      {adv.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {adv.desc}
                    </p>
                  </div>
                </motion.div>);

            })}
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="text-center mb-16">

            <span className="inline-flex items-center gap-2 text-nkp-blue font-semibold text-sm uppercase tracking-wider mb-3">
              <span className="w-8 h-0.5 bg-nkp-blue" />
              Témoignages
              <span className="w-8 h-0.5 bg-nkp-blue" />
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-nkp-dark mt-2">
              Ce que disent nos étudiants
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true
            }}
            className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-8">

            {testimonials.map((t) =>
            <motion.div key={t.name} variants={fadeInUp}>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 h-full flex flex-col hover:shadow-xl transition-shadow">
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, i) =>
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400" />

                  )}
                  </div>
                  {/* Quote mark */}
                  <div className="text-5xl text-nkp-blue/20 font-heading font-bold leading-none mb-2">
                    "
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6 flex-1 text-sm">
                    {t.quote}
                  </p>
                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-11 h-11 bg-gradient-to-br from-nkp-blue to-nkp-navy rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">
                        {t.initials}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-nkp-dark text-sm">
                        {t.name}
                      </div>
                      <div className="text-xs text-nkp-blue">{t.formation}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden bg-nkp-dark">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-nkp-blue/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-nkp-blue/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}>

            <span className="inline-block bg-nkp-blue/20 border border-nkp-blue/40 text-blue-300 text-sm font-medium px-4 py-2 rounded-full mb-6">
              Rejoignez-nous dès aujourd'hui
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Prêt à transformer votre carrière ?
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
              Rejoignez des centaines d'étudiants qui ont déjà fait confiance à
              NKP Consulting pour développer leurs compétences et atteindre
              leurs objectifs professionnels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button  size="lg">
                  S'inscrire maintenant
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg">
                  Voir nos formations
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>);

}