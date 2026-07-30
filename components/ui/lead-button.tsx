"use client";

import React from 'react';
import { useContactModal } from '@/context/contact-modal-context';

interface LeadButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  service?: string;
  city?: string;
}

export default function LeadButton({ children, className, service = "", city = "", ...props }: LeadButtonProps) {
  const { openModal } = useContactModal();

  return (
    <button 
      onClick={(e) => {
        openModal(service || city);
        if (props.onClick) props.onClick(e);
      }}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
}
