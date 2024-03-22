import { useState } from 'react';
import './Content.scss'
const Content = () => {
    const [text, setText] = useState("Đây là danh sách các người dùng đang hoạt động!!!");
    const [input, setInput] = useState('');
    const changeText = () => {
        if (input.trim !== "") {
            setText(input);
            setInput('');

        }

    }
    return (
        <div className="content">
            <div className="content-page">
                <div className="check">
                    <h1>{text}</h1>
                    <div className="replace">
                        <input type="text" value={input} onChange={q => setInput(q.target.value)} placeholder="Thay thế dòng tiêu đề trên..." />
                        <button onClick={changeText}>Thay thế</button>
                    </div>
                </div>
                <div className="information">
                    <div className="profile">
                        <div className="profile-infor">
                            <div className="profile-image">
                                <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            </div>
                            <h2>Leanne Graham</h2>
                            <p>Gwenborough</p>
                            <div className="profile-icon">
                                <i className="fa-brands fa-facebook"></i>
                                <i className="fa-brands fa-github"></i>
                                <i className="fa-brands fa-discord"></i>
                                <i className="fa-brands fa-instagram"></i>
                            </div>
                        </div>
                        <div className='hightlight'></div>
                    </div>
                    <div className="profile">
                        <div className="profile-infor">
                            <div className="profile-image">
                                <img src="https://img.freepik.com/photos-premium/appareil-photo-journee-mondiale-photographie_931473-439.jpg?w=360" alt="" />
                            </div>
                            <h2>Ervin Howell</h2>
                            <p>Wisokyburgh</p>
                            <div className="profile-icon">
                                <i className="fa-brands fa-facebook"></i>
                                <i className="fa-brands fa-github"></i>
                                <i className="fa-brands fa-discord"></i>
                                <i className="fa-brands fa-instagram"></i>
                            </div>
                        </div>
                        <div className='hightlight'></div>
                    </div>
                    <div className="profile">
                        <div className="profile-infor">
                            <div className="profile-image">
                                <img src="https://nupet.vn/wp-content/uploads/2023/10/anh-avatar-cute-meo-nupet-2.jpg" alt="" />
                            </div>
                            <h2>Clementine Bauch</h2>
                            <p>McKenziehaven</p>
                            <div className="profile-icon">
                                <i className="fa-brands fa-facebook"></i>
                                <i className="fa-brands fa-github"></i>
                                <i className="fa-brands fa-discord"></i>
                                <i className="fa-brands fa-instagram"></i>
                            </div>
                        </div>
                        <div className='hightlight'></div>
                    </div>
                    <div className="profile">
                        <div className="profile-infor">
                            <div className="profile-image">
                                <img src="https://hinhnen123.com/wp-content/uploads/2021/06/anh-avatar-cute-dep-nhat-5.jpg" alt="" />
                            </div>
                            <h2>Patricia Lebsack</h2>
                            <p>South Elvis</p>
                            <div className="profile-icon">
                                <i className="fa-brands fa-facebook"></i>
                                <i className="fa-brands fa-github"></i>
                                <i className="fa-brands fa-discord"></i>
                                <i className="fa-brands fa-instagram"></i>
                            </div>
                        </div>
                        <div className='hightlight'></div>
                    </div>
                    <div className="profile">
                        <div className="profile-infor">
                            <div className="profile-image">
                                <img src="https://i.pinimg.com/originals/59/4e/0b/594e0bda954c07c220b288b3fb849c90.jpg" alt="" />
                            </div>
                            <h2>Chelsey Dietrich</h2>
                            <p>Roscoeview</p>
                            <div className="profile-icon">
                                <i className="fa-brands fa-facebook"></i>
                                <i className="fa-brands fa-github"></i>
                                <i className="fa-brands fa-discord"></i>
                                <i className="fa-brands fa-instagram"></i>
                            </div>
                        </div>
                        <div className='hightlight'></div>
                    </div>
                    <div className="profile">
                        <div className="profile-infor">
                            <div className="profile-image">
                                <img src="https://nupet.vn/wp-content/uploads/2023/10/anh-avatar-cute-meo-nupet-16.jpg" alt="" />
                            </div>
                            <h2>Mrs. Dennis Schulist</h2>
                            <p>South Christy</p>
                            <div className="profile-icon">
                                <i className="fa-brands fa-facebook"></i>
                                <i className="fa-brands fa-github"></i>
                                <i className="fa-brands fa-discord"></i>
                                <i className="fa-brands fa-instagram"></i>
                            </div>
                        </div>
                        <div className='hightlight'></div>
                    </div>
                    <div className="profile">
                        <div className="profile-infor">
                            <div className="profile-image">
                                <img src="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/11/avatar-dep-8.jpg" alt="" />
                            </div>
                            <h2>Kurtis Weissnat</h2>
                            <p>Howemouth</p>
                            <div className="profile-icon">
                                <i className="fa-brands fa-facebook"></i>
                                <i className="fa-brands fa-github"></i>
                                <i className="fa-brands fa-discord"></i>
                                <i className="fa-brands fa-instagram"></i>
                            </div>
                        </div>
                        <div className='hightlight'></div>
                    </div>
                    <div className="profile">
                        <div className="profile-infor">
                            <div className="profile-image">
                                <img src="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/11/avatar-dep-120.jpg" alt="" />
                            </div>
                            <h2>Nicholas Runolfsdottir</h2>
                            <p>Aliyaview</p>
                            <div className="profile-icon">
                                <i className="fa-brands fa-facebook"></i>
                                <i className="fa-brands fa-github"></i>
                                <i className="fa-brands fa-discord"></i>
                                <i className="fa-brands fa-instagram"></i>
                            </div>
                        </div>
                        <div className='hightlight'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Content;
