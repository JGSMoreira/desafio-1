import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import { faHeart} from '@fortawesome/free-regular-svg-icons';

function noticia(postDate, postName, smallDesc){
  return (
    <div class="cardNoticia">
        <div class="datacoracao">
          <a class="datapost">{postDate}</a>
          <FontAwesomeIcon class="coracao" icon={faHeart} />
        </div>
        <h1 class="nomepost">{postName}</h1>
        <p class="descpost">{smallDesc}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div id="topo">
        <div class="nav">
          <a class="tituloeblog">Codelândia</a>
          <a class="tituloeblog">blog</a>
        </div>
        <form>
          <FontAwesomeIcon class="iconeBusca" icon={faSearch} />
          <input class="barraBusca" type="text" name="buscar" placeholder="Pesquisar no blog"></input>
        </form>
      </div>
      <div id="corpo">
        {noticia('02 de jul, 2021', 'Agora é oficial: o Windows 11 está vindo', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet dignissim magna. Pellentesque pulvinar, nulla sed sagittis posuere, augue ligula interdum arcu, id mattis orci tortor sit amet ipsum.')}
        {noticia('02 de jul, 2021', 'Tim Berners-Lee vai leiloar código-fonte da web', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse turpis nisi, luctus sit amet vestibulum aliquam, hendrerit facilisis nisi. Praesent commodo scelerisque massa sed porta. Quisque fermentum tellus at lacus tincidunt, vel tempus elit faucibus. Praesent iaculis molestie lorem, vitae scelerisque neque condimentum sit amet')}
        {noticia('02 de jul, 2021', 'Tem Firefox novo no pedaço e você vai querer migrar', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse turpis nisi, luctus sit amet vestibulum aliquam, hendrerit facilisis nisi.')}
        {noticia('02 de jul, 2021', 'John McAfee, criador do antivírus AcAfee, morre', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse turpis nisi, luctus sit amet vestibulum aliquam, hendrerit facilisis nisi. Praesent commodo scelerisque massa sed porta. Quisque fermentum tellus at lacus tincidunt, vel tempus elit faucibus. Praesent iaculis molestie lorem, vitae scelerisque neque condimentum sit amet. Phasellus non lectus diam. Sed mattis lorem ac erat lacinia consequat. Vivamus placerat sem et nibh viverra, vitae interdum massa varius.')}
      </div>
        
    </div>
  );
}

export default App;
