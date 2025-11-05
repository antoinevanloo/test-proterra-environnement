interface VideoBlockProps {
  title?: string
  videoType: 'youtube' | 'vimeo' | 'file'
  videoId?: string
  videoFile?: {
    url: string
  }
  description?: string
}

export function VideoBlock({ title, videoType, videoId, videoFile, description }: VideoBlockProps) {
  const getVideoEmbedUrl = () => {
    if (videoType === 'youtube' && videoId) {
      return `https://www.youtube.com/embed/${videoId}`
    }
    if (videoType === 'vimeo' && videoId) {
      return `https://player.vimeo.com/video/${videoId}`
    }
    if (videoType === 'file' && videoFile) {
      return videoFile.url
    }
    return null
  }

  const embedUrl = getVideoEmbedUrl()

  if (!embedUrl) {
    return null
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          {title && (
            <h2 className="mb-8 text-center text-3xl font-bold text-proterra-navy-500 md:text-4xl">
              {title}
            </h2>
          )}

          <div className="overflow-hidden rounded-xl shadow-xl">
            {videoType === 'file' ? (
              <video controls className="w-full">
                <source src={embedUrl} type="video/mp4" />
                Votre navigateur ne supporte pas la vidéo.
              </video>
            ) : (
              <div className="relative aspect-video">
                <iframe
                  src={embedUrl}
                  title={title || 'Vidéo'}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            )}
          </div>

          {description && (
            <p className="mt-6 text-center text-lg text-gray-600">{description}</p>
          )}
        </div>
      </div>
    </section>
  )
}
