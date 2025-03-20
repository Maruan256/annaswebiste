"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

// Sample portfolio data
const portfolioItems = [
  {
    id: 1,
    title: "DANCE PERFORMANCE",
    summary: "Contemporary dance exploration of urban spaces and movement.",
    content:
      "This project explored the intersection of contemporary dance and urban environments. Through a series of performances in unexpected city locations, we challenged the traditional boundaries between performer and audience, architecture and movement. The project culminated in a 45-minute piece that transformed an abandoned factory into a dynamic performance space.",
  },
  {
    id: 2,
    title: "MOVEMENT RESEARCH",
    summary: "Academic study on the effects of rhythm on physical expression.",
    content:
      "This research project examined how different rhythmic patterns influence physical expression and emotional response in dancers. Working with neuroscientists and musicians, we developed a methodology to measure and analyze the relationship between sound structures and movement qualities. The findings were published in the Journal of Dance Medicine & Science and presented at the International Conference on Movement and Computing.",
  },
  {
    id: 3,
    title: "DIGITAL CHOREOGRAPHY",
    summary: "Experimental work combining motion capture and generative algorithms.",
    content:
      "This digital choreography project used motion capture technology to translate physical movement into digital data, which was then manipulated through generative algorithms. The resulting visual patterns were projected back onto dancers, creating a feedback loop between human movement and computational interpretation. This work explores questions about embodiment in the digital age and the relationship between biological and artificial intelligence.",
  },
  {
    id: 4,
    title: "WORKSHOP SERIES",
    summary: "Educational program for young dancers exploring improvisation techniques.",
    content:
      "This workshop series was designed for young dancers ages 12-18 to develop improvisation skills and creative confidence. Over eight weeks, participants explored various approaches to movement generation, spatial awareness, and collaborative choreography. The program concluded with an informal showing where students presented their own short works developed through the improvisation techniques they had learned.",
  },
  {
    id: 5,
    title: "SOUND & MOVEMENT",
    summary: "Collaborative project with electronic musicians creating reactive soundscapes.",
    content:
      "This collaboration with electronic musicians created a performance environment where sound and movement were deeply interconnected. Using pressure sensors and accelerometers, dancers' movements directly influenced the generation and modulation of sound in real-time. This created a unique performance ecosystem where choreography and composition emerged simultaneously through the interaction between dancers and musicians.",
  },
  {
    id: 6,
    title: "DANCE FILM",
    summary: "Short experimental film exploring themes of isolation and connection.",
    content:
      "This dance film project explored themes of isolation and connection through choreography specifically designed for the camera. Shot in various locations including underwater sequences and aerial perspectives, the film challenges traditional viewpoints and creates impossible movement sequences through editing techniques. The 12-minute film has been screened at several international dance film festivals and received an award for innovative cinematography.",
  },
  {
    id: 7,
    title: "COMMUNITY PROJECT",
    summary: "Participatory dance initiative working with diverse community groups.",
    content:
      "This community-based project brought together participants from diverse backgrounds and abilities to create a collaborative performance. Working with elderly residents, youth groups, and people with disabilities, we developed movement material that celebrated each person's unique physical expression. The resulting performance was presented in public spaces throughout the city, challenging perceptions about who can dance and what dance can be.",
  },
]

export default function Portfolio() {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const tilesRef = useRef<(HTMLDivElement | null)[]>([])

  // Store original positions for smooth transitions
  useEffect(() => {
    // This effect runs when the component mounts
    // It helps with smooth transitions by ensuring the browser has calculated initial positions
    const timer = setTimeout(() => {
      tilesRef.current.forEach((tile) => {
        if (tile) {
          tile.style.transition = "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)"
        }
      })
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const toggleExpand = (id: number) => {
    if (isTransitioning) return

    setIsTransitioning(true)

    if (expandedId === id) {
      setExpandedId(null)
    } else {
      setExpandedId(id)
    }

    // Allow transitions to complete before enabling clicks again
    setTimeout(() => {
      setIsTransitioning(false)
    }, 600) // Match this with the CSS transition duration
  }

  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <Link href="/" className="back-button">
          <ArrowLeft size={20} />
          <span>Back</span>
        </Link>
        <h1 className="portfolio-title">PORTFOLIO</h1>
      </div>

      <div className={`portfolio-mosaic ${expandedId ? `expanded-${expandedId}` : ""}`}>
        {portfolioItems.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => {
              tilesRef.current[index] = el;
            }}
            className={`portfolio-tile tile-${item.id} ${expandedId === item.id ? "expanded" : ""}`}
            onClick={() => toggleExpand(item.id)}
          >
            <h2 className="tile-title">{item.title}</h2>
            <p className="tile-summary">{item.summary}</p>

            {expandedId === item.id && (
              <div className="tile-content">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

