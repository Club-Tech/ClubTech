import { Route, Routes } from "react-router";
import PATH from "./static/paths";
import HomePage from "./pages/HomePage";
import AdhesionPage from "./pages/AdhesionPage";
import BlogTechPage from "./pages/BlogTechPage";
import ContactPage from "./pages/ContactPage";
import EquipePage from "./pages/EquipePage";
import EvenementPage from "./pages/EvenementsPage";
import PartenariatsPage from "./pages/PartenariatsPage";
import ProjetsPage from "./pages/ProjetsPage";
import Erreur404Page from "./pages/Erreur404Page";

export function RouteList() {
  return (
    <Routes>
      <Route path={PATH.acceuil} element={<HomePage />} />
      <Route path={PATH.adhesion} element={<AdhesionPage />} />
      <Route path={PATH.blogtech} element={<BlogTechPage />} />
      <Route path={PATH.contact} element={<ContactPage />} />
      <Route path={PATH.equipe} element={<EquipePage />} />
      <Route path={PATH.evenement} element={<EvenementPage />} />
      <Route path={PATH.partenariats} element={<PartenariatsPage />} />
      <Route path={PATH.projets} element={<ProjetsPage />} />

      <Route path={PATH.pageIntrouvable} element={<Erreur404Page />} />
    </Routes>
  );
}

export default RouteList;
