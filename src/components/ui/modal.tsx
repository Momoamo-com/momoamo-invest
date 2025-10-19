/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/lib";
import { AnimatePresence, motion } from "framer-motion";

const Modal = ({
  isOpen,
  onClose,
  title,
  className,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed z-[99999] inset-0 bg-black/50 flex justify-center items-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={cn(
              "bg-gray-green w-screen h-[100dvh] p-6 overflow-y-auto relative flex flex-col gap-10 justify-center px-40",
              className
            )}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <button
              onClick={onClose}
              className="absolute right-10 top-10 text-[#292222] text-3xl"
            >
              ✕
            </button>
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-nichrome font-bold md:text-[64px] text-[58px] uppercase leading-none text-[#292222]">
                {title}
              </h2>
            </div>
            <div className="text-[#292222] text-[1rem] font-nichrome">
              Les sites{" "}
              <a
                href="https://loupsgarous-experiences.co/"
                target="_blank"
                className="link-6"
              >
                https://loupsgarous-experiences.co/
              </a>{" "}
              sont édités par la société Kymono, <br />
              Société par Actions Simplifiée au capital social de 2 980,63
              euros, <br />
              immatriculée au registre du commerce et des sociétés de Paris sous
              le numéro 830 268 207 et dont le siège social est situé au 8 rue
              Danielle Casanova, 75002 Paris.
              <br />‍
              <br />
              Directeur de la publication: Olivier Ramel
              <br />
              Hébergement: Kymono
              <br />
              Numéro SIRET: 830 268 207
              <br />
              Dernière modification: 29/04/2025
              <br />
              <br />
              Les Loups Garous de Thiercelieux® est une marque enregistrée et
              utilisée sous licence accordée par son titulaire ASMODEE GROUP.{" "}
              <br />
              <br />
              Tous droits réservés.
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
