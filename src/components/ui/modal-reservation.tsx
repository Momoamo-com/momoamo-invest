"use client";
import { cn } from "@/lib/lib";
import { AnimatePresence, motion } from "framer-motion";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { useState, useEffect, useRef, useCallback } from "react";
import { format } from "date-fns";

const ModalReservation = ({
  isOpen,
  onClose,
  className,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
}) => {
  const [date, setDate] = useState<Date>();

  // Reference to the close button for focus management
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle keyboard events
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }

      // Trap focus within modal
      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[
          focusableElements.length - 1
        ] as HTMLElement;

        // If shift+tab and on first element, move to last element
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
        // If tab and on last element, move to first element
        else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    },
    [onClose]
  );

  // Handle body scroll lock when modal is open
  useEffect(() => {
    if (isOpen) {
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden";

      // Focus the close button when modal opens
      setTimeout(() => {
        if (closeButtonRef.current) {
          closeButtonRef.current.focus();
        }
      }, 100);

      // Add event listener for Escape key and focus trap
      document.addEventListener("keydown", handleKeyDown);
    } else {
      // Allow scrolling when modal is closed
      document.body.style.overflow = "";
    }

    // Cleanup function to ensure scroll is restored and event listeners removed
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed z-[99999] inset-0 bg-black/50 flex justify-center items-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="reservation-title"
        >
          <motion.div
            ref={modalRef}
            className={cn(
              "bg-gray-green w-screen h-[100dvh] overflow-y-auto relative flex flex-col gap-10 justify-center px-6 lg:px-40",
              className
            )}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="absolute right-[22px] md:right-10 top-10 text-[#292222] text-3xl focus:outline-none"
              aria-label="Fermer"
              type="button"
            >
              ✕
            </button>
            <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20 h-full py-10 lg:py-20">
              <h2
                id="reservation-title"
                className="font-nichrome font-bold md:text-[64px] text-[58px] uppercase leading-none text-[#292222]"
              >
                Réserver <br /> votre offsite
              </h2>
              <form
                className="flex-1 flex flex-col gap-3 lg:gap-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex flex-col lg:flex-row items-center gap-5">
                  <div className="w-full">
                    <label htmlFor="nom" className="sr-only">
                      Nom
                    </label>
                    <Input id="nom" required placeholder="Nom *" name="nom" />
                  </div>
                  <div className="w-full">
                    <label htmlFor="prenom" className="sr-only">
                      Prénom
                    </label>
                    <Input
                      id="prenom"
                      required
                      placeholder="Prénom *"
                      name="prenom"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <Input
                    id="email"
                    required
                    type="email"
                    placeholder="Mail *"
                    name="email"
                  />
                </div>
                <div>
                  <label htmlFor="entreprise" className="sr-only">
                    Nom de l'entreprise
                  </label>
                  <Input
                    id="entreprise"
                    required
                    placeholder="Nom de l'entreprise *"
                    name="entreprise"
                  />
                </div>
                <div>
                  <label htmlFor="participants" className="sr-only">
                    Nombre de participants
                  </label>
                  <Input
                    id="participants"
                    required
                    type="number"
                    placeholder="Nombre de participants *"
                    name="participants"
                  />
                </div>
                <div>
                  <label id="date-label" className="sr-only">
                    Date de l'événement
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        data-empty={!date}
                        className="data-[empty=true]:text-[#717171] text-base md:text-sm hover:bg-transparent md:data-[empty=true]:text-sm w-full bg-transparent shadow-none border border-black justify-start text-left font-normal transition-none"
                        aria-labelledby="date-label"
                      >
                        {date ? (
                          format(date, "dd/MM/yyyy")
                        ) : (
                          <span>Sélectionnez une date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent align="start" className="w-full p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={{ before: new Date() }}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Autre demande
                  </label>
                  <Textarea
                    id="message"
                    required
                    placeholder="Autre demande"
                    rows={8}
                    maxLength={5000}
                    className="min-h-[190px]"
                    name="message"
                  />
                </div>
                <button
                  type="submit"
                  className="h-12 py-2 hover:!bg-transparent hover:text-black hover:border hover:border-black uppercase text-[#EEE5D7] bg-[#292222] font-bold font-nichrome md:text-[18px] text-[28px] w-full lg:w-fit px-4 flex justify-center items-center gap-2"
                >
                  Envoyer ma demande
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalReservation;
