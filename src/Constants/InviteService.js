export const Invites = 
  [
    {
        key: '76xQXARS',
        creatorId: '747758150144229527',
        server: {
            _id: "322846109712252928",
            name: "Forward",
            icon: "/Avatars/Static/Forward.jpg",
            isVerified: true,    
            online: 10,
            members: 34,    
        }
    }
];


export function getInvite(key) {
  return Invites.find((s) => s.key === key);
}
