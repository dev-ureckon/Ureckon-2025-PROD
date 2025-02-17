import { TextAnimate } from "../../../components/ui/text-animate"
import { PlusIcon } from "lucide-react"
import { useState, useEffect } from "react"

function Gallery() {
  const images = {
    ROBOTICS: [
      { src: "/gallery/robotics1.webp", alt: "Robotics 1" },
      { src: "/gallery/robotics2.webp", alt: "Robotics 2" },
      { src: "/gallery/robotics3.webp", alt: "Robotics 3" },
      { src: "/gallery/robotics4.webp", alt: "Robotics 4" },
      { src: "/gallery/robotics5.webp", alt: "Robotics 5" },
      { src: "/gallery/robotics6.webp", alt: "Robotics 6" },
    ],
    QUIZ: [
      { src: "/gallery/quiz1.webp", alt: "Quiz 1" },
      { src: "/gallery/quiz2.webp", alt: "Quiz 2" },
      { src: "/gallery/quiz3.webp", alt: "Quiz 3" },
      { src: "/gallery/quiz4.webp", alt: "Quiz 4" },
      { src: "/gallery/quiz5.webp", alt: "Quiz 5" },
    ],
    CODING: [
      { src: "/gallery/coding1.webp", alt: "Coding 1" },
      { src: "/gallery/coding2.webp", alt: "Coding 3" },
      { src: "/gallery/coding3.webp", alt: "Coding 3" },
      { src: "/gallery/coding4.webp", alt: "Coding 4" },
      { src: "/gallery/coding5.webp", alt: "Coding 5" },
    ],
    GAMING: [
      { src: "/gallery/gaming1.webp", alt: "Gaming 1" },
      { src: "/gallery/gaming2.webp", alt: "Gaming 2" },
      { src: "/gallery/gaming3.webp", alt: "Gaming 3" },
      { src: "/gallery/gaming4.webp", alt: "Gaming 4" },
      { src: "/gallery/gaming5.webp", alt: "Gaming 5" },
    ],
    FLAGSHIP: [
      { src: "/gallery/flagship1.webp", alt: "Flagship 1" },
      { src: "/gallery/flagship2.webp", alt: "Flagship 2" },
      { src: "/gallery/flagship3.webp", alt: "Flagship 3" },
      { src: "/gallery/flagship4.webp", alt: "Flagship 4" },
    ],
    INITIATIVES: [
      { src: "/gallery/initiatives1.webp", alt: "Initiatives 1" },
      { src: "/gallery/initiatives2.webp", alt: "Initiatives 2" },
      { src: "/gallery/initiatives3.webp", alt: "Initiatives 3" },
      { src: "/gallery/initiatives4.webp", alt: "Initiatives 4" },
      { src: "/gallery/initiatives5.webp", alt: "Initiatives 5" },
    ],
    "BIO-TECH": [
      { src: "/gallery/biotech1.webp", alt: "Bio-Tech 1" },
      { src: "/gallery/biotech2.webp", alt: "Bio-Tech 2" },
      { src: "/gallery/biotech3.webp", alt: "Bio-Tech 3" },
      { src: "/gallery/biotech4.webp", alt: "Bio-Tech 4" },
      { src: "/gallery/biotech5.webp", alt: "Bio-Tech 5" },
    ],
    "BIZ EVENTS": [
      { src: "/gallery/business1.webp", alt: "Biz Events 1" },
      { src: "/gallery/business2.webp", alt: "Biz Events 2" },
      { src: "/gallery/business3.webp", alt: "Biz Events 3" },
      { src: "/gallery/business4.webp", alt: "Biz Events 4" },
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
    { name: "ROBOTICS", color: "bg-red-800/50" },
    { name: "QUIZ", color: "bg-red-800/50" },
    { name: "CODING", color: "bg-red-800/50" },
    { name: "GAMING", color: "bg-red-800/50" },
    { name: "FLAGSHIP", color: "bg-red-800/50" },
    { name: "INITIATIVES", color: "bg-red-800/50" },
    { name: "BIO-TECH", color: "bg-red-800/50" },
    { name: "BIZ EVENTS", color: "bg-red-800/50" },
  ]

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
  }

  return (
    <div className="px- py-8 mx-6 lg:mx-0 lg:px-16 lg:p-10 mt-[4rem]">
      <div className="mx-auto text-center mb-8">
        <h1
          style={{
            background: "linear-gradient(to bottom, #FFB74D, #F57C00)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          className="lg:text-6xl text-xl uppercase font-pixel drop-shadow-[0_0_10px_rgba(234,179,8,0.8)]"
        >
          <TextAnimate animation="slideLeft" by="character">
            U6 GALLERY
          </TextAnimate>
        </h1>
      </div>

      <div>
      <div className="relative max-w-4xl mx-auto">
  {["-top-3 -left-3", "-top-3 -right-3", "-bottom-3 -left-3", "-bottom-3 -right-3"].map((pos, index) => (
    <div key={index} className={`absolute ${pos} w-6 h-6 flex items-center justify-center`}>
      <span className="text-red-600 text-2xl lg:text-4xl font-light leading-none transform translate-x-[2px] translate-y-[2px]">
        +
      </span>
    </div>
  ))}

  <div className="aspect-[16/9] border-[12px] border-red-800/50">
    {selectedCategory ? (
      <img
        src={images[selectedCategory][currentSlide].src || "/placeholder.svg"}
        alt={images[selectedCategory][currentSlide].alt}
        className="w-full h-full object-cover"
      />
    ) : (
      <div className="w-full h-full flex items-center justify-center bg-black text-white font-pixel">
        Select a category to view images
      </div>
    )}

    {selectedCategory && images[selectedCategory].length > 1 && (
      <>
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 lg:-translate-x-12 -translate-x-6 text-[#A81218] lg:text-4xl text-2xl"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 lg:translate-x-12 translate-x-6 text-[#A81218] lg:text-4xl text-2xl"
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

      <div className="max-w-4xl mx-auto grid  grid-cols-1 md:grid-cols-4 gap-4 mt-[5rem]">
  {categories.map((category) => (
    <button
      key={category.name}
      onClick={() => handleCategoryClick(category.name)}
      className={`py-2 px-4 bg-red-800/50 rounded font-pixel   hover:opacity-90 transition-opacity ${
        selectedCategory === category.name ? "ring-2 ring-white" : ""
      }`}
      // style={{
      //   background: "linear-gradient(to bottom, #FFB74D, #F57C00)",
      //   WebkitBackgroundClip: "background",
      //   WebkitTextFillColor: "transparent",
      // }}
    >
      {category.name}
    </button>
  ))}
</div>


    </div>
  )
}

export default Gallery
