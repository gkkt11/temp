import './login.css'

function ALogin() {
    return (
        <div className="adminlogin">
            <form className="loginform">
                <label>Admin Username</label><br></br>
                <input type="text" name="usn" required></input><br></br>
                <label>Admin Password</label><br></br>
                <input type="password" name="psw" required></input><br></br>
                <button type="submit">Log in</button>
            </form>
        </div>
    );
}

export default ALogin;