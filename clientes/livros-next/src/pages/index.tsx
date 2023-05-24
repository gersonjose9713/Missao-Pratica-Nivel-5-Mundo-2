import Head from 'next/head';
import { Menu } from '../../classes/componentes/Menu';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Loja Next</title>
      </Head>
      <Menu />
      <main>
        <h1>Página Inicial</h1>
      </main>
    </div>
  );
};

export default Home;
