"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

import InvestWaitlistModal from "@/components/modals/InvestWaitlistModal";

type InvestWaitlistModalContextValue = {
  openModal: () => void;
};

const InvestWaitlistModalContext = createContext<InvestWaitlistModalContextValue | null>(null);

export const useInvestWaitlistModal = () => {
  const context = useContext(InvestWaitlistModalContext);
  if (!context) {
    throw new Error("useInvestWaitlistModal must be used within InvestWaitlistModalProvider");
  }
  return context;
};

type InvestWaitlistModalProviderProps = {
  children: ReactNode;
};

const InvestWaitlistModalProvider = ({ children }: InvestWaitlistModalProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo(
    () => ({
      openModal: () => setIsOpen(true),
    }),
    []
  );

  return (
    <InvestWaitlistModalContext.Provider value={value}>
      {children}
      <InvestWaitlistModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </InvestWaitlistModalContext.Provider>
  );
};

export default InvestWaitlistModalProvider;
