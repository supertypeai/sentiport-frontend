import { useContext } from "react";
import { UserContext } from "@/contexts/UserContext";

const Body = ({ children }) => {
  const { loggingIn } = useContext(UserContext);

  if (loggingIn) {
    return (
      <div className="px-6 lg:px-20 mx-auto py-8 lg:py-20 min-h-screen">
        Loading...
      </div>
    );
  }
  return <div className="px-6 lg:px-20 mx-auto py-8 lg:py-20">{children}</div>;
};
export default Body;
