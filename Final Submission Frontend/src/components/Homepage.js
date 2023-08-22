import Navbar from "./Navbar";
// import Slider from "./Slider";

function Homepage(){
    return(
        <div className="homepage">
            <Navbar></Navbar>
            <div className="container m-5" style={{width:"50%",height:"50%",float:"right"}}>
                         <h1>Welcome to the OnlineBookStore...!</h1>
                        <br/>
                        <p style={{fontSize:"1.5rem"}}>“Reality doesn’t always give us the life that we desire, but we can always find what we desire between the pages of books.”</p>
<br/>
                        <p style={{fontSize:"1.5rem"}}>“Maybe this is why we read, and why in moments of darkness we return to books: to find words for what we already know.”</p>
                        <br/>
                        <a href="/login-customer">
                        <button className="btn p-3 rounded-pill" style={{width:"50%", backgroundColor:"black", color:"white", fontSize:"1.44rem"}} >Shop Now</button></a>
            </div>
            {/* <Slider></Slider> */}
        </div>
    )
}

export default Homepage;