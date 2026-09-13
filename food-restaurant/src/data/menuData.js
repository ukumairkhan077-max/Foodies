const menuData = [
  {
    category: "Burger",
    items: [
      { id: "b1", title: "Classic Beef Burger", image: "https://media.istockphoto.com/id/833525200/photo/bacon-cheeseburger-flying-on-white-background.jpg?s=612x612&w=0&k=20&c=bL9KK2ybZok9elkh0Zoku38Npb6bkUN_qI2QgFEB9dI=", rating: 4.8, reviews: 120, price: 599 },
      { id: "b2", title: "Zinger Burger", image: "https://media.istockphoto.com/id/2061716709/photo/grilled-rib-burger.jpg?b=1&s=612x612&w=0&k=20&c=Wr5FVrvoxpf4areNnoIXzsGOy4xQb1qa3c6vw5PyZdk=", rating: 4.6, reviews: 98, price: 549 },
      { id: "b3", title: "Double Cheese Burger", image: "https://media.istockphoto.com/id/2080254408/photo/burger-with-beef-meat-cheese-lettuce-onion-tomato-cucumber-mayo-and-ketchup-on-an-old-wooden.jpg?s=612x612&w=0&k=20&c=jvRjF_IMJ-cPiFxHKJk4FttIJdkluVA3hsAKKQzAnAE=", rating: 4.7, reviews: 143, price: 699 },
      { id: "b4", title: "BBQ Chicken Burger", image: "https://media.istockphoto.com/id/2165645866/photo/delicious-chicken-burger-with-spicy-french-fries.jpg?s=612x612&w=0&k=20&c=IbJXTU8-GraoKE0anjDwT9dWtaWQOgv4OAnYiSL94o0=", rating: 4.5, reviews: 76, price: 629 },
    ],
  },
  {
    category: "Pizza",
    items: [
      { id: "p1", title: "Margherita Pizza", image: "https://media.istockphoto.com/id/1263929021/photo/delicious-pizza-on-wood-table.jpg?s=612x612&w=0&k=20&c=pmZgnS1P0fmi55cnkY0P34pyr7An_HbEKDYygkEsJZM=", rating: 4.7, reviews: 110, price: 899 },
      { id: "p2", title: "Chicken Tikka Pizza", image: "https://media.istockphoto.com/id/521404747/photo/hot-homemade-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=ZN8k700a0eimr4unEDaThY1g2dDs3LVx8aCQZhs5J1k=", rating: 4.8, reviews: 132, price: 999 },
      { id: "p3", title: "Fajita Pizza", image: "https://media.istockphoto.com/id/1347984677/photo/deep-dish-meat-pizza.jpg?s=612x612&w=0&k=20&c=4IdBELbTWV6g0HWbSODh_lUo_tuJ2CQuxzGfhOPDWmo=", rating: 4.6, reviews: 87, price: 949 },
    ],
  },
  {
    category: "Chicken",
    items: [
      { id: "c1", title: "Grilled Chicken Platter", image: "https://media.istockphoto.com/id/1438415993/photo/spicy-grilled-chicken-wings-with-sauce-on-a-wooden-plate-with-tomato-and-herb-on-a-dark.jpg?s=612x612&w=0&k=20&c=Jm73hZZx-TsLRYSo4emidV3Ctp0xPj1xJJOwjUMBf7c=", rating: 4.6, reviews: 64, price: 749 },
      { id: "c2", title: "Crispy Fried Chicken", image: "https://media.istockphoto.com/id/986086594/photo/sliced-grilled-chicken-breast-on-a-bamboo-cutting-board.jpg?s=612x612&w=0&k=20&c=Kcm2fq2BwCvdODTgB-QOSk4IGTaEsLwzvtQkKnhd-Cs=", rating: 4.9, reviews: 205, price: 649 },
      { id: "c3", title: "Peri Peri Wings", image: "https://media.istockphoto.com/id/1022308366/photo/chicken-wings-close-up.jpg?s=612x612&w=0&k=20&c=bXG0xADAaKvRRAyiW4mEcM59V7UlIdE-QY64B8C-Oc0=", rating: 4.5, reviews: 58, price: 499 },
    ],
  },
  {
    category: "Desi Food",
    items: [
      { id: "d1", title: "Chicken Karahi", image: "https://media.istockphoto.com/id/1448510790/photo/chiken-karai.jpg?s=612x612&w=0&k=20&c=3_LVRfCRgQGwj5RuXc6mrLhfZwasEWNmUheQ6DGSreM=", rating: 4.8, reviews: 176, price: 1099 },
      { id: "d2", title: "Beef Nihari", image: "https://media.istockphoto.com/id/879609238/photo/mutton-curry-or-or-masala-gosht-or-indian-lamb-rogan-josh.jpg?s=612x612&w=0&k=20&c=OsTpirmWjtRom2PTyZawxDDgiZ-hQESFiNR160VY_MA=", rating: 4.7, reviews: 93, price: 899 },
      { id: "d3", title: "Chicken Biryani", image: "https://media.istockphoto.com/id/1314727656/photo/biriyani.jpg?s=612x612&w=0&k=20&c=gYuqqOxxcHpZXiU4aJkFhuNLR0J8ljR09U9JbLfQDvU=", rating: 4.9, reviews: 240, price: 449 },
    ],
  },
  {
    category: "Drinks",
    items: [
      { id: "dr1", title: "Fresh Lemonade", image: "https://media.istockphoto.com/id/500202440/photo/freshly-made-lemonade-with-a-hint-of-mint.jpg?s=612x612&w=0&k=20&c=sn3OLyO3awUjDhX55Qjsx44ftQ8ABqA8zMS0zjPIxDA=", rating: 4.5, reviews: 40, price: 199 },
      { id: "dr2", title: "Mango Shake", image: "https://media.istockphoto.com/id/953704044/photo/mango-lassi-or-smoothie-in-big-glass-with-mint-leaf-side-angle-isolated-over-colourful.jpg?s=612x612&w=0&k=20&c=M-fR7N-MS8avMv_uRxyLL6v0f-_Lw1jbi18SHDTkTyU=", rating: 4.7, reviews: 62, price: 299 },
      { id: "dr3", title: "Soft Drink", image: "https://media.istockphoto.com/id/458464735/photo/coke.jpg?s=612x612&w=0&k=20&c=YbmiazMmY0DkWh_W8T0pBkOgai2k62hGF1TJn9EC5W0=", rating: 4.3, reviews: 28, price: 99 },
    ],
  },
];

export default menuData;