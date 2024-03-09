import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Sidebar from './Components/Sidebar';
import MainContent from './Components/MainContent';

function App() {
  return (
   <div className="App">
      <link href='https://fonts.googleapis.com/css?family=Koh Santepheap' rel='stylesheet'></link>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Helvetica&display=swap" />
      <Sidebar />
      <MainContent />
    </div> 
  );
}

export default App;
