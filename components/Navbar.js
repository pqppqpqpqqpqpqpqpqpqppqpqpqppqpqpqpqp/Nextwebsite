import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


import { FiShoppingBag } from 'react-icons/fi';
import { AiFillCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { useRef } from 'react';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { MdAccountCircle } from 'react-icons/md'
import { useState } from 'react';
const Navbar = ({ logout, user, cart, addToCart, removeFromCart, clearCart, subTotal }) => {
const [dropdown, setDropdown] = useState(false)

  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }

  }

  const ref = useRef()

  const openNav = () => {
    document.getElementById("mySidenav").style.animation = "expand 0.3s forwards";
    //closeBtn
    document.getElementById("closeBtn").style.display = "block";
    document.getElementById("closeBtn").style.animation = "show 0.3s";
    //Overlay
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlay").style.animation = "show 0.3s";

  }
  const closeNav = () => {
    document.getElementById("mySidenav").style.animation = "collapse 0.3s forwards";
    //closeBtn
    document.getElementById("closeBtn").style.animation = "hide 0.3s";
    //Overlay
    document.getElementById("overlay").style.animation = "hide 0.3s";

    setTimeout(() => {
      document.getElementById("closeBtn").style.display = "none";
      document.getElementById("overlay").style.display = "none";
      //Reset Menus
      document.getElementById("main-container").style.animation = "";
      document.getElementById("main-container").style.transform = "translateX(0px)";
      document.getElementById("sub-container").style.animation = "";
      document.getElementById("sub-container").style.transform = "translateX(380px)";
    }, 300)
  }
  let firstDropdownOpen = true;
  const firstDropDown = () => {
    firstDropdownOpen = !firstDropdownOpen;
    if (firstDropdownOpen) {
      document.querySelector("#firstDropDown i").setAttribute("class", "fas fa-chevron-up");
      document.querySelector("#firstDropDown div").innerHTML = "See Less";
      //Handle Container
      document.getElementById("firstContainer").style.display = "block";
      document.getElementById("firstContainer").style.animation = "expandDropDown 0.3s forwards";
      document.getElementById("firstContainer").style.transition = "height 0.3s";
      document.getElementById("firstContainer").style.height = "410px";
    } else {
      document.querySelector("#firstDropDown i").setAttribute("class", "fas fa-chevron-down");
      document.querySelector("#firstDropDown div").innerHTML = "See More";
      //Handle Container
      document.getElementById("firstContainer").style.animation = "collapseDropDown 0.2s forwards";
      document.getElementById("firstContainer").style.transition = "height 0.2s";
      document.getElementById("firstContainer").style.height = "0px";
      setTimeout(() => {
        document.getElementById("firstContainer").style.display = "none";
      }, 200)

    }
  }


  return (
    <>
     <div className='flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md sticky top-0 bg-white z-10'>
    
    <div id="overlay" onClick={closeNav}></div>

<div id="closeBtn" onClick={closeNav}>&times;</div>
<div className="sidenav" id="mySidenav">
  <div className="sidenavHeader">
    <i className="fas fa-user-circle"></i>
  </div>

  <div id="main-container">
    <div className="sidenavContentHeader">Trending</div>
    <a href="#">
      <div className="sidenavContent">Best  Seller
        <small> New </small></div>

    </a>
    <a href="#"><div className="sidenavContent">New Releases</div></a>
    <a href="#"><div className="sidenavContent">Movers and Shakers</div></a>
    <hr />
    <div className="sidenavContentHeader">Digital Content And Devices</div>
    <a href='#'
    ><div className="sidenavRow">
        <div>Prime Video</div>
        <i className="fas fa-chevron-right" style={{ color: '#8e9090' }}></i></div
      ></a>
    <a href="#"
    ><div className="sidenavRow">
        <div>Amazon Music</div>
        <i className="fas fa-chevron-right" style={{ color: '#8e9090' }}></i></div
      ></a>
    <a href="#"
    ><div className="sidenavRow">
        <div>Apps for Android</div>
        <i className="fas fa-chevron-right" style={{ color: '#8e9090' }}></i></div
      ></a>
    <a href="#"
    ><div className="sidenavRow">
        <div>Echo, Alexa & Smart Home</div>
        <i className="fas fa-chevron-right" style={{ color: '#8e9090' }}></i></div
      ></a>
    <a href="#"
    ><div className="sidenavRow">
        <div>Fire TV</div>
        <i className="fas fa-chevron-right" style={{ color: '#8e9090' }}></i></div
      ></a>
    <a href="#"
    ><div className="sidenavRow">
        <div>Fire Tablets</div>
        <i className="fas fa-chevron-right" style={{ color: '#8e9090' }}></i></div
      ></a>
    <a href="#"
    ><div className="sidenavRow">
        <div>Kindle E-readers & Books</div>
        <i className="fas fa-chevron-right" style={{ color: '#8e9090' }}></i></div
      ></a>
    <a href="#"
    ><div className="sidenavRow">
        <div>Audible Audiobooks</div>
        <i className="fas fa-chevron-right" style={{ color: '#8e9090' }}></i></div
      ></a>
    <hr />
    <div className="sidenavContentHeader">Shop By Department</div>
    <a href="#"
    ><div className="sidenavRow">
        <div>Amazon Fresh</div>
        <i className="fas fa-chevron-right" style={{ color: '#8e9090' }}></i></div
      ></a>
    <a href="#">
      <div className="sidenavRow">
        <div>Books</div>
        <i className="fas fa-chevron-right" style={{ color: '#8e9090' }}></i>
      </div>
    </a>
    <a href="#">
      <div className="sidenavRow">
        <div>Films, TV, Music & Games</div>
        <i className="fas fa-chevron-right" style={{ color: '#8e9090' }}></i>
      </div>
    </a>
    <a href="#">
      <div className="sidenavRow">
        <div>Electronics & Computers</div>
        <i className="fas fa-chevron-right" style={{ color: '#8e9090' }}></i>
      </div>
    </a>
    <div className="sidenavContainer" id="firstContainer">
      <hr />
      <a href="#">
        <div className="sidenavRow">
          <div>Home, Garden, Pets & DIY</div>
          <i className="fas fa-chevron-right" style={{ color: '#8e9090' }}></i>
        </div>
      </a>
      <a href="#">
        <div className="sidenavRow">
          <div>Toys, Children & Baby</div>
          <i className="fas fa-chevron-right" style={{ color: '#8e9090' }}></i>
        </div>
      </a>
      <a href="#">
        <div className="sidenavRow">
          <div>Clothes, Shoes, Jewellery & Accessories</div>
          <i className="fas fa-chevron-right" style={{ color: '#8e9090' }}></i>
        </div>
      </a>
      <a href="#">
        <div className="sidenavRow">
          <div>Sports & Outdoors</div>
          <i className="fas fa-chevron-right" style={{ color: '#8e9090' }}></i>
        </div>
      </a>
      <a href="#">
        <div className="sidenavRow">
          <div>Food & Grocery</div>
          <i className="fas fa-chevron-right" style={{ color: '#8e9090' }}></i>
        </div>
      </a>
      <a href="#">
        <div className="sidenavRow">
          <div>Health & Beauty</div>
          <i className="fas fa-chevron-right" style={{ color: '#8e9090' }}></i>
        </div>
      </a>
      <a href="#">
        <div className="sidenavRow">
          <div>Car & Motorbike</div>
          <i className="fas fa-chevron-right" style={{ color: '#8e9090' }}></i>
        </div>
      </a>
      <a href="#">
        <div className="sidenavRow">
          <div>Business, Industry & Science</div>
          <i className="fas fa-chevron-right" style={{ color: '#8e9090' }}></i>
        </div>
      </a>
    </div>
    <div
      className="sidenavRowDropdown"
      id="firstDropDown"
      onClick={firstDropDown}
    >
      <div>See All</div>
      <i
        className="fas fa-chevron-down"
        style={{ color: '#8e909', marginLeft: '10px' }}
      >
      </i>
    </div>
    <hr />
    <div className="sidenavContentHeader">Programs & Features</div>
    <a href="#">
      <div className="sidenavRow">
        <div>Gift Cards & Top Up</div>
        <i className="fas fa-chevron-right" style={{ color: '#8e9090' }}></i>
      </div>
    </a>
    <a href="#">
      <div className="sidenavRow">
        <div>Find a Gift</div>
        <i className="fas fa-chevron-right" style={{ color: '#8e9090' }}></i>
      </div>
    </a>
    <a href="#">
      <div className="sidenavRow">
        <div>Handmade</div>
        <i className="fas fa-chevron-right" style={{ color: '#8e9090' }}></i>
      </div>
    </a>
    <a href="#">
      <div className="sidenavRow">
        <div>Amazon Launchpad</div>
        <i className="fas fa-chevron-right" style={{ color: '#8e9090' }}></i>
      </div>
    </a>

    <div className="sidenavContainer" id="secondContainer">
      <hr />
      <a href="#">
        <div className="sidenavContent">Made In Italy</div>
      </a>
      <a href="#">
        <div className="sidenavRow">
          <div>Home Services</div>
          <i className="fas fa-chevron-right" style={{ color: '#8e9090' }}></i>
        </div>
      </a>
      <a href="#">
        <div className="sidenavContent">Prime Wardrobe</div>
      </a>
      <a href="#">
        <div className="sidenavRow">
          <div>Amazon Business</div>
          <i className="fas fa-chevron-right" style={{ color: '#8e9090' }}></i>
        </div>
      </a>
      <a href="#">
        <div className="sidenavContent">Amazon Second Chance</div>
      </a>
    </div>
    <div
      className="sidenavRowDropdown"
      id="secondDropDown"
      onClick="secondDropDown()"
    >
      <div>See All</div>
      <i
        className="fas fa-chevron-down"
        style={{ color: '#8e909', marginLeft: '10px' }}
      >
      </i>
    </div>
    <hr />
    <div className="sidenavContentHeader">Help & Settings</div>
    <a href="#"><div className="sidenavContent">Your Account</div></a>
    <a href="#"><div className="sidenavContent">Currency Settings</div></a>
    <a href="#"><div className="sidenavContent">Customer Service</div></a>
    <a href="#"><div className="sidenavContent">Sign In</div></a>
    <div style={{ height: '50px' }}></div>
  </div>

  <div id="sub-container">
    <div id="mainMenu">
      <i className="fas fa-chevron-left" style={{ color: '#8e9090' }}></i> MAIN MENU
    </div>
    <hr />
    <div id="sub-container-content">
      <div className="sidenavContentHeader">Prime Video</div>
      <a href="#"><div className="sidenavContent">All Videos</div></a>
    </div>
  </div>
</div>


<div className='cursor-pointer items-center cart fixed left-2 mx-2 top-2 flex'
  onClick={openNav}
  style={{ 
    fontSize: '30px',
    
    cursor: 'pointer',
   
  }}
 
  
> &#9776;
</div>
    
    
    
       <div className='logo mr-auto pl-12 md:mx-8'>

        <Link href={'/'}><a><Image src='/FLORA.png' alt='' width={150} height={40} /></a></Link>
      </div>

      <div className='nav'>
        <ul className='flex  items-center space-x-4 font-bold md:text-md '>
          <Link href={'/tshirts'}><a><li> Tshirts </li></a></Link>
          <Link href={'/hoodies'}><a><li> Hoodies </li></a></Link>
          <Link href={'/mugs'}><a><li> Mugs </li></a></Link>
          <Link href={'/stickers'}><a><li> Stickers </li></a></Link>
          
        </ul>
      </div>
   
      <div className='cursor-pointer items-center cart absolute right-0 top-4  mx-5 flex'>
        <a onMouseOver={() => {setDropdown(true)}} onMouseLeave={() => {setDropdown(false)}}>
      {dropdown && <div onMouseOver={() => {setDropdown(true)}} onMouseLeave={() => {setDropdown(false)}} className='absolute right-8 bg-white shadow-lg border font-bold top-8 rounded-md px-5 py-4 w-36'>
              <ul>
                <Link href={'/myaccount'}><a><li className='py-1 text-sm hover:text-pink-500' >My Account</li></a></Link>
                <Link href={'/orders'}><a><li className='py-1 text-sm hover:text-pink-500' >Orders</li></a></Link>
             <li onClick={logout} className='py-1 text-sm hover:text-pink-500' >Logout</li>
             </ul>
        </div>}
        {user.value && <MdAccountCircle className='text-3xl md:text-3xl mx-2' />}
        </a>
        {!user.value && <Link href={'/login'}><a>
          <button className='bg-blue-600 px-2 py-1 rounded-md text-white text-sm mx-2'>Login</button>
        </a></Link>}
        <FiShoppingBag onClick={toggleCart} className='text-3xl md:text-3xl' />
      </div>
     
      <div ref={ref} className={`w-72 h-[100vh] sideCart overflow-y-scroll  absolute top-0 right-0 bg-pink-100 py-10 px-8 z-10 transform transition-transform ${Object.keys(cart).length !== 0 ? 'translate-x-0' : 'translate-x-full'}`}>
        <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
        <span onClick={toggleCart} className='absolute top-5 right-2 cursor-pointer text-2xl text-pink-600'><AiFillCloseCircle /></span>
        <ol className='list-decimal fonr-semibold'>
          {Object.keys(cart).length == 0 && <div className='my-4 font-semibold'>Your cart is empty</div>}
          {Object.keys(cart).map((k) => {
            return <li key={k}>
              <div className='item flex my-5'>
                <div className='w-2/3  font-semibold'>{cart[k].name}({cart[k].size}/{cart[k].variant})</div>
                <div className='flex font-semibold items-center justify-center w-1/3 text-lg '><AiFillPlusCircle onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant); }} className='cursor-pointer text-pink-600' /><span className='mx-2'>{cart[k].qty}</span><AiFillMinusCircle onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant); }} className='cursor-pointer text-pink-600' /></div>
              </div>
            </li>;
          })}


        </ol>
        <div className='total font-bold my-2'>Subtotal: ₹{subTotal}</div>
        <div className='flex'>
          <Link passHref href={'/checkout'}>

            <button className="flex mr-1  text-white bg-red-500 border-0 py-2 px-1 focus:outline-none hover:bg-pink-600 rounded text-lg capitalize"><BsFillBagCheckFill className='m-1' />checkout</button>

          </Link>

          <button onClick={clearCart} className="flex mr-1  text-white bg-red-500 border-0 py-2 px-1 focus:outline-none hover:bg-pink-600 rounded text-lg capitalize">clear cart</button>

        </div>

      </div>

    </div>
    </>
  )
}

export default Navbar

