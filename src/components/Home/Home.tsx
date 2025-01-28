import HomeAirPlane from '../../assets/HomeAirPlane.png'
import HomeFlights from '../Flights/HomeFlights';
import './Home.scss';

const Home: React.FC = () => 
<div className='home-container'>
  <div className="airplane">
    <img src={HomeAirPlane} alt='airplane' /> 
    <h1 className='title'>Book Flights</h1>
  </div>

  <div className='fligths-container'>
    <HomeFlights/>
  </div>
</div>

export default Home