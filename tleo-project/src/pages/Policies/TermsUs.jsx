import React from 'react';
import Header from "../../components/Header";
import Footer from '../../components/Footer';

const TermsUs = () => {
    return (
        <div>
            <Header /> 
            <div style={{ padding: '50px' }}>
          <h1>Términos de uso</h1>
          <p>Última actualización: 13 de Diciembre de 2024</p>

      <h2>1. Aceptación de los Términos</h2>
      <p>
        Al acceder o utilizar este sitio web, usted acepta estar sujeto a estos Términos de Uso, que constituyen un acuerdo legal entre usted y [Nombre de tu empresa]. Si no está de acuerdo con estos términos, no utilice el sitio web.
      </p>

      <h2>2. Uso del Sitio</h2>
      <p>
        Usted se compromete a utilizar el sitio web solo para fines legales y de acuerdo con las leyes locales e internacionales aplicables. No se permite el uso del sitio para actividades ilegales o no autorizadas.
      </p>

      <h2>3. Propiedad Intelectual</h2>
      <p>
        Todo el contenido disponible en este sitio, incluyendo texto, imágenes, logotipos, gráficos, videos, software y otros materiales, está protegido por derechos de propiedad intelectual. No se permite la reproducción, distribución ni modificación de este contenido sin el permiso previo y por escrito de [Nombre de tu empresa].
      </p>

      <h2>4. Responsabilidad</h2>
      <p>
      TLeo no se hace responsable de cualquier daño directo, indirecto o incidental derivado del uso o la imposibilidad de usar el sitio. El sitio se proporciona "tal cual" y sin garantías de ningún tipo.
      </p>

      <h2>5. Enlaces a Terceros</h2>
      <p>
        Este sitio puede contener enlaces a sitios web de terceros. TLeo no es responsable del contenido ni de las prácticas de privacidad de esos sitios. Se recomienda leer los términos y políticas de privacidad de esos sitios.
      </p>

      <h2>6. Modificaciones a los Términos</h2>
      <p>
        TLeo se reserva el derecho de modificar estos Términos de Uso en cualquier momento. Cualquier cambio se publicará en esta página y entrará en vigor inmediatamente después de su publicación.
      </p>

      <h2>7. Ley Aplicable</h2>
      <p>
        Estos Términos de Uso se regirán e interpretarán de acuerdo con las leyes de [país], sin tener en cuenta sus principios de conflicto de leyes. Cualquier disputa relacionada con estos Términos será resuelta exclusivamente en los tribunales de [localidad].
      </p>

      <h2>8. Contacto</h2>
      <p>
        Si tiene alguna pregunta sobre estos Términos de Uso, por favor contáctenos a través de [correo electrónico de contacto].
      </p>
      </div>
      <Footer /> 
        </div>
      );
  };
  
  export default TermsUs;