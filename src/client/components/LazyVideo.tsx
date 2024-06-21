import { FC, useEffect, useRef, useState } from 'react'

interface LazyVideoProps {
  src: string
  poster?: string
}

const LazyVideo: FC<LazyVideoProps> = ({ src, poster = '' }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadedData = () => {
    setIsLoading(false)
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.src = video.dataset.src || ''
            observer.unobserve(video)
          }
        })
      },
      {
        threshold: 0
      }
    )

    observer.observe(video)

    return () => {
      if (video) {
        observer.unobserve(video)
      }
    }
  }, [])

  return (
    <div className="container">
      {isLoading && <div className="loading">Loading...</div>}
      <video ref={videoRef} data-src={src} poster={poster} onLoadedData={handleLoadedData} controls />
    </div>
  )
}

export default LazyVideo
