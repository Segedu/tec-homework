import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import Mentoring from './pages/Mentoring';
import Testimonials from './pages/Testimonials';
import Events from './pages/Events';
import { BrowserRouter , Switch, Route, Link} from 'react-router-dom';

function App (){

   return (
     <BrowserRouter>
       <div className="App">
           <Link to='/'>Home</Link> <span> | </span>
           <Link to='/About'>About</Link><span> | </span>
           <Link to='/Contact'> Contact </Link> <span> | </span>
           <Link to='/Courses'>Courses</Link> <span> | </span>
           <Link to='/Mentoring'>Mentoring</Link> <span> | </span>
           <Link to ='/Testimonials'>Testimonials</Link><span> | </span>
           <Link to ='/Events'>Events</Link>
           <hr />
         <Switch>
           <Route  exact path='/' component={Home}/>
           <Route exact path='/About' component={About}/>
           <Route exact path ='/Contact' component={Contact} />
           <Route exact path ='/Courses' component={Courses}/>
           <Route exact path = '/Mentoring' component={Mentoring}/>
           <Route exact path ='/Testimonials' component={Testimonials}/>
           <Route exact path='/Events' component={Events}/>
         </Switch>
       </div>
     </BrowserRouter>);}
export default App;