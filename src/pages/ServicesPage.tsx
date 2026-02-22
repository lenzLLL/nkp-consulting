import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FileText,
  Calculator,
  Wifi,
  GraduationCap,
  Clock,
  ArrowRight } from
'lucide-react';
import { Button } from '../components/ui/Button';
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
export function ServicesPage() {
  return (
    <main className="w-full pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[300px] md:min-h-[380px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero.png" alt="Services - NKP" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-nkp-dark/90 via-nkp-dark/70 to-nkp-dark/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
              Nos Services & Formations
            </h1>
            <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
              Découvrez notre gamme complète de services et formations professionnelles
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service 1: Secrétariat Bureautique */}
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
            className="border-l-4 border-nkp-blue pl-8">

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-nkp-blue rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <div className="flex items-center gap-3">
                <FileText className="h-8 w-8 text-nkp-blue" />
                <h2 className="font-heading text-3xl font-bold text-nkp-dark">
                  Secrétariat Bureautique
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-8">
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-nkp-blue mr-3">»</span>
                    <span className="text-gray-700">Saisie et impression</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nkp-blue mr-3">»</span>
                    <span className="text-gray-700">Photocopie et scan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nkp-blue mr-3">»</span>
                    <span className="text-gray-700">
                      Traduction des documents
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nkp-blue mr-3">»</span>
                    <span className="text-gray-700">
                      Conception CV canadien & pro
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-nkp-blue mr-3">»</span>
                    <span className="text-gray-700">
                      Modification document PDF
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nkp-blue mr-3">»</span>
                    <span className="text-gray-700">
                      Carte de visite & billet d'invitation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nkp-blue mr-3">»</span>
                    <span className="text-gray-700">
                      Billet de mariage et faire part
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nkp-blue mr-3">»</span>
                    <span className="text-gray-700">Flyers et affiches</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service 2: Impôts & Fiscalité */}
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
            className="border-l-4 border-nkp-blue pl-8">

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-nkp-blue rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <div className="flex items-center gap-3">
                <Calculator className="h-8 w-8 text-nkp-blue" />
                <h2 className="font-heading text-3xl font-bold text-nkp-dark">
                  Impôts & Fiscalité
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-8">
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-nkp-blue mr-3">»</span>
                    <span className="text-gray-700">
                      Attestation d'immatriculation ou NIU
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nkp-blue mr-3">»</span>
                    <span className="text-gray-700">
                      Déclaration de l'impôt général synthétique
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nkp-blue mr-3">»</span>
                    <span className="text-gray-700">
                      Déclaration annuelle des revenus des particuliers
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nkp-blue mr-3">»</span>
                    <span className="text-gray-700">
                      Attestation de conformité fiscale (ACF)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nkp-blue mr-3">»</span>
                    <span className="text-gray-700">
                      Avis d'imposition et quittances
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nkp-blue mr-3">»</span>
                    <span className="text-gray-700">
                      Déclaration bail & précompte surloyer
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nkp-blue mr-3">»</span>
                    <span className="text-gray-700">
                      Réinitialisation mot de passe compte DGI
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nkp-blue mr-3">»</span>
                    <span className="text-gray-700">
                      Synchronisation de compte DGI
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-nkp-blue mr-3">»</span>
                    <span className="text-gray-700">
                      Déclaration taxe foncière
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nkp-blue mr-3">»</span>
                    <span className="text-gray-700">Montage des DSF</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nkp-blue mr-3">»</span>
                    <span className="text-gray-700">
                      Paiement d'impôt, timbre
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nkp-blue mr-3">»</span>
                    <span className="text-gray-700">
                      Bulletin de paie et de solde
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nkp-blue mr-3">»</span>
                    <span className="text-gray-700">
                      Audit & contrôle de gestion
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nkp-blue mr-3">»</span>
                    <span className="text-gray-700">
                      Montage des business plan
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nkp-blue mr-3">»</span>
                    <span className="text-gray-700">
                      Création d'entreprise (ETS, SARL, CFP & IFP, ...)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service 3: Internet */}
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
            className="border-l-4 border-nkp-blue pl-8">

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-nkp-blue rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <div className="flex items-center gap-3">
                <Wifi className="h-8 w-8 text-nkp-blue" />
                <h2 className="font-heading text-3xl font-bold text-nkp-dark">
                  Internet & Cybercafé
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-8">
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-nkp-blue mr-3">»</span>
                    <span className="text-gray-700">CNPS</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nkp-blue mr-3">»</span>
                    <span className="text-gray-700">Télédéclaration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nkp-blue mr-3">»</span>
                    <span className="text-gray-700">Télé immatriculation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nkp-blue mr-3">»</span>
                    <span className="text-gray-700">Allocation familiale</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nkp-blue mr-3">»</span>
                    <span className="text-gray-700">Pré-enrôlement CNI</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-nkp-blue mr-3">»</span>
                    <span className="text-gray-700">
                      Pré-enrôlement passeport
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nkp-blue mr-3">»</span>
                    <span className="text-gray-700">Certificat médical</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nkp-blue mr-3">»</span>
                    <span className="text-gray-700">
                      Inscription et préinscription (scolaire, concours à
                      examen)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nkp-blue mr-3">»</span>
                    <span className="text-gray-700">
                      Téléchargement des documents, films & séries, jeux PC-PS
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nkp-blue mr-3">»</span>
                    <span className="text-gray-700">Cybercafé haut débit</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service 4: Formations */}
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
            className="border-l-4 border-nkp-blue pl-8 mb-12">

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-nkp-blue rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-2xl">4</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="h-8 w-8 text-nkp-blue" />
                <h2 className="font-heading text-3xl font-bold text-nkp-dark">
                  Formations Professionnelles
                </h2>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 lg:gap-8">
            {/* Formation 1 */}
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
                delay: 0.1
              }}>

              <Card hoverEffect className="h-full flex flex-col">
                <div className="p-6 flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-nkp-light text-nkp-blue text-sm font-medium rounded-full flex items-center gap-1">
                      <Clock className="h-4 w-4" /> 3 mois
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-nkp-dark mb-3">
                    Gestion Comptable
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Montage de DSF, déclarations sociales et fiscales, logiciel
                    comptable. Formation complète pour maîtriser la comptabilité
                    d'entreprise.
                  </p>
                  <div className="text-3xl font-bold text-nkp-blue mb-4">
                    45,000 FCFA
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link to="/contact">
                    <Button fullWidth>
                      S'inscrire <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>

            {/* Formation 2 */}
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
                delay: 0.2
              }}>

              <Card hoverEffect className="h-full flex flex-col">
                <div className="p-6 flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-nkp-light text-nkp-blue text-sm font-medium rounded-full flex items-center gap-1">
                      <Clock className="h-4 w-4" /> 2 mois
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-nkp-dark mb-3">
                    Bureautique
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Word, Excel, PowerPoint et plus encore. Maîtrisez les outils
                    bureautiques essentiels pour le monde professionnel.
                  </p>
                  <div className="text-3xl font-bold text-nkp-blue mb-4">
                    30,000 FCFA
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link to="/contact">
                    <Button fullWidth>
                      S'inscrire <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>

            {/* Formation 3 */}
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
                delay: 0.3
              }}>

              <Card hoverEffect className="h-full flex flex-col">
                <div className="p-6 flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-nkp-light text-nkp-blue text-sm font-medium rounded-full flex items-center gap-1">
                      <Clock className="h-4 w-4" /> 3 mois
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-nkp-dark mb-3">
                    Infographie
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Photoshop, Illustrator, InDesign. Devenez un professionnel
                    du design graphique et de la création visuelle.
                  </p>
                  <div className="text-3xl font-bold text-nkp-blue mb-4">
                    50,000 FCFA
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link to="/contact">
                    <Button fullWidth>
                      S'inscrire <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>

            {/* Formation 4 */}
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
                delay: 0.4
              }}>

              <Card hoverEffect className="h-full flex flex-col">
                <div className="p-6 flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-nkp-light text-nkp-blue text-sm font-medium rounded-full flex items-center gap-1">
                      <Clock className="h-4 w-4" /> 4 mois
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-nkp-dark mb-3">
                    Électronique
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Bases de l'électronique, circuits, réparation. Formation
                    pratique pour maîtriser les fondamentaux de l'électronique.
                  </p>
                  <div className="text-3xl font-bold text-nkp-blue mb-4">
                    60,000 FCFA
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link to="/contact">
                    <Button fullWidth>
                      S'inscrire <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>

            {/* Formation 5 */}
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
                delay: 0.5
              }}>

              <Card hoverEffect className="h-full flex flex-col">
                <div className="p-6 flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-nkp-light text-nkp-blue text-sm font-medium rounded-full flex items-center gap-1">
                      <Clock className="h-4 w-4" /> 3 mois
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-nkp-dark mb-3">
                    Maintenance Informatique
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Diagnostic, réparation, installation. Apprenez à maintenir
                    et réparer les équipements informatiques.
                  </p>
                  <div className="text-3xl font-bold text-nkp-blue mb-4">
                    55,000 FCFA
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link to="/contact">
                    <Button fullWidth>
                      S'inscrire <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-nkp-dark to-nkp-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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

            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
              Besoin d'un service personnalisé ?
            </h2>
            <p className="text-xl text-gray-200 mb-10">
              Contactez-nous pour discuter de vos besoins spécifiques. Notre
              équipe est à votre disposition pour vous accompagner dans tous vos
              projets.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-nkp-blue hover:bg-gray-100">

                Nous contacter
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>);

}