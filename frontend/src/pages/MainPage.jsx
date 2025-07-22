import '../style.css'
import search from '../assets/search.svg'
import plus from '../assets/plus.svg'
import homePage from '../assets/homePage.svg'
import work from "../assets/work.svg"
import rent from '../assets/rent.svg'
import repair from '../assets/repair.svg'
import hui from '../assets/hui.svg'

export const MainPage = () => {


    return(
        <div className="mainPage_Wrapp">
            <div className="mainPage_header">
                <div className="searchBox">
                    <img src={search} alt="#" className='imageSearch'/>
                    <input type="text" placeholder='Поиск' className='inputSearch'/>
                </div>
                <div className="addSection">
                    <button className='button_addSection'>
                        <img src={plus} alt="#" className='imagePlus'/>
                    </button>
                </div>
            </div>


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

                <div className="mainPage_main">
                    {/* <div className="mainPage_mainSections">
                    <ul className="mainSections">
                        <li className='li_mainSections'>ID</li>
                        <li className='li_mainSections'>Наименование</li>
                        <li className='li_mainSections'>Количество</li>
                        <li className='li_mainSections'>Доступно на складе</li>
                        <li className='li_mainSections'>В работе</li>
                        <li className='li_mainSections'>В аренде</li>
                    </ul>

                    </div>
                    <div className="mainPage_mainInfo"></div> */}

                    <table className='equipment_table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Наименование</th>
                            <th>Количество</th>
                            <th>Доступно на складе</th>
                            <th>В работе</th>
                            <th>В аренде</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Clay Paky B-Eye K10</td>
                            <td>24</td>
                            <td>20</td>
                            <td>4</td>
                            <td></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>2</td>
                            <td>Robe Robin Pointe</td>
                            <td>24</td>
                            <td>22</td>
                            <td>3</td>
                            <td></td>
                        </tr>
                    </tbody>
                       <tbody>
                        <tr>
                            <td>3</td>
                            <td>Robe Patt</td>
                            <td>4</td>
                            <td>4</td>
                            <td>0</td>
                            <td></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>

            <div className="mainPage_footer"></div>
        </div>
    )
}