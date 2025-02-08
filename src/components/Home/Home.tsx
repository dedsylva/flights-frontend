import { useContext, useEffect, useState } from 'react';
import HomeAirPlane from '../../assets/HomeAirPlane.png'
import SignUpAirPlane from '../../assets/AirplaneSignUp.png'
import HomeFlights from '../Flights/HomeFlights';
import './Home.scss';
import { Button, InputAdornment, TextField } from '@mui/material';
import { User } from '../../models/User';
import Decimal from 'decimal.js';
import { IoPersonSharp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { UserContext } from '../../context/UserContext';

const Home: React.FC = () =>  {

  const { user, setUser } = useContext(UserContext);
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
              <div className="sign-up-airplane">
                <img src={SignUpAirPlane} alt='sign-up-airplane' /> 
              </div>


              <div className='home-no-user-form-container'>
                <h1 className='no-user-welcome-title'>Welcome to Book Flights</h1> 
                <h2 className='no-user-welcome-subtitle'>Please Sign up</h2> 
                <form className="sign-up-form" onSubmit={handleSubmit}>
                  <TextField
                    className='user-input'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <HiOutlineMail color="white" size={20} />
                        </InputAdornment>
                      ),
                    }}
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                  />
                  <TextField
                    className='user-input'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <IoPersonSharp color='white'/>
                        </InputAdornment>
                      )
                    }}
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                  />
                  <Button className="sign-up-button" type="submit" variant="contained" >
                    Sign Up
                  </Button>
                </form>
              </div>
            </div>
            )
      }

  </>
  )

}
export default Home