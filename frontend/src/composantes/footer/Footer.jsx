import { Link } from "react-router";
import { PATH } from "../../static/paths";
import { RESSOURCES } from "../../static/text";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full bg-[#1A0B2E] pt-12 text-sm text-gray-300">
      <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col space-y-4 lg:col-span-2">
            <Link to={PATH.acceuil}>
              <img src="./clubtech_logo.jpg" className="h-15 w-15" />
            </Link>
            <div>
              <p className="font-semibold text-white">
                {RESSOURCES.footer.infoReseaux.adresseColonne.label}
              </p>
              <p>{RESSOURCES.footer.infoReseaux.adresseColonne.adresse}</p>
            </div>
            <div>
              <p className="font-semibold text-white">
                {RESSOURCES.footer.infoReseaux.contactColonne.label}
              </p>
              <p>{RESSOURCES.footer.infoReseaux.contactColonne.contactNumber}</p>
              <a
                href={`mailto:${RESSOURCES.footer.infoReseaux.contactColonne.contactEmail}`}
                className="underline hover:text-white"
              >
                {RESSOURCES.footer.infoReseaux.contactColonne.contactEmail}
              </a>
            </div>
            {/* Icônes sociaux */}
            <div className="flex space-x-4 pt-2">
              <Facebook className="h-5 w-5 cursor-pointer hover:text-white" />
              <Instagram className="h-5 w-5 cursor-pointer hover:text-white" />
              <Twitter className="h-5 w-5 cursor-pointer hover:text-white" />
              <Linkedin className="h-5 w-5 cursor-pointer hover:text-white" />
              <Youtube className="h-5 w-5 cursor-pointer hover:text-white" />
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <Link to={PATH.acceuil} className="hover:text-white">
              {RESSOURCES.footer.lienRapide.acceuil}
            </Link>
            <Link to={PATH.projets} className="hover:text-white">
              {RESSOURCES.footer.lienRapide.projet}
            </Link>
            <Link to={PATH.equipe} className="hover:text-white">
              {RESSOURCES.footer.lienRapide.equipe}
            </Link>
            <Link to={PATH.blogtech} className="hover:text-white">
              {RESSOURCES.footer.lienRapide.blogtech}
            </Link>
            <Link to={PATH.contact} className="hover:text-white">
              {RESSOURCES.footer.lienRapide.contact}
            </Link>
          </div>

          <div className="flex flex-col space-y-3">
            <Link to={PATH.partenariats} className="hover:text-white">
              {RESSOURCES.footer.lienRapide.partenariats}
            </Link>
            <Link to={PATH.evenement} className="hover:text-white">
              {RESSOURCES.footer.lienRapide.evenement}
            </Link>
            <Link to={PATH.adhesion} className="hover:text-white">
              {RESSOURCES.footer.lienRapide.adhesion}
            </Link>
            <Link to={PATH.mentionsLegales} className="hover:text-white">
              {RESSOURCES.footer.lienRapide.mentionsLegales}
            </Link>
            <Link to={PATH.politiqueConfidentialite} className="hover:text-white">
              {RESSOURCES.footer.lienRapide.politiqueConfidentialite}
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-purple-800/50 pt-6 md:flex-row">
          <p>{RESSOURCES.footer.lienDeFond.labelCopyright}</p>
          <div className="mt-4 flex space-x-4 md:mt-0">
            <Link to={PATH.politiqueConfidentialite} className="underline hover:text-white">
              {RESSOURCES.footer.lienDeFond.politiqueConfidentialite}
            </Link>
            <Link to={PATH.conditionsGenerales} className="underline hover:text-white">
              {RESSOURCES.footer.lienDeFond.conditionsGenerales}
            </Link>
            <Link to={PATH.parametresCookies} className="underline hover:text-white">
              {RESSOURCES.footer.lienDeFond.parametresCookies}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
