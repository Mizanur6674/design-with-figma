import type { NextPage } from "next";
import AddFeedbackTheme from "../components/AddFeedbackTheme";
import Comments from "../components/Comments";
import CreateFeedback from "../components/CreateFeedback";
import Feedback from "../components/Feedback";
import MainBox from "../components/MainBox";
import Roadmap from "../components/Roadmap";
import MainListMobileCard from "../components/shared/mainbox/MainListMobileCard";
import MobileRoadmap from "../components/shared/roadmap/MobileRoadmap";

const Home: NextPage = () => {
  return (
    <div>
      <MainBox />
      <Feedback />
      <Comments />
      <CreateFeedback />
      <AddFeedbackTheme />
      <Roadmap />
    </div>
  );
};

export default Home;
