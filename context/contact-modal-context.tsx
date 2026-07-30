"use client";

import React, { createContext, useContext, useState } from 'react';
import ContactModal from '@/components/ui/contact-modal';
import WhatsAppModal from '@/components/ui/whatsapp-modal';
import WhatsAppFloating from '@/components/ui/whatsapp-floating';

interface ContactModalContextType {
  openModal: (serviceName?: string) => void;
  closeModal: () => void;
  openWhatsApp: () => void;
  closeWhatsApp: () => void;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [targetService, setTargetService] = useState("");

  const openModal = (serviceName = "") => {
    setTargetService(serviceName);
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
      {children}
      <ContactModal 
        isOpen={isOpen} 
        onClose={closeModal} 
        defaultService={targetService} 
      />
      <WhatsAppModal 
        isOpen={isWhatsAppOpen}
        onClose={closeWhatsApp}
      />
      <WhatsAppFloating onClick={openWhatsApp} />
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
