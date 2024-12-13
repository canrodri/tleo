import React from 'react';
import Header from "../../components/Header";
import Footer from '../../components/Footer';

const PrivacyPolicy = () => {
    return (
        <div>
            <Header /> 
            <div style={{ padding: '50px' }}>
          <h1>Política de Privacidad</h1>
          <section>
        <p>En <strong>TLeo</strong>, nos comprometemos a proteger tu privacidad. Esta política de privacidad explica cómo recopilamos, usamos, y protegemos tus datos personales cuando usas nuestro sitio web.</p>
    </section>

    <section>
        <h2>Información que recopilamos</h2>
        <p>Recopilamos varios tipos de información cuando interactúas con nuestro sitio web, incluidos:</p>
        <ul>
            <li><strong>Datos personales:</strong> Nombre, dirección de correo electrónico, número de teléfono y otros datos de contacto.</li>
            <li><strong>Datos de navegación:</strong> Información sobre cómo navegas por nuestro sitio web, incluyendo tu dirección IP, tipo de dispositivo, y páginas visitadas.</li>
            <li><strong>Cookies:</strong> Utilizamos cookies para mejorar tu experiencia de navegación y para analizar el tráfico web.</li>
        </ul>
    </section>

    <section>
        <h2>Uso de la información</h2>
        <p>Utilizamos la información recopilada para los siguientes fines:</p>
        <ul>
            <li>Proporcionar y personalizar nuestros servicios.</li>
            <li>Mejorar el rendimiento y la funcionalidad de nuestro sitio web.</li>
            <li>Enviarte actualizaciones, boletines y promociones si has dado tu consentimiento.</li>
            <li>Responder a tus consultas y ofrecer soporte al cliente.</li>
        </ul>
    </section>

    <section>
        <h2>Protección de tus datos</h2>
        <p>Implementamos medidas de seguridad para proteger tus datos personales contra acceso no autorizado, alteración o destrucción. Sin embargo, ninguna transmisión de datos a través de Internet puede ser completamente segura, por lo que no podemos garantizar una seguridad absoluta.</p>
    </section>

    <section>
        <h2>Compartir tu información</h2>
        <p>No vendemos, alquilamos ni compartimos tus datos personales con terceros sin tu consentimiento, excepto en los siguientes casos:</p>
        <ul>
            <li>Cuando sea necesario para cumplir con una obligación legal.</li>
            <li>Para procesadores de datos que nos ayuden a operar el sitio web y que estén sujetos a acuerdos de confidencialidad.</li>
        </ul>
    </section>

    <section>
        <h2>Derechos sobre tus datos</h2>
        <p>Según las leyes aplicables, tienes derecho a:</p>
        <ul>
            <li>Acceder a la información personal que tenemos sobre ti.</li>
            <li>Solicitar la corrección de cualquier dato incorrecto.</li>
            <li>Eliminar tus datos, en la medida en que la ley lo permita.</li>
            <li>Retirar tu consentimiento para el uso de tus datos en cualquier momento.</li>
        </ul>
    </section>

    <section>
        <h2>Retención de datos</h2>
        <p>Conservamos tus datos personales solo durante el tiempo necesario para cumplir con los fines establecidos en esta política, salvo que se requiera o se permita un período de retención más largo por ley.</p>
    </section>

    <section>
        <h2>Cambios en esta política</h2>
        <p>Podemos actualizar esta política de privacidad de vez en cuando. Te notificaremos sobre cambios importantes publicando una versión actualizada en nuestro sitio web. Te recomendamos que revises esta página periódicamente.</p>
    </section>

    <section>
        <h2>Contacto</h2>
        <p>Si tienes alguna pregunta sobre nuestra política de privacidad o sobre el manejo de tus datos personales, no dudes en contactarnos a través de <a href="mailto:[tu correo electrónico]">[tu correo electrónico]</a>.</p>
    </section>
    </div>
    <Footer /> 
        </div>
      );
  };
  
  export default PrivacyPolicy;