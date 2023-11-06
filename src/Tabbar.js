import './Tabbar.css';

function Tabbar(){
    return(
        <div className="tabbar">
          <img className="logo" src="images-tabbar\logo.jpg" />
          <ul className="manu">
            <li className="nav-item">
              <a href="#" className="tab-link">
                <img id="img" src="images-tabbar\001-home 2.png" alt="" />
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://www.youtube.com/watch?v=oUoge5ED6Yw"
                className="tab-link"
              >
                <img id="img" src="images-tabbar\profile.svg" alt="" />
                PROFILE
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://www.youtube.com/watch?v=oUoge5ED6Yw"
                className="tab-link"
              >
                <p id="round">
                  <img id="img" src="images-tabbar\calendar.png" />
                  <span className="h1"> BOOK APPOINMANT</span>{' '}
                </p>
              </a>
            </li>
          </ul>
          <div className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
    )
}
export default Tabbar;