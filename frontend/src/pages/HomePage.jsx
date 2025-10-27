import PageTemplate from "../composantes/PageTemplate";
import RESSOURCES from "../static/text";

export function HomePage() {
  return <PageTemplate titre={RESSOURCES.accueil.titre}></PageTemplate>;
}

export default HomePage;
