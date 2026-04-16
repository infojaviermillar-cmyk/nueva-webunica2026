"use client";

import React, { createContext, useContext, useState } from 'react';
import ContactModal from '@/components/ui/contact-modal';
import WhatsAppModal from '@/components/ui/whatsapp-modal';
import WhatsAppFloating from '@/components/ui/whatsapp-floating';

interface ContactModalContextType {
  openModal: (city?: string) => void;
  closeModal: () => void;
  openWhatsApp: () => void;
  closeWhatsApp: () => void;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [targetCity, setTargetCity] = useState("");

  const openModal = (city = "") => {
    setTargetCity(city);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const openWhatsApp = () => {
    console.log("Opening WhatsApp Modal...");
    setIsWhatsAppOpen(true);
  };
  const closeWhatsApp = () => setIsWhatsAppOpen(false);

  return (
    <ContactModalContext.Provider value={{ openModal, closeModal, openWhatsApp, closeWhatsApp }}>
      <WhatsAppFloating onClick={openWhatsApp} />
      {children}
      <ContactModal 
        isOpen={isOpen} 
        onClose={closeModal} 
        city={targetCity} 
      />
      <WhatsAppModal 
        isOpen={isWhatsAppOpen}
        onClose={closeWhatsApp}
      />
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const context = useContext(ContactModalContext);
  if (context === undefined) {
    throw new Error('useContactModal must be used within a ContactModalProvider');
  }
  return context;
}
