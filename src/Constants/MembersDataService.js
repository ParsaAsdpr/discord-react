export const Members = [
  {
    _id: "747758150144229527",
    name: "brea the air",
    tag: "9999",
    username: 'bwea',
    avatar: "/Avatars/Static/Brea.png",
    dynamicAvatar: "/Avatars/Dynamic/Brea.gif",
    badges: [],
    banner: '/Banners/Brea.gif',
    bannerColor: "#000000",
    about: "donkey",
    created: "Aug 25, 2020",
    themeColors: ["#ff00c8", "#000000"],
    transparentProfile: true,
    roles: [
      { _id: "630453208464097339", name: "moderators", color: "#ffff00" },
    ],
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
    _id: "823587546578944041",
    name: "Parsa",
    tag: "9169",
    username: 'poorsa',
    avatar: "/Avatars/Static/Parsa.jpg",
    dynamicAvatar: null,
    badges: [],
    banner: null,
    bannerColor: "#000f00",
    about: null,
    created: "Jul 16, 2022",
    themeColors: null,
    transparentProfile: true,
    roles: [
      {
        _id: "451615370793713665",
        name: "discord moderators",
        color: "#00ff07",
      },
    ],
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
    _id: "1060500137115385886",
    name: "Mehmet ❤ Asya",
    tag: "3034",
    username: '_imsunnybunny_',
    avatar: "/Avatars/Static/Mehmet ❤ Asya.png",
    dynamicAvatar: null,
    badges: [],
    banner: null,
    bannerColor: "#292814",
    about: null,
    created: "Jan 05, 2023",
    themeColors: null,
    transparentProfile: true,
    roles: [
      {
        _id: "451615370793713665",
        name: "discord moderators",
        color: "#00ff07",
      },
    ],
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
    _id: "544711857429282826",
    name: "Ashir",
    tag: "0272",
    username: 'normalasianguy',
    avatar: "/Avatars/Static/Ashir.png",    
    dynamicAvatar: null,
    badges: [],
    banner: "/Banners/Ashir.gif",
    bannerColor: "#000000",
    about: null,
    created: "Feb 19, 2019",
    themeColors: ["#061e31", "#745824"],
    transparentProfile: true,
    roles: [
      {
        _id: "451615370793713665",
        name: "discord moderators",
        color: "#00ff07",
      },
    ],
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
