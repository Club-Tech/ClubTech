import PageTemplate from "../composantes/PageTemplate";
import RESSOURCES from "../static/text";

export function Erreur404Page() {
  return <PageTemplate titre={RESSOURCES.erreur404.titre}></PageTemplate>;
}

export default Erreur404Page;
