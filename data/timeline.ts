import type { Milestone } from "@/lib/types";

export const decades: string[] = ["1970-е", "1980-е", "1990-е", "2000-е", "2010-е", "2020-е"];

export const milestones: Milestone[] = [
  {
    id: "pong",
    year: 1972,
    decade: "1970-е",
    title: "Pong выводит видеоигры в бары",
    description:
      "Atari выпускает простую электронную версию настольного тенниса. Автомат с монетоприёмником окупается за считанные дни и запускает индустрию аркад.",
    breakthrough: "Коммерческие аркадные автоматы",
    landmarkGames: ["Pong", "Magnavox Odyssey"],
    accent: "sage"
  },
  {
    id: "space-invaders",
    year: 1978,
    decade: "1970-е",
    title: "Space Invaders и золотой век аркад",
    description:
      "Игра Taito становится мировым хитом: у автоматов выстраиваются очереди, а таблица рекордов делает соревнование частью игры.",
    breakthrough: "Растровая графика и таблицы рекордов",
    landmarkGames: ["Space Invaders", "Asteroids"],
    accent: "iris"
  },
  {
    id: "pac-man",
    year: 1980,
    decade: "1980-е",
    title: "Pac-Man создаёт первого игрового героя",
    description:
      "Namco делает ставку на персонажа и простую идею без стрельбы. Аудитория расширяется: в аркады приходят те, кто раньше обходил их стороной.",
    breakthrough: "Узнаваемый персонаж и ИИ противников",
    landmarkGames: ["Pac-Man", "Donkey Kong"],
    accent: "sky"
  },
  {
    id: "nes",
    year: 1985,
    decade: "1980-е",
    title: "NES возвращает рынок к жизни",
    description:
      "После краха 1983 года Nintendo выпускает в США приставку с лицензированием игр и контролем качества. Super Mario Bros. задаёт стандарт платформера.",
    breakthrough: "Домашние консоли и лицензирование разработчиков",
    landmarkGames: ["Super Mario Bros.", "The Legend of Zelda"],
    accent: "sage"
  },
  {
    id: "doom",
    year: 1993,
    decade: "1990-е",
    title: "Doom определяет жанр шутеров",
    description:
      "id Software распространяет первую часть условно-бесплатно, поддерживает моды и сетевую игру. Жанр шутеров от первого лица становится массовым.",
    breakthrough: "Быстрая псевдо-3D графика, моды и сетевой deathmatch",
    landmarkGames: ["Doom", "Wolfenstein 3D"],
    accent: "iris"
  },
  {
    id: "playstation",
    year: 1994,
    decade: "1990-е",
    title: "PlayStation приводит 3D и компакт-диски",
    description:
      "Sony выходит на рынок консолей с оптическими дисками и трёхмерной графикой. Игры получают кинематографичные вставки и оркестровую музыку.",
    breakthrough: "Полноценное 3D и оптические носители",
    landmarkGames: ["Final Fantasy VII", "Metal Gear Solid"],
    accent: "sky"
  },
  {
    id: "half-life",
    year: 1998,
    decade: "1990-е",
    title: "Half-Life рассказывает историю изнутри",
    description:
      "Valve показывает сюжет без отрыва от игрового процесса: никаких роликов, только скриптовые сцены глазами героя. Модификации вырастают в отдельные игры.",
    breakthrough: "Повествование без роликов и поддержка модов",
    landmarkGames: ["Half-Life", "Counter-Strike"],
    accent: "sage"
  },
  {
    id: "steam",
    year: 2003,
    decade: "2000-е",
    title: "Steam меняет способ покупать игры",
    description:
      "Valve запускает сервис, который сначала доставляет обновления, а затем становится главным магазином для ПК. Цифровая дистрибуция вытесняет коробки.",
    breakthrough: "Цифровая дистрибуция и автоматические обновления",
    landmarkGames: ["Half-Life 2", "Counter-Strike: Source"],
    accent: "sky"
  },
  {
    id: "wow",
    year: 2004,
    decade: "2000-е",
    title: "World of Warcraft делает MMO массовыми",
    description:
      "Blizzard собирает миллионы игроков в одном мире и выстраивает подписочную модель. Онлайн-сообщества становятся самостоятельной культурой.",
    breakthrough: "Массовые онлайн-миры",
    landmarkGames: ["World of Warcraft", "EVE Online"],
    accent: "iris"
  },
  {
    id: "mobile",
    year: 2008,
    decade: "2000-е",
    title: "App Store открывает мобильный рынок",
    description:
      "Смартфон превращается в игровую платформу. Короткие сессии и бесплатные игры с внутренними покупками привлекают самую широкую аудиторию в истории.",
    breakthrough: "Сенсорное управление и модель free-to-play",
    landmarkGames: ["Angry Birds", "Candy Crush Saga"],
    accent: "sage"
  },
  {
    id: "minecraft",
    year: 2011,
    decade: "2010-е",
    title: "Minecraft и расцвет независимых игр",
    description:
      "Игра одного разработчика выходит из раннего доступа и становится самой продаваемой в истории. Инди-студии доказывают, что идея важнее бюджета.",
    breakthrough: "Ранний доступ и песочницы с генерацией мира",
    landmarkGames: ["Minecraft", "Terraria"],
    accent: "sky"
  },
  {
    id: "witcher-3",
    year: 2015,
    decade: "2010-е",
    title: "Открытые миры становятся нормой",
    description:
      "The Witcher 3 доказывает, что огромная карта может нести продуманные побочные истории. Студии по всему миру перенимают этот стандарт.",
    breakthrough: "Открытые миры с сильным сюжетом",
    landmarkGames: ["The Witcher 3", "Breath of the Wild"],
    accent: "iris"
  },
  {
    id: "next-gen",
    year: 2020,
    decade: "2020-е",
    title: "Трассировка лучей и SSD в консолях",
    description:
      "PlayStation 5 и Xbox Series X приносят быстрые накопители и аппаратную трассировку лучей. Загрузочные экраны исчезают, а свет в играх становится физически правдоподобным.",
    breakthrough: "Ray tracing и SSD как стандарт",
    landmarkGames: ["Cyberpunk 2077", "Demon's Souls"],
    accent: "sage"
  },
  {
    id: "bg3",
    year: 2023,
    decade: "2020-е",
    title: "Игры возвращаются к глубине",
    description:
      "Baldur's Gate 3 собирает награды и доказывает: масштабные одиночные RPG с реактивным сюжетом по-прежнему востребованы. Индустрия спорит о будущем ИИ и облачных сервисов.",
    breakthrough: "Реактивные нарративы и облачные сервисы",
    landmarkGames: ["Baldur's Gate 3", "Elden Ring"],
    accent: "sky"
  }
];
