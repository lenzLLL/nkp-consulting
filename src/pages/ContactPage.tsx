import React, { useState, lazy } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { Select } from '../components/ui/Select';
import { Card } from '../components/ui/Card';
interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}
export function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const subjectOptions = [
  {
    value: '',
    label: 'Sélectionnez un sujet'
  },
  {
    value: 'formation',
    label: 'Inscription à une formation'
  },
  {
    value: 'services',
    label: 'Demande de services'
  },
  {
    value: 'information',
    label: "Demande d'information"
  },
  {
    value: 'partenariat',
    label: 'Proposition de partenariat'
  },
  {
    value: 'autre',
    label: 'Autre'
  }];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "L'email n'est pas valide";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Le téléphone est requis';
    }
    if (!formData.subject) {
      newErrors.subject = 'Veuillez sélectionner un sujet';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };
  const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>

  {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  return (
    <main className="w-full pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[300px] md:min-h-[380px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero.png" alt="Contact - NKP" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-nkp-dark/95 via-nkp-dark/70 to-nkp-dark/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
              Contactez-nous
            </h1>
            <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
              Notre équipe est à votre disposition pour répondre à toutes vos questions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-12">
            {/* Contact Form */}
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

              <h2 className="font-heading text-2xl font-bold text-nkp-dark mb-6">
                Envoyez-nous un message
              </h2>

              {isSubmitted ?
              <Card className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-nkp-dark mb-2">
                    Message envoyé !
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Merci pour votre message. Notre équipe vous répondra dans
                    les plus brefs délais.
                  </p>
                  <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="outline">

                    Envoyer un autre message
                  </Button>
                </Card> :

              <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                  label="Nom complet"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  error={errors.name} />


                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-6">
                    <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    error={errors.email} />

                    <Input
                    label="Téléphone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+237 6XX XXX XXX"
                    error={errors.phone} />

                  </div>

                  <Select
                  label="Sujet"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  options={subjectOptions}
                  error={errors.subject} />


                  <Textarea
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre demande..."
                  error={errors.message} />


                  <Button type="submit" size="lg" isLoading={isSubmitting}>
                    <Send className="mr-2 h-4 w-4" />
                    Envoyer le message
                  </Button>
                </form>
              }
            </motion.div>

            {/* Contact Info */}
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
              className="space-y-6">

              <h2 className="font-heading text-2xl font-bold text-nkp-dark mb-6">
                Nos coordonnées
              </h2>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-nkp-light rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-nkp-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-nkp-dark mb-1">
                      Adresse
                    </h3>
                    <p className="text-gray-600">Yaoundé, Cameroun</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-nkp-dark mb-1">
                      WhatsApp / Téléphone
                    </h3>
                    <p className="text-gray-600">+237 699 00 00 00</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-nkp-light rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-nkp-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-nkp-dark mb-1">Email</h3>
                    <p className="text-gray-600">nkpconsulting@gmail.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-nkp-light rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-nkp-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-nkp-dark mb-1">
                      Horaires d'ouverture
                    </h3>
                    <p className="text-gray-600">Lundi - Vendredi : 8h - 18h</p>
                    <p className="text-gray-600">Samedi : 8h - 13h</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
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
            className="text-center mb-8">

            <h2 className="font-heading text-2xl font-bold text-nkp-dark mb-2">
              Notre localisation
            </h2>
            <p className="text-gray-600">Retrouvez-nous à Yaoundé, Cameroun</p>
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
            className="rounded-xl overflow-hidden shadow-lg">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127504.41899867727!2d11.451539899999999!3d3.8480325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf7a309a7977%3A0x7f54bad35e693c51!2sYaound%C3%A9%2C%20Cameroon!5e0!3m2!1sen!2sus!4v1708531234567!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{
                border: 0
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NKP Consulting Location" />

          </motion.div>
        </div>
      </section>
    </main>);

}