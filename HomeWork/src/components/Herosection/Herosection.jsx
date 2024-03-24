import './Herosection.scss'
const herosection = () => {
    return (
        <div className='herosection'>
            <div className='wave'>
                <img src="https://bootstrapmade.com/demo/templates/SoftLand/assets/img/hero-bg.jpg" alt="" />
            </div>
            <div className='textimg'>
                <div className='text'>
                    <h1>Promote Your App with SoftLand</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <div className='selectt'>
                        <a href="">Get started</a>
                    </div>
                </div>
                <div className='imgg'>
                    <img className='img1' src="https://bootstrapmade.com/demo/templates/SoftLand/assets/img/phone_1.png" alt="" />
                    <img className='img2' src="https://bootstrapmade.com/demo/templates/SoftLand/assets/img/phone_2.png" alt="" />
                </div>
            </div>
        </div>
    )
}
export default herosection;