import Header from './Header/Header';
import Footer from './Footer/Footer';
function Homepage({ children }) {
  return (
    <div>
      <Header />
      {children}

      <Footer />
    </div>
  );
}

export default Homepage;
