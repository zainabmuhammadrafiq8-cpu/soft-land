import {
  BiBuildings,
  BiPulse,
  BiCommand,
  BiLineChart,
  BiServer,
  BiSun,
  BiCalendarWeek,
  BiBox,
  BiRocket,
  BiSend,
} from "react-icons/bi";

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  {
    label: "Dropdown",
    href: "#",
    children: [
      { label: "Dropdown 1", href: "#" },
      {
        label: "Deep Dropdown",
        href: "#",
        children: [
          { label: "Deep Dropdown 1", href: "#" },
          { label: "Deep Dropdown 2", href: "#" },
          { label: "Deep Dropdown 3", href: "#" },
          { label: "Deep Dropdown 4", href: "#" },
          { label: "Deep Dropdown 5", href: "#" },
        ],
      },
      { label: "Dropdown 2", href: "#" },
      { label: "Dropdown 3", href: "#" },
      { label: "Dropdown 4", href: "#" },
    ],
  },
  { label: "Contact", href: "#contact" },
];

export const aboutBoxes = [
  {
    icon: BiBuildings,
    title: "Eius provident",
    text: "Magni repellendus vel ullam hic officia accusantium ipsa dolor omnis dolor voluptatem",
  },
  {
    icon: BiPulse,
    title: "Rerum aperiam",
    text: "Autem saepe animi et aut aspernatur culpa facere. Rerum saepe rerum voluptates quia",
  },
  {
    icon: BiCommand,
    title: "Veniam omnis",
    text: "Omnis perferendis molestias culpa sed. Recusandae quas possimus. Quod consequatur corrupti",
  },
  {
    icon: BiLineChart,
    title: "Delares sapiente",
    text: "Sint et dolor voluptas minus possimus nostrum. Reiciendis commodi eligendi omnis quideme lorenda",
  },
];

export const featuredCards = [
  {
    img: "/assets/img/cards-4.png",
    icon: BiServer,
    title: "Explore Your Team",
    text: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "/assets/img/cards-2.png",
    icon: BiSun,
    title: "Digital Whiteboard",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    img: "/assets/img/cards-6.png",
    icon: BiCalendarWeek,
    title: "Design To Development",
    text: "Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
];

export const steps = [
  {
    num: "01",
    title: "Sign Up",
    text: "Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat",
  },
  {
    num: "02",
    title: "Repellat Nihil",
    text: "Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest",
  },
  {
    num: "03",
    title: "Ad ad velit qui",
    text: "Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis",
  },
];

export const features = [
  {
    img: "/assets/img/features-1.svg",
    reverse: false,
    title:
      "Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.",
    italic:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    list: [
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit.",
      "Ullam est qui quos consequatur eos accusamus.",
    ],
  },
  {
    img: "/assets/img/features-2.svg",
    reverse: true,
    title: "Corporis temporibus maiores provident",
    italic:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    body: "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    img: "/assets/img/features-3.svg",
    reverse: false,
    title:
      "Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas",
    body: "Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.",
    list: [
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit.",
      "Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.",
    ],
  },
  {
    img: "/assets/img/features-4.svg",
    reverse: true,
    title:
      "Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in",
    italic:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    body: "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
];

export const galleryImages = Array.from({ length: 12 }, (_, i) => ({
  src: `/assets/img/app-gallery/app-gallery-${i + 1}.png`,
  alt: `App gallery ${i + 1}`,
}));

export const testimonials = [
  {
    img: "/assets/img/testimonials/testimonials-1.jpg",
    name: "Saul Goodman",
    role: "Ceo & Founder",
    text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
  },
  {
    img: "/assets/img/testimonials/testimonials-2.jpg",
    name: "Sara Wilsson",
    role: "Designer",
    text: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
  },
  {
    img: "/assets/img/testimonials/testimonials-3.jpg",
    name: "Jena Karlis",
    role: "Store Owner",
    text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
  },
  {
    img: "/assets/img/testimonials/testimonials-4.jpg",
    name: "Matt Brandon",
    role: "Freelancer",
    text: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
  },
  {
    img: "/assets/img/testimonials/testimonials-5.jpg",
    name: "John Larson",
    role: "Entrepreneur",
    text: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
  },
];

export const pricing = [
  {
    name: "Free Plan",
    icon: BiBox,
    price: "0",
    featured: false,
    features: [
      { text: "Quam adipiscing vitae proin", included: true },
      { text: "Nec feugiat nisl pretium", included: true },
      { text: "Nulla at volutpat diam uteera", included: true },
      { text: "Pharetra massa massa ultricies", included: false },
      { text: "Massa ultricies mi quis hendrerit", included: false },
    ],
  },
  {
    name: "Business Plan",
    icon: BiRocket,
    price: "29",
    featured: true,
    features: [
      { text: "Quam adipiscing vitae proin", included: true },
      { text: "Nec feugiat nisl pretium", included: true },
      { text: "Nulla at volutpat diam uteera", included: true },
      { text: "Pharetra massa massa ultricies", included: true },
      { text: "Massa ultricies mi quis hendrerit", included: true },
    ],
  },
  {
    name: "Developer Plan",
    icon: BiSend,
    price: "49",
    featured: false,
    features: [
      { text: "Quam adipiscing vitae proin", included: true },
      { text: "Nec feugiat nisl pretium", included: true },
      { text: "Nulla at volutpat diam uteera", included: true },
      { text: "Pharetra massa massa ultricies", included: true },
      { text: "Massa ultricies mi quis hendrerit", included: true },
    ],
  },
];

export const faqs = [
  {
    q: "Non consectetur a erat nam at lectus urna duis?",
    a: "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
  },
  {
    q: "Feugiat scelerisque varius morbi enim nunc faucibus?",
    a: "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.",
  },
  {
    q: "Dolor sit amet consectetur adipiscing elit pellentesque?",
    a: "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis",
  },
  {
    q: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
    a: "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.",
  },
  {
    q: "Tempus quam pellentesque nec nam aliquam sem et tortor?",
    a: "Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in",
  },
  {
    q: "Perspiciatis quod quo quos nulla quo illum ullam?",
    a: "Enim ea facilis quaerat voluptas quidem et dolorem. Quis et consequatur non sed in suscipit sequi. Distinctio ipsam dolore et.",
  },
];

export const contacts = [
  {
    title: "Address",
    value: "A108 Adam Street, New York, NY 535022",
    icon: "map",
  },
  { title: "Call Us", value: "+1 5589 55488 55", icon: "phone" },
  { title: "Email Us", value: "info@example.com", icon: "mail" },
];
