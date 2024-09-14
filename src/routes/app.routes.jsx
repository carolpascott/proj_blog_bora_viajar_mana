import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home/'
import { Pg1_Pouso } from '../pages/Pg1_Pouso/'
import { Pg2_GunaYala } from '../pages/Pg2_GunaYala/'
import { Pg3_Paracas } from '../pages/Pg3_Paracas/'
import { Pg4_RotaEmocoes } from '../pages/Pg4_RotaEmocoes/'
import { Pg5_MorroSP } from '../pages/Pg5_MorroSP/'
import { Pg6_Jalapao } from '../pages/Pg6_Jalapao/'
import { Pg7_ChapadaD } from '../pages/Pg7_ChapadaD/'
import { Pg8_Foz } from '../pages/Pg8_Foz/'
import { Pg9_Itacare } from '../pages/Pg9_Itacare/'

export function AppRoutes() {
    return(
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/pouso' element={ <Pg1_Pouso /> } />
            <Route path='/guna' element={ <Pg2_GunaYala /> } />
            <Route path='/paracas' element={ <Pg3_Paracas /> } />
            <Route path='/rota-emocoes' element={ <Pg4_RotaEmocoes /> } />
            <Route path='/morro-sp' element={ <Pg5_MorroSP /> } />
            <Route path='/jalapao' element={ <Pg6_Jalapao /> } />
            <Route path='/chapada-d' element={ <Pg7_ChapadaD /> } />
            <Route path='/foz' element={ <Pg8_Foz /> } />
            <Route path='/itacare' element={ <Pg9_Itacare /> } />
        </Routes>
    )
}