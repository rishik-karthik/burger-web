import "./SignUp.css";
import { useState } from "react"

export default function SignUp() {
    let [data, setData] = useState({
        userName: "",
        email: "",
        password: "",
    })
    let handleChange = (event) => {
        setData((currData) => {
            return { ...currData, [event.target.name]: event.target.value };
        })
    }
    return (
        <div className="sign-page">
            
            <form action="" className="sign-form">
                <h1 >Sign up</h1>
                <input type="text" value={data.userName} placeholder="Name" className="user-name" name="userName" onChange={handleChange} />
                <input type="mail" value={data.email} placeholder="Email" className="email" name="email" onChange={handleChange} />
                <input type="password" value={data.password} placeholder="Password" className="password" name="password" onChange={handleChange} />
                <button className="submit-btn">Sign Up</button>
                {/* icons */}
                <div className="sign-icons">
                <hr />
                <i class="fa-brands fa-google"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-solid fa-burger"></i>
                <i class="fa-brands fa-instagram"></i>
            </div>
            </form>
        </div>
    )
}