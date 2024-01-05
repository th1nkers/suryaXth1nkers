import Profile from "../components/Profile.js";
import WebsiteEx from "../components/WebsiteEx.js";
import MainCard from "../../shared/components/uiElements/MainCard.js";
import "./Home.css";

const HomePage = () => {

    return (
        <MainCard className="personal-home-section">
            <WebsiteEx/>
            <Profile />
        </MainCard>
    )
}

export default HomePage
