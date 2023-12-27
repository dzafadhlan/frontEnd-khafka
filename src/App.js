import './App.css';
import { BrowserRouter as Router, Routes,  Route  } from 'react-router-dom';
import EditData from './component/edit';
import { ListData } from './component/listData';
import { AddData } from './component/addData';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/"element={<ListData/>}/>
      <Route path="/add"element={<AddData/>}/>
      <Route path="/edit/:id"element={<EditData/>}/>
    </Routes>
  </Router>
  );
}

export default App;
