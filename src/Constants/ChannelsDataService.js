export const ChannelsData = [
  {
    _id: "322846109712252928",
    name: "community",
    isDefault: true,
    category: {
      _id: "359093770261757952",
      name: "general",
      serverID: "322846109712252928",
    },
    messages: [
      {
        content: "test",
        attachment: null,
        time: "Today at 12:06",
        authorID: "823587546578944041",
        rolesColor: "#00ff07",
      },
      {
        content: "test",
        attachment: null,
        time: "Today at 12:06",
        authorID: "823587546578944041",
        rolesColor: "#00ff07",
      },
      {
        content: "test",
        attachment: null,
        time: "Today at 12:06",
        authorID: "823587546578944041",
        rolesColor: "#00ff07",
      },
      {
        content: "test",
        attachment: null,
        time: "Today at 12:06",
        authorID: "823587546578944041",
        rolesColor: "#00ff07",
      },
      {
        content: "test",
        attachment: null,
        time: "Today at 12:06",
        authorID: "823587546578944041",
        rolesColor: "#00ff07",
      },
      {
        content: "test",
        attachment: null,
        time: "Today at 12:06",
        authorID: "823587546578944041",
        rolesColor: "#00ff07",
      },
      {
        content: "test",
        attachment: null,
        time: "Today at 12:06",
        authorID: "823587546578944041",
        rolesColor: "#00ff07",
      },
      {
        content: "test",
        attachment: null,
        time: "Today at 12:06",
        authorID: "823587546578944041",
        rolesColor: "#00ff07",
      },
      {
        content: "test",
        attachment: null,
        time: "Today at 12:06",
        authorID: "823587546578944041",
        rolesColor: "#00ff07",
      },
      {
        content: "test",
        attachment: null,
        time: "Today at 12:06",
        authorID: "823587546578944041",
        rolesColor: "#00ff07",
      },
      {
        content: "test",
        attachment: null,
        time: "Today at 12:06",
        authorID: "823587546578944041",
        rolesColor: "#00ff07",
      },
      {
        content: "test",
        attachment: null,
        time: "Today at 12:06",
        authorID: "823587546578944041",
        rolesColor: "#00ff07",
      },
      {
        content: "test",
        attachment: null,
        time: "Today at 12:06",
        authorID: "823587546578944041",
        rolesColor: "#00ff07",
      },
      {
        content: "test",
        attachment: null,
        time: "Today at 12:06",
        authorID: "823587546578944041",
        rolesColor: "#00ff07",
      },
      {
        content: "test",
        attachment: null,
        time: "Today at 12:06",
        authorID: "823587546578944041",
        rolesColor: "#00ff07",
      },
      {
        content: "test",
        attachment: null,
        time: "Today at 12:06",
        authorID: "823587546578944041",
        rolesColor: "#00ff07",
      },
    ],
  },
  {
    _id: "322953452076400640",
    name: "media",
    isDefault: false,
    category: {
      _id: "359093770261757952",
      name: "general",
      serverID: "322846109712252928",
    },
    messages: [
      {
        content: "test",
        attachment: null,
        time: "Today at 12:06",
        authorID: "823587546578944041",
        rolesColor: "#00ff07",
      },
    ],
  },
  {
    _id: "556561652422541312",
    name: "creators",
    isDefault: false,
    category: {
      _id: "359093770261757952",
      name: "general",
      serverID: "322846109712252928",
    },
    messages: [
      {
        content: "test",
        attachment: null,
        time: "Today at 12:06",
        authorID: "823587546578944041",
        rolesColor: "#00ff07",
      },
    ],
  },
  {
    _id: "588105181258973270",
    name: "send-emotes",
    isDefault: false,
    category: {
      _id: "359093770261757952",
      name: "general",
      serverID: "322846109712252928",
    },
    messages: [
      {
        content: "test",
        attachment: null,
        time: "Today at 12:06",
        authorID: "823587546578944041",
        rolesColor: "#00ff07",
      },
    ],
  },
  {
    _id: "361542775428349956",
    name: "command-bots",
    isDefault: false,
    category: {
      _id: "359093770261757952",
      name: "general",
      serverID: "322846109712252928",
    },
    messages: [
      {
        content: "test",
        attachment: null,
        time: "Today at 12:06",
        authorID: "823587546578944041",
        rolesColor: "#00ff07",
      },
    ],
  },
  {
    _id: "700465075277791282",
    name: "general",
    isDefault: true,
    category: {
      _id: "607525914607091713",
      name: "Parsatopia",
      serverID: "607525914607091712",
    },
    messages: [
      {
        content: "test",
        attachment: null,
        time: "Today at 12:06",
        authorID: "823587546578944041",
        rolesColor: "#00ff07",
      },
    ],
  },
  {
    _id: "850765380887773207",
    name: "community",
    isDefault: true,
    category: {
      _id: "850765380887773205",
      name: "Text Channels",
      serverID: "850765380887773204",
    },
    messages: [
      {
        content: "test",
        attachment: null,
        time: "Today at 12:06",
        authorID: "823587546578944041",
        rolesColor: "#00ff07",
      },
    ],
  },
  {
    _id: "739854685040803862",
    name: "general",
    isDefault: true,
    category: {
      _id: "739854685040803860",
      name: "general",
      serverID: "739854684566585426",
    },
    messages: [
      {
        content: "test",
        attachment: null,
        time: "Today at 12:06",
        authorID: "823587546578944041",
        rolesColor: "#00ff07",
      },
    ],
  },

];

export function getMessages(channelID) {
  return ChannelsData.find((s) => s._id === channelID).messages;
}
