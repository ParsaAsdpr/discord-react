export const ServerCategories = 
  [
    {
      _id: "359093770261757952",
      name: "general",
      server: { _id: "322846109712252928", name: "Forward Assault" },
      channels: [
        { _id: "322846109712252928", name: "community", isDefault: true },
        { _id: "322953452076400640", name: "media", isDefault: false },
        { _id: "556561652422541312", name: "creators", isDefault: false },
        { _id: "588105181258973270", name: "send-emotes", isDefault: false },
        { _id: "361542775428349956", name: "command-bots", isDefault: false },
      ],
    },
];

export function getServerCategories(serverID) {
 return ServerCategories.filter((s) => s.server._id === serverID);
}

export function getCategoryChannels(id) {
  return ServerCategories.find((s) => s._id === id).channels;
}
