import HomeAirPlane from '../../assets/HomeAirPlane.png'
import Flights from '../Flights/Flights';
import './Home.css';

const Home: React.FC = () => 
<div className='container'>
  <div className="airplane">
    <img src={HomeAirPlane} alt='airplane' /> 
    <h1 className='title'>Book Flights</h1>
  </div>

  <div className='fligths-container'>
    <Flights />
  </div>
</div>

export default Home