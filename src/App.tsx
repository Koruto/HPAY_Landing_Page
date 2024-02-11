import Footer from './Footer';
import Navbar from './Navbar';
import Exchange from './Exchange';

function App() {
  return (
    <div className="font-poppins bg-background text-[#FFFFFF]">
      <Navbar />
      <div className="bg-gradient-to-r from-[#FFD79F] to-[#85663E] h-[0.5px]"></div>
      <Exchange />
      <Footer />
    </div>
  );
}

export default App;
