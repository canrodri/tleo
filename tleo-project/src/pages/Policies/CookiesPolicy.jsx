import React from 'react';
import Header from "../../components/Header";
import Footer from '../../components/Footer';


const CookiesPolicy = () => {
    return (
        <div>
              <Header /> 
              <div style={{ padding: '50px' }}>
          <h1>Política de Cookies</h1>
          <section>
        <p>En <strong>TLeo</strong>, utilizamos cookies para mejorar la experiencia de usuario, analizar el tráfico y personalizar el contenido y los anuncios. Al continuar navegando en nuestro sitio web, aceptas el uso de cookies de acuerdo con esta política.</p>
    </section>

    <section>
        <h2>¿Qué son las cookies?</h2>
        <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Estos archivos permiten al sitio recordar tus acciones y preferencias durante un periodo de tiempo, facilitando tu navegación.</p>
    </section>

    <section>
        <h2>Tipos de cookies que utilizamos:</h2>
        <ul>
            <li><strong>Cookies necesarias:</strong> Estas cookies son esenciales para que el sitio web funcione correctamente. No se pueden desactivar en nuestros sistemas. Normalmente solo se configuran en respuesta a acciones que realizas, como ajustar la privacidad o iniciar sesión.</li>
            <li><strong>Cookies de rendimiento:</strong> Estas cookies nos ayudan a entender cómo los usuarios interactúan con nuestro sitio web, recopilando información anónima sobre las páginas visitadas, los enlaces seguidos y el tiempo de permanencia en el sitio.</li>
            <li><strong>Cookies de funcionalidad:</strong> Estas cookies permiten que el sitio recuerde las opciones que tomas (como el idioma o la región) para ofrecerte una experiencia más personalizada.</li>
            <li><strong>Cookies de publicidad:</strong> Usamos estas cookies para ofrecerte anuncios que puedan ser relevantes para ti. También nos ayudan a medir la efectividad de nuestras campañas publicitarias.</li>
        </ul>
    </section>

    <section>
        <h2>¿Cómo puedes gestionar las cookies?</h2>
        <p>Puedes configurar tu navegador para que bloquee o te avise cuando se utilicen cookies. Sin embargo, ten en cuenta que deshabilitar las cookies puede afectar la funcionalidad del sitio web y algunas características podrían no estar disponibles.</p>
        <p>Para obtener más información sobre cómo administrar las cookies, consulta la sección de ayuda de tu navegador.</p>
    </section>

    <section>
        <h2>Cambios en nuestra Política de Cookies</h2>
        <p>Podemos actualizar esta política de cookies de vez en cuando. Te recomendamos que revises esta página periódicamente para estar informado sobre cómo utilizamos las cookies.</p>
    </section>

    <section>
        <h2>Contacto</h2>
        <p>Si tienes alguna pregunta sobre nuestra política de cookies, no dudes en contactarnos a través de <a href="mailto:[tu correo electrónico]">[tu correo electrónico]</a>.</p>
    </section>
    </div>
    <Footer /> 
        </div>
      );
  };
  
  export default CookiesPolicy;