import "./topbar.scss"
import { Person, Mail } from "@material-ui/icons"

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        Gaurav
                    </a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+91-9560225886</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>jdevhimcs@gmail.com</span>
                    </div>
                </div>
                <h2>Title</h2>
                <div className="right">
                    <div className="hamburger">
                        <span className="line1">line1</span>
                        <span className="line2">line2</span>
                        <span className="line3">line2</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
