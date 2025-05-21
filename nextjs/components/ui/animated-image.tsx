"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
}

export function AnimatedImage({ src, alt, width, height, className, priority = false }: AnimatedImageProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" })
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <motion.div
      ref={ref}
      className={cn("overflow-hidden rounded-lg", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        initial={{ scale: 1.1 }}
        animate={isLoaded && isInView ? { scale: 1 } : { scale: 1.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full h-full"
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          onLoad={() => setIsLoaded(true)}
          className={cn("w-full h-full object-cover transition-all duration-300", isLoaded ? "blur-0" : "blur-sm")}
        />
      </motion.div>
    </motion.div>
  )
}
