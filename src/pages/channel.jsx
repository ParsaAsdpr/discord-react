import ChatScreen from "../Components/ChatScreen/ChatScreen";
import ChatTopbar from "../Components/ChatScreen/ChatTopbar";
import MembersList from "../Components/ChatScreen/MembersList";
import TextBox from "../Components/ChatScreen/TextBox";
import ServerSidebar from "../Components/ServerSidebar/ServerSidebar";
import { getServer } from "../Constants/ServersDataService";
import { useParams } from "react-router-dom";

export default function Channel(props) {
    const {serverID, channelID } = useParams()
    
    const server = getServer(serverID);

  return (
      <div className="w-full flex h-screen">
        <ServerSidebar
          serverName={server.name}
          isDiscoerable={server.isDiscoerable}
          isVerified={server.isVerified}
          boosters={server.boosters.length}
          serverID={serverID}
        ></ServerSidebar>
        <div className="flex flex-col w-full h-screen">
          <div className="w-full">
            <ChatTopbar channelName="community" />
          </div>
          <div className="flex h-full overflow-hidden">
            <div className="w-full h-full flex flex-col pr-1">
              <ChatScreen></ChatScreen>
              <TextBox channelName={"community"} />
            </div>
            <MembersList serverID={serverID} />
          </div>
        </div>
      </div>
  );
}
