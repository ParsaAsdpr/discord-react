const min = Math.pow(10, 18); // Minimum value (inclusive)
const max = Math.pow(10, 19) - 1; // Maximum value (inclusive)

const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

export const Dms = [
  {
    _id: "747758150144229527",
    name: "brea the air",
    tag: "9999",
    username: "bwea",
    avatar: "/Avatars/Static/Brea.png",
    dynamicAvatar: "/Avatars/Dynamic/Brea.gif",
    messages: [
      {
        _id: randomNumber,
        content: "hello https://nigger.com",
        authorID: "747758150144229527",
        attachment: null,
        time: "Today at 12:06",
      },
      {
        _id: randomNumber,
        content: "hello",
        authorID: "823587546578944041",
        attachment: null,
        time: "Today at 12:06",
      },
      {
        _id: randomNumber,
        content: "hello",
        authorID: "747758150144229527",
        attachment: null,
        time: "Today at 12:06",
      },
    ],
  },
  {
    _id: "1060500137115385886",
    name: "Mehmet ❤ Asya",
    tag: "3034",
    username: '_imsunnybunny_',
    avatar: "/Avatars/Static/Mehmet ❤ Asya.png",
    dynamicAvatar: null,
    messages: [
      {
        _id: randomNumber,
        content: "hello",
        authorID: "1060500137115385886",
        attachment: null,
        time: "Today at 12:06",
      },
      {
        _id: randomNumber,
        content: "hello",
        authorID: "823587546578944041",
        attachment: null,
        time: "Today at 12:06",
      },
      {
        _id: randomNumber,
        content: "😏",
        authorID: "1060500137115385886",
        attachment: null,
        time: "Today at 12:06",
      },
    ],
  },
  {
    _id: "544711857429282826",
    name: "Ashir",
    tag: "9169",
    username: 'normalasianguy',
    avatar: "/Avatars/Static/Ashir.png",
    dynamicAvatar: null,
    messages: [
      {
        _id: randomNumber,
        content: 'hello',
        authorID: "544711857429282826",
        attachment: '/Attachments/SPOILER_kurd.jpeg',
        time: "Today at 12:06",
      },
      {
        _id: randomNumber,
        content: "hello",
        authorID: "823587546578944041",
        attachment: null,
        time: "Today at 12:06",
      },
      {
        _id: randomNumber,
        content: "hello",
        authorID: "544711857429282826",
        attachment: null,
        time: "Today at 12:06",
      },
    ],
  },
];

export function getDms(channelID) {
  return Dms.find((s) => s._id === channelID).messages;
}
