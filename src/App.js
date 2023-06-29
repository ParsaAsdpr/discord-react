import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Friends from "./pages/Friends";
import Channel from "./pages/channel";

function App() {
  return (
    <Layout title="Friends">
      <div className="flex flex-row">
        <Routes>
          <Route path="/channels/@me" element={<Friends />} />
          <Route path="/channels/:serverID/:channelID" element={<Channel />} />
          <Route path="/" element={<Navigate to="/channels/@me" />} />
        </Routes>
      </div>
    </Layout>
  );
}

export default App;
