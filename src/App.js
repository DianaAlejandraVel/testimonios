import logo from './logo.svg';
import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>TESTIMONIOS "LOS LLAMADOS AL SOFTWARE"</h1>
      
      <Testimonio
    nombre='Dante Osorio Giraldo'
    pais='Rusia'
    imagen='dante'
    cargo='Administrador de Sistemas'
    empresa='Multinacional de Rusia'
    testimonio='Bueno no puedo hablar solo de software ya que yo soy muy todero en Sistemas y he trabajado practicamente en todas las áreas, pero a nivel general esta carrera o profesión es una de las que jamás va a detenerse por lo que nunca se puede parar de estudiarla y no enfocarse únicamente en una sola cosa, dejé la Ingeniería de sistemas por esta otra carrera aprovechando el rango de titulación y ha sido la mejor decisión, puedo trabajar con cualquier tipo de tecnología ya sea en Hardware o Software y realizar la carrera en cualquier país que tenga tecnología en su sociedad.' />
    </div>
    <Testimonio
    nombre='Diana Alejandra Vélez Londoño'
    pais='Italia'
    imagen='di'
    cargo='Fundamentos en Programación y Desarrollo de Software'
    empresa='Exaltech La Nostra Storia'
    testimonio='Siempre surgió otro tipo de contenido en mi;  Que la pasión por la tecnología y el software. Nunca veía mi afición por conocer el rol del mundo de las tecnologías y las comunicaciones, hasta que de la nada se me abrió la mente para aprender, re-descubrir un sin fin de lenguajes de programación, herramientas, códigos,  técnicas, atajos. Muchas horas frente a otra maquina interpretando lo que juntas visualizábamos en el proceso de esa transformación.  Me encanta como puedo crear, solucionar problemas, adaptar esos mismos cambios  y plasmarlos de forma innovadora y creativa.' />
      <Testimonio
      nombre='Jessica Andrea Lopez Obando'
      pais='Noruega'
      imagen='jessica'
      cargo='Desarrolladora FrontEnd'
      empresa='Amazon'
      testimonio='Amo el mundo del desarrollo y la tecnología porque siempre hay algo nuevo que aprender y descubrir, e incluso con ello es posible darle vida a las ideas. Cada día hay nuevas herramientas, lenguajes de programación y frameworks que aparecen y es emocionante poder estar al tanto de todas estas novedades y ver cómo se pueden aplicar para resolver problemas de manera más eficiente. Además, me encanta poder usar mis conocimientos como ingeniera electrónica para crear soluciones tecnológicas innovadoras y útiles. La programación de robots en la universidad fue el punto de partida para mi interés en el desarrollo y la tecnología, y desde entonces he seguido explorando y aprendiendo más sobre esta fascinante área.' />
      <Testimonio 
      nombre='Carlos Armando Estrada Torres'
      pais='Estados Unidos'
      imagen='carlos'
      cargo='Automatizador QA'
      empresa='Blackfactor'
      testimonio='Amo el software por que se ajusta a lo que yo represento como persona, me gustan los retos, me encanta el encontrar formas para resolver problemas, acertijos, implementar cosas nuevas por mi cuenta, crear métodos y mecanismos para resolver alguna dificultad que se tenga en un proyecto, eso me encanta y me apasiona, poder ser capaz y apto de cubrir cualquier necesidad que se presente, actualmente estoy como Automatizador de QA y me encanta poder encontrar problemas que se presentan en sistemas mediante un script que ejecuta cierto tipo de pruebas para poder cumplir con las necesidades del cliente' />
    </div>

  );
}

export default App;
