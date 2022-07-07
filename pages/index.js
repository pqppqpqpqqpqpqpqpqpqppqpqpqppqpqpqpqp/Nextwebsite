import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight, MdChevronRight,MdChevronLeft } from 'react-icons/md'


export default function Home() {

  const PreviousBtn = (props) => {
    // console.log(props);
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <MdOutlineKeyboardArrowLeft style={{ color: "whitesmoke", fontSize: "120px" }}/>
        </div>
    );
  };
  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <MdOutlineKeyboardArrowRight style={{ color: "whitesmoke", fontSize: "120px" }}/>
      </div>
    );
  };
  const carouselProperties = {
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    slidesToShow: 3,
    infinite: true,
   slidesToScroll:3,
    centerMode: true,
    centerPadding: "250px",
    autoplay: true,
    
    responsive: [
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 2,
          centerMode:  false,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          centerMode: false,
          slidesToScroll: 2,
        },
      },
    ],
  };
 
  return (

    <div>
      <Head>
        <title>Flora.com</title>
        <meta name="description" content="Flora.com" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
     
   <div style={{ margin: "0px", cursor: 'pointer', objectFit: 'cover' }} className="carousel ">
      <Slider
        autoplay = {true}
        autoplaySpeed={5000}
 
        initialSlide={1}
        infinite 
        prevArrow={<PreviousBtn />}
        nextArrow={<NextBtn />}
       
       
      >
        
      
          <div >
            <Image className='md:w-full'src='https://www.redwolf.in/image/cache/catalog/sliders/moon-knight-slider-1920-1920x450.jpg' alt=""  width={1920} height={450}/>
          </div>
          <div>
            <Image className=''src='/Banner.png' alt="" width={1920} height={450} />
          </div>
          
          <div>
          <Image className=''src='https://www.redwolf.in/image/cache/catalog/sliders/moon-knight-slider-1920-1920x450.jpg' alt="" width={1920} height={450} />
          </div>
          
          <div>
            <Image className=''src='https://www.redwolf.in/image/cache/catalog/sliders/moon-knight-slider-1920-1920x450.jpg' alt="" width={1920} height={450} />
          </div>
     
          
     
      </Slider>
      </div>
      <div>
        <Image src='/133.jpg' alt='' width={2500} height={900} />
      </div>
      <section className="section category">
      <h2 className="title">Category Wish Shopping</h2>
        <div className="category-center container">
      
          <div className="category-box">
            <Image src="https://www.redwolf.in/image/catalog/featured_categories/featured-category-t-shirts-2.jpg" alt='' width={900} height={900}/>
            <div className="content">
              <h2  className=' text-center'>Shop for <span className=' text-center bg-slate-200 rounded-2xl'>Man</span></h2>
              {/* <span>155 Products</span> */}
              <button type="button" className=" inline-block items-center text-center  px-3 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out capitalize">   <a href=''>shop now</a></button>
            </div>
          </div>

          <div className="category-box">
            <Image src="/KIDS.png" alt='' width={900} height={900}/>
            <div className="content">
              <h2  className=' text-center'>Shop for <span  className='text-center bg-slate-200 rounded-2xl'>kids</span></h2>
              {/* <span>155 Products</span> */}
              <button type="button" className=" inline-block items-center text-center  px-2 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out capitalize">  <a href=''>shop now</a></button>
            </div>
          </div>

          <div className="category-box">
            <Image src="/WOMAN.png" alt='' width={900} height={900}/>
            <div className="content">
              <h2  className=' text-center'>Shop for <span  className=' text-center  bg-slate-200 rounded-2xl'> Woman </span> </h2>
              {/* <span>155 Products</span> */}
              <Link passHref={true} href={'/woman'}>
              <button type="button" className=" inline-block items-center text-center  px-2 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out capitalize">  <a>shop now</a></button>
              </Link>
            </div>
          </div>


          <div className="category-box">
            <Image src="/COUPLE.png" alt='' width={900} height={900}/>
            <div className="content">
              <h2 className=' text-center'>Shop for <span  className=' text-center bg-slate-200 rounded-2xl'>Couple</span> </h2>
              {/* <span>155 Products</span> */}
              <Link passHref={true} href={'#'}>
              <button type="button" className=" inline-block  text-center  px-2 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out capitalize"> <a>shop now</a></button> 
              </Link>

            </div>
          </div>
        </div>
        

      </section>
  
      <div style={{ margin: "20px", cursor: 'pointer', objectFit: 'fill' }} className="carousel">
 
      <Slider {...carouselProperties} >

      <div>
            <Image src='/SUPERHERO.jpg' alt=""  width={2200} height={900}/>
          </div>
          <div>
            <Image src='https://www.redwolf.in/image/catalog/featured_brands/disney-logo-3.png' alt="" width={2200} height={900}/>
          </div>
          
          <div>
          <Image src='https://www.redwolf.in/image/catalog/featured_brands/marvel-merchandise-india.png' alt=""  width={2200} height={900}/>
          </div>
          
          <div>
            <Image src='https://www.redwolf.in/image/catalog/featured_brands/cartoon-network-t-shirts-india.png' alt=""   width={2200} height={900} />
          </div>
          <div>
            <Image src='https://www.redwolf.in/image/catalog/featured_brands/Superman-1.png' alt=""   width={2200} height={900} />
          </div>
          <div>
            <Image src='https://www.redwolf.in/image/catalog/featured_brands/cartoon-network-t-shirts-india.png' alt=""   width={2200} height={900} />
          </div>
          <div>
            <Image src='https://www.redwolf.in/image/catalog/featured_brands/Superman-1.png' alt=""   width={2200} height={900} />
          </div>
          <div>
            <Image src='https://www.redwolf.in/image/catalog/featured_brands/cartoon-network-t-shirts-india.png' alt=""   width={2200} height={900} />
          </div>
          <div>
            <Image src='https://www.redwolf.in/image/catalog/featured_brands/Superman-1.png' alt=""   width={2200} height={900} />
          </div>
          <div>
            <Image src='https://www.redwolf.in/image/catalog/featured_brands/cartoon-network-t-shirts-india.png' alt=""   width={2200} height={900} />
          </div>

      </Slider>
    </div>
      
      </div>
      
   
      )
}

