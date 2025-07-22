import '../style.css'
import search from '../assets/search.svg'
import plus from '../assets/plus.svg'
import homePage from '../assets/homePage.svg'
import work from "../assets/work.svg"
import rent from '../assets/rent.svg'
import repair from '../assets/repair.svg'
import hui from '../assets/hui.svg'
import { BaseHeader } from '../components/Header'
import { BaseAside } from '../components/aside'
import { BaseForm } from '../components/baseForm'

export const MainPage = () => {


    return(

        <>
            <BaseHeader/>

            <div className="mainPage_Wrapp">
                <div className="mainPage_flexContainer">
                    <BaseAside/>


                    <div className="mainPage_main">
                        <BaseForm/>
                    </div>
                </div>

            </div>

            <div className="mainPage_footer">

                
            </div>
        </>
    )
}