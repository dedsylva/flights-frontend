import HomeAirPlane from '../../assets/HomeAirPlane.png'
import './Home.css';

const Home: React.FC = () => 
<div className='container'>
  <h1 className='title'>Book Flights</h1>
  <div className="airplane">
    <img src={HomeAirPlane} alt='airplane' /> 
  </div>
</div>



export default Home