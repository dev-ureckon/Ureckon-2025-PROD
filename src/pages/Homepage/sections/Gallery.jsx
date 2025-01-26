"use client"

import { TextAnimate } from "@/components/ui/text-animate"
import { PlusIcon } from "lucide-react"
import React, { useState } from "react"

function Gallery() {
  const images = [
    { src: "mountain.png", category: "ROBOTICS" },
    { src: "./scene.jpg", category: "QUIZ" },
    { src: "scene1.jpg", category: "CODING" },
    { src: "/path/to/image4.jpg", category: "GAMING" },
    { src: "/path/to/image5.jpg", category: "FLAGSHIP" },
    { src: "/path/to/image6.jpg", category: "INITIATIVES" },
    { src: "/path/to/image7.jpg", category: "BIO-TECH" },
    { src: "/path/to/image8.jpg", category: "BIZ EVENTS" },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState(null)

  const filteredImages = selectedCategory ? images.filter((img) => img.category === selectedCategory) : images

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1))
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
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
    setSelectedCategory((prevCategory) => (prevCategory === category ? null : category))
    setCurrentSlide(0)
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
           <TextAnimate animation="scaleUp" by="text">U6 GALLERY</TextAnimate>
          
        </h1>
      </div>

      <div>
        <div className="relative max-w-4xl mx-auto">
          <PlusIcon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-red-600" />
          <PlusIcon className="absolute h-6 w-6 -bottom-1 -left-3 dark:text-white text-red-600" />
          <PlusIcon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-red-600" />
          <PlusIcon className="absolute h-6 w-6 -bottom-1 -right-3 dark:text-white text-red-600" />

          <div className="aspect-[16/9] border-[12px] border-[#641316]">
            {filteredImages.length > 0 ? (
              <img
                src={filteredImages[currentSlide].src || "/placeholder.svg"}
                alt={`Slide ${currentSlide + 1}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
                No images in this category
              </div>
            )}
          </div>

          {filteredImages.length > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              {filteredImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-red-600" : "bg-white"}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 mt-[2rem]">
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

