export const Invites = [
  {
    key: "76xQXARS",
    creatorId: "294629958695911424",
    server: {
      _id: "322846109712252928",
      name: "Forward Assault",
      icon: "/Avatars/Static/ForwardAssault.jpg",
      isVerified: true,
      online: 10,
      members: 34,
    },
  },
];

export function getInvite(key) {
  return Invites.find((s) => s.key === key);
}
