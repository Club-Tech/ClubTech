import Header from "./header/Header";
import Footer from "./footer/Footer";

function PageTemplate({ children, titre }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#0B0315] font-sans text-gray-100">
      <Header />
      <main className="w-full grow pb-8">
        {titre && (
          <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
            <h1 className="mb-8 text-3xl font-bold tracking-tight text-white md:text-4xl">
              {titre}
            </h1>
          </div>
        )}
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default PageTemplate;
