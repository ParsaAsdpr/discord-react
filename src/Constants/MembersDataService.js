export const Members = [
  {
    _id: "535459462622740511",
    name: "Lisoo",
    tag: "9169",
    username: "poorsa",
    avatar: "/Avatars/Static/default3.png",
    dynamicAvatar: null,
    status: "online",
    customStatus: null,
    badges: [],
    banner: null,
    bannerColor: "#000f00",
    about: null,
    created: "Jan 17, 2019",
    themeColors: null,
    transparentProfile: false,
    servers: [
      {
        _id: "322846109712252928",
        name: "Forward Assault",
        icon: "/Avatars/Static/ForwardAssault.jpg",
        defaultChannel: "322846109712252928",
      },
    ],
    friends: [],
    isDeleted: false,
  },
  {
    _id: "294629958695911424",
    name: "a name",
    tag: "3528",
    username: "justausrnam",
    avatar: "/Avatars/Static/default1.png",
    dynamicAvatar: null,
    status: "offline",
    customStatus: null,
    badges: [],
    banner: null,
    bannerColor: "#FCA31D",
    about: null,
    created: "Mar 25, 2020",
    themeColors: null,
    transparentProfile: false,
    servers: [
      {
        _id: "322846109712252928",
        name: "Forward Assault",
        icon: "/Avatars/Static/ForwardAssault.jpg",
        defaultChannel: "322846109712252928",
      },
    ],
    friends: [],
    isDeleted: false,
  },
];

export function getUsers() {
  return Members.filter((m) => m);
}

export function getUser(id) {
  return Members.find((m) => m._id === id);
}
