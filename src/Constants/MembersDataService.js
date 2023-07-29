export const Members = [
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
        name: "Forward",
        icon: "/Avatars/Static/Forward.jpg",
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
        name: "Forward",
        icon: "/Avatars/Static/Forward.jpg",
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
        name: "Forward",
        icon: "/Avatars/Static/Forward.jpg",
        defaultChannel: "322846109712252928",
      },
    ],
    friends: [],
    isDeleted: false,
  },
  {
    _id: "708218616625233960",
    name: "a name",
    tag: "3528",
    username: 'justausrnam',
    avatar: "/Avatars/Static/default.png",    
    dynamicAvatar: null,
    badges: [],
    banner: null,
    bannerColor: "#FCA31D",
    about: null,
    created: "Mar 25, 2020",
    themeColors: null,
    transparentProfile: false,
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
        name: "Forward",
        icon: "/Avatars/Static/Forward.jpg",
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
