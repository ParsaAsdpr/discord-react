export const ServersData = [
  {
    _id: "322846109712252928",
    name: "Forward Assault",
    icon: "/Avatars/Static/ForwardAssault.jpg",
    isVerified: true,
    isDiscoverable: true,
    roles: [
      {
        _id: "322952336421158922",
        name: "developers",
        color: "#ff0000",
        members: [],
      },
      {
        _id: "630453208464097339",
        name: "moderators",
        color: "#ffff00",
        members: [
          {
            _id: "747758150144229527",
            name: "bera",
            avatar: "/Avatars/Static/Brea.png",
            status: "dnd",
          },
        ],
      },
      {
        _id: "451615370793713665",
        name: "discord moderators",
        color: "#00ff07",
        members: [],
      },
      {
        _id: "322953695941754912",
        name: "Community",
        color: "#608bd6",
        members: [
          {
            _id: "535459462622740511",
            name: "Lisoo",
            avatar: "/Avatars/Static/default3.png",
            status: "online",
            joined: "Jul 16, 2022",
          },
        ],
      },
      {
        _id: "322953695941754912",
        name: "community",
        color: "#608bd6",
        members: [],
      },
    ],
    members: [
      {
        _id: "747758150144229527",
        name: "bera",
        roles: [
          { _id: "630453208464097339", name: "moderators", color: "#ffff00" },
        ],
      },
      {
        _id: "535459462622740511",
        name: "Lisoo",
        roles: [
          {
            _id: "322953695941754912",
            name: "Community",
            color: "#608bd6",
          },
        ],
      },
    ],
    boosters: [
      { _id: "285120201740124161", name: "Nigger" },
      { _id: "285120201740124161", name: "Nigger" },
    ],
  },
  {
    _id: "607525914607091712",
    name: "Parsatopia",
    icon: null,
    isVerified: false,
    isDiscoverable: false,
    categories: [
      {
        _id: "607525914607091713",
        name: "Parsatopia",
        channels: [
          { _id: "700465075277791282", name: "general", isDefault: true },
        ],
      },
    ],
    roles: [
      {
        _id: "700434523136983050",
        name: "The King",
        color: "#ff0000",
        members: [
          {
            _id: "535459462622740511",
            name: "Lisoo",
            tag: "6696",
            username: "parsia",
            avatar: "/Avatars/Static/default3.png",
            badges: [],
            status: "online",
            banner: null,
            about: null,
            created: "Jan 17, 2019",
            joined: "Jan 17, 2019",
          },
        ],
      },
    ],
    members: [
      {
        _id: "535459462622740511",
        name: "Lisoo",
        tag: "6696",
        username: "parsia",
        avatar: "/Avatars/Static/default3.png",
        badges: [],
        banner: null,
        about: null,
        created: "Jan 17, 2019",
        joined: "Jan 17, 2019",
        roles: [
          { _id: "700434523136983050", name: "The King", color: "#ff0000" },
        ],
      },
    ],
    boosters: [],
  },
  {
    _id: "850765380887773204",
    name: "Parsa's emote Collection",
    icon: null,
    isVerified: false,
    isDiscoverable: false,
    roles: [],
    members: [
      {
        _id: "535459462622740511",
        name: "Lisoo",
        roles: [],
      },
    ],
    boosters: [],
  },
  {
    _id: "739854684566585426",
    name: "Deleted User's server",
    icon: null,
    isVerified: false,
    isDiscoverable: false,
    roles: [
      {
        _id: "1041843492311289907",
        name: "Dick Sucker",
        color: "#ff0000",
        members: [
          {
            _id: "535459462622740511",
            name: "Lisoo",
            avatar: "/Avatars/Static/default3.png",
            status: "online",
            roles: [{ _id: "1041843492311289907", name: "Dick Sucker" }],
          },
        ],
      },
    ],
    members: [
      {
        _id: "535459462622740511",
        name: "Lisoo",
        avatar: "/Avatars/Static/default3.png",
        roles: [
          { _id: "1041843492311289907", name: "Dick Sucker", color: "#ff0000" },
        ],
      },
    ],
    boosters: [],
  },
  {
    _id: "849057016084824166",
    name: "OTUZBİRCİLER",
    icon: "/Avatars/Static/turkish.jpg",
    isVerified: false,
    isDiscoverable: false,
    roles: [
      {
        _id: "549057016084824166",
        name: "idk",
        color: "#ff0000",
        members: [
          {
            _id: "535459462622740511",
            name: "Lisoo",
            avatar: "/Avatars/Static/default3.png",
            status: "online",
            roles: [{ _id: "1041843492311289907", name: "Dick Sucker" }],
          },
        ],
      },
    ],
    members: [
      {
        _id: "535459462622740511",
        name: "Lisoo",
        avatar: "/Avatars/Static/default3.png",
        roles: [
          { _id: "549057016084824166", name: "idk", color: "#ff0000" },
        ],
      },
    ],
    boosters: [],
  },
];

export function getServers() {
  return ServersData.filter((s) => s);
}

export function getServer(id) {
  return ServersData.find((s) => s._id === id);
}
