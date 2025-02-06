import { useContext, useEffect, useState } from 'react';
import HomeAirPlane from '../../assets/HomeAirPlane.png'
import HomeFlights from '../Flights/HomeFlights';
import './Home.scss';
import { UserContext } from '../../context/UserContext';
import { Button, TextField } from '@mui/material';
import { User } from '../../models/User';
import Decimal from 'decimal.js';

const Home: React.FC = () =>  {

  // TODO: this context is not working, is not updating the user
  // const { user, setUser } = useContext(UserContext);
  const [ user, setUser ] = useState<User>(); 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("name", name);
    console.log("email", email);
    const newUser: User = {
      name,
      email,
      balance: new Decimal(0),
    };
    setUser(newUser);
  };

  useEffect(() => {
    // setUser(user);
    console.log('user: ', user);
  }, [user, setUser]);



  return (
    <>
    {user ?  (

              <div className='home-container'>
                <div className="airplane">
                  <img src={HomeAirPlane} alt='airplane' /> 
                  <h1 className='title'>Book Flights</h1>
                </div>

                <div className='fligths-container'>
                  <HomeFlights/>
                </div>
              </div>
            )
          : (
              <div className='home-no-user-container'>
                <h1 className='no-user-welcome-title'>Welcome to Book Flights</h1> 
                <h2 className='no-user-welcome-subtitle'>Please Sign up</h2> 
                <form className="sign-up-form" onSubmit={handleSubmit}>
                  <TextField
                    className='user-input'
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                  />
                  <TextField
                    className='user-input'
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                  />
                  <Button className="sign-up-button" type="submit" variant="contained" color="primary">
                    Sign Up
                  </Button>
                </form>
              </div>
            )
      }

  </>
  )

}
export default Home