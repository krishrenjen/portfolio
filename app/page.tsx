import HomePage from "@/components/HomePage/HomePage";
import PageCSS from "./page.module.css"
import Navbar from "@/components/Navbar/Navbar";

function Home() {
    return ( 
        <>
            <div className="flex flex-col w-screen h-screen min-h-fit">
                <Navbar></Navbar>
                <div className="flex w-screen items-center justify-center min-h-fit flex-grow">    
                    <HomePage/> 
                </div>
                <Navbar></Navbar>
            </div>
            
        </>
        
    );
}

export default Home;