import React, {useEffect, useState} from 'react'

export interface LazySVGProps {
  svgString: string
}

/// Node.js 에 btoa 함수가 없어서 SSR 시 에러가 나는 문제를 회피
function LazySVG({svgString}: LazySVGProps) {
  const [content, setContent] = useState<React.ReactElement | null>(null)

  useEffect(() => {
    const handleLoad = (e) => {
      const el = e.target
      const doc = el.getSVGDocument()
      doc.documentElement.style.cursor = 'pointer'
      doc.addEventListener('click', function () {
        doc.ks && doc.ks.time(0)
      })
      doc.addEventListener('mouseenter', function () {
        el.classList.add('hover')
      })
      doc.addEventListener('mouseleave', function () {
        el.classList.remove('hover')
      })
      if (doc.ks && el.hasAttribute('data-loop')) {
        setInterval(function () {
          doc.ks.play()
        }, 500)
      }
    }

    var url = URL.createObjectURL(
      new Blob([svgString], {type: 'image/svg+xml'}),
    )
    setContent(<embed src={url} onLoad={handleLoad} data-loop />)
  }, [])

  return content
}

export default LazySVG
