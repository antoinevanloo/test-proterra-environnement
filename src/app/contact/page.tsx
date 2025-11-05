'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

// Dynamically import Map to avoid SSR issues with Leaflet
const Map = dynamic(() => import('@/components/ui/map').then(mod => mod.Map), {
  ssr: false,
  loading: () => (
    <div className="flex h-full min-h-[300px] items-center justify-center rounded-xl bg-gray-100">
      <p className="text-gray-500">Chargement de la carte...</p>
    </div>
  ),
})

const offices = [
  {
    name: 'La Ville-aux-Dames',
    address: 'Z.I du bois de Planté\n32, rue Jacqueline Auriol\n37700 LA VILLE-AUX-DAMES',
    phone: '02 47 42 82 82',
    email: 'proterra@proterra-environnement.com',
    coordinates: [47.3933, 0.7833] as [number, number],
    hours: 'Lundi - Vendredi : 8h00 - 12h00 / 13h30 - 17h30',
  },
  {
    name: 'Trappes',
    address: 'ZAI des Bruyères\n3 avenue Le Verrier\n78190 TRAPPES',
    phone: '01 34 00 15 80',
    email: 'proterra@proterra-environnement.com',
    coordinates: [48.7769, 1.9933] as [number, number],
    hours: 'Lundi - Vendredi : 8h00 - 12h00 / 13h30 - 17h30',
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would handle the form submission (API call to Payload CMS or email service)
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-proterra-navy-500 via-proterra-navy-400 to-proterra-blue-500 pt-32 pb-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-6xl">
              Contactez{' '}
              <span className="bg-gradient-to-r from-proterra-lime-500 to-proterra-blue-400 bg-clip-text text-transparent">
                nos experts
              </span>
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-white/90 md:text-xl">
              Une question ? Un projet ? Notre équipe est à votre écoute pour vous accompagner dans
              vos projets d'étanchéité par géosynthétiques.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Envoyez-nous un message</CardTitle>
                  <CardDescription>
                    Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs
                    délais
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="rounded-lg bg-green-50 border border-green-200 p-8 text-center">
                      <CheckCircle size={48} className="mx-auto mb-4 text-green-600" />
                      <h3 className="mb-2 text-xl font-bold text-green-900">Message envoyé !</h3>
                      <p className="text-green-700">
                        Merci pour votre message. Notre équipe vous contactera très prochainement.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">
                            Prénom <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Jean"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">
                            Nom <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Dupont"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Société</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Nom de votre entreprise"
                        />
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="email">
                            Email <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="jean.dupont@exemple.fr"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Téléphone</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="06 12 34 56 78"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">
                          Sujet <span className="text-red-500">*</span>
                        </Label>
                        <Select
                          value={formData.subject}
                          onValueChange={value => setFormData({ ...formData, subject: value })}
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez un sujet" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="devis">Demande de devis</SelectItem>
                            <SelectItem value="projet">Projet d'étanchéité</SelectItem>
                            <SelectItem value="bassins">Bassins</SelectItem>
                            <SelectItem value="dechets">Déchets & Terres polluées</SelectItem>
                            <SelectItem value="couvertures">Couvertures flottantes</SelectItem>
                            <SelectItem value="technique">Question technique</SelectItem>
                            <SelectItem value="recrutement">Recrutement</SelectItem>
                            <SelectItem value="autre">Autre</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">
                          Message <span className="text-red-500">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Décrivez votre projet ou votre demande..."
                          rows={6}
                        />
                      </div>

                      <Button type="submit" variant="primary" size="lg" className="w-full">
                        <Send size={20} />
                        Envoyer le message
                      </Button>

                      <p className="text-xs text-gray-500">
                        <span className="text-red-500">*</span> Champs obligatoires
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Informations de contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
                      Emails directs
                    </h4>
                    <div className="space-y-2">
                      <a
                        href="mailto:proterra@proterra-environnement.com"
                        className="flex items-start gap-2 text-sm text-gray-700 transition-colors hover:text-proterra-navy-500"
                      >
                        <Mail size={16} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                        <div>
                          <div className="font-medium">Contact général</div>
                          <div className="text-gray-500">proterra@proterra-environnement.com</div>
                        </div>
                      </a>
                      <a
                        href="mailto:commercial@proterra-environnement.com"
                        className="flex items-start gap-2 text-sm text-gray-700 transition-colors hover:text-proterra-navy-500"
                      >
                        <Mail size={16} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                        <div>
                          <div className="font-medium">Commercial</div>
                          <div className="text-gray-500">commercial@proterra-environnement.com</div>
                        </div>
                      </a>
                      <a
                        href="mailto:etude@proterra-environnement.com"
                        className="flex items-start gap-2 text-sm text-gray-700 transition-colors hover:text-proterra-navy-500"
                      >
                        <Mail size={16} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                        <div>
                          <div className="font-medium">Bureau d'études</div>
                          <div className="text-gray-500">etude@proterra-environnement.com</div>
                        </div>
                      </a>
                      <a
                        href="mailto:recrutement@proterra-environnement.com"
                        className="flex items-start gap-2 text-sm text-gray-700 transition-colors hover:text-proterra-navy-500"
                      >
                        <Mail size={16} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                        <div>
                          <div className="font-medium">Recrutement</div>
                          <div className="text-gray-500">recrutement@proterra-environnement.com</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-proterra-lime-50 border-proterra-lime-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-proterra-navy-500">
                    <Clock size={24} className="text-proterra-lime-500" />
                    Horaires d'ouverture
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Lundi - Vendredi :</span>
                      <span className="text-gray-700">8h00 - 17h30</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Pause déjeuner :</span>
                      <span className="text-gray-700">12h00 - 13h30</span>
                    </div>
                    <div className="flex justify-between text-gray-500">
                      <span className="font-medium">Weekend :</span>
                      <span>Fermé</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-proterra-navy-500 text-white">
                <CardHeader>
                  <CardTitle>Besoin d'une intervention urgente ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-white/90">
                    Pour les urgences et interventions rapides, contactez directement nos équipes :
                  </p>
                  <div className="space-y-2">
                    <a
                      href="tel:0247428282"
                      className="flex items-center gap-2 text-lg font-bold text-proterra-lime-500 hover:text-proterra-lime-400"
                    >
                      <Phone size={20} />
                      02 47 42 82 82
                    </a>
                    <p className="text-xs text-white/70">(La Ville-aux-Dames)</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Offices Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-proterra-navy-500 md:text-4xl">
              Nos agences
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Deux sites pour mieux vous servir partout en France
            </p>
          </div>

          <Tabs defaultValue="la-ville-aux-dames" className="w-full">
            <div className="mb-8 flex justify-center">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="la-ville-aux-dames">La Ville-aux-Dames</TabsTrigger>
                <TabsTrigger value="trappes">Trappes</TabsTrigger>
              </TabsList>
            </div>

            {offices.map(office => (
              <TabsContent
                key={office.name}
                value={office.name.toLowerCase().replace(/\s/g, '-')}
              >
                <div className="grid gap-8 lg:grid-cols-2">
                  {/* Office Info */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl">{office.name}</CardTitle>
                      <CardDescription>Agence {office.name}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-start gap-3">
                        <MapPin size={20} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                        <div>
                          <div className="font-medium text-gray-900">Adresse</div>
                          <div className="whitespace-pre-line text-sm text-gray-600">
                            {office.address}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Phone size={20} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                        <div>
                          <div className="font-medium text-gray-900">Téléphone</div>
                          <a
                            href={`tel:${office.phone.replace(/\s/g, '')}`}
                            className="text-sm text-proterra-navy-500 hover:underline"
                          >
                            {office.phone}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Mail size={20} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                        <div>
                          <div className="font-medium text-gray-900">Email</div>
                          <a
                            href={`mailto:${office.email}`}
                            className="text-sm text-proterra-navy-500 hover:underline"
                          >
                            {office.email}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Clock size={20} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                        <div>
                          <div className="font-medium text-gray-900">Horaires</div>
                          <div className="text-sm text-gray-600">{office.hours}</div>
                        </div>
                      </div>

                      <Button variant="outline" asChild className="w-full">
                        <a
                          href={`https://www.google.com/maps/dir/?api=1&destination=${office.coordinates[0]},${office.coordinates[1]}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MapPin size={16} />
                          Obtenir l'itinéraire
                        </a>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Map */}
                  <div className="h-[500px] overflow-hidden rounded-xl border shadow-lg">
                    <Map
                      center={office.coordinates}
                      zoom={14}
                      markerTitle={office.name}
                      className="h-full"
                    />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <Footer />
    </>
  )
}
