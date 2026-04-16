"use client";

import React, { createContext, useContext, useState } from 'react';
import ContactModal from '@/components/ui/contact-modal';

interface ContactModalContextType {
  openModal: (city?: string) => void;
  closeModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [targetCity, setTargetCity] = useState("");

  const openModal = (city = "") => {
    setTargetCity(city);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <ContactModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <ContactModal 
        isOpen={isOpen} 
        onClose={closeModal} 
        city={targetCity} 
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
