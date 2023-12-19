interface Collection {
  collection: Array<string>;
}

export interface InterfaceInit {
  theme?: "light" | "dark";
  hex: string;
  collections: Array<Collection>;
}

const init: InterfaceInit = {
  theme: "dark",
  hex: "#3498db",
  collections: [
    {
      collection: ["item1", "item2", "item3"],
    },
    {
      collection: ["item4", "item5"],
    },
  ],
};

export default init;
