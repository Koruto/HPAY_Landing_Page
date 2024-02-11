import Footer from './Footer';
import Navbar from './Navbar';
import Exchange from './assets/Exchange';

function App() {
  return (
    <div className=" bg-background text-[#FFFFFF]">
      <Navbar />
      <div className="bg-gradient-to-r from-[#FFD79F] to-[#85663E] h-[0.5px]"></div>
      <Exchange />
      <Footer />
    </div>
  );
}

export default App;
