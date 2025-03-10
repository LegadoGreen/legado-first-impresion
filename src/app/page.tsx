"use client";
import React, { useState, useEffect } from 'react';

// Manejo de eventos táctiles para swipe
type TouchStartEvent = React.TouchEvent<HTMLDivElement>;

const LegadoPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Legado",
      subtitle: "La Misión que Cambia Tu Vida y el Presente del Planeta",
      content: "Un movimiento global que busca unir al 1% de la población mundial para transformar el futuro de nuestro hogar común",
      backgroundImage: "url('background1.jpg')"
    },
    {
      id: 2,
      title: "El Desafío Que Enfrentamos",
      content: (
        <>
          <p>Nuestro planeta alberga 53 regiones extraordinarias donde la naturaleza florece en toda su magnificencia. Sin embargo, hoy enfrentamos una crisis sin precedentes.</p>
          <p className="highlight">&ldquo;El planeta puede sobrevivir sin la humanidad, pero la humanidad no puede vivir sin un planeta saludable.&rdquo;</p>
          <p>Cada minuto sin actuar nos aleja de un futuro sostenible, poniendo en peligro nuestra vida y la de generaciones por venir.</p>
        </>
      ),
      backgroundImage: "url('background2.jpg')"
    },
    {
      id: 3,
      title: "El Despertar",
      content: (
        <>
          <p>Sofia observaba por la ventana de su apartamento urbano. Las luces de la ciudad ocultaban las estrellas que sabía estaban ahí, en algún lugar del firmamento.</p>
          <p>Se preguntaba a menudo: <span className="highlight">&ldquo;¿Y si pudiera hacer algo realmente significativo?&rdquo;</span></p>
          <p>Una mañana cualquiera, un video que mostraba paisajes impresionantes capturó su atención y despertó algo dentro de ella...</p>
        </>
      ),
      backgroundImage: "url('background3.jpg')"
    },
    {
      id: 4,
      title: "La Llamada",
      content: (
        <>
          <p>Sofia descubrió <span className="highlight">Legado</span>, un movimiento con un propósito claro: transformar el futuro del planeta protegiendo sus tesoros naturales.</p>
          <div className="quote">¿Y si el futuro del planeta dependiera de ti?</div>
          <p>Lo que más le llamó la atención fue el enfoque transparente: cada acción sería medible y verificable gracias a la tecnología blockchain.</p>
        </>
      ),
      backgroundImage: "url('background4.jpg')"
    },
    {
      id: 5,
      title: "La Misión",
      content: (
        <>
          <p>Durante la próxima década, avanzaremos juntos con determinación:</p>
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">5</div>
              <div className="stat-label">Regiones por año</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10</div>
              <div className="stat-label">Años de acción</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">53</div>
              <div className="stat-label">Regiones a proteger</div>
            </div>
          </div>
          <p>Restauraremos ecosistemas, empoderaremos comunidades locales y crearemos soluciones concretas basadas en la naturaleza.</p>
        </>
      ),
      backgroundImage: "url('background5.jpg')"
    },
    {
      id: 6,
      title: "La Decisión",
      content: (
        <>
          <p>Sofia tomó una decisión que cambiaría su vida: se unió a Legado. Recibió su LegadoPass, una llave digital para experiencias transformadoras.</p>
          <p>Su primera misión la llevó a un bosque tropical amenazado por la deforestación. Allí, junto con otros participantes y comunidades locales, Sofia plantó árboles nativos y aprendió técnicas ancestrales de cultivo sostenible.</p>
        </>
      ),
      backgroundImage: "url('background6.jpg')"
    },
    {
      id: 7,
      title: "La Transformación Personal",
      content: (
        <>
          <p>Lo que Sofia no esperaba era la transformación personal. Cada día en el bosque la conectaba más con sus valores profundos, con un sentido de propósito que había estado buscando durante años.</p>
          <p>A través del <span className="highlight">LegadoPass</span>, descubrió cómo alinear su vida con valores profundos, alcanzando una felicidad auténtica y un propósito claro mientras ayudaba al planeta.</p>
        </>
      ),
      backgroundImage: "url('background7.jpg')"
    },
    {
      id: 8,
      title: "El Impacto Colectivo",
      content: (
        <>
          <p>A medida que más personas se unían al movimiento, el impacto se multiplicaba. Sofia formaba parte ahora de una comunidad global de &ldquo;hacedores valientes&rdquo;.</p>
          <p>Gracias a la tecnología blockchain, Sofia podía ver exactamente cómo sus acciones contribuían al objetivo mayor: el crecimiento de los árboles plantados, el aumento de la biodiversidad y el mejoramiento de la calidad de vida de las comunidades.</p>
        </>
      ),
      backgroundImage: "url('background8.jpg')"
    },
    {
      id: 9,
      title: "El Legado",
      content: (
        <>
          <p>Diez años después, Sofia miraba las fotografías de todas las regiones en las que había participado. Cada imagen contaba una historia de transformación.</p>
          <div className="quote">Yo fui parte del cambio. Este es mi legado.</div>
          <p>El cambio más profundo había ocurrido dentro de ella. Había encontrado un propósito, una comunidad y una forma de vida alineada con sus valores más profundos.</p>
        </>
      ),
      backgroundImage: "url('background9.jpg')"
    },
    {
      id: 10,
      title: "Tu Llamada",
      content: (
        <>
          <p>El planeta susurra tu nombre cada día, invitándote a ser parte de su renovación.</p>
          <p>Esta misión no puede esperar. Necesitamos soñadores decididos y hacedores valientes, personas que, al mirar atrás en 10 años, puedan decir con orgullo:</p>
          <div className="quote">Este es mi legado.</div>
          <p>La historia está en tus manos. La aventura ya comenzó.</p>
          <button className="cta-button" onClick={() => window.open('https://legado.green/', '_blank')}>Únete a Legado</button>
        </>
      ),
      backgroundImage: "url('background10.jpg')"
    }
  ];

  useEffect(() => {
    // Event listener para navegación con teclado
    const handleKeyDown = (e: { key: string; }) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide]);

  // Calcular progreso
  const progress = ((currentSlide + 1) / slides.length) * 100;

  // Navegar a la diapositiva anterior
  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // Navegar a la siguiente diapositiva
  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handleTouchStart = (e: TouchStartEvent): void => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: TouchStartEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe izquierdo
      nextSlide();
    }

    if (touchEnd - touchStart > 50) {
      // Swipe derecho
      prevSlide();
    }
  };

  return (
    <div 
      className="presentation"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: slide.backgroundImage }}
        >
          <div className="image-overlay"></div>
          <div className="slide-content">
            {index === 0 ? (
              <>
                <h1>{slide.title}</h1>
                <h2>{slide.subtitle}</h2>
              </>
            ) : (
              <h2>{slide.title}</h2>
            )}
            {typeof slide.content === 'string' ? <p>{slide.content}</p> : slide.content}
          </div>
        </div>
      ))}

      <div className="btn-container">
        <button className="nav-btn prev-btn" onClick={prevSlide}>Anterior</button>
        <button className="nav-btn next-btn" onClick={nextSlide}>Siguiente</button>
      </div>

      <div className="slide-number">{currentSlide + 1}/{slides.length}</div>

      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default LegadoPresentation;