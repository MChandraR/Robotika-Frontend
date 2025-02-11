import Navbar from "../Navbar";
import Footer from "../Footer";

export default function MainLayout({children}:Readonly<{children : React.ReactNode}>){
    return(
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
}