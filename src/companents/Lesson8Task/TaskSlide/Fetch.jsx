const clients = [
  { name: "Alice", phone: "+7 579 872 69 53", card: "8363 8453 9654 0263" },
  { name: "Tom", phone: "+7 839 784 02 73", card: "9651 8632 9632 0763" },
  { name: "Xeyyam", phone: "+7 932 875 64 74", card: "9651 8632 9632 0763" },
  { name: "Kate", phone: "+7 792 074 812 03", card: "0765 4567 9234 9222" },
  { name: "Amil", phone: "+7 974 973 17 83", card: "0742 7541 8765 6622" },
  { name: "Nik", phone: "+7 792 074 812 03", card: "0711 2239 9763 6263" },
  { name: "Sam", phone: "+7 792 074 812 03", card: "0711 2279 6389 6376" },
  { name: "Max", phone: "+7 456 433 34 67", card: "9651 8632 9632 0763" },
  { name: "Bill", phone: "+7 753 832 32 42", card: "9651 8632 9632 0763" },
  { name: "Helen", phone: "+7 792 074 812 03", card: "9653 7820 9765 7543" }
];
export const fetchClients = () =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve(clients[Math.floor(Math.random() * clients.length)]);
    }, Math.random() * 2500)
  );

