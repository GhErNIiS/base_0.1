import homePage from '../assets/homePage.svg'
import hui from '../assets/hui.svg'
import rent from '../assets/rent.svg'
import repair from '../assets/repair.svg'
import work from "../assets/work.svg"
import '../style.css'

export const BaseAside = () => {

    return(
        <div className="mainPage_flexContainer">
            <div className="mainPage_aside">
                <ul className="pageSelector">
                    <li className='li_pageSelector'><img src={homePage} alt="" /><a href="#">Оборудование</a></li>
                    <li className='li_pageSelector'><img src={work} alt="" /><a href="#">Работа</a></li>
                    <li className='li_pageSelector'><img src={rent} alt="" /><a href="#">Аренда</a></li>
                    <li className='li_pageSelector'><img src={repair} alt="" /><a href="#">Ремонтный цех</a></li>
                    <li className='li_pageSelector'><img src={hui} alt="" /><a href="#">Просто чтобы было...</a></li>
                </ul>
            </div>
        </div>
    )
}