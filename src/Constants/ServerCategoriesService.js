export const ServerCategories = 
  [
    {
      _id: "359090935075831818",
      name: "welcome / information",
      server: { _id: "322846109712252928", name: "Forward Assault" },
      channels: [
        { _id: "839594470890143754", name: "welcome", isDefault: false, isRead: true },
        { _id: "795022449275174946", name: "rules", isDefault: false, isRead: true },
        { _id: "575439956819050496", name: "staff-list", isDefault: false, isRead: true },
        { _id: "322953072190160897", name: "announcements", isDefault: false, isRead: true },
        { _id: "936646972427882546", name: "sub-announcements", isDefault: false, isRead: true },
        { _id: "675437163776573450", name: "streams", isDefault: false, isRead: true },
        { _id: "468103874616623116", name: "giveaway", isDefault: false, isRead: true },
        { _id: "558024670528405515", name: "creator-club", isDefault: false, isRead: true },
        { _id: "618447272249917480", name: "official-callouts", isDefault: false, isRead: true },
      ],
    },
    {
      _id: "359093770261757952",
      name: "general",
      server: { _id: "322846109712252928", name: "Forward Assault" },
      channels: [
        { _id: "322846109712252928", name: "community", isDefault: true, isRead: true },
        { _id: "322953452076400640", name: "media", isDefault: false, isRead: true },
        { _id: "556561652422541312", name: "creators", isDefault: false, isRead: false },
        { _id: "588105181258973270", name: "send-emotes", isDefault: false, isRead: true },
        { _id: "361542775428349956", name: "command-bots", isDefault: false, isRead: false },
        { _id: "1056272512633274511", name: "helping-lucas", isDefault: false, isRead: false },
      ],
    },
    {
      _id: "860978937713393664",
      name: "game feed",
      server: { _id: "322846109712252928", name: "Forward Assault" },
      channels: [
        { _id: "863854300056256523", name: "polls", isDefault: true, isRead: true },
        { _id: "890265382257057802", name: "content", isDefault: false, isRead: true },
        { _id: "428247025016897548", name: "ideas-and-suggestions", isDefault: false, isRead: false },
        { _id: "429008014754971689", name: "bugs-and-glitches", isDefault: false, isRead: true },
        { _id: "875433404835975219", name: "cinematic-clips", isDefault: false, isRead: false },
        { _id: "511682602369810442", name: "screenshots", isDefault: false, isRead: false },
        { _id: "534401469898686466", name: "skins", isDefault: false, isRead: false },
      ],
    },
    {
      _id: "359092008293498880",
      name: "support/ reports",
      server: { _id: "322846109712252928", name: "Forward Assault" },
      channels: [
        { _id: "344458380385058816", name: "faq", isDefault: true, isRead: true },
        { _id: "322952779003854858", name: "support", isDefault: false, isRead: false },
        { _id: "322955314976522240", name: "hacker-reports", isDefault: false, isRead: false },
        { _id: "558415112583774228", name: "not-hacker-reports", isDefault: false, isRead: false },
        { _id: "717753154057535559", name: "call-a-mod", isDefault: false, isRead: true },
      ],
    },
    {
      _id: "360817328927145985",
      name: "clans / scrim arrangements",
      server: { _id: "322846109712252928", name: "Forward Assault" },
      channels: [
        { _id: "360252266869030915", name: "clans", isDefault: true, isRead: true },
        { _id: "359809718216032257", name: "scrims", isDefault: false, isRead: false },
      ],
    },
    {
      _id: "607525914607091713",
      name: "Parsatopia",
      server: { _id: "607525914607091712", name: "Parsatopia" },
      channels: [
        { _id: "700465075277791282", name: "general", isDefault: true, isRead: true },
      ],
    },
];

export function getServerCategories(serverID) {
 return ServerCategories.filter((s) => s.server._id === serverID);
}

export function getCategoryChannels(id) {
  return ServerCategories.find((s) => s._id === id).channels;
}
