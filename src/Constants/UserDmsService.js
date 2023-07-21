const min = Math.pow(10, 18); // Minimum value (inclusive)
const max = Math.pow(10, 19) - 1; // Maximum value (inclusive)

const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

export const Dms = [
  {
    _id: "747758150144229527",
    name: "brea the air",
    tag: "9999",
    avatar: "/Avatars/Brea.gif",
    messages: [
      {
        id: randomNumber,
        content: "hello",
        authorID: "747758150144229527",
        attachment: null,
        time: "Today at 12:06",
      },
      {
        id: randomNumber,
        content: "hello",
        authorID: "823587546578944041",
        attachment: null,
        time: "Today at 12:06",
      },
      {
        id: randomNumber,
        content: "hello",
        authorID: "747758150144229527",
        attachment: null,
        time: "Today at 12:06",
      },
    ],
  },
  {
    _id: "823587546578944041",
    name: "Parsa",
    tag: "9169",
    avatar: "/Avatars/danihit.jpeg",
    messages: [],
  },
  {
    _id: "1060500137115385886",
    name: "Mehmet ❤ Asya",
    tag: "3034",
    avatar: "/Avatars/Mehmet ❤ Asya.png",
    messages: [
      {
        id: randomNumber,
        content: "hello",
        authorID: "1060500137115385886",
        attachment: null,
        time: "Today at 12:06",
      },
      {
        id: randomNumber,
        content: "hello",
        authorID: "823587546578944041",
        attachment: null,
        time: "Today at 12:06",
      },
      {
        id: randomNumber,
        content: "hello",
        authorID: "1060500137115385886",
        attachment: null,
        time: "Today at 12:06",
      },
    ],
  },
];

export function getDms(channelID) {
  return Dms.find((s) => s._id === channelID).messages;
}
