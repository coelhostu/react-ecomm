export {default as Error} from './Error';
export {default as Home} from './Home';
export {default as Login} from './Login';
export {default as Product} from './Product';
export {default as Register} from './Register';

//i react-router-dom, o BrowserRouter é o componente que vai encapsular toda a aplicação
//npm run dev para rodar o servidor
//o Routes é o componente que vai conter todas as rotas da aplicação
//o Route é o componente que vai definir uma rota
//o path é o caminho da rota
//Instalar o vite é mais rápido que o create-react-app, para instalar o vite, basta digitar npm init vite@latest
//o element é o componente que vai ser renderizado quando a rota for acessada
//o exact vai dizer que a rota tem que ser exatamente igual ao path
//o switch vai fazer com que apenas uma rota seja renderizada por vez
//o Link é o componente que vai fazer a navegação entre as rotas
//o to é o caminho para onde o Link vai navegar
//o useHistory é o hook que vai dar acesso ao histórico de navegação
//o push é o método que vai fazer a navegação programática
//o useLocation é o hook que vai dar acesso a localização da aplicação