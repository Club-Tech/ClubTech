import Footer from "./footer/Footer";

function PageTemplate({ children, titre }) {
  return (
    <>
      <main className="max-w-full text-stone-900">
        <h1 className="mb-6 font-semibold">{titre}</h1>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default PageTemplate;
