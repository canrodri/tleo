import Footer from "../../components/Footer";
import Header from "../../components/Header";

function AboutUsPage({ className = "" }) {
  return (
    <div>
      <Header />
      <div
        className={`container-md pt-5 pr-4 pb-4 pl-5 border rounded bg-light shadow ${className}`}
      >
        <h1 className="text-center">Sobre Nosotros</h1>
        <p className="mt-5">
          En Tleo, somos amantes de las palabras, exploradores de mundos
          imaginarios y acumuladores compulsivos de libros. Nuestro propósito es
          sencillo: crear el rincón perfecto donde lectores y libros encuentren
          su destino.
        </p>
        <h2 className="text-center">Nuestro Equipo</h2>
        <p className="py-3">
          Somos un grupo diverso de lectores empedernidos, programadores
          creativos y obsesivos del diseño. Aquí hay un vistazo rápido:
        </p>
        <ul className="list-unstyled">
          <li>
            <p>
              <strong>El Organizador de Estanterías Digitales:</strong> Siempre
              buscando la forma perfecta de clasificar los libros.
            </p>
          </li>
          <li>
            <p>
              <strong>El Cazador de Novedades Literarias:</strong> Conoce todos
              los lanzamientos antes de que los autores terminen de escribirlos.
            </p>
          </li>
          <li>
            <p>
              <strong>El Bibliotecario Tecnológico:</strong> Especialista en
              construir una web tan mágica como las historias que encontrarás
              aquí.
            </p>
          </li>
        </ul>
        <h2 className="text-center mt-5">¿Por Qué Tleo?</h2>
        <p className="mt-5">
          Porque aquí, cada historia cuenta. Desde los clásicos que nos han
          marcado hasta las joyas literarias recién llegadas, en Tleo estamos
          convencidos de que el siguiente libro que busques te cambiará la vida.
          ¿Listo para sumergirte en una nueva aventura literaria?
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUsPage;
