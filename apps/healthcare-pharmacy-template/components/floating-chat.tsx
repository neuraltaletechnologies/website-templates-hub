"use client"

import { MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export function FloatingChat() {
  return (
    <motion.a
      href="https://wa.me/15551234567"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </motion.a>
  )
}
