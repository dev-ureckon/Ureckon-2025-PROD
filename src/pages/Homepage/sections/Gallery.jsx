import { TextAnimate } from "../../../components/ui/text-animate"
import { PlusIcon } from "lucide-react"
import { useState, useEffect } from "react"

function Gallery() {
  const images = {
    ROBOTICS: [
      { src: "/robotics1.jpg", alt: "Robotics 1" },
      { src: "/robotics2.jpg", alt: "Robotics 2" },
      { src: "/robotics3.jpg", alt: "Robotics 3" },
    ],
    QUIZ: [
      { src: "/quiz1.jpg", alt: "Quiz 1" },
      { src: "/quiz2.jpg", alt: "Quiz 2" },
    ],
    CODING: [
      { src: "/coding1.jpg", alt: "Coding 1" },
      { src: "/coding2.jpg", alt: "Coding 3" },
      { src: "/coding3.jpg", alt: "Coding 3" },
    ],
    GAMING: [
      { src: "/gaming1.jpg", alt: "Gaming 1" },
      { src: "/gaming2.jpg", alt: "Gaming 2" },
    ],
    FLAGSHIP: [
      { src: "/flagship1.jpg", alt: "Flagship 1" },
      { src: "/flagship2.jpg", alt: "Flagship 2" },
      { src: "/flagship3.jpg", alt: "Flagship 3" },
    ],
    INITIATIVES: [
      { src: "/initiatives1.jpg", alt: "Initiatives 1" },
      { src: "/initiatives2.jpg", alt: "Initiatives 2" },
    ],
    "BIO-TECH": [
      { src: "/biotech1.jpg", alt: "Bio-Tech 1" },
      { src: "/biotech2.jpg", alt: "Bio-Tech 2" },
      { src: "/biotech3.jpg", alt: "Bio-Tech 3" },
    ],
    "BIZ EVENTS": [
      { src: "/bizevents1.jpg", alt: "Biz Events 1" },
      { src: "/bizevents2.jpg", alt: "Biz Events 2" },
    ],
  }

  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    setCurrentSlide(0)
  }, []) //Removed selectedCategory from dependency array

  const nextSlide = () => {
    if (selectedCategory) {
      setCurrentSlide((prev) => (prev === images[selectedCategory].length - 1 ? 0 : prev + 1))
    }
  }

  const prevSlide = () => {
    if (selectedCategory) {
      setCurrentSlide((prev) => (prev === 0 ? images[selectedCategory].length - 1 : prev - 1))
    }
  }

  const categories = [
    { name: "ROBOTICS", color: "bg-red-600" },
    { name: "QUIZ", color: "bg-fuchsia-500" },
    { name: "CODING", color: "bg-purple-600" },
    { name: "GAMING", color: "bg-yellow-500" },
    { name: "FLAGSHIP", color: "bg-green-600" },
    { name: "INITIATIVES", color: "bg-teal-500" },
    { name: "BIO-TECH", color: "bg-blue-600" },
    { name: "BIZ EVENTS", color: "bg-orange-500" },
  ]

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
  }

  return (
    <div className="px-4 py-8 md:px-8 lg:px-16 max-lg:p-10 mt-[4rem]">
      <div className="mx-auto text-center mb-8">
        <h1
          style={{
            background: "linear-gradient(to bottom, #FFB74D, #F57C00)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          className="max-lg:text-2xl text-[52.05px] uppercase font-pixel drop-shadow-[0_0_10px_rgba(234,179,8,0.8)]"
        >
          <TextAnimate animation="slideLeft" by="character">
            U6 GALLERY
          </TextAnimate>
        </h1>
      </div>

      <div>
        <div className="relative max-w-4xl mx-auto">
          <PlusIcon className="absolute h-6 w-6 -top-3 -left-3  text-red-600" />
          <PlusIcon className="absolute h-6 w-6 -bottom-1 -left-3  text-red-600" />
          <PlusIcon className="absolute h-6 w-6 -top-3 -right-3  text-red-600" />
          <PlusIcon className="absolute h-6 w-6 -bottom-1 -right-3  text-red-600" />

          <div className="aspect-[16/9] border-[12px] border-red-800/50">
            {selectedCategory ? (
              <img
                src={images[selectedCategory][currentSlide].src || "/placeholder.svg"}
                alt={images[selectedCategory][currentSlide].alt}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-black  text-white font-pixel">
                Select a category to view images
              </div>
            )}
            {selectedCategory && images[selectedCategory].length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-[#A81218] text-4xl"
                >
                  ◀
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-[#A81218] text-4xl"
                >
                  ▶
                </button>
              </>
            )}
          </div>

          {selectedCategory && (
            <div className="flex justify-center gap-2 mt-4">
              {images[selectedCategory].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-red-600" : "bg-white"}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 mt-[5rem]">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => handleCategoryClick(category.name)}
            className={`${category.color} py-2 px-4 rounded font-pixel text-black hover:opacity-90 transition-opacity ${
              selectedCategory === category.name ? "ring-2 ring-white" : ""
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Gallery
