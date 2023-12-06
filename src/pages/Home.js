import Button from "../components/Button";
import PhotoBox from "../components/Photobox";
import { Link } from "react-router-dom";
import profile from "../assets/images/profile.jpg"
function Home() {

    return (
        <div className="Home-page">
           <PhotoBox
                    name="Nino Goguadze"
                    title="Programmer. Configurator"
                    description="Aspiring programmer based in tbilisi"
                    avatar={profile}
                />
            <Link to="/Inner">
                <Button color="white" text={"Know More"} textColor="black" />
            </Link>
        </div>
    );
}

export default Home;
