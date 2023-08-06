const min = Math.pow(10, 18); // Minimum value (inclusive)
const max = Math.pow(10, 19) - 1; // Maximum value (inclusive)

const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

export const Dms = [
  {
    _id: "294629958695911424",
    name: "a name",
    tag: "3528",
    username: "justausrnam",
    avatar: "/Avatars/Static/default3.png",
    dynamicAvatar: null,
    messages: [
    ],
  },
];

export function getDms(channelID) {
  return Dms.find((s) => s._id === channelID).messages;
}
