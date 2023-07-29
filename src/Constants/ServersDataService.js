export const ServersData = [
  {
    _id: "322846109712252928",
    name: "Forward",
    icon: "/Avatars/Static/Forward.jpg",
    isVerified: true,
    isDiscoverable: true,
    categories: [
      {
        _id: "359093770261757952",
        name: "general",
        channels: [
          { _id: "322846109712252928", name: "community", isDefault: true },
          { _id: "322953452076400640", name: "media", isDefault: false },
          { _id: "556561652422541312", name: "creators", isDefault: false },
          { _id: "588105181258973270", name: "send-emotes", isDefault: false },
          { _id: "361542775428349956", name: "command-bots", isDefault: false },
        ],
      },
    ],
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
        ],
      },
      {
        _id: "451615370793713665",
        name: "discord moderators",
        color: "#00ff07",
        members: [
          {
            _id: "823587546578944041",
            name: "Parsa",
            tag: "9169",
            username: 'poorsa',
            avatar: "/Avatars/Static/Parsa.jpg",
            dynamicAvatar: null,
            badges: [],
            status: "online",
            banner: null,
            about: null,
            created: "Jul 16, 2022",
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
        _id: "823587546578944041",
        name: "Parsa",
        tag: "9169",
        username: 'poorsa',
        avatar: "/Avatars/Static/Parsa.jpg",
        dynamicAvatar: null,
        badges: [],
        banner: null,
        about: null,
        created: "Jul 16, 2022",
        roles: [
          {
            _id: "451615370793713665",
            name: "discord moderators",
            color: "#00ff07",
          },
        ],
      },
    ],
    boosters: [],
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
            _id: "823587546578944041",
            name: "Parsa",
            tag: "9169",
            username: 'poorsa',
            avatar: "/Avatars/Static/Parsa.jpg",
            badges: [],
            status: "online",
            banner: null,
            about: null,
            created: "Jul 16, 2022",
            joined: "Jul 16, 2022",
          },
        ],
      },
    ],
    members: [
      {
        _id: "823587546578944041",
        name: "Parsa",
        tag: "9169",
        username: 'poorsa',
        avatar: "/Avatars/Static/Parsa.jpg",
        badges: [],
        banner: null,
        about: null,
        created: "Jul 16, 2022",
        joined: "Jul 16, 2022",
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
    categories: [
      {
        _id: "850765380887773205",
        name: "Text Channels",
        channels: [
          { _id: "850765380887773207", name: "community", isDefault: true },
        ],
      },
    ],
    roles: [],
    members: [
      {
        _id: "823587546578944041",
        name: "Parsa",
        tag: "9169",
        username: 'poorsa',
        avatar: "/Avatars/Static/Parsa.jpg",
        badges: [],
        status: "online",
        banner: null,
        about: null,
        created: "Jul 16, 2022",
        joined: "Jul 16, 2022",
        roles: [],
      },
    ],
    boosters: [],
  },
  {
    _id: "739854684566585426",
    name: "Deleted User fy5y5a7c's server",
    icon: null,
    isVerified: false,
    isDiscoverable: false,
    categories: [
      {
        _id: "739854685040803860",
        name: "general",
        channels: [
          { _id: "739854685040803862", name: "general", isDefault: true },
        ],
      },
    ],
    roles: [
      {
        _id: "1041843492311289907",
        name: "Dick Sucker",
        color: "#ff0000",
        members: [
          {
            _id: "823587546578944041",
            name: "Parsa",
            tag: "9169",
            username: 'poorsa',
            avatar: "/Avatars/Static/Parsa.jpg",
            badges: [],
            status: "online",
            banner: null,
            about: null,
            created: "Jul 16, 2022",
            joined: "Jul 16, 2022",
            roles: [{ _id: "1041843492311289907", name: "Dick Sucker" }],
          },
        ],
      },
    ],
    members: [
      {
        _id: "823587546578944041",
        name: "Parsa",
        tag: "9169",
        username: 'poorsa',
        avatar: "/Avatars/Static/Parsa.jpg",
        badges: [],
        banner: null,
        about: null,
        created: "Jul 16, 2022",
        joined: "Jul 16, 2022",
        roles: [
          { _id: "1041843492311289907", name: "Dick Sucker", color: "#ff0000" },
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
