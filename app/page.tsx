"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const [isEntering, setIsEntering] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (isEntering) {
      const timer = setTimeout(() => router.push("/portfolio"), 1000)
      return () => clearTimeout(timer)
    }
  }, [isEntering, router])

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "black",
        color: "white",
        overflow: "hidden",
      }}
    >
      {/* Animated Background Elements */}
      <div style={{ position: "absolute", inset: 0 }}>
        <div className="glitch-grid" />
      </div>

      {/* Main Content - Responsive Container */}
      <div className="home-content-container">
        <div className={`home-glitch-container ${isEntering ? "entering" : ""}`}>
          {/* Clear Retro Font with Animated 3D Text Shadow Effect */}
          <div style={{ marginBottom: "1.5rem", position: "relative" }}>
            <h1 className="retro-3d-text">ANNA SCHMIDT</h1>
          </div>

          {/* Smaller subtitle with matching 3D effect */}
          <p className="retro-3d-subtitle">DANCE PRODUCER • RESEARCHER</p>

          <button onClick={() => setIsEntering(true)} className="neon-button">
            Enter
          </button>
        </div>
      </div>
    </div>
  )
}

