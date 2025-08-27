import Homepage from "../../assets/projects/Homepage.png";
import RegisterForm from "../../assets/projects/registerForm.png";
import AdminPanel from "../../assets/projects/AdminPanel.png";
import Invitation from "../../assets/projects/invitation.png";
import SearchVenue from "../../assets/projects/SearchVenue.png";
import BookVenue from "../../assets/projects/BookVenue.png";
import Catering from "../../assets/projects/Catering.png";
import Dashboard from "../../assets/projects/dashboard.png";
import Responsive from "../../assets/projects/Responsive.png";
import ShoppingCard from "../../assets/projects/shoppingCard.png";
import Pokemon_Battle from "../../assets/projects/Pokemon_Battle.png";

const projects = [
  {
    id: "1",
    name: "I-Said-Yes",
    slides: [
      { img: Homepage, caption: "Homepage: Visitors can explore services, gallery, menu, and more. Registered users gain access to exclusive services, including sending guest invitations via email, booking a venue for their wedding date, and selecting catering, photography, music, and makeup services. To access these features, users must first sign in." },
      { img: RegisterForm, caption: "Register & Sign-in forms for personalized wedding planning." },
      { img: AdminPanel, caption: "Admin Panel: Exclusive to admins for managing venues (with multiple images and Google Maps), music bands, catering categories, gallery, and more. Normal users cannot access these pages, because it is hidden for them in Navbar." },
      { img: Invitation, caption: "Send invitations by email with RSVP management." },
      { img: SearchVenue, caption: "Search venues by city, price, capacity, with multiple images." },
      { img: BookVenue, caption: "Book venue: Users must set their wedding date on the 'User Information Page' before booking a venue. If not provided, they’ll be redirected. Booked venues show a conflict message; available ones are added to the Shopping Cart." },
      { img: Catering, caption: "Catering: Users can select favorite food by category (starter, main course, dessert, drinks, etc.), add them to a list, edit quantities or details, and add to the Shopping Cart. Photography, music, and makeup items can be similarly selected, updated, or removed." },
      { img: Dashboard, caption: "Dashboard: Users can track their wedding countdown, manage a to-do list, and overview all their selected services." },
      { img: ShoppingCard, caption: "Users can review and manage their selected services with prices, or remove items before going to checkout. I used Stripe Site for checkout process here!" },
      { img: Responsive, caption: "Fully responsive design for all devices. This is a mobile-friendly navbar design to enhance usability, providing an optimized experience across all pages for mobile users." },
    ],
    desc: "A full-stack Wedding Planner website with Admin/User authentication, guest invitations, venue booking, service selection, a progress dashboard, and a responsive UI. Built with JavaScript, React, MongoDB, TailwindCSS, HTML, and CSS.",
    url: "https://github.com/ZahraR85/I_Said_Yes",
  },
  {
    id: "2",
    name: "Pokemon Battle",
    slides: [
      { img: Pokemon_Battle, caption: "Home: The main hub where users can explore the Pokémon battle program and access all features. Pokémon: Browse available Pokémon, view their stats, and select them for battles. Roster: Manage your team of Pokémon, customize your lineup, and prepare for battles.Leaderboard: Check player rankings, track battle victories, and compare your performance with others." }
    ],
    desc: "A fullstack small class project. Technologies used: JavaScript, React, MongoDB, TailwindCSS, Html, CSS.",
    url: "https://github.com/ZahraR85/pokemon-battle",
  },
];

export { projects };
