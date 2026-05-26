"use client";

import React from 'react';
import { useContactModal } from '@/context/contact-modal-context';

interface LeadButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  city?: string;
}

export default function LeadButton({ children, className, city = "", ...props }: LeadButtonProps) {
  const { openModal } = useContactModal();

  return (
    <button 
      onClick={(e) => {
        openModal(city);
        if (props.onClick) props.onClick(e);
      }}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
}
