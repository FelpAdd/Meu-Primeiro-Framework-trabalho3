import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css'

export const Menu: React.FC = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <ul className="list-inline">
            <li className="list-inline-item text-white">
                <Link href="/" passHref className="nav-link">Home</Link>
            </li>
            <li className="list-inline-item text-white">
                <Link href="/LivroLista" passHref className="nav-link">Catálogo</Link>
            </li>
            <li className="list-inline-item text-white">
                <Link href="/LivroDados" passHref className="nav-link">Novo</Link>
            </li>
        </ul>
    </nav>
  );
};