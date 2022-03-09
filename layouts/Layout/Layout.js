import { Navbar, Footer } from '../../components';

export default function Layout({ children }) {
    return (
        <div>
            <Navbar />
            <div>{children}</div>
            <Footer />
        </div>
    );
}
