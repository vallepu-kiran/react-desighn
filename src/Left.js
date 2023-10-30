import React from 'react';
import './Left.css';

function Left() {
    return (
            <div className='Left_side' style={{backgroundColor:"white"}}>
							<div className='options'>
								<img  src='..\Images\home.png' alt='Home'className=' option_icons'></img>
								<span className='home2'>Home</span>
							</div>
							<div className='options'>
								<img src='..\Images\notification.svg' className='option_icons'></img>
								<span >Notifications</span>
							</div>
							<div className='options'>
								<img src="..\Images\hearts.svg" className='option_icons' />
								<span >shop</span>
							</div>
							<div className='options'>
								<img src='..\Images\message.svg' className='option_icons'/>
								<span>Conversation</span>
							</div>
							<div className='options'>
								<img src='..\Images\message (2).svg' className='option_icons'/>
								<span>Wallet</span>
							</div>
							<div className='options'>
								<img src='..\Images\favorite.svg' className='option_icons'/>
							<span>Subscription</span>
							</div>
							<div className='options'>
								<img src='..\Images\profile.svg' className='option_icons'></img>
								<span>My Profile</span>
							</div>
							<div className='options'>
								<img src='..\Images\setting.svg' className='option_icons'></img>
								<span>Settings</span>
							</div>
							<div className='options logOut_icon'>
								<img src='..\Images\logout.svg' className='option_icons '></img>
								<span>Log Out</span>
							</div>
							<div className=' row text2'>
							<div className='col-6'>	<p>2022©logo name</p></div>
								<p>Developed by ivan Infotech</p>
							</div>
					 </div>
					 
    );
}

export default Left;
