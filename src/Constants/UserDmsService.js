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
      {
        _id: randomNumber,
        content: "ok here",
        authorID: "535459462622740511",
        attachment: null,
        time: 1689861038,
      },
      {
        _id: randomNumber,
        content: "ok what now",
        authorID: "294629958695911424",
        attachment: null,
        time: 1690206638,
      },
      {
        _id: randomNumber,
        content: "send me the link bro tf",
        authorID: "535459462622740511",
        attachment: null,
        time: 1690293136,
      },
      {
        _id: randomNumber,
        content: "ok wait",
        authorID: "294629958695911424",
        attachment: null,
        time: 1690293136,
      },
      {
        _id: randomNumber,
        content: "https://discord.gg/Nkd2Hk6S",
        authorID: "294629958695911424",
        attachment: null,
        time: 1690293136,
      },
      {
        _id: randomNumber,
        content: "hello",
        authorID: "294629958695911424",
        attachment: null,
        time: 1690293136,
      },
      {
        _id: randomNumber,
        content: "hello",
        authorID: "294629958695911424",
        attachment: null,
        time: 1690293136,
      },
      {
        _id: randomNumber,
        content: "hello",
        authorID: "294629958695911424",
        attachment: null,
        time: 1690293136,
      },
    ],
  },
  {
    _id: "747758150144229527",
    name: "bera",
    tag: "9999",
    username: "bwea",
    avatar: "/Avatars/Static/Brea.png",
    dynamicAvatar: "/Avatars/Dynamic/Brea.gif",
    messages: [],
  },
  {
    _id: "1060500137115385886",
    name: "Mehmet ❤ Asya",
    tag: "3034",
    username: "_imsunnybunny_",
    avatar: "/Avatars/Static/Mehmet ❤ Asya.png",
    dynamicAvatar: null,
    messages: [],
  },
  {
    _id: "544711857429282826",
    name: "Ashir",
    tag: "9169",
    username: "normalasianguy",
    avatar: "/Avatars/Static/Ashir.png",
    dynamicAvatar: null,
    messages: [],
  },
  {
    _id: "116275390695079945",
    name: "Nadeko",
    avatar: "/Avatars/Static/Nadeko.png",
    status: "online",
    customStatus: "Playing .h for help",
    dynamicAvatar: null,
    messages: []
  },
  {
    _id: "155149108183695360",
    name: "Dyno",
    avatar: "/Avatars/Static/Dyno.png",
    status: 'online',
    customStatus: 'Playing dyno.gg | ?help',
    dynamicAvatar: null,
    messages: []
  },    
  {
    _id: "708218616625233960",
    name: "RÆÍÑ",
    avatar: "/Avatars/Static/RÆÍÑ.png",
    status: 'offline',
    customStatus: null,
    dynamicAvatar: null,
    messages: []
  },    
  {
    _id: "758053179693727854",
    name: "Marash",
    avatar: "/Avatars/Static/default2.png",
    status: 'offline',
    customStatus: null,
    dynamicAvatar: null,
    messages: []
  },    
  {
    _id: "282859044593598464",
    name: "ProBot ✨",
    avatar: "/Avatars/Static/ProBot.png",
    status: 'offline',
    customStatus: null,
    dynamicAvatar: null,
    messages: []
  },    
  {
    _id: "506474218938957824",
    name: "Qioxyn",
    avatar: "/Avatars/Static/Qioxyn.png",
    status: 'offline',
    customStatus: null,
    dynamicAvatar: null,
    messages: []
  },    
  {
    _id: "567703512763334685",
    name: "ProBot Prime ✨",
    avatar: "/Avatars/Static/ProBot Prime.png",
    status: 'offline',
    customStatus: null,
    dynamicAvatar: null,
    messages: []
  },    
  {
    _id: "914679594022477834",
    name: "Savage 😼",
    avatar: "/Avatars/Static/default1.png",
    status: 'offline',
    customStatus: null,
    dynamicAvatar: null,
    messages: []
  },    
  {
    _id: "270904126974590976",
    name: "Dank Memer",
    avatar: "/Avatars/Static/Dank Memer.png",
    status: 'online',
    customStatus: 'Playing /help',
    dynamicAvatar: null,
    messages: []
  },    
  {
    _id: "791038510089502750",
    name: '" ❥ζ͜͡KIRTI♡🌸',
    avatar: "/Avatars/Static/Kirti.png",
    status: 'offline',
    customStatus: null,
    dynamicAvatar: null,
    messages: []
  },    
  {
    _id: "563434444321587202",
    name: "Maki",
    avatar: "/Avatars/Static/Maki.png",
    status: 'offline',
    customStatus: null,
    dynamicAvatar: null,
    messages: []
  },    
  {
    _id: "159985870458322944",
    name: "MEE6",
    avatar: "/Avatars/Static/MEE6.png",
    status: 'online',
    customStatus: 'Playing /characters',
    dynamicAvatar: null,
    messages: []
  },    
  {
    _id: "681532725546582030",
    name: "Luisa",
    avatar: "/Avatars/Static/Luisa.png",
    status: 'offline',
    customStatus: null,
    dynamicAvatar: null,
    messages: []
  },    
];

export function getDms(channelID) {
  return Dms.find((s) => s._id === channelID).messages;
}
