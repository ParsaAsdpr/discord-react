import ChatScreen from "../Components/ChatScreen/ChatScreen";
import ChatTopbar from "../Components/ChatScreen/ChatTopbar";
import MembersList from "../Components/ChatScreen/MembersList";
import TextBox from "../Components/ChatScreen/TextBox";
import DmsSidebar from "../Components/DmsSidebar/DmsSidebar";
import ServerSidebar from "../Components/ServerSidebar/ServerSidebar";
import { getMessages } from "../Constants/ChannelsDataService";
import { getServer } from "../Constants/ServersDataService";
import { useParams } from "react-router-dom";
import { getDms } from "../Constants/UserDmsService";
import DmProfileSidebar from "../Components/ChatScreen/DmProfileSidebar";

export default function Channel(props) {
  const { serverID, channelID } = useParams();

  const server = getServer(serverID);

  const messages = serverID !== "@me" ? getMessages(channelID) : getDms(channelID);

  return (
    <>
      {serverID !== "@me" ? (
        <div className="w-full flex h-screen ">
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
                <ChatScreen channelID={channelID} messages={messages}></ChatScreen>
                <TextBox channelName={"community"} />
              </div>
              <MembersList serverID={serverID} />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex ">
          <DmsSidebar />
          <div className="flex flex-col w-full h-screen">
            <div className="w-full">
              <ChatTopbar channelName="community" />
            </div>
            <div className="flex h-full overflow-hidden">
              <div className="w-full h-full flex flex-col pr-1">
                <ChatScreen channelID={channelID} messages={messages}></ChatScreen>
                <TextBox channelName={"community"} />
              </div>
              <DmProfileSidebar avatar={'/Avatars/Mehmet ❤ Asya.png'} username={'Mehmet ❤ Asya'} tag={'3034'} created={'Jan 05, 2023'} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
