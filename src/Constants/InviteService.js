export const Invites = [
  {
    key: "76xQXARS",
    creatorId: "747758150144229527",
    server: {
      _id: "322846109712252928",
      name: "Forward Assault",
      icon: "/Avatars/Static/ForwardAssault.jpg",
      isVerified: true,
      online: 10,
      members: 34,
    },
  },
  {
    key: "Nkd2Hk6S",
    creatorId: "294629958695911424",
    server: {
      _id: "849057016084824166",
      name: "OTUZBİRCİLER",
      icon: "/Avatars/Static/turkish.jpg",
      isVerified: true,
      online: 10,
      members: 39,
    },
  },
];

export function getInvite(key) {
  return Invites.find((s) => s.key === key);
}
