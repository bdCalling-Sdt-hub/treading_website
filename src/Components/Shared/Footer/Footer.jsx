import React from "react";
import { Link } from "react-router-dom";
import { useUserData } from "../../../ContextProvider/UserDataProvider";

const Footer = () => {
  const { language } = useUserData();

  // Footer links with dynamic labels for different languages
  const footerLinks = [
    { path: "/about-us", label: { eng: "About Us", es: "Sobre Nosotros" } },
    { path: "/facts", label: { eng: "Facts", es: "Hechos" } },
    { path: "/help-center", label: { eng: "Help Center", es: "Centro de Ayuda" } },
    { path: "/sponsor-ship", label: { eng: "Sponsorship", es: "Patrocinio" } },
    {
      path: "/rules-regulation",
      label: { eng: "Rules & Regulation", es: "Reglas y Regulaciones" },
    },
  ];

  return (
    <footer className="p-6 bg-[#3475F1] text-white mt-10">
      <div className="container mx-auto">

        <div className="w-full h-[2px] bg-white mt-6"></div>
        <div className="flex items-center justify-between pt-6 text-sm">
          <span>
            {language === "eng"
              ? "© Copyright 2024. All Rights Reserved."
              : "© Copyright 2024. Todos los Derechos Reservados."}
          </span>
          <div className="flex gap-4 gap-y-8 sm:grid-cols-3">
            {/* Dynamic Footer Links */}
            {footerLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="font-medium hover:underline"
              >
                {language === "eng" ? link.label.eng : link.label.es}
              </Link>
            ))}
          </div>
          {/* <div className="flex space-x-4">
            <Link to="/contact-us" className="hover:underline">
              {language === "eng" ? "Contact Us" : "Contáctanos"}
            </Link>
            <Link to="/privacy-policy" className="hover:underline">
              {language === "eng" ? "Privacy Policy" : "Política de Privacidad"}
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
