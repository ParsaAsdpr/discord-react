export const Members = [
  {
    _id: "747758150144229527",
    name: "brea the air",
    tag: "9999",
    avatar: "/Avatars/Brea.gif",
    badges: [],
    banner: null,
    about: "donkey",
    created: "Aug 25, 2020",
    roles: [
      { _id: "630453208464097339", name: "moderators", color: "#ffff00" },
    ],
    servers: [
      {
        _id: "322846109712252928",
        name: "Forward Assault",
        icon: "/Avatars/ForwardAssault.jpg",
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
    avatar: "/Avatars/danihit.jpeg",
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
    servers: [
      {
        _id: "322846109712252928",
        name: "Forward Assault",
        icon: "/Avatars/ForwardAssault.jpg",
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
