'use client'

import { useEffect, useRef } from 'react'

interface MapProps {
  center: [number, number]
  zoom?: number
  markerTitle: string
  className?: string
}

export function Map({ center, zoom = 13, markerTitle, className = '' }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)

  useEffect(() => {
    // Only load Leaflet on client side
    if (typeof window === 'undefined' || !mapRef.current) return

    // Dynamically import Leaflet
    import('leaflet').then(L => {
      // Avoid re-initialization
      if (mapInstanceRef.current) return

      // Create map
      const map = L.map(mapRef.current).setView(center, zoom)

      // Add tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map)

      // Add marker with custom icon
      const customIcon = L.icon({
        iconUrl:
          'data:image/svg+xml;base64,' +
          btoa(`
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#A4D233" stroke="#0F2B46" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        `),
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      })

      L.marker(center, { icon: customIcon })
        .addTo(map)
        .bindPopup(`<b>${markerTitle}</b>`)
        .openPopup()

      mapInstanceRef.current = map
    })

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [center, zoom, markerTitle])

  return (
    <div
      ref={mapRef}
      className={`h-full w-full rounded-xl ${className}`}
      style={{ minHeight: '300px' }}
    />
  )
}
