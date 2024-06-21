import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

interface WhatsAppSenderProps {
  phoneNumber: string
  message: string
}

const WhatsAppSender: React.FC<WhatsAppSenderProps> = ({ phoneNumber, message }) => {
  const handleSendMessage = () => {
    const formattedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${formattedMessage}`
    return whatsappUrl
  }

  return (
    <a href={handleSendMessage()} onClick={handleSendMessage}>
      <div className="socialIcon">
        <FaWhatsapp size={50} />
      </div>
    </a>
  )
}

export default WhatsAppSender
