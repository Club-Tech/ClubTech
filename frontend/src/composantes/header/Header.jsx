import { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import { PATH } from "../../static/paths";
import { RESSOURCES } from "../../static/text";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: RESSOURCES.header.titreNavbar.projet, path: PATH.projets },
    { name: RESSOURCES.header.titreNavbar.equipe, path: PATH.equipe },
    { name: RESSOURCES.header.titreNavbar.partenariats, path: PATH.partenariats },
    { name: RESSOURCES.header.titreNavbar.evenement, path: PATH.evenement },
    { name: RESSOURCES.header.titreNavbar.blogtech, path: PATH.blogtech },
  ];

  return (
    <header className="bg-[#1A0B2E]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="shrink-0">
          <Link to={PATH.acceuil}>
            <img src="./clubtech_logo.jpg" className="h-15 w-15" />
          </Link>
        </div>

        <nav className="items-center space-x-6 md:flex">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className="text-sm font-medium transition-colors hover:text-purple-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center space-x-4 md:flex">
          <Link
            to={PATH.contact}
            className="rounded-md border border-purple-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-800"
          >
            {RESSOURCES.header.titreNavbar.contactButton}
          </Link>
          <Link
            to={PATH.adhesion}
            className="rounded-md bg-linear-to-r from-gray-100 to-gray-300 px-4 py-2 text-sm font-medium text-[#1A0B2E] transition-opacity hover:opacity-90"
          >
            {RESSOURCES.header.titreNavbar.adhesionButton}
          </Link>
        </div>

        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 flex h-screen w-full flex-col bg-[#1A0B2E] px-4 py-6 md:hidden">
          <nav className="flex flex-col space-y-4">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className="text-lg font-medium text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-4 pt-6">
              <Link
                to={PATH.contact}
                className="w-full rounded-md border border-purple-500 py-3 text-center font-medium transition-colors hover:bg-purple-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {RESSOURCES.header.titreNavbar.contactButton}
              </Link>
              <Link
                to={PATH.adhesion}
                className="w-full rounded-md bg-white py-3 text-center font-medium text-[#1A0B2E]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {RESSOURCES.header.titreNavbar.adhesionButton}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
