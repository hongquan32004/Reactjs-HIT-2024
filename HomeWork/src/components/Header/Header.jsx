import './Header.css'

const Card = () => {
    return (
        <div className='header'>
            <div className='header1'>
                <div className='lg'>
                    <a href="">
                        <img src="https://bootstrapmade.com/assets/img/logo.png" alt="" />
                    </a>
                </div>
                <div className='preview'>
                    <ul>
                        <li className='prtest'><i className="fa-solid fa-display"></i></li>
                        <li className='prtest'><i className="fa-solid fa-tablet"></i></li>
                        <li className='prtest'><i className="fa-solid fa-tablet"></i></li>
                    </ul>
                </div>
                <div className='current'>
                    <a href=""><i className="fa-solid fa-chevron-left"></i></a>
                    <a className='template' href="">SoftLand</a>
                    <a href=""><i className="fa-solid fa-chevron-right"></i></a>
                </div>
                <div className='navigate'>
                    <a href=""><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    <a className='download' href="">
                        <i className="fa-solid fa-download"></i>
                        <span>FREE DOWNLOAD</span>
                    </a>
                </div>
            </div>
            <div className='header2'>
                <div className='logo'>
                    <h1><a href="">SoftLand</a></h1>
                </div>
                <div className='select'>
                    <a className='s1' href="">Home</a>
                    <a className='s3' href="">Features</a>
                    <a className='s4' href="">Pricing</a>
                    <a className='s5' href="">Blog</a>
                    <div className='DrD'>
                        <a className='s6' href="">Drop Down</a>
                        <i className="fa-solid fa-chevron-down"></i>
                        <div className='hover'>
                            <p><a href="">Drop Down 1</a></p>
                            <a href="">Deep Drop Down</a>
                            <p><a href="">Drop Down 2</a></p>
                            <p><a href="">Drop Down 3</a></p>
                            <p><a href="">Drop Down 4</a></p>
                        </div>
                    </div>
                    <a className='s2' href="">Contact Us</a>
                </div>
            </div>
        </div>

    )
}
export default Card;