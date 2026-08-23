import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowRight,
  CalendarDays,
  Check,
  CreditCard,
  Clock3,
  Globe2,
  Instagram,
  Luggage,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  Phone,
  Plane,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";

const contacts = [
  { name: "Murat", phone: "+90 534 426 4673", url: "https://wa.me/905344264673" },
  { name: "Aziz", phone: "+90 531 620 1230", url: "https://wa.me/905316201230" },
];

const teamMembers = [
  {
    name: "Aziz Azizov",
    role: "Co-Founder & Regional Representative — Istanbul & Bodrum",
    photo: "/__mockup/easytransfer/aziz-azizov.jpeg",
    phone: "+90 531 620 12 30",
    url: "https://wa.me/905316201230",
    details: [
      "🎓 Education: Faculty of Economics and Administrative Sciences, Dumlupınar University",
      "🇬🇧 English: C1 — English Academy / English House",
      "🌍 Languages: Turkish • Russian • English",
      "📍 Region: Istanbul & Bodrum",
    ],
  },
  {
    name: "Murat Aydemir",
    role: "Co-Founder & Regional Representative — Antalya & Cappadocia",
    photo: "/__mockup/easytransfer/murat-aydemir.jpeg",
    phone: "+90 534 426 46 73",
    url: "https://wa.me/905344264673",
    details: [
      "🎓 Education: Faculty of Economics and Administrative Sciences, Dumlupınar University",
      "🇬🇧 English: C1 — English Academy / English House",
      "🌍 Languages: Turkish • Russian • English",
      "📍 Region: Antalya & Cappadocia",
    ],
  },
];

const englishCopy = {
  navBook: "BOOK A RIDE",
  navFleet: "OUR FLEET",
  navWhy: "WHY US",
  navDestinations: "DESTINATIONS",
  whatsapp: "WhatsApp",
  heroKicker: "Antalya · Istanbul · Cappadocia",
  heroTitle: "Arrive",
  heroTitleAccent: "well.",
  heroDescription: "Private airport transfers across Türkiye, planned around your journey. Fixed prices, polished vehicles, and a driver who is there before you land.",
  bookTransfer: "Book a transfer",
  talkLocal: "Talk to a local",
  scroll: "Scroll to plan your arrival",
  bookingKicker: "Your journey, sorted",
  bookingTitle: "Get a fixed price in seconds.",
  oneWay: "One way",
  return: "Return",
  airportToHotel: "Airport → Hotel",
  hotelToAirport: "Hotel → Airport",
  submitted: "Your route is ready. Choose a host below to continue on WhatsApp.",
  from: "From",
  airportPlaceholder: "Enter airport name",
  hotelPlaceholder: "Enter hotel name",
  to: "To",
  required: "Required",
  date: "Date",
  arrivalDate: "Arrival date",
  departureDate: "Departure date",
  time: "Time",
  arrivalTime: "Arrival time",
  departureTime: "Departure time",
  guests: "Passenger count",
  passengerCountEmpty: "Enter passenger names",
  passengerCountSingle: "passenger",
  passengerCountMany: "passengers",
  passengerNames: "Passenger names",
  passengerNamesPlaceholder: "Full names of everyone travelling",
  passengerNamesHint: "One full name per line or separated by commas",
  flightNumber: "Flight number",
  returnFlightNumber: "Return flight number",
  returnDepartureTime: "Return departure time",
  payment: "Payment",
  paymentCash: "Cash to the driver",
  paymentTurkishCard: "Transfer to a Turkish card",
  paymentRussianCard: "Transfer to a Russian card",
  optional: "Optional",
  getPrice: "Get price in WhatsApp",
  priceRequest: "Please send the fixed price for this route.",
  bookingNote: "No hidden fees · Flight monitoring included · We will send the fixed price in WhatsApp",
  whyKicker: "The easy part of travel",
  whyTitle: "A quiet welcome to Türkiye.",
  whyText: "You have done the long flight. We take care of the small things: a name board in arrivals, chilled water, room for every suitcase, and a direct route to your door.",
  reliableTitle: "Reliable by design",
  reliableText: "Your driver tracks the flight, waits when plans change, and never surprises you with the price.",
  calmTitle: "A better kind of calm",
  calmText: "Clean VIP interiors, considered details, and local hosts who know the way without asking.",
  humanTitle: "Human, 24/7",
  humanText: "A real person is one WhatsApp message away before, during, and after your transfer.",
  fleetKicker: "Travel your way",
  fleetTitle: "Choose your space.",
  fleetText: "Every vehicle is selected, maintained, and prepared for the road ahead.",
  mostRequested: "Most requested",
  upTo6: "Up to 6 passengers",
  vipInterior: "VIP interior",
  largeLuggage: "Large luggage",
  vitoTransferText: "Before your journey, we send you a photo of the exact vehicle assigned to your transfer — so you know what to look for and can begin your trip with complete peace of mind.",
  previousVitoPhoto: "Previous Mercedes-Benz Vito VIP photo",
  nextVitoPhoto: "Next Mercedes-Benz Vito VIP photo",
  vitoPhotoOne: "A calm VIP cabin beneath a starry ceiling",
  vitoPhotoTwo: "Signature comfort with room to relax",
  vitoPhotoThree: "Warm leather and ambient lighting",
  vitoPhotoFour: "Spacious seating for an effortless journey",
  vitoPhotoFive: "A refined Mercedes-Benz interior",
  vitoPhotoSix: "Your private ride, ready for the road",
  sprinterTransferText: "For larger groups, we share a photo of the exact Sprinter assigned to your transfer in advance — so everyone knows which comfortable ride to look for.",
  previousSprinterPhoto: "Previous Mercedes Sprinter photo",
  nextSprinterPhoto: "Next Mercedes Sprinter photo",
  sprinterPhotoOne: "A bright cabin with captain's chairs",
  sprinterPhotoTwo: "Executive comfort with ambient light",
  sprinterPhotoThree: "Warm leather for the whole group",
  sprinterPhotoFour: "Space to settle in and travel together",
  sprinterTitle: "Mercedes Sprinter",
  sprinterText: "Comfortable group travel, with room for 12–16 guests and everything they brought along.",
  exploreGroup: "Explore group travel",
  vipTailored: "VIP, tailored",
  vipText: "Private chauffeur. Maximum comfort.",
  destinationsKicker: "Where we meet you",
  destinationsTitle: "From runway to retreat.",
  planRoute: "Plan your route",
  antalyaKicker: "The Mediterranean, at your pace",
  antalyaTitle: "Antalya, made beautifully simple.",
  antalyaText: "Ancient gates, palm-lined shores, and the clear blue Mediterranean. Arrive relaxed and let our local team take care of every road between the airport and your hotel.",
  antalyaServiceTitle: "Airport ↔ hotel transfers",
  antalyaServiceText: "Private pickup from Antalya Airport to your hotel or resort, with a comfortable return transfer arranged for your flight home.",
  previousAntalyaPhoto: "Previous Antalya photo",
  nextAntalyaPhoto: "Next Antalya photo",
  antalyaPhotoOne: "Hadrian's Gate in the Antalya sun",
  antalyaPhotoTwo: "Palm trees along the evening coast",
  antalyaPhotoThree: "Bougainvillea framing the Mediterranean",
  antalyaPhotoFour: "A quiet waterfront promenade",
  antalyaPhotoFive: "A palm-lined walk by the sea",
  antalyaPhotoSix: "Antalya's elegant resort coast",
  antalyaPhotoSeven: "The shore at golden hour",
  antalyaPhotoEight: "A relaxed evening on the promenade",
  istanbulKicker: "A city between two worlds",
  istanbulTitle: "Istanbul, made easy.",
  istanbulText: "Cross the Bosphorus, wander historic streets, and let our local team take care of the road between the airport and your hotel.",
  istanbulServiceTitle: "Airport ↔ hotel transfers",
  istanbulServiceText: "Private pickup at Istanbul Airport or Sabiha Gökçen, direct to your hotel — and back again when it is time to fly home.",
  previousPhoto: "Previous Istanbul photo",
  nextPhoto: "Next Istanbul photo",
  photoCounter: "Photo",
  istanbulPhotoOne: "Bosphorus at golden hour",
  istanbulPhotoTwo: "The red tram of İstiklal",
  istanbulPhotoThree: "Tea above the Bosphorus",
  istanbulPhotoFour: "A calm table near Galata",
  istanbulPhotoFive: "Sunset over the old city",
  bodrumKicker: "Aegean in its gentlest form",
  bodrumTitle: "Bodrum, in your rhythm.",
  bodrumText: "Whitewashed streets, bougainvillea, and bright Aegean water. Arrive slowly and let our local team make every transfer feel effortless.",
  bodrumServiceTitle: "Airport ↔ hotel transfers",
  bodrumServiceText: "A smooth private ride from Bodrum–Milas Airport to your hotel, with a comfortable return transfer ready for departure day.",
  previousBodrumPhoto: "Previous Bodrum photo",
  nextBodrumPhoto: "Next Bodrum photo",
  bodrumPhotoOne: "White houses at golden hour",
  bodrumPhotoTwo: "A bright Aegean street",
  bodrumPhotoThree: "Bougainvillea in a quiet lane",
  bodrumPhotoFour: "A path opening to the sea",
  bodrumPhotoFive: "Turquoise corners of Bodrum",
  bodrumPhotoSix: "Aegean light by the shore",
  cappadociaKicker: "A landscape written in stone",
  cappadociaTitle: "Cappadocia, above and beyond.",
  cappadociaText: "Wake up beneath a sky full of balloons, wander through ancient valleys, and let our local team carry you smoothly between the airport and your hotel.",
  cappadociaServiceTitle: "Airport ↔ hotel transfers",
  cappadociaServiceText: "Private pickup from Kayseri or Nevşehir Airport to your cave hotel, with a calm return journey arranged for your flight home.",
  previousCappadociaPhoto: "Previous Cappadocia photo",
  nextCappadociaPhoto: "Next Cappadocia photo",
  cappadociaPhotoOne: "Balloons over Göreme at sunrise",
  cappadociaPhotoTwo: "A valley filled with hot-air balloons",
  cappadociaPhotoThree: "The morning launch",
  cappadociaPhotoFour: "A stone hotel in the valley",
  cappadociaPhotoFive: "Cappadocia glowing at dusk",
  cappadociaPhotoSix: "A quiet view across the fairy chimneys",
  footerTagline: "Your comfortable transfer in Türkiye.",
  about: "About us",
  aboutKicker: "Meet the EasyTransfer team",
  aboutTitle: "Your Local Travel Partner in Türkiye",
  aboutText: "We are the EasyTransfer team, specialising in comfortable transfers and individual travel services across Türkiye. With local knowledge, language skills, and an understanding of regional infrastructure, we provide personal service and support at every stage of your journey.",
  closeAbout: "Close about us",
  whatsappSupport: "WhatsApp support",
  chooseHost: "Choose your host",
  directLine: "Direct line",
  replyTime: "We usually reply within a few minutes.",
  sendBooking: "Send booking to WhatsApp",
  bookingReady: "Your booking details are ready. Choose who you would like to message.",
  close: "Close contact chooser",
};

const russianCopy = {
  navBook: "ЗАБРОНИРОВАТЬ",
  navFleet: "НАШ АВТОПАРК",
  navWhy: "ПОЧЕМУ МЫ",
  navDestinations: "НАПРАВЛЕНИЯ",
  whatsapp: "WhatsApp",
  heroKicker: "Анталья · Стамбул · Каппадокия",
  heroTitle: "Приезжайте",
  heroTitleAccent: "с комфортом.",
  heroDescription: "Частные трансферы из аэропортов по всей Турции. Фиксированная цена, комфортные автомобили и водитель, который встретит вас до выхода из аэропорта.",
  bookTransfer: "Забронировать трансфер",
  talkLocal: "Написать менеджеру",
  scroll: "Спланируйте поездку",
  bookingKicker: "Ваша поездка — под контролем",
  bookingTitle: "Получите фиксированную цену за несколько секунд.",
  oneWay: "В одну сторону",
  return: "Туда и обратно",
  airportToHotel: "Аэропорт → Отель",
  hotelToAirport: "Отель → Аэропорт",
  submitted: "Маршрут готов. Выберите менеджера ниже, чтобы продолжить в WhatsApp.",
  from: "Откуда",
  airportPlaceholder: "Введите название аэропорта",
  hotelPlaceholder: "Введите название отеля",
  to: "Куда",
  required: "Обязательно",
  date: "Дата",
  arrivalDate: "Дата прилёта",
  departureDate: "Дата вылета",
  time: "Время",
  arrivalTime: "Время прилёта",
  departureTime: "Время вылета",
  guests: "Количество пассажиров",
  passengerCountEmpty: "Введите ФИ пассажиров",
  passengerCountSingle: "пассажир",
  passengerCountMany: "пассажиров",
  passengerNames: "ФИ пассажиров",
  passengerNamesPlaceholder: "Иван Иванов\nАнна Петрова",
  passengerNamesHint: "Одно полное имя в строке или через запятую",
  flightNumber: "Номер рейса",
  returnFlightNumber: "Номер обратного рейса",
  returnDepartureTime: "Время вылета обратно",
  payment: "Оплата",
  paymentCash: "Наличными водителю",
  paymentTurkishCard: "Перевод на турецкую карту",
  paymentRussianCard: "Перевод на российскую карту",
  optional: "Необязательно",
  getPrice: "Узнать цену в WhatsApp",
  priceRequest: "Пожалуйста, сообщите фиксированную стоимость этого маршрута.",
  bookingNote: "Без скрытых платежей · Отслеживаем рейс · Фиксированную цену отправим в WhatsApp",
  whyKicker: "Путешествовать легко",
  whyTitle: "Спокойное начало поездки в Турции.",
  whyText: "После долгого перелёта мы берём на себя детали: табличка в аэропорту, прохладная вода, место для багажа и прямой маршрут до отеля.",
  reliableTitle: "Надёжность в деталях",
  reliableText: "Водитель отслеживает рейс, учитывает изменения и заранее знает маршрут. Цена не меняется.",
  calmTitle: "Комфорт без лишней суеты",
  calmText: "Чистый VIP-салон, продуманные детали и местные водители, которые знают дорогу.",
  humanTitle: "Живой менеджер 24/7",
  humanText: "До, во время и после поездки вы можете написать реальному человеку в WhatsApp.",
  fleetKicker: "Выберите свой формат",
  fleetTitle: "Пространство для вашей поездки.",
  fleetText: "Каждый автомобиль подготовлен к комфортной дороге и проверен перед поездкой.",
  mostRequested: "Самый популярный",
  upTo6: "До 6 пассажиров",
  vipInterior: "VIP-салон",
  largeLuggage: "Большой багажник",
  vitoTransferText: "Перед поездкой мы заранее отправим вам фото именно этого автомобиля — вы узнаете его ещё до встречи в аэропорту и спокойно начнёте свой путь.",
  previousVitoPhoto: "Предыдущее фото Mercedes-Benz Vito VIP",
  nextVitoPhoto: "Следующее фото Mercedes-Benz Vito VIP",
  vitoPhotoOne: "Спокойный VIP-салон под звёздным потолком",
  vitoPhotoTwo: "Фирменный комфорт и пространство для отдыха",
  vitoPhotoThree: "Тёплая кожа и мягкая подсветка",
  vitoPhotoFour: "Просторные кресла для лёгкой поездки",
  vitoPhotoFive: "Изысканный салон Mercedes-Benz",
  vitoPhotoSix: "Ваш автомобиль уже готов к дороге",
  sprinterTransferText: "Для больших групп мы заранее отправим фото именно того Sprinter, который будет выполнять ваш трансфер — так вся компания легко узнает свой комфортный автомобиль.",
  previousSprinterPhoto: "Предыдущее фото Mercedes Sprinter",
  nextSprinterPhoto: "Следующее фото Mercedes Sprinter",
  sprinterPhotoOne: "Светлый салон с удобными креслами",
  sprinterPhotoTwo: "Комфорт бизнес-класса и мягкая подсветка",
  sprinterPhotoThree: "Тёплая кожа для всей группы",
  sprinterPhotoFour: "Пространство, чтобы ехать вместе с комфортом",
  sprinterTitle: "Mercedes Sprinter",
  sprinterText: "Комфортная поездка для группы из 12–16 гостей с местом для всего багажа.",
  exploreGroup: "Для больших групп",
  vipTailored: "VIP под вас",
  vipText: "Личный водитель. Максимальный комфорт.",
  destinationsKicker: "Куда мы вас доставим",
  destinationsTitle: "Из аэропорта — прямо к отдыху.",
  planRoute: "Спланировать маршрут",
  antalyaKicker: "Средиземное море — в вашем ритме",
  antalyaTitle: "Анталья — легко и красиво.",
  antalyaText: "Древние ворота, пальмы у берега и чистое Средиземное море. Приезжайте расслабленными, а о дороге между аэропортом и отелем позаботится наша команда.",
  antalyaServiceTitle: "Трансферы аэропорт ↔ отель",
  antalyaServiceText: "Индивидуально встретим в аэропорту Антальи, отвезём в отель или на курорт и организуем комфортный обратный трансфер к вылету.",
  previousAntalyaPhoto: "Предыдущее фото Антальи",
  nextAntalyaPhoto: "Следующее фото Антальи",
  antalyaPhotoOne: "Ворота Адриана под солнцем Антальи",
  antalyaPhotoTwo: "Пальмы на вечернем побережье",
  antalyaPhotoThree: "Бугенвиллея над Средиземным морем",
  antalyaPhotoFour: "Тихая набережная у воды",
  antalyaPhotoFive: "Прогулка среди пальм у моря",
  antalyaPhotoSix: "Элегантное побережье Антальи",
  antalyaPhotoSeven: "Берег в золотом свете",
  antalyaPhotoEight: "Спокойный вечер на набережной",
  istanbulKicker: "Город между двумя континентами",
  istanbulTitle: "Стамбул — легко.",
  istanbulText: "Пересеките Босфор, прогуляйтесь по историческим улицам, а дорогу между аэропортом и отелем оставьте нашей команде.",
  istanbulServiceTitle: "Трансферы аэропорт ↔ отель",
  istanbulServiceText: "Встретим в аэропорту Стамбула или Сабиха Гёкчен, отвезём прямо в отель и организуем обратный трансфер к вылету.",
  previousPhoto: "Предыдущее фото Стамбула",
  nextPhoto: "Следующее фото Стамбула",
  photoCounter: "Фото",
  istanbulPhotoOne: "Босфор в золотой час",
  istanbulPhotoTwo: "Красный трамвай Истикляль",
  istanbulPhotoThree: "Чай над Босфором",
  istanbulPhotoFour: "Спокойный столик у Галаты",
  istanbulPhotoFive: "Закат над старым городом",
  bodrumKicker: "Самое мягкое настроение Эгейского моря",
  bodrumTitle: "Бодрум — в вашем ритме.",
  bodrumText: "Белые дома, бугенвиллея и яркое Эгейское море. Приезжайте без спешки, а о дороге позаботится наша команда.",
  bodrumServiceTitle: "Трансферы аэропорт ↔ отель",
  bodrumServiceText: "Комфортно отвезём из аэропорта Бодрум–Милас в отель и организуем обратный трансфер к вашему вылету.",
  previousBodrumPhoto: "Предыдущее фото Бодрума",
  nextBodrumPhoto: "Следующее фото Бодрума",
  bodrumPhotoOne: "Белые дома в золотом свете",
  bodrumPhotoTwo: "Солнечная улица Эгейского побережья",
  bodrumPhotoThree: "Бугенвиллея в тихом переулке",
  bodrumPhotoFour: "Дорога к морю",
  bodrumPhotoFive: "Бирюзовые уголки Бодрума",
  bodrumPhotoSix: "Эгейский свет у берега",
  cappadociaKicker: "Пейзаж, высеченный из камня",
  cappadociaTitle: "Каппадокия — выше и дальше.",
  cappadociaText: "Проснитесь под небом, полным воздушных шаров, прогуляйтесь по древним долинам, а дорогу между аэропортом и отелем оставьте нашей команде.",
  cappadociaServiceTitle: "Трансферы аэропорт ↔ отель",
  cappadociaServiceText: "Организуем индивидуальную встречу в аэропорту Кайсери или Невшехир, доставим до пещерного отеля и подготовим спокойный обратный трансфер к вашему вылету.",
  previousCappadociaPhoto: "Предыдущее фото Каппадокии",
  nextCappadociaPhoto: "Следующее фото Каппадокии",
  cappadociaPhotoOne: "Воздушные шары над Гёреме на рассвете",
  cappadociaPhotoTwo: "Долина, наполненная воздушными шарами",
  cappadociaPhotoThree: "Утренний запуск шаров",
  cappadociaPhotoFour: "Каменный отель в долине",
  cappadociaPhotoFive: "Каппадокия в вечернем свете",
  cappadociaPhotoSix: "Тихий вид на сказочные дымоходы",
  footerTagline: "Ваш комфортный трансфер в Турции.",
  about: "О нас",
  aboutKicker: "Знакомьтесь с командой EasyTransfer",
  aboutTitle: "Your Local Travel Partner in Türkiye",
  aboutText: "Мы — команда EasyTransfer, специализирующаяся на организации комфортных трансферов и индивидуальных туристических услуг в Турции. Благодаря знанию регионов, языков и местной инфраструктуры мы обеспечиваем нашим гостям персональный сервис и поддержку на каждом этапе путешествия.",
  closeAbout: "Закрыть раздел «О нас»",
  whatsappSupport: "Поддержка WhatsApp",
  chooseHost: "Выберите менеджера",
  directLine: "Прямая связь",
  replyTime: "Обычно отвечаем в течение нескольких минут.",
  sendBooking: "Отправить бронь в WhatsApp",
  bookingReady: "Данные бронирования готовы. Выберите менеджера, которому хотите написать.",
  close: "Закрыть выбор контакта",
};

const translations = {
  EN: englishCopy,
  RU: { ...englishCopy, ...russianCopy },
};
type Language = keyof typeof translations;

function AboutUsDialog({
  open,
  onClose,
  copy,
}: {
  open: boolean;
  onClose: () => void;
  copy: typeof englishCopy;
}) {
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-[#07121a]/55 p-3 backdrop-blur-sm sm:items-center sm:p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="about-title"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <div className="max-h-[calc(100dvh-1.5rem)] w-full max-w-4xl overflow-y-auto rounded-[28px] border border-[#d9c6a3] bg-[#faf8f3] shadow-2xl sm:max-h-[calc(100dvh-2.5rem)]">
        <div className="sticky top-0 z-10 flex items-start justify-between border-b border-[#e5ded1] bg-[#faf8f3]/95 px-5 py-5 backdrop-blur-md sm:px-7">
          <div className="pr-4">
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#aa7b3c]">{copy.aboutKicker}</p>
            <h2 id="about-title" className="font-serif text-2xl text-[#102530] sm:text-3xl">{copy.aboutTitle}</h2>
          </div>
          <button onClick={onClose} aria-label={copy.closeAbout} className="shrink-0 rounded-full p-2 text-[#607078] transition hover:bg-[#ebe4d8]">
            <X size={20} />
          </button>
        </div>
        <div className="p-5 sm:p-7">
          <p className="max-w-3xl text-sm leading-7 text-[#617176] sm:text-base">{copy.aboutText}</p>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {teamMembers.map((member) => (
              <article key={member.name} className="rounded-3xl border border-[#e2d8c8] bg-white p-5 shadow-[0_10px_30px_rgba(16,37,48,.05)]">
                <div className="flex items-center gap-4">
                  <img src={member.photo} alt={`Portrait of ${member.name}`} className="h-20 w-20 shrink-0 rounded-full border-2 border-[#d5b77b] object-cover object-top" />
                  <div>
                    <h3 className="font-serif text-2xl leading-tight text-[#17333e]">{member.name}</h3>
                    <p className="mt-1 text-xs leading-5 text-[#8d6b3d]">{member.role}</p>
                  </div>
                </div>
                <ul className="mt-5 space-y-2 text-xs leading-5 text-[#586a70]">
                  {member.details.map((detail) => <li key={detail}>{detail}</li>)}
                  <li>
                    <a href={member.url} target="_blank" rel="noreferrer" className="font-semibold text-[#28764f] transition hover:text-[#1d5c3d] hover:underline">
                      📞 WhatsApp: {member.phone}
                    </a>
                  </li>
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function WhatsAppChooser({
  open,
  onClose,
  message,
  language,
}: {
  open: boolean;
  onClose: () => void;
  message: string;
  language: Language;
}) {
  if (!open) return null;
  const copy = translations[language];
  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-[#07121a]/45 p-4 backdrop-blur-sm sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-title"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <div className="w-full max-w-md overflow-hidden rounded-[28px] border border-[#d9c6a3] bg-[#faf8f3] shadow-2xl">
        <div className="flex items-start justify-between border-b border-[#e5ded1] px-6 py-5">
          <div>
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#aa7b3c]">
             {message ? copy.sendBooking : copy.directLine}
            </p>
            <h2 id="contact-title" className="font-serif text-2xl text-[#102530]">
              {copy.chooseHost}
            </h2>
             <p className="mt-1 text-sm text-[#657178]">{message ? copy.bookingReady : copy.replyTime}</p>
          </div>
           <button onClick={onClose} aria-label={copy.close} className="rounded-full p-2 text-[#607078] transition hover:bg-[#ebe4d8]">
            <X size={19} />
          </button>
        </div>
        <div className="space-y-3 p-5">
          {contacts.map((contact) => (
            <a
              key={contact.name}
               href={message ? `${contact.url}?text=${encodeURIComponent(message)}` : contact.url}
              target="_blank"
              rel="noreferrer"
              onClick={onClose}
              className="group flex items-center justify-between rounded-2xl border border-[#e1d8ca] bg-white px-4 py-4 transition hover:-translate-y-0.5 hover:border-[#b99055] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#b99055]"
            >
              <span className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e5f1e9] text-[#28764f]">
                  <MessageCircle size={21} />
                </span>
                <span>
                  <span className="block font-semibold text-[#17313b]">{contact.name}</span>
                  <span className="block text-sm text-[#66757a]">{contact.phone}</span>
                </span>
              </span>
              <ArrowRight className="text-[#b99055] transition group-hover:translate-x-1" size={18} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

type GallerySlide = {
  src: string;
  alt: string;
  caption: string;
};

function VitoGallery({ copy }: { copy: typeof englishCopy }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides: GallerySlide[] = [
    { src: "/__mockup/easytransfer/vito-01.jpeg", alt: "Mercedes-Benz Vito VIP cabin with a starry ceiling", caption: copy.vitoPhotoOne },
    { src: "/__mockup/easytransfer/vito-02.jpeg", alt: "Mercedes-Benz Vito VIP cabin with spacious white seats", caption: copy.vitoPhotoTwo },
    { src: "/__mockup/easytransfer/vito-03.jpeg", alt: "Mercedes-Benz Vito VIP cabin with warm leather seats", caption: copy.vitoPhotoThree },
    { src: "/__mockup/easytransfer/vito-04.jpeg", alt: "Spacious Mercedes-Benz Vito passenger cabin", caption: copy.vitoPhotoFour },
    { src: "/__mockup/easytransfer/vito-05.jpeg", alt: "Refined Mercedes-Benz Vito interior", caption: copy.vitoPhotoFive },
    { src: "/__mockup/easytransfer/vito-06.jpeg", alt: "Mercedes-Benz Vito VIP vehicle ready for transfer", caption: copy.vitoPhotoSix },
  ];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 4400);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  const showSlide = (index: number) => {
    setActiveSlide((index + slides.length) % slides.length);
  };

  return (
    <>
      {slides.map((slide, index) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${index === activeSlide ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d232d] via-[#0d232d]/45 to-[#0d232d]/10" />
      <div className="absolute right-5 top-5 z-20 flex items-center gap-2 rounded-full border border-white/20 bg-[#102a34]/55 px-2 py-2 backdrop-blur-sm">
        <span className="px-2 text-[10px] font-bold uppercase tracking-[.18em] text-[#d5b77b]">{copy.photoCounter} {String(activeSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
        <button type="button" onClick={() => showSlide(activeSlide - 1)} aria-label={copy.previousVitoPhoto} className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-sm transition hover:bg-white/20">←</button>
        <button type="button" onClick={() => showSlide(activeSlide + 1)} aria-label={copy.nextVitoPhoto} className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-sm transition hover:bg-white/20">→</button>
      </div>
      <div className="absolute right-6 top-[4.5rem] z-20 flex gap-1.5" role="tablist" aria-label="Mercedes-Benz Vito VIP photos">
        {slides.map((slide, index) => (
          <button type="button" key={slide.src} onClick={() => showSlide(index)} role="tab" aria-selected={index === activeSlide} aria-label={`${copy.photoCounter} ${index + 1}`} className={`h-1.5 rounded-full transition-all ${index === activeSlide ? "w-7 bg-[#d5b77b]" : "w-1.5 bg-white/45 hover:bg-white/80"}`} />
        ))}
      </div>
    </>
  );
}

function SprinterGallery({ copy }: { copy: typeof englishCopy }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides: GallerySlide[] = [
    { src: "/__mockup/easytransfer/sprinter-01.jpeg", alt: "Mercedes Sprinter passenger cabin with blue ambient lighting", caption: copy.sprinterPhotoOne },
    { src: "/__mockup/easytransfer/sprinter-02.jpeg", alt: "Mercedes Sprinter executive cabin with white seats", caption: copy.sprinterPhotoTwo },
    { src: "/__mockup/easytransfer/sprinter-03.jpeg", alt: "Mercedes Sprinter group cabin with warm leather seats", caption: copy.sprinterPhotoThree },
    { src: "/__mockup/easytransfer/sprinter-04.jpeg", alt: "Mercedes Sprinter spacious passenger cabin with tables", caption: copy.sprinterPhotoFour },
  ];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 4600);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  const showSlide = (index: number) => {
    setActiveSlide((index + slides.length) % slides.length);
  };

  return (
    <div className="absolute inset-x-0 top-0 h-52 overflow-hidden rounded-t-[28px]">
      {slides.map((slide, index) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${index === activeSlide ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-[#c8b18a] via-[#c8b18a]/20 to-transparent" />
      <div className="absolute right-4 top-4 z-20 flex items-center gap-1.5 rounded-full border border-white/30 bg-[#17333e]/75 px-1.5 py-1.5 text-white backdrop-blur-sm">
        <span className="px-2 text-[10px] font-bold uppercase tracking-[.16em] text-[#f1d39d]">{copy.photoCounter} {String(activeSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
        <button type="button" onClick={() => showSlide(activeSlide - 1)} aria-label={copy.previousSprinterPhoto} className="flex h-7 w-7 items-center justify-center rounded-full border border-white/25 text-xs transition hover:bg-white/20">←</button>
        <button type="button" onClick={() => showSlide(activeSlide + 1)} aria-label={copy.nextSprinterPhoto} className="flex h-7 w-7 items-center justify-center rounded-full border border-white/25 text-xs transition hover:bg-white/20">→</button>
      </div>
      <div className="absolute bottom-4 left-7 z-20 flex gap-1.5" role="tablist" aria-label="Mercedes Sprinter photos">
        {slides.map((slide, index) => (
          <button type="button" key={slide.src} onClick={() => showSlide(index)} role="tab" aria-selected={index === activeSlide} aria-label={`${copy.photoCounter} ${index + 1}`} className={`h-1.5 rounded-full transition-all ${index === activeSlide ? "w-7 bg-[#17333e]" : "w-1.5 bg-[#17333e]/45 hover:bg-[#17333e]/80"}`} />
        ))}
      </div>
    </div>
  );
}

function DestinationGallery({
  copy,
  slides,
  kicker,
  title,
  text,
  serviceTitle,
  serviceText,
  previousPhoto,
  nextPhoto,
  ariaLabel,
}: {
  copy: typeof englishCopy;
  slides: GallerySlide[];
  kicker: string;
  title: string;
  text: string;
  serviceTitle: string;
  serviceText: string;
  previousPhoto: string;
  nextPhoto: string;
  ariaLabel: string;
}) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 4800);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  const showSlide = (index: number) => {
    setActiveSlide((index + slides.length) % slides.length);
  };

  return (
    <div className="mt-10 overflow-hidden rounded-[30px] bg-[#17333e] p-3 text-[#f7f4ec] shadow-[0_20px_55px_rgba(16,37,48,.14)] md:p-4">
      <div className="grid overflow-hidden rounded-[23px] bg-[#102a34] lg:grid-cols-[1.06fr_.94fr]">
        <div className="relative min-h-[390px] overflow-hidden bg-[#102a34] sm:min-h-[470px]">
          {slides.map((slide, index) => (
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${index === activeSlide ? "opacity-100" : "opacity-0"}`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-[#071b24]/90 via-[#102a34]/10 to-[#102a34]/10" />
          <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 sm:inset-x-7 sm:bottom-7">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[.24em] text-[#d5b77b]">{copy.photoCounter} {String(activeSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
              <p className="mt-2 max-w-xs font-serif text-2xl leading-tight sm:text-3xl">{slides[activeSlide].caption}</p>
            </div>
            <div className="flex shrink-0 gap-2">
              <button type="button" onClick={() => showSlide(activeSlide - 1)} aria-label={previousPhoto} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-[#102a34]/55 text-lg transition hover:bg-white/20">←</button>
              <button type="button" onClick={() => showSlide(activeSlide + 1)} aria-label={nextPhoto} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-[#102a34]/55 text-lg transition hover:bg-white/20">→</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[.27em] text-[#d5b77b]">{kicker}</p>
            <h3 className="max-w-md font-serif text-4xl leading-[.98] tracking-[-.04em] sm:text-5xl">{title}</h3>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/65">{text}</p>
          </div>
          <div className="mt-10 border-t border-white/15 pt-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#f7f4ec]"><Navigation size={16} className="text-[#d5b77b]" /> {serviceTitle}</div>
            <p className="mt-3 max-w-md text-sm leading-6 text-white/55">{serviceText}</p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs text-white/70">
              <span className="rounded-full border border-white/15 px-3 py-1.5">{copy.airportToHotel}</span>
              <span className="rounded-full border border-white/15 px-3 py-1.5">{copy.hotelToAirport}</span>
            </div>
            <a href="#booking" className="group mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#d5b77b]">{copy.planRoute} <ArrowRight size={16} className="transition group-hover:translate-x-1" /></a>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-2 px-2 pb-1 pt-4" role="tablist" aria-label={ariaLabel}>
        {slides.map((slide, index) => <button type="button" key={slide.src} onClick={() => showSlide(index)} role="tab" aria-selected={index === activeSlide} aria-label={`${copy.photoCounter} ${index + 1}`} className={`h-1.5 rounded-full transition-all ${index === activeSlide ? "w-9 bg-[#d5b77b]" : "w-1.5 bg-white/30 hover:bg-white/60"}`} />)}
      </div>
    </div>
  );
}

function IstanbulGallery({ copy }: { copy: typeof englishCopy }) {
  return (
    <DestinationGallery
      copy={copy}
      slides={[
        { src: "/__mockup/easytransfer/istanbul-01.jpeg", alt: "Bosphorus ferries and a mosque at sunset", caption: copy.istanbulPhotoOne },
        { src: "/__mockup/easytransfer/istanbul-02.jpeg", alt: "Red historic tram on a lively Istanbul street", caption: copy.istanbulPhotoTwo },
        { src: "/__mockup/easytransfer/istanbul-03.jpeg", alt: "Rooftop tea terrace overlooking the Bosphorus", caption: copy.istanbulPhotoThree },
        { src: "/__mockup/easytransfer/istanbul-04.jpeg", alt: "Galata Tower framed by a historic street", caption: copy.istanbulPhotoFour },
        { src: "/__mockup/easytransfer/istanbul-05.jpeg", alt: "Istanbul skyline and Golden Horn at sunset", caption: copy.istanbulPhotoFive },
      ]}
      kicker={copy.istanbulKicker}
      title={copy.istanbulTitle}
      text={copy.istanbulText}
      serviceTitle={copy.istanbulServiceTitle}
      serviceText={copy.istanbulServiceText}
      previousPhoto={copy.previousPhoto}
      nextPhoto={copy.nextPhoto}
      ariaLabel="Istanbul photos"
    />
  );
}

function AntalyaGallery({ copy }: { copy: typeof englishCopy }) {
  return (
    <DestinationGallery
      copy={copy}
      slides={[
        { src: "/__mockup/easytransfer/antalya-01.jpeg", alt: "Hadrian's Gate and ancient Antalya walls", caption: copy.antalyaPhotoOne },
        { src: "/__mockup/easytransfer/antalya-02.jpeg", alt: "Palm-lined Antalya waterfront at sunset", caption: copy.antalyaPhotoTwo },
        { src: "/__mockup/easytransfer/antalya-03.jpeg", alt: "Bougainvillea framing a Mediterranean bay", caption: copy.antalyaPhotoThree },
        { src: "/__mockup/easytransfer/antalya-04.jpeg", alt: "Waterfront promenade with a small boat and flowers", caption: copy.antalyaPhotoFour },
        { src: "/__mockup/easytransfer/antalya-05.jpeg", alt: "Palm-lined seaside promenade in Antalya", caption: copy.antalyaPhotoFive },
        { src: "/__mockup/easytransfer/antalya-06.jpeg", alt: "Elegant Antalya resort coast with water features", caption: copy.antalyaPhotoSix },
        { src: "/__mockup/easytransfer/antalya-07.jpeg", alt: "Antalya shore glowing in the evening light", caption: copy.antalyaPhotoSeven },
        { src: "/__mockup/easytransfer/antalya-08.jpeg", alt: "Relaxed evening walk along the Antalya promenade", caption: copy.antalyaPhotoEight },
      ]}
      kicker={copy.antalyaKicker}
      title={copy.antalyaTitle}
      text={copy.antalyaText}
      serviceTitle={copy.antalyaServiceTitle}
      serviceText={copy.antalyaServiceText}
      previousPhoto={copy.previousAntalyaPhoto}
      nextPhoto={copy.nextAntalyaPhoto}
      ariaLabel="Antalya photos"
    />
  );
}

function BodrumGallery({ copy }: { copy: typeof englishCopy }) {
  return (
    <DestinationGallery
      copy={copy}
      slides={[
        { src: "/__mockup/easytransfer/bodrum-01.jpeg", alt: "White Bodrum houses at golden hour", caption: copy.bodrumPhotoOne },
        { src: "/__mockup/easytransfer/bodrum-02.jpeg", alt: "Bright Bodrum shopping street", caption: copy.bodrumPhotoTwo },
        { src: "/__mockup/easytransfer/bodrum-03.jpeg", alt: "Bougainvillea in a quiet Bodrum lane", caption: copy.bodrumPhotoThree },
        { src: "/__mockup/easytransfer/bodrum-04.jpeg", alt: "A flower-lined path opening to the sea", caption: copy.bodrumPhotoFour },
        { src: "/__mockup/easytransfer/bodrum-05.jpeg", alt: "Turquoise Bodrum street by the water", caption: copy.bodrumPhotoFive },
        { src: "/__mockup/easytransfer/bodrum-06.jpeg", alt: "Aegean light by the Bodrum shore", caption: copy.bodrumPhotoSix },
      ]}
      kicker={copy.bodrumKicker}
      title={copy.bodrumTitle}
      text={copy.bodrumText}
      serviceTitle={copy.bodrumServiceTitle}
      serviceText={copy.bodrumServiceText}
      previousPhoto={copy.previousBodrumPhoto}
      nextPhoto={copy.nextBodrumPhoto}
      ariaLabel="Bodrum photos"
    />
  );
}

function CappadociaGallery({ copy }: { copy: typeof englishCopy }) {
  return (
    <DestinationGallery
      copy={copy}
      slides={[
        { src: "/__mockup/easytransfer/cappadocia-01.jpeg", alt: "Hot-air balloons over Göreme at sunrise", caption: copy.cappadociaPhotoOne },
        { src: "/__mockup/easytransfer/cappadocia-02.jpeg", alt: "A Cappadocia valley filled with hot-air balloons", caption: copy.cappadociaPhotoTwo },
        { src: "/__mockup/easytransfer/cappadocia-03.jpeg", alt: "Hot-air balloons preparing for a morning launch", caption: copy.cappadociaPhotoThree },
        { src: "/__mockup/easytransfer/cappadocia-04.jpeg", alt: "Stone hotel surrounded by Cappadocia rock formations", caption: copy.cappadociaPhotoFour },
        { src: "/__mockup/easytransfer/cappadocia-05.jpeg", alt: "Cappadocia town glowing at dusk", caption: copy.cappadociaPhotoFive },
        { src: "/__mockup/easytransfer/cappadocia-06.jpeg", alt: "A quiet Cappadocia view across the fairy chimneys", caption: copy.cappadociaPhotoSix },
      ]}
      kicker={copy.cappadociaKicker}
      title={copy.cappadociaTitle}
      text={copy.cappadociaText}
      serviceTitle={copy.cappadociaServiceTitle}
      serviceText={copy.cappadociaServiceText}
      previousPhoto={copy.previousCappadociaPhoto}
      nextPhoto={copy.nextCappadociaPhoto}
      ariaLabel="Cappadocia photos"
    />
  );
}

export function Homepage() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [language, setLanguage] = useState<Language>("RU");
  const [tripType, setTripType] = useState("One way");
  const [direction, setDirection] = useState("airport-hotel");
  const [passengerNamesInput, setPassengerNamesInput] = useState("");
  const [bookingMessage, setBookingMessage] = useState("");
  const copy = translations[language];
  const passengerNames = passengerNamesInput
    .split(/\r?\n|,/)
    .map((name) => name.trim())
    .filter(Boolean);
  const passengerCount = passengerNames.length;
  const passengerCountLabel = passengerCount === 0
    ? copy.passengerCountEmpty
    : `${passengerCount} ${passengerCount === 1 ? copy.passengerCountSingle : copy.passengerCountMany}`;
  function handleBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const from = String(formData.get("from") ?? "");
    const to = String(formData.get("to") ?? "");
    const date = String(formData.get("date") ?? "");
    const time = String(formData.get("time") ?? "");
    const submittedPassengerNames = String(formData.get("passengerNames") ?? "");
    const submittedPassengerList = submittedPassengerNames
      .split(/\r?\n|,/)
      .map((name) => name.trim())
      .filter(Boolean);
    const flightNumber = String(formData.get("flightNumber") ?? "");
    const returnFlightNumber = String(formData.get("returnFlightNumber") ?? "");
    const returnDepartureTime = String(formData.get("returnDepartureTime") ?? "");
    const payment = String(formData.get("payment") ?? "");
    const paymentLabel = payment === "cash"
      ? copy.paymentCash
      : payment === "turkish-card"
        ? copy.paymentTurkishCard
        : copy.paymentRussianCard;
    const dateLabel = date ? date.split("-").reverse().join(".") : date;
    const directionLabel = direction === "airport-hotel" ? copy.airportToHotel : copy.hotelToAirport;
    const fromIcon = direction === "airport-hotel" ? "✈️" : "🏨";
    const toIcon = direction === "airport-hotel" ? "🏨" : "✈️";
    if (!from.trim() || !to.trim() || !date || !time || submittedPassengerList.length === 0 || !flightNumber.trim()) {
      return;
    }
    const message = [
      language === "RU" ? "🚐 Заявка на трансфер" : "🚐 Transfer request",
      "",
      `${fromIcon} ${copy.from}: ${from}`,
      `${toIcon} ${copy.to}: ${to}`,
      `${copy.date}: ${dateLabel}`,
      `${copy.time}: ${time}`,
      "",
      `👥 ${copy.passengerNames}:`,
      ...submittedPassengerList,
      "",
      `👤 ${copy.guests}: ${submittedPassengerList.length}`,
      `✈️ ${copy.flightNumber}: ${flightNumber}`,
      `↔️ ${language === "RU" ? "Направление" : "Direction"}: ${directionLabel}`,
      `${language === "RU" ? "Поездка" : "Trip"}: ${tripType === "One way" ? copy.oneWay : copy.return}`,
      ...(tripType === "Return"
        ? [`${copy.returnFlightNumber}: ${returnFlightNumber}`, `${copy.returnDepartureTime}: ${returnDepartureTime}`]
        : []),
      `${copy.payment}: ${paymentLabel}`,
      copy.priceRequest,
    ].join("\n");
    setBookingMessage(message);
    setSubmitted(true);
    setContactOpen(true);
  }

  return (
    <main className="min-h-[100dvh] overflow-x-hidden bg-[#f7f5f0] text-[#102530] selection:bg-[#d8c09a] selection:text-[#102530]">
      <AboutUsDialog open={aboutOpen} onClose={() => setAboutOpen(false)} copy={copy} />
      <WhatsAppChooser
        open={contactOpen}
        onClose={() => setContactOpen(false)}
        message={bookingMessage}
        language={language}
      />

      <header className="absolute left-0 right-0 top-0 z-30 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-10">
          <a href="#top" className="group flex items-center gap-2" aria-label="easytransfer home">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d4b77c] text-[#d4b77c] transition group-hover:rotate-12">
              <Navigation size={15} />
            </span>
            <span className="text-[17px] font-semibold tracking-[-0.04em]">easytransfer<span className="text-[#d4b77c]">.tr</span></span>
          </a>
          <nav className="hidden items-center gap-8 text-[12px] font-medium tracking-[0.13em] text-white/75 md:flex">
            <a className="transition hover:text-white" href="#booking">{copy.navBook}</a>
            <a className="transition hover:text-white" href="#fleet">{copy.navFleet}</a>
            <a className="transition hover:text-white" href="#why-us">{copy.navWhy}</a>
            <a className="transition hover:text-white" href="#destinations">{copy.navDestinations}</a>
          </nav>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 rounded-full border border-white/30 bg-[#102a34]/70 px-1.5 py-1.5 shadow-lg backdrop-blur-md" role="group" aria-label="Choose language">
              <Globe2 size={15} className="mx-1 text-[#d9bd84]" />
              {(["RU", "EN"] as Language[]).map((option) => <button type="button" key={option} onClick={() => setLanguage(option)} aria-pressed={language === option} className={`rounded-full px-2.5 py-1 text-[11px] font-bold tracking-[.08em] transition ${language === option ? "bg-[#d5b77b] text-[#17333e]" : "text-white/75 hover:bg-white/15 hover:text-white"}`}>{option}</button>)}
            </div>
            <button onClick={() => { setBookingMessage(""); setContactOpen(true); }} className="hidden items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2.5 text-xs font-semibold backdrop-blur-md transition hover:bg-white/20 sm:flex">
              <MessageCircle size={15} /> {copy.whatsapp}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-full border border-white/25 p-2.5 md:hidden" aria-label="Toggle menu" aria-expanded={menuOpen}>
              <Menu size={19} />
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="mx-4 rounded-2xl border border-white/15 bg-[#112934]/95 p-4 shadow-xl md:hidden">
            {[[copy.navBook, "booking"], [copy.navFleet, "fleet"], [copy.navWhy, "why-us"], [copy.navDestinations, "destinations"]].map(([item, href]) => (
              <a key={item} href={`#${href}`} onClick={() => setMenuOpen(false)} className="block border-b border-white/10 px-2 py-3 text-xs tracking-[0.16em] last:border-0">{item}</a>
            ))}
            <button onClick={() => { setMenuOpen(false); setAboutOpen(true); }} className="block w-full px-2 py-3 text-left text-xs tracking-[0.16em] text-[#d9bd84] transition hover:text-white">{copy.about}</button>
          </div>
        )}
      </header>

      <section id="top" className="relative isolate flex min-h-[690px] items-end overflow-hidden bg-[#122b36] pb-28 pt-32 lg:min-h-[760px] lg:pb-36">
        <div className="absolute inset-0 -z-10 bg-cover bg-center opacity-75" style={{ backgroundImage: "url('/__mockup/easytransfer-hero.jpg')" }} />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071a23] via-[#102a34]/75 to-[#102a34]/15" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#102a34] via-transparent to-[#102a34]/30" />
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-10">
          <div className="max-w-2xl animate-[fadeUp_.8s_ease-out_both]">
            <div className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#d9bd84]">
              <span className="h-px w-10 bg-[#d9bd84]" /> {copy.heroKicker}
            </div>
            <h1 className="max-w-xl font-serif text-[clamp(3.5rem,8vw,7.2rem)] leading-[.91] tracking-[-.055em] text-[#f8f5ee]">
              {copy.heroTitle} <em className="text-[#d9bd84]">{copy.heroTitleAccent}</em>
            </h1>
            <p className="mt-7 max-w-lg text-base leading-7 text-white/72 sm:text-lg">
              {copy.heroDescription}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#booking" className="group inline-flex items-center gap-3 rounded-full bg-[#d5b77b] px-6 py-3.5 text-sm font-semibold text-[#152a32] transition hover:bg-[#e6cc9b]">
                {copy.bookTransfer} <ArrowRight size={17} className="transition group-hover:translate-x-1" />
              </a>
              <button onClick={() => { setBookingMessage(""); setContactOpen(true); }} className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
                <MessageCircle size={17} /> {copy.talkLocal}
              </button>
            </div>
          </div>
          <div className="absolute bottom-8 right-6 hidden items-center gap-3 text-[10px] uppercase tracking-[.22em] text-white/50 lg:flex">
            <span>{copy.scroll}</span><span className="h-8 w-px bg-white/30" />
          </div>
        </div>
      </section>

      <section id="booking" className="relative z-10 mx-auto -mt-12 max-w-7xl px-5 lg:px-10">
        <form onSubmit={handleBooking} className="rounded-[26px] border border-[#e3d9c9] bg-[#fbfaf7] p-5 shadow-[0_20px_60px_rgba(16,37,48,.13)] md:p-7">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
             <div><p className="mb-1 text-[10px] font-semibold uppercase tracking-[.24em] text-[#b08347]">{copy.bookingKicker}</p><h2 className="font-serif text-2xl md:text-3xl">{copy.bookingTitle}</h2></div>
            <div className="flex rounded-full bg-[#eee9e0] p-1 text-xs font-semibold">
               {[["One way", copy.oneWay], ["Return", copy.return]].map(([type, label]) => <button type="button" key={type} onClick={() => setTripType(type)} className={`rounded-full px-4 py-2 transition ${tripType === type ? "bg-[#17333e] text-white shadow-sm" : "text-[#718087]"}`}>{label}</button>)}
            </div>
          </div>
           {submitted && <div className="mb-5 flex items-center gap-2 rounded-xl bg-[#e6f1e9] px-4 py-3 text-sm text-[#276943]"><Check size={17} /> {copy.submitted}</div>}
            <div className="mb-4 grid max-w-2xl gap-2 sm:grid-cols-2">
              {[["airport-hotel", copy.airportToHotel], ["hotel-airport", copy.hotelToAirport]].map(([value, label]) => <button type="button" key={value} onClick={() => setDirection(value)} aria-pressed={direction === value} className={`rounded-xl border px-4 py-3 text-left text-sm font-semibold transition ${direction === value ? "border-[#17333e] bg-[#17333e] text-white shadow-sm" : "border-[#e1dbd0] bg-white text-[#617176] hover:border-[#b08347]"}`}>{label}</button>)}
            </div>
             <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {[
                { label: copy.from, placeholder: direction === "airport-hotel" ? copy.airportPlaceholder : copy.hotelPlaceholder, icon: direction === "airport-hotel" ? Plane : MapPin, name: "from" },
                { label: copy.to, placeholder: direction === "airport-hotel" ? copy.hotelPlaceholder : copy.airportPlaceholder, icon: direction === "airport-hotel" ? Navigation : Plane, name: "to" },
              ].map(({ label, placeholder, icon: Icon, name }) => <label key={label} className="rounded-xl border border-[#e1dbd0] bg-white px-4 py-3 focus-within:border-[#b08347]"><span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.16em] text-[#9b7c52]"><Icon size={13} /> {label} <b className="text-[#b08347]" aria-hidden="true">*</b></span><input required name={name} placeholder={placeholder} className="mt-1 w-full bg-transparent text-sm font-medium text-[#17333e] outline-none placeholder:text-[#a2aaab]" /></label>)}
              <label className="rounded-xl border border-[#e1dbd0] bg-white px-4 py-3"><span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.16em] text-[#9b7c52]"><CalendarDays size={13} /> {direction === "airport-hotel" ? copy.arrivalDate : copy.departureDate} <b className="text-[#b08347]" aria-hidden="true">*</b></span><input required name="date" type="date" defaultValue="2026-08-20" className="mt-1 w-full bg-transparent text-sm font-medium text-[#17333e] outline-none" /></label>
              <label className="rounded-xl border border-[#e1dbd0] bg-white px-4 py-3"><span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.16em] text-[#9b7c52]"><Clock3 size={13} /> {direction === "airport-hotel" ? copy.arrivalTime : copy.departureTime} <b className="text-[#b08347]" aria-hidden="true">*</b></span><input required name="time" type="time" defaultValue="14:30" className="mt-1 w-full bg-transparent text-sm font-medium text-[#17333e] outline-none" /></label>
              <label className="rounded-xl border border-[#e1dbd0] bg-white px-4 py-3"><span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.16em] text-[#9b7c52]"><Users size={13} /> {copy.guests} <b className="text-[#b08347]" aria-hidden="true">*</b></span><input required name="guests" value={passengerCount ? String(passengerCount) : ""} readOnly aria-readonly="true" placeholder={passengerCountLabel} className="mt-1 w-full bg-transparent text-sm font-medium text-[#17333e] outline-none placeholder:text-[#8e999b]" /></label>
              <label className="rounded-xl border border-[#e1dbd0] bg-white px-4 py-3 md:col-span-2"><span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.16em] text-[#9b7c52]"><Users size={13} /> {copy.passengerNames} <b className="text-[#b08347]" aria-hidden="true">*</b></span><textarea required name="passengerNames" rows={2} value={passengerNamesInput} onChange={(event) => setPassengerNamesInput(event.target.value)} placeholder={copy.passengerNamesPlaceholder} className="mt-1 w-full resize-none bg-transparent text-sm font-medium leading-6 text-[#17333e] outline-none placeholder:whitespace-pre-line placeholder:text-[#a2aaab]" /><span className="mt-1 block text-[11px] text-[#9b7c52]">{copy.passengerNamesHint}</span></label>
              <label className="rounded-xl border border-[#e1dbd0] bg-white px-4 py-3"><span className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[.16em] text-[#9b7c52]"><span className="flex items-center gap-2"><Plane size={13} /> {copy.flightNumber} <b className="text-[#b08347]" aria-hidden="true">*</b></span><span className="normal-case tracking-normal text-[#b08347]">{copy.required}</span></span><input required name="flightNumber" placeholder="TK 2410" className="mt-1 w-full bg-transparent text-sm font-medium text-[#17333e] outline-none placeholder:text-[#a2aaab]" /></label>
              {tripType === "Return" && <>
                 <label className="rounded-xl border border-[#e1dbd0] bg-white px-4 py-3"><span className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[.16em] text-[#9b7c52]"><span className="flex items-center gap-2"><Plane size={13} /> {copy.returnFlightNumber} <b className="text-[#b08347]" aria-hidden="true">*</b></span><span className="normal-case tracking-normal text-[#b08347]">{copy.required}</span></span><input required name="returnFlightNumber" placeholder="TK 2411" className="mt-1 w-full bg-transparent text-sm font-medium text-[#17333e] outline-none placeholder:text-[#a2aaab]" /></label>
                 <label className="rounded-xl border border-[#e1dbd0] bg-white px-4 py-3"><span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.16em] text-[#9b7c52]"><Clock3 size={13} /> {copy.returnDepartureTime} <b className="text-[#b08347]" aria-hidden="true">*</b></span><input required name="returnDepartureTime" type="time" className="mt-1 w-full bg-transparent text-sm font-medium text-[#17333e] outline-none" /></label>
              </>}
               <label className="rounded-xl border border-[#e1dbd0] bg-white px-4 py-3 md:col-span-2"><span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.16em] text-[#9b7c52]"><CreditCard size={13} /> {copy.payment} <b className="text-[#b08347]" aria-hidden="true">*</b></span><select required name="payment" defaultValue="cash" className="mt-1 w-full bg-transparent text-sm font-medium text-[#17333e] outline-none"><option value="cash">{copy.paymentCash}</option><option value="turkish-card">{copy.paymentTurkishCard}</option><option value="russian-card">{copy.paymentRussianCard}</option></select></label>
              <button type="submit" className="group flex items-center justify-center gap-2 rounded-xl bg-[#b08347] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#966d38] md:col-span-2 xl:col-span-1">{copy.getPrice} <ArrowRight size={17} className="transition group-hover:translate-x-1" /></button>
          </div>
           <p className="mt-4 flex items-center gap-2 text-xs text-[#7c888b]"><ShieldCheck size={14} className="text-[#b08347]" /> {copy.bookingNote}</p>
        </form>
      </section>

      <section id="why-us" className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div><p className="mb-4 text-[10px] font-bold uppercase tracking-[.27em] text-[#b08347]">{copy.whyKicker}</p><h2 className="max-w-md font-serif text-4xl leading-[1.03] tracking-[-.04em] md:text-5xl">{copy.whyTitle}</h2></div>
          <p className="max-w-xl text-base leading-7 text-[#657479]">{copy.whyText}</p>
        </div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-[#dcd4c8] md:grid-cols-3">
          {[{ icon: ShieldCheck, title: copy.reliableTitle, text: copy.reliableText }, { icon: Sparkles, title: copy.calmTitle, text: copy.calmText }, { icon: Phone, title: copy.humanTitle, text: copy.humanText }].map(({ icon: Icon, title, text }, index) => <article key={title} className={`bg-[#f7f5f0] p-8 ${index === 1 ? "md:bg-[#f1ece3]" : ""}`}><Icon size={24} className="mb-16 text-[#b08347]" /><h3 className="mb-3 font-serif text-2xl">{title}</h3><p className="text-sm leading-6 text-[#6e7b7e]">{text}</p></article>)}
        </div>
      </section>

      <section id="fleet" className="bg-[#17333e] px-5 py-24 text-[#f7f4ec] lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-5"><div><p className="mb-4 text-[10px] font-bold uppercase tracking-[.27em] text-[#d5b77b]">{copy.fleetKicker}</p><h2 className="font-serif text-4xl tracking-[-.04em] md:text-5xl">{copy.fleetTitle}</h2></div><p className="max-w-sm text-sm leading-6 text-white/55">{copy.fleetText}</p></div>
          <div className="mt-14 grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
            <article className="group relative min-h-[470px] overflow-hidden rounded-[28px] bg-[#294650]">
              <VitoGallery copy={copy} />
              <div className="relative z-10 flex min-h-[470px] flex-col p-7">
                <div className="mt-auto max-w-md">
                  <span className="text-[10px] font-bold uppercase tracking-[.24em] text-[#d5b77b]">{copy.mostRequested}</span>
                  <h3 className="mt-2 font-serif text-3xl">Mercedes-Benz Vito VIP</h3>
                  <p className="mt-3 max-w-lg text-sm leading-6 text-white/75">{copy.vitoTransferText}</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/70"><span className="rounded-full border border-white/15 px-3 py-1.5">{copy.upTo6}</span><span className="rounded-full border border-white/15 px-3 py-1.5">{copy.vipInterior}</span><span className="rounded-full border border-white/15 px-3 py-1.5">{copy.largeLuggage}</span></div>
                </div>
              </div>
            </article>
            <div className="grid gap-5">
               <article className="relative min-h-[470px] overflow-hidden rounded-[28px] bg-[#c8b18a] text-[#17333e]">
                 <SprinterGallery copy={copy} />
                 <div className="relative z-10 flex min-h-[470px] flex-col p-7 pt-[230px]">
                   <div className="mt-auto">
                     <Luggage size={23} className="mb-4" />
                     <h3 className="font-serif text-3xl">{copy.sprinterTitle}</h3>
                     <p className="mt-2 max-w-md text-sm leading-6 text-[#38515a]">{copy.sprinterText}</p>
                     <p className="mt-3 max-w-md text-xs leading-5 text-[#38515a]/85">{copy.sprinterTransferText}</p>
                     <button className="mt-5 inline-flex items-center gap-2 text-sm font-bold">{copy.exploreGroup} <ArrowRight size={16} /></button>
                   </div>
                 </div>
               </article>
              <article className="flex items-end justify-between rounded-[28px] border border-white/15 bg-white/5 p-7"><div><Sparkles size={23} className="mb-10 text-[#d5b77b]" /><h3 className="font-serif text-3xl">{copy.vipTailored}</h3><p className="mt-2 text-sm text-white/55">{copy.vipText}</p></div><ArrowRight size={22} className="mb-1 text-[#d5b77b]" /></article>
            </div>
          </div>
        </div>
      </section>

      <section id="destinations" className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
        <div className="flex flex-wrap items-end justify-between gap-5"><div><p className="mb-4 text-[10px] font-bold uppercase tracking-[.27em] text-[#b08347]">{copy.destinationsKicker}</p><h2 className="font-serif text-4xl tracking-[-.04em] md:text-5xl">{copy.destinationsTitle}</h2></div><a href="#booking" className="group inline-flex items-center gap-2 text-sm font-semibold text-[#9a6e32]">{copy.planRoute} <ArrowRight size={17} className="transition group-hover:translate-x-1" /></a></div>
        <AntalyaGallery copy={copy} />
        <IstanbulGallery copy={copy} />
        <BodrumGallery copy={copy} />
        <CappadociaGallery copy={copy} />
      </section>

      <footer className="border-t border-[#ded7cc] bg-[#f0ede6] px-5 py-12 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8"><div><div className="text-lg font-semibold tracking-[-.04em]">easytransfer<span className="text-[#b08347]">.tr</span></div><p className="mt-2 text-sm text-[#718083]">{copy.footerTagline}</p></div><div className="flex flex-wrap gap-6 text-xs font-semibold text-[#53676d]"><a href="#booking">{copy.bookTransfer}</a><a href="#fleet">{copy.navFleet}</a><button onClick={() => setAboutOpen(true)}>{copy.about}</button><a href="https://www.instagram.com/easytransfer_tr?igsi=MWNyeW5kNXoyaTBxbA==" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition hover:text-[#b08347]" aria-label="EasyTransfer on Instagram"><Instagram size={14} /> @easytransfer_tr</a><button onClick={() => { setBookingMessage(""); setContactOpen(true); }}>{copy.whatsappSupport}</button></div><p className="w-full text-[11px] text-[#8b9493]">© 2025 easytransfer.tr · Antalya, Türkiye</p></div>
      </footer>

      <button onClick={() => { setBookingMessage(""); setContactOpen(true); }} aria-label={copy.whatsappSupport} className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#28764f] px-5 py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(40,118,79,.3)] transition hover:-translate-y-1 hover:bg-[#216342] sm:bottom-7 sm:right-7"><MessageCircle size={18} /> <span className="hidden sm:inline">{copy.whatsapp} us</span><span className="sm:hidden">Chat</span></button>
      <style>{`@keyframes fadeUp { from { opacity: 0; transform: translateY(18px) } to { opacity: 1; transform: translateY(0) } }`}</style>
    </main>
  );
}