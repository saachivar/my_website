import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Sidebar from './Components/Sidebar';
import MainContent from './Components/MainContent';

function App() {
  return (
   <div className="App">
      <link href='https://fonts.googleapis.com/css?family=Koh Santepheap' rel='stylesheet'></link>
      <Sidebar />
      <MainContent />
    </div> 
  );
}

export default App;
