import Nav from "./navbar"
import Countries from "./countries";

const PageLayout = () => {
    return ( 
     <div>
        <Nav />
        <div>
        <Countries />
        </div>
     </div>
     );
}
 
export default PageLayout;