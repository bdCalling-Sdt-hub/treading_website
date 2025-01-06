import React from "react";
import { FaFacebook, FaInstagram, FaPhone } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { useUserData } from "../../../ContextProvider/UserDataProvider";

const Footer = () => {
  const { language } = useUserData();

  return (
    <footer className="p-6 bg-[#3475F1] text-white mt-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3">
          <div className="flex flex-col space-y-4">
            <Link to={`/about-us`} className="font-medium">
              {language === "eng" ? "About Us" : "Sobre Nosotros"}
            </Link>
            <div className="flex flex-col space-y-2 text-sm ">
              <Link to={`/facts`}>
                {language === "eng" ? "Facts" : "Hechos"}
              </Link>
              <Link to={`/help-center`}>
                {language === "eng" ? "Help Center" : "Centro de Ayuda"}
              </Link>
              <Link to={`/sponsor-ship`}>
                {language === "eng" ? "About us" : "Sobre Nosotros"}
              </Link>
              <Link to={`/rules-regulation`}>
                {language === "eng"
                  ? "Rules & Regulation"
                  : "Reglas y Regulaciones"}
              </Link>
              <Link to={`/careers-opportunities`}>
                {language === "eng"
                  ? "Careers + Job Opportunities"
                  : "Carreras + Oportunidades Laborales"}
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">
              {language === "eng" ? "Contact Info" : "Información de Contacto"}
            </h2>
            <div className="flex flex-col space-y-2 text-sm ">
              <Link
                rel="noopener noreferrer"
                className="flex justify-start items-center gap-2"
                href="#"
              >
                <FaPhone className="rotate-90" />
                <div>
                  <p>+111 125 865-587</p>
                  <p>+111 125 865-587</p>
                </div>
              </Link>
              <Link
                rel="noopener noreferrer"
                className="flex justify-start items-center gap-2"
                href="#"
              >
                <MdEmail />
                <div>
                  <p>lorem@gmail.com</p>
                  <p>lorem@gmail.com</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">
              {language === "eng" ? "Like Us" : "Síguenos"}
            </h2>
            <div className="flex flex-col space-y-2 text-sm ">
              <Link
                rel="noopener noreferrer"
                className="flex justify-start items-center gap-2"
                href="#"
              >
                <FaFacebook />
                {language === "eng" ? "Facebook" : "Facebook"}
              </Link>
              <Link
                rel="noopener noreferrer"
                className="flex justify-start items-center gap-2"
                href="#"
              >
                <FaXTwitter />
                {language === "eng" ? "Twitter" : "Twitter"}
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-[2px] bg-white mt-6"></div>
        <div className="flex items-center justify-between pt-6 text-sm">
          <span>
            {language === "eng"
              ? "© Copyright 1986. All Rights Reserved."
              : "© Copyright 1986. Todos los Derechos Reservados."}
          </span>
          <span className="flex justify-end items-center gap-3">
            <FaFacebook />
            <FaXTwitter /> <FaInstagram />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
