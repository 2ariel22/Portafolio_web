import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Header = () => {
  const [professionText, setProfessionText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const { t, language } = useLanguage()

	const timeoutRef = useRef(null)
	const cancelledRef = useRef(false)

	useEffect(() => {
		// Cancel any ongoing typing loop
		cancelledRef.current = false
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current)
			timeoutRef.current = null
		}

		// Reset typing animation when language changes
		setProfessionText('')
		setIsTyping(true)

		const text = t('header.profession')
		let index = 0

		const typeText = () => {
			if (cancelledRef.current) return
			if (index < text.length) {
				setProfessionText(text.slice(0, index + 1))
				index += 1
				timeoutRef.current = setTimeout(typeText, 100)
			} else {
				setIsTyping(false)
			}
		}

		// Start typing animation after a short delay
		timeoutRef.current = setTimeout(typeText, 1000)

		return () => {
			cancelledRef.current = true
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current)
				timeoutRef.current = null
			}
		}
	}, [t, language])

  return (
    <header className="header">
      <div className="contenedor contenedor-header">
        <div className="nombre">
          <span className="fade-in">{t('header.name')}</span>
        </div>
        <h2 className="profesion">
          {professionText}
          {isTyping && <span className="cursor">|</span>}
        </h2>
      </div>
    </header>
  )
}

export default Header
