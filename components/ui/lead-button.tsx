"use client";

import React from 'react';
import { useContactModal } from '@/context/contact-modal-context';

interface LeadButtonProps {
  children: React.ReactNode;
  className?: string;
  city?: string;
}

export default function LeadButton({ children, className, city = "" }: LeadButtonProps) {
  const { openModal } = useContactModal();

  return (
    <button 
      onClick={() => openModal(city)}
      className={className}
    >
      {children}
    </button>
  );
}
