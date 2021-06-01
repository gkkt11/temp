import './partners.css'

function Partner() {
    return (
        <div className="partnerpage">
            <form className="usersform">
                <label className="txt">Partner's ID</label><br></br>
                <input type="text" name="pid"></input><br></br>
                <label className="txt">Partner's Username</label><br></br>
                <input type="text" name="eml"></input><br></br>  
                <label className="txt"> Partner's Password</label><br></br>
                <input type="text" name="eml"></input><br></br>   
                <button type="submit" className="btn2">Submit</button>    
                <button type="submit" className="btn2">Delete</button>              
            </form>
        </div>
    );
}

export default Partner;