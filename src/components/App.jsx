import '../css/App.css';
import MyBalance from './MyBalance';
import Spending from './Spending';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
        <MyBalance />
        <Spending />
        <Footer />
    </div>
  );
}

export default App;
