import './Footer.css'
const footer = () => {
    return (
        <div className='footer'>
            <div className='fter'>
                <div className='ft1'>
                    <h2>About SoftLand</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ea delectus pariatur, numquam aperiam dolore nam optio dolorem facilis itaque voluptatum recusandae deleniti minus animi.</p>
                    <div className='iconn'>
                        <div className="ic1"><i className="fa-brands fa-twitter"></i></div>
                        <div className="ic2"><i className="fa-brands fa-facebook"></i></div>
                        <div className="ic3"><i className="fa-brands fa-instagram"></i></div>
                        <div className="ic4"><i className="fa-brands fa-linkedin-in"></i></div>
                    </div>
                </div>
                <div className='ft2'>
                    <h2>Navigation</h2>
                    <p><a href="">Pricing</a></p>
                    <p><a href="">Features</a></p>
                    <p><a href="">Blog</a></p>
                    <p><a href="">Contact</a></p>
                </div>
                <div className='ft2'>
                    <h2>Services</h2>
                    <p><a href="">Team</a></p>
                    <p><a href="">Collaboration</a></p>
                    <p><a href="">Todos</a></p>
                    <p><a href="">Events</a></p>
                </div>
                <div className='ft2'>
                    <h2>Downloads</h2>
                    <p><a href="">Get from the App Store</a></p>
                    <p><a href="">Get from the Play Store</a></p>
                </div>
            </div>
            <div className='ffter'>
                <i className="fa-regular fa-copyright"></i>
                <span> Copyright SoftLand. All Rights Reserved</span>
                <p>Designed by <b>BootstrapMade</b></p>
            </div>

        </div>
    )
}
export default footer;