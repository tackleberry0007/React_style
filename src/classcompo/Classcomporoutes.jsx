
import Classcompomenu from './Classcompomenu.jsx'
import  { Component ,Link} from 'react';

class Classcomporoutes extends Component {
   render() {
      return (
         <>
       <Routes>
         <Route path='/' element={<Classcompomenu />}>

         </Route>
       </Routes>

         </>
      );
   }
}

export default Classcomporoutes;