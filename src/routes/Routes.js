import { Route, Routes} from 'react-router-dom'

import { Landing } from '../pages/landing/Landing'
import { SignIn } from '../pages/signin/SignIn'
import { SignUp } from '../pages/signup/SignUp'

export const Approutes = () =>{
    return(
        <div>
            <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/" element={<Landing />} />
            </Routes>
        </div>
    )
}