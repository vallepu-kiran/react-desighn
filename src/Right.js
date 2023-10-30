import React from 'react';
import './Right.css';

function Right(){
    return(
        <div className='Right'>
            <div className='row'>
                <div className='col-4 ' >
                    <div>
                    <p className='artist_text'>Players</p>
                    </div>
                </div>
                <div className='col-8'>
                    <div>
                    <p className='photographer'>Photographers</p>
                    </div>
                </div>
            </div>
            <div className='row' >
                <div className='photographs first_image row' >
                    <img className='profile 1' src='https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg'/>
                    <p class="status-dot"></p>
                    <div> <p className='name 1'>MS.Dhoni</p>
                    <span className='mail 1'>@MSDhoni</span>
                    </div>
                </div>
            
            </div>
            <div className='row'>
                <div className='photographs second_image row'>
                    <img className='profile 2' src='https://www.juventus.com/images/image/private/t_portrait_mobile/dev/t5mex3dyn30xi3ox6ii5.jpg'/>
                    <p class="status-dot"></p>
                    <div> <p className='name 2'>Cristiano Ronaldo</p>
                    <span className='mail 2'>@Ronaldo</span>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='photographs third_image row'>
                    <img className='profile 3' src='https://www.reuters.com/resizer/O-QT-6JbJVpU9G3EnvL_xPDI5S0=/960x1200/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/7NBXJ3TU5JL7NHRRJJDS3U3WDY.jpg'/>
                    <p class="status-dot"></p>
                    <div> <p className='name 3'>Neymar</p>
                    <span className='mail 3'>@neymar</span>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='photographs fourth_image row'>
                    <img className='profile 4' src='https://www.livelaw.in/h-upload/2021/11/02/1600x960_403448-virat-kohli.jpg'/>
                    <p class="status-dot"></p>
                    <div> <p className='name 4'>Virat Kohli</p>
                    <span className='mail 4'>@Kohli</span>
                    </div>
                </div>
            </div>
            <div className='row image_container'>
                
                <div className='photographs fifth_image'>
                    <img className="profile 5" src=''/>
                </div>
            </div>
            
                <div className=' row text'>
                 <div className='col-2'><p>Privecy</p></div>
                <div className='col-6'><p>Terms of Service</p></div>
                <p>cookie Notice</p>
                </div>
            
           
           
         
        </div>
    )
}
export default Right;