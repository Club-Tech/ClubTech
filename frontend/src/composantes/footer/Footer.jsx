import { Link } from "react-router";
import RESSOURCES from "../../static/text";
import PATH from "../../static/paths";

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full text-stone-900">
      <div className="py-4 text-center">
        © 2025 Copyright:
        <Link to={PATH.acceuil}> {RESSOURCES.clubtech}</Link>
      </div>
    </footer>
  );
}

export default Footer;
