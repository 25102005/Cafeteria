import { CiCircleMore } from "react-icons/ci";
import { IconLink } from "../../../IconLink/IconLink";

const AboutUs: React.FC = () => {
  return (
    <div>
      <IconLink href="/about-us">
        <CiCircleMore style={{ strokeWidth: 1.3}} />
      </IconLink>
    </div>
  );
};

export { AboutUs };
