import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const fullText = "NUSICEVA 17A MENI"
  const [displayedText, setDisplayedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    if (displayedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1))
      }, 100)
      return () => clearTimeout(timeout)
    } else {
      setTimeout(() => {
        setShowCursor(false)
        setShowContent(true)
      }, 500)
    }
  }, [displayedText, fullText])

  const cocktails = [
    { name: "Mimosa", ingredients: "orange juice, champagne" },
    { name: "Whiskey Sour", ingredients: "simple syrup, whisky Walker, lime juice" },
    { name: "French 75", ingredients: "champagne, simple syrup, gin, lemon juice" },
    { name: "Smoothie Cosmopolitan", ingredients: "smoothie from mixed fruits, vodka, simple syrup, lemon juice" }
  ]

  const extras = [
    { name: "Beer", detail: "Banjalucko pivo" },
    { name: "Tequila", detail: "shots" },
    { name: "Ice Tea", detail: "" },
    { name: "Expensive Vodka", detail: "shots" }
  ]

  return (
    <main className="app">
      <div className="menu-card">
        <div className="title-container">
          <h1 className="main-title">
            {displayedText}
            {showCursor && <span className="cursor">|</span>}
          </h1>
          <div className="art-deco-separator">
            <span className="separator-line"></span>
            <span className="separator-diamond">♦</span>
            <span className="separator-line"></span>
          </div>
        </div>

        <div className={`content-sections ${showContent ? 'visible' : ''}`}>
          <section className="menu-section">
            <div className="section-header">
              <span className="card-icon">♠</span>
              <h2 className="section-label">Cocktails</h2>
              <span className="card-icon">♠</span>
            </div>
            <ul className="menu-list">
              {cocktails.map((cocktail, index) => (
                <li key={index} className="menu-item">
                  <span className="item-name">{cocktail.name}</span>
                  <span className="item-separator"> — </span>
                  <span className="item-ingredients">({cocktail.ingredients})</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="menu-section">
            <div className="section-header">
              <span className="card-icon">♥</span>
              <h2 className="section-label">Extras</h2>
              <span className="card-icon">♥</span>
            </div>
            <ul className="menu-list">
              {extras.map((item, index) => (
                <li key={index} className="menu-item">
                  <span className="item-name">{item.name}</span>
                  {item.detail && (
                    <>
                      <span className="item-separator"> – </span>
                      <span className="item-ingredients">{item.detail}</span>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </section>

          <footer className="footer">
            <div className="card-suits">♦ ♣ ♠ ♥</div>
          </footer>
        </div>
      </div>
    </main>
  )
}

export default App
