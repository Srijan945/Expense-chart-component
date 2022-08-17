import '../css/App.css';
import MyBalance from './MyBalance';
import Spending from './Spending';
import Footer from './Footer';
function App() {
  return (
    <main className="App">
        <MyBalance />
        <Spending />
        <Footer />
    </main>
  );
}

export default App;
