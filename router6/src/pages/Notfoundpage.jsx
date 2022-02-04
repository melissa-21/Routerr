import {Link} from "react-router-dom";

export const Notfoundpage = () =>{
    return(
        <div>
            <h1>oops</h1>
            <p>error. Go <Link to="/">home</Link></p>
        </div>
    )
}
export default {Notfoundpage}