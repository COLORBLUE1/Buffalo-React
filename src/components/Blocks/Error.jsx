import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



export const Error = () => {
    const navigate = useNavigate();

    useEffect(() => {
      const timer = setTimeout(() => {
        navigate('/');
      }, 1000); // Redirige después de 1 segundo
  
      return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta
    }, [navigate]);
  
    return (
      <div className="not-found-page">
        <div className="message">
          <h1>Esa ruta no existe</h1>
          <img src="/path-to-your-animated-character.gif" alt="Character" className="animated-character" />
        </div>
      </div>
    );
  };
  