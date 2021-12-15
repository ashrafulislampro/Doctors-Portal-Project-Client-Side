import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import comma from '../../../images/comma.png';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
const blogsData = [
          { 
                    name: "Ashraful Islam",
                    date: new Date(),
                    title : 'Check at least a doctor in a year for your teeth',
                    img : comma,
                    background : 'primary',
                    icon : faLongArrowAltRight
          },
          { 
                    name: "Dr.Rashed Kabir",
                    date: new Date(),
                    title : '2 times of brush in a day can keep you healthy',
                    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate expedita eos tenetur reprehenderit repellendus, sit voluptates animi eius a ad',
                    img : people1,
                    background : 'white'
          },
          { 
                    name: "Dr.John Mitchel",
                    date: new Date(),
                    title : 'The tooth cancer is taking a challenge',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, eligendi, ducimus non doloribus maiores odio delectus sed quam tempore aperiam?',
                    img : people2,
                    background : 'white'
          }
];
export default blogsData;
