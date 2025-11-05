'use client'

import dynamic from 'next/dynamic'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'

const Map = dynamic(() => import('@/components/ui/map').then(mod => mod.Map), {
  ssr: false,
  loading: () => (
    <div className="flex h-full min-h-[300px] items-center justify-center rounded-xl bg-gray-100">
      <p className="text-gray-500">Chargement de la carte...</p>
    </div>
  ),
})

interface MapBlockProps {
  office: 'la-ville-aux-dames' | 'trappes' | 'both'
  height?: 'small' | 'medium' | 'large'
}

const offices = {
  'la-ville-aux-dames': {
    name: 'La Ville-aux-Dames',
    address: 'Z.I du bois de Planté\n32, rue Jacqueline Auriol\n37700 LA VILLE-AUX-DAMES',
    phone: '02 47 42 82 82',
    email: 'proterra@proterra-environnement.com',
    coordinates: [47.3933, 0.7833] as [number, number],
  },
  trappes: {
    name: 'Trappes',
    address: 'ZAI des Bruyères\n3 avenue Le Verrier\n78190 TRAPPES',
    phone: '01 34 00 15 80',
    email: 'proterra@proterra-environnement.com',
    coordinates: [48.7769, 1.9933] as [number, number],
  },
}

const heightClasses = {
  small: 'h-[300px]',
  medium: 'h-[500px]',
  large: 'h-[700px]',
}

export function MapBlock({ office, height = 'medium' }: MapBlockProps) {
  const officesToShow = office === 'both' ? Object.values(offices) : [offices[office]]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2">
          {officesToShow.map(officeData => (
            <div key={officeData.name} className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{officeData.name}</CardTitle>
                  <CardDescription>Agence {officeData.name}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                    <div>
                      <div className="font-medium text-gray-900">Adresse</div>
                      <div className="whitespace-pre-line text-sm text-gray-600">
                        {officeData.address}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone size={20} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                    <div>
                      <div className="font-medium text-gray-900">Téléphone</div>
                      <a
                        href={`tel:${officeData.phone.replace(/\s/g, '')}`}
                        className="text-sm text-proterra-navy-500 hover:underline"
                      >
                        {officeData.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail size={20} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                    <div>
                      <div className="font-medium text-gray-900">Email</div>
                      <a
                        href={`mailto:${officeData.email}`}
                        className="text-sm text-proterra-navy-500 hover:underline"
                      >
                        {officeData.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock size={20} className="mt-0.5 flex-shrink-0 text-proterra-lime-500" />
                    <div>
                      <div className="font-medium text-gray-900">Horaires</div>
                      <div className="text-sm text-gray-600">Lun - Ven : 8h - 17h30</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className={cn('overflow-hidden rounded-xl border shadow-lg', heightClasses[height])}>
                <Map
                  center={officeData.coordinates}
                  zoom={14}
                  markerTitle={officeData.name}
                  className="h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
