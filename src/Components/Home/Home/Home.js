import React from 'react';
import Appointment from '../Appointment/Appointment';
import Blogs from '../Blogs/Blogs';
import Contacts from '../Contacts/Contacts';
import Doctors from '../Doctors/Doctors';
import FeatureService from '../FeatureService/FeatureService';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
        
          return (
                    <div style={{width: '100%'}}>
                            <Header></Header>
                            <Services></Services>
                            <FeatureService></FeatureService>
                            <Appointment></Appointment>
                            <Testimonial></Testimonial>
                            <Blogs></Blogs>
                            <Doctors></Doctors>
                            <Contacts></Contacts>
                            <Footer></Footer>
                    </div>
          );
};

export default Home;