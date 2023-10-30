import React, { useState } from 'react';
import './Top.css';


function Top(){


return(
    <div >
      <div class="row" >
				<div class="col-3 " >
					<div className='logo'>
						<p className='logo_text'>LOGO</p>
					</div>
				</div>
				<div class="col-6" >
					<div className='search_box'>
						<img src="..\Images\Component 32.svg" className='search_icon' />
						<input className='search_bar' type='text'placeholder='search here..'></input>
						<img className='filter' src='..\Images\filter.png'></img><span>Filters</span>
					</div>
				</div>
				<div class="col-3 ">
					<div className='seller_box'>
						<p className='seller_text'>Become a Seller</p>
					</div>
				</div>
			</div>
			</div>

);
}
export default Top;
