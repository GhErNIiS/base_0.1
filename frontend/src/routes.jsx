import { Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/mainPage'
//add addEquioForm


export const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
        </Routes>

    )
}