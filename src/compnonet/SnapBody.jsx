import imgHeroMoblie from '../assets/image-hero-mobile.png'
import imgHeroDesktop from '../assets/image-hero-desktop.png'
import Footer from './Footer'
export default function SnapBody(){
    return(
        <>
        <div className='md:flex flex-row-reverse justify-between lg:mx-25 lg:my-15  lg:gap-20' >

        <div>
            <img src={imgHeroMoblie} alt=""  className='md:hidden'/>
            <img src={imgHeroDesktop} alt="" className='hidden md:block   ' />
        </div>
        <Footer/>
        </div>

        </>
    )
}