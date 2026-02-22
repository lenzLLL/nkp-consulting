import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}
function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-nkp-blue focus-visible:ring-offset-2 rounded-lg"
        aria-expanded={isOpen}>

        <span className="font-heading text-lg font-semibold text-nkp-dark pr-4">
          {question}
        </span>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0
          }}
          transition={{
            duration: 0.2
          }}
          className="flex-shrink-0">

          <ChevronDown className="h-5 w-5 text-nkp-blue" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{
            height: 0,
            opacity: 0
          }}
          animate={{
            height: 'auto',
            opacity: 1
          }}
          exit={{
            height: 0,
            opacity: 0
          }}
          transition={{
            duration: 0.3
          }}
          className="overflow-hidden">

            <p className="pb-6 text-gray-600 leading-relaxed">{answer}</p>
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}
export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
  {
    question: "Comment s'inscrire à une formation ?",
    answer:
    "Pour vous inscrire à une formation, vous pouvez vous rendre directement dans nos locaux à Yaoundé, nous contacter par téléphone ou WhatsApp, ou remplir le formulaire de contact sur notre site. Notre équipe vous guidera dans le processus d'inscription et vous fournira toutes les informations nécessaires sur les documents requis et les modalités de paiement."
  },
  {
    question: 'Quels sont les horaires des formations ?',
    answer:
    "Nos formations se déroulent du lundi au vendredi de 8h à 18h, et le samedi de 8h à 13h. Nous proposons des sessions en matinée (8h-12h) et en après-midi (14h-18h) pour s'adapter à vos disponibilités. Des cours du soir peuvent également être organisés sur demande pour les groupes."
  },
  {
    question: 'Les formations sont-elles certifiées ?',
    answer:
    'Oui, toutes nos formations sont sanctionnées par une attestation de formation officielle délivrée par NKP Consulting SARL. Cette attestation certifie les compétences acquises et peut être présentée aux employeurs. Pour certaines formations, nous préparons également aux certifications internationales reconnues.'
  },
  {
    question: 'Quel est le mode de paiement accepté ?',
    answer:
    "Nous acceptons plusieurs modes de paiement : espèces, Mobile Money (Orange Money, MTN Mobile Money), virement bancaire et paiement échelonné. Pour les formations, un acompte de 50% est demandé à l'inscription, le solde étant payable avant la fin de la formation."
  },
  {
    question: 'Puis-je suivre une formation en ligne ?',
    answer:
    'Actuellement, nos formations sont principalement dispensées en présentiel dans nos locaux à Yaoundé. Cependant, nous développons progressivement des modules de formation en ligne pour certains cours. Contactez-nous pour connaître les options disponibles pour votre formation souhaitée.'
  },
  {
    question: 'Combien de temps dure une formation ?',
    answer:
    'La durée varie selon la formation choisie : Bureautique (2 mois), Gestion Comptable (3 mois), Infographie (3 mois), Électronique (4 mois), Maintenance Informatique (3 mois). Chaque formation comprend des cours théoriques et des travaux pratiques pour garantir une maîtrise complète des compétences.'
  },
  {
    question: 'Y a-t-il des prérequis pour les formations ?',
    answer:
    "Les prérequis varient selon les formations. Pour la bureautique, aucun prérequis n'est nécessaire. Pour la gestion comptable, un niveau Baccalauréat est recommandé. Pour l'infographie et la maintenance informatique, des connaissances de base en informatique sont souhaitables. Notre équipe évalue votre niveau lors de l'inscription pour vous orienter vers la formation adaptée."
  },
  {
    question: 'Comment obtenir une attestation de formation ?',
    answer:
    "L'attestation de formation est délivrée automatiquement à la fin de votre parcours, après validation de vos compétences par nos formateurs. Elle vous est remise lors d'une cérémonie de clôture ou peut être récupérée dans nos locaux. Une copie numérique peut également être envoyée par email sur demande."
  },
  {
    question: 'Proposez-vous des formations en groupe pour entreprises ?',
    answer:
    'Oui, nous proposons des formations sur mesure pour les entreprises et organisations. Nous pouvons adapter le contenu, les horaires et le lieu de formation selon vos besoins. Contactez-nous pour obtenir un devis personnalisé et discuter de vos objectifs de formation pour vos équipes.'
  },
  {
    question: "Comment contacter NKP Consulting pour plus d'informations ?",
    answer:
    'Vous pouvez nous contacter de plusieurs façons : par téléphone ou WhatsApp au +237 699 00 00 00, par email à nkpconsulting@gmail.com, ou en vous rendant directement dans nos locaux à Yaoundé. Notre équipe est disponible du lundi au vendredi de 8h à 18h et le samedi de 8h à 13h pour répondre à toutes vos questions.'
  }];

  return (
    <main className="w-full pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[300px] md:min-h-[380px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero.png" alt="FAQ - NKP" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-nkp-dark/95 via-nkp-dark/70 to-nkp-dark/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
              Questions Fréquentes
            </h1>
            <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
              Trouvez rapidement les réponses à vos questions sur nos services et formations
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="mb-12 text-center">

            <div className="w-16 h-16 bg-nkp-light rounded-full flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="h-8 w-8 text-nkp-blue" />
            </div>
            <p className="text-gray-600">
              Cliquez sur une question pour voir la réponse
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0
            }}
            whileInView={{
              opacity: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}>

            {faqs.map((faq, index) =>
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)} />

            )}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-nkp-light">
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

            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-nkp-dark mb-4">
              Vous n'avez pas trouvé votre réponse ?
            </h2>
            <p className="text-gray-600 mb-8">
              Notre équipe est disponible pour répondre à toutes vos questions.
              N'hésitez pas à nous contacter !
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center h-11 px-6 rounded-full bg-nkp-blue text-white font-medium hover:bg-blue-700 transition-colors">

              Nous contacter
            </a>
          </motion.div>
        </div>
      </section>
    </main>);

}