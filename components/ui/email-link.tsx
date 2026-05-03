"use client";

export default function EmailLink({ className }: { className?: string }) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = 'mailto:consultas@webunica.cl';
  };

  return (
    <a href="#contacto" onClick={handleClick} className={className}>
      consultas&#64;webunica.cl
    </a>
  );
}
