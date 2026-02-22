import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Lightbulb, Shield, Users } from 'lucide-react';
import { Card } from '../components/ui/Card';
const fadeInUp = {
  initial: {
    opacity: 0,
    y: 20
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
      staggerChildren: 0.1
    }
  }
};
export function AboutPage() {
  return (
    <main className="w-full pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[300px] md:min-h-[380px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero.png" alt="À propos - NKP" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-nkp-dark/95 via-nkp-dark/70 to-nkp-dark/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
              À Propos de NKP Consulting
            </h1>
            <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
              Découvrez notre histoire, notre mission et les valeurs qui nous animent
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-12 items-center">
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

              <span className="text-nkp-blue font-semibold text-sm uppercase tracking-wider">
                Notre histoire
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-nkp-dark mt-2 mb-6">
                Une passion pour l'excellence
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                NKP Consulting SARL a été fondée avec une vision claire : rendre
                la formation professionnelle de qualité accessible à tous au
                Cameroun. Depuis plus de 10 ans, nous accompagnons des centaines
                de personnes dans leur parcours vers l'excellence
                professionnelle.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Notre centre de formation et de conseil s'est développé pour
                devenir une référence dans les domaines de la comptabilité, de
                la bureautique, de l'infographie et des services administratifs.
                Nous sommes fiers d'avoir contribué à la réussite de nombreux
                professionnels et entrepreneurs.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Aujourd'hui, NKP Consulting continue d'innover et d'élargir son
                offre de services pour répondre aux besoins évolutifs du marché
                camerounais et africain.
              </p>
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
              }}>

              <img
                src="/WhatsApp_Image_2026-02-21_at_10.52.54_AM_(1).jpg"
                alt="NKP Consulting Formations"
                className="rounded-2xl shadow-2xl w-full" />

            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
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

            <span className="text-nkp-blue font-semibold text-sm uppercase tracking-wider">
              Ce qui nous guide
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-nkp-dark mt-2 mb-4">
              Notre Mission & Vision
            </h2>
            <div className="w-20 h-1 bg-nkp-blue mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-8">
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
              transition={{
                duration: 0.6
              }}>

              <Card className="h-full p-8 border-l-4 border-l-nkp-blue">
                <div className="w-14 h-14 bg-nkp-light rounded-full flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-nkp-blue" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-nkp-dark mb-4">
                  Notre Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Offrir des formations professionnelles de qualité et des
                  services de conseil adaptés aux besoins du marché camerounais.
                  Nous nous engageons à accompagner chaque apprenant vers
                  l'autonomie et la réussite professionnelle, en leur
                  fournissant les compétences et les outils nécessaires pour
                  exceller dans leur domaine.
                </p>
              </Card>
            </motion.div>

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
              transition={{
                duration: 0.6,
                delay: 0.1
              }}>

              <Card className="h-full p-8 border-l-4 border-l-nkp-blue">
                <div className="w-14 h-14 bg-nkp-light rounded-full flex items-center justify-center mb-6">
                  <Eye className="h-7 w-7 text-nkp-blue" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-nkp-dark mb-4">
                  Notre Vision
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Devenir le leader de la formation professionnelle et du
                  conseil au Cameroun et en Afrique centrale. Nous aspirons à
                  créer un écosystème où chaque individu peut développer son
                  potentiel et contribuer au développement économique de notre
                  région, en formant les professionnels de demain.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
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

            <span className="text-nkp-blue font-semibold text-sm uppercase tracking-wider">
              Nos principes
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-nkp-dark mt-2 mb-4">
              Nos Valeurs
            </h2>
            <div className="w-20 h-1 bg-nkp-blue mx-auto rounded-full" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true
            }}
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">

            <motion.div variants={fadeInUp}>
              <Card hoverEffect className="h-full p-6 text-center">
                <div className="w-16 h-16 bg-nkp-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-nkp-blue" />
                </div>
                <h3 className="font-heading text-lg font-bold text-nkp-dark mb-2">
                  Excellence
                </h3>
                <p className="text-gray-600 text-sm">
                  Nous visons l'excellence dans tout ce que nous faisons, de la
                  qualité de nos formations à notre service client.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card hoverEffect className="h-full p-6 text-center">
                <div className="w-16 h-16 bg-nkp-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-nkp-blue" />
                </div>
                <h3 className="font-heading text-lg font-bold text-nkp-dark mb-2">
                  Intégrité
                </h3>
                <p className="text-gray-600 text-sm">
                  Nous agissons avec honnêteté et transparence dans toutes nos
                  interactions avec nos clients et partenaires.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card hoverEffect className="h-full p-6 text-center">
                <div className="w-16 h-16 bg-nkp-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-nkp-blue" />
                </div>
                <h3 className="font-heading text-lg font-bold text-nkp-dark mb-2">
                  Innovation
                </h3>
                <p className="text-gray-600 text-sm">
                  Nous innovons constamment pour offrir des solutions modernes
                  et adaptées aux besoins du marché.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card hoverEffect className="h-full p-6 text-center">
                <div className="w-16 h-16 bg-nkp-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-nkp-blue" />
                </div>
                <h3 className="font-heading text-lg font-bold text-nkp-dark mb-2">
                  Accessibilité
                </h3>
                <p className="text-gray-600 text-sm">
                  Nous rendons la formation professionnelle accessible à tous,
                  quels que soient leur niveau ou leur budget.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-nkp-light">
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

            <span className="text-nkp-blue font-semibold text-sm uppercase tracking-wider">
              Notre équipe
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-nkp-dark mt-2 mb-4">
              L'Équipe Pédagogique
            </h2>
            <div className="w-20 h-1 bg-nkp-blue mx-auto rounded-full" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true
            }}
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">

            <motion.div variants={fadeInUp}>
              <Card hoverEffect className="h-full overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-nkp-blue to-nkp-navy flex items-center justify-center">
                  <Users className="h-20 w-20 text-white/30" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-heading text-lg font-bold text-nkp-dark mb-1">
                    M. Nkoulou
                  </h3>
                  <p className="text-nkp-blue text-sm font-medium mb-2">
                    Directeur Général
                  </p>
                  <p className="text-gray-600 text-sm">
                    Expert en gestion et stratégie d'entreprise
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card hoverEffect className="h-full overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-nkp-blue to-nkp-navy flex items-center justify-center">
                  <Users className="h-20 w-20 text-white/30" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-heading text-lg font-bold text-nkp-dark mb-1">
                    Mme Kamga
                  </h3>
                  <p className="text-nkp-blue text-sm font-medium mb-2">
                    Responsable Formations
                  </p>
                  <p className="text-gray-600 text-sm">
                    Spécialiste en comptabilité et fiscalité
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card hoverEffect className="h-full overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-nkp-blue to-nkp-navy flex items-center justify-center">
                  <Users className="h-20 w-20 text-white/30" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-heading text-lg font-bold text-nkp-dark mb-1">
                    M. Tchinda
                  </h3>
                  <p className="text-nkp-blue text-sm font-medium mb-2">
                    Formateur Infographie
                  </p>
                  <p className="text-gray-600 text-sm">
                    Designer graphique certifié Adobe
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card hoverEffect className="h-full overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-nkp-blue to-nkp-navy flex items-center justify-center">
                  <Users className="h-20 w-20 text-white/30" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-heading text-lg font-bold text-nkp-dark mb-1">
                    Mme Fouda
                  </h3>
                  <p className="text-nkp-blue text-sm font-medium mb-2">
                    Formatrice Bureautique
                  </p>
                  <p className="text-gray-600 text-sm">
                    Experte Microsoft Office certifiée
                  </p>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>);

}