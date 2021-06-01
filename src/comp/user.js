import './user.css';

function User() {
    return (
        <div className="userpage">
            <form className="usersform">
                <label className="txt">User's ID</label><br></br>
                <input type="text" name="uid"></input><br></br>
                <label className="txt">Email</label><br></br>
                <input type="text" name="eml"></input><br></br>  
                <label className="txt">Password</label><br></br>
                <input type="text" name="eml"></input><br></br>   
                <label className="txt">First Name</label><br></br>
                <input type="text" name="eml"></input><br></br>   
                <label className="txt">Last Name</label><br></br>
                <input type="text" name="eml"></input><br></br>   
                <label className="txt">Phone</label><br></br>
                <input type="text" name="eml"></input><br></br>   
                <label className="txt">Address</label><br></br>
                <input type="text" name="eml"></input><br></br>   
                <label className="txt">Pay cards</label><br></br>
                <input type="text" name="eml"></input><br></br>
                <button type="submit" className="btn2">Submit</button>    
                <button type="submit" className="btn2">Delete</button>              
            </form>
        </div>
    );
}

export default User;