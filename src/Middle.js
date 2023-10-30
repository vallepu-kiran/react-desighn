import React, { useState } from 'react';
import './Middle.css';

function Middle(){
    return(
		<div className='scroll-container '>
			<div className='middle' >
				<div className='row'>
					<div className='first '>
						<img src='https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg' className='profile1'/>
             </div>
						 <p className='mail2'>@MSDhoni</p>
						 <p className='name2'>MS Dhoni</p>
						 <span  class="vertical-ellipsis">...</span>
				</div>
				<div className='second'>
					<p className='about'>Mahendra Singh Dhoni is an Indian professional cricketer, who plays as a wicket-keeper-batsman.<a className='more'>Read More</a></p>
				</div>
				<div className='third'>
					<img src='https://assets.telegraphindia.com/telegraph/2023/Oct/1698401879_new-project-1.jpg' className='picture1'/>
					<img src='..\Images\heart.svg' className='heart'/>
				</div>
				<div className='fourth row'>
					<img src='..\Images\heart (1).svg'  className='icons'/>
					<p className='likes'>9.8m</p>
					<img src='..\Images\comment.svg' className='icons'/>
					<p className='likes'>200k</p>
					<img src='..\Images\share.svg' className='icons'/>
				 <p className='likes '>109k</p>
				</div>
				</div>
				<div className='middle'>
				<div className='row '>
				<div className='first '>
						<img src='https://img.jagranjosh.com/images/2022/January/1812022/Virat-Kohli-Biography.jpg' className='profile1'/>
             </div>
						 <p className='mail2'>@Kohli</p>
						 <p className='name2'>Virat Kohli</p>
						 <span  class="vertical-ellipsis">...</span>
				</div>
				<div className='second'>
					<p className='about'>Virat Kohli is an Indian international cricketer and the former captain of the Indian cricket team.<a className='more'>Read More</a></p>
				</div>
				<div className='third'>
					<img src='https://images.hindustantimes.com/img/2022/09/08/550x309/Emirates-Asia-Cup-Cricket-44_1662651873143_1662651873143_1662651900814_1662651900814.jpg	' className='picture1'/>
					<img src='..\Images\heart.svg' className='heart'/>
				</div>
				<div className='fourth row'>
					<img src='..\Images\heart (1).svg'  className='icons'/>
					<p className='likes'>10m</p>
					<img src='..\Images\comment.svg' className='icons'/>
					<p className='likes'>900k</p>
					<img src='..\Images\share.svg' className='icons'/>
				 <p className='likes '>802k</p>

				</div>
				</div>
				<div className='last'>
					<div className='row'>
						
				       <img src='https://s01.sgp1.cdn.digitaloceanspaces.com/article/166717-nupaiafwhl-1637670978.jpeg'className='edge' />
						<img src='https://cdn.britannica.com/35/238335-050-2CB2EB8A/Lionel-Messi-Argentina-Netherlands-World-Cup-Qatar-2022.jpg' className='rating'/>
						<img src='https://static.toiimg.com/thumb/msid-100534045,width-1280,height-720,resizemode-4/100534045.jpg' className='rating2'/>
						<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Sachin-Tendulkar_%28cropped%29.jpg/220px-Sachin-Tendulkar_%28cropped%29.jpg'className='edge2 '/>
						
					</div>
					<div className='row'>
						<p className='p1'>Lionel Messi play for Argentina</p>
						<p className='p2'>ICC No.1 T20 batsman</p>
					</div>
				</div>
		</div>
			
    )

}
export default Middle;
