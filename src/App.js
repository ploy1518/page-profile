import './App.css';
import BoxAPMhis from './BoxAPMhis';
import Boxprofile from './Boxprofile';
import Tabbar from './Tabbar';

function App() {
  return (
   
  <>
  <Tabbar/>
  <div className='flex'>
    <Boxprofile/>
    <BoxAPMhis/>
  </div>
  
  </>
  )
}

export default App;
