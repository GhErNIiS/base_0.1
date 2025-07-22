import plus from '../assets/plus.svg'
import search from '../assets/search.svg'
import '../style.css'

export const BaseHeader = () => {

    return (
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
        </div>
    )
}