import { Menu } from '../componentes/Menu'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

const Home: React.FC = () => {
  return (
    <div className="container w-100 h-100">
      <Head>
        <title>Loja Next</title>

      </Head>

      <Menu/>

      <main><h1>Página inicial</h1>
      
      </main>
    </div>
  );
};

export default Home;