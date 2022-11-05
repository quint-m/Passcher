import { Password } from "../models/PasswordModel";

//REGEX for finding the spaces: \s+(?=(?:(?:[^"]*"){2})*[^"]*"[^"]*$)

const Access_imageResource = require("Access-(Microsoft).png");
const Air_imageResource = require("Air-Europa.png");
const AirBnB_imageResource = require("AirBnB.png");
const AmazonPrime_imageResource = require("Amazon-Prime.png");
const AmazonShopping_imageResource = require("Amazon-Shopping.png");
const Amazon_imageResource = require("Amazon.png");
const ArtStation_imageResource = require("ArtStation.png");
const ARZone_imageResource = require("ARZone.png");
const AuthentificatorGoogle_imageResource = require("Authentificator-(Google).png");
const AuthentificatorMicrosoft_imageResource = require("Authentificator-(Microsoft).png");
const Authy_imageResource = require("Authy.png");
const Battle_imageResource = require("Battle.png");
const Booking_imageResource = require("Booking.png");
const Calendar_imageResource = require("Calendar-(Google).png");
const Chrome_imageResource = require("Chrome-(Google).png");
const CityMapper_imageResource = require("CityMapper.png");
const Cuenta_imageResource = require("Cuenta-DNI.png");
const Currents_imageResource = require("Currents-(Google).png");
const Deviantart_imageResource = require("Deviantart.png");
const Discord_imageResource = require("Discord.png");
const Docs_imageResource = require("Docs-(Google).png");
const Drive_imageResource = require("Drive-(Google).png");
const Duolingo_imageResource = require("Duolingo.png");
const Edge_imageResource = require("Edge-(Microsoft).png");
const Evernote_imageResource = require("Evernote.png");
const Excel_imageResource = require("Excel-(Microsoft).png");
const Facebook_imageResource = require("Facebook.png");
const Files_imageResource = require("Files-(Google).png");
const Firefox_imageResource = require("Firefox.png");
const Forms_imageResource = require("Forms-(Google).png");
const Galaxy_imageResource = require("Galaxy-Store.png");
const Glovo_imageResource = require("Glovo.png");
const Gmail_imageResource = require("Gmail.png");
const GoogleLauncher_imageResource = require("Google-Launcher.png");
const Google_imageResource = require("Google.png");
const Hangouts_imageResource = require("Hangouts-(Google).png");
const Idealista_imageResource = require("Idealista.png");
const Instagram_imageResource = require("Instagram.png");
const Itchio_imageResource = require("Itchio.png");
const Keep_imageResource = require("Keep-(Google).png");
const KoFi_imageResource = require("Ko-Fi.png");
const Link_imageResource = require("Link-to-Windows-(Microsoft).png");
const LinkedIn_imageResource = require("LinkedIn.png");
const LondonGuide_imageResource = require("London-Guide.png");
const LondonMap_imageResource = require("London-Offline-Map.png");
const LondonTubeMap_imageResource = require("London-Tube-Map.png");
const GoogleMaps_imageResource = require("Maps-(Google).png");
const Mercadolibre_imageResource = require("Mercadolibre.png");
const Mercadopago_imageResource = require("Mercadopago.png");
const Messenger_imageResource = require("Messenger-(Facebook).png");
const Mi_imageResource = require("Mi-Argentina.png");
const Microsoft_imageResource = require("Microsoft-Launcher.png");
const Miro_imageResource = require("Miro.png");
const Moj_imageResource = require("Moj.png");
const Netflix_imageResource = require("Netflix-Black-Icon.png");
const Notion_imageResource = require("Notion.png");
const Nova_imageResource = require("Nova-Launcher.png");
const Office_imageResource = require("Office.png");
const OneDrive_imageResource = require("OneDrive-(Microsoft).png");
const OneNote_imageResource = require("OneNote-(Microsoft).png");
const Opera_imageResource = require("Opera.png");
const Outlook_imageResource = require("Outlook-(Microsoft).png");
const Patreon_imageResource = require("Patreon.png");
const PayPal_imageResource = require("PayPal.png");
const PedidosYa_imageResource = require("PedidosYa.png");
const Photos_imageResource = require("Photos-(Google).png");
const Pinterest_imageResource = require("Pinterest.png");
const Playstore_imageResource = require("Playstore-(Google).png");
const Podcasts_imageResource = require("Podcasts-(Google).png");
const PowerPoint_imageResource = require("PowerPoint-(Microsoft).png");
const Presentations_imageResource = require("Presentations-(Google).png");
const Publisher_imageResource = require("Publisher-(Microsoft).png");
const Reddit_imageResource = require("Reddit.png");
const Safari_imageResource = require("Safari.png");
const Samsung_imageResource = require("Samsung-Free.png");
const Santander_imageResource = require("Santander.png");
const Sheets_imageResource = require("Sheets-(Google).png");
const Skype_imageResource = require("Skype.png");
const Slack_imageResource = require("Slack.png");
const Snapchat_imageResource = require("Snapchat.png");
const SocioPlus_imageResource = require("SocioPlus.png");
const SoundCloud_imageResource = require("SoundCloud.png");
const Spotify_imageResource = require("Spotify.png");
const Steam_imageResource = require("Steam.png");
const Talkback_imageResource = require("Talkback-(Google).png");
const Tarjeta_imageResource = require("Tarjeta-Transporte-Madrid.png");
const Telegram_imageResource = require("Telegram.png");
const Text_imageResource = require("Text-to-Speech-(Google).png");
const TflGo_imageResource = require("Tfl-Go.png");
const TflOyster_imageResource = require("Tfl-Oyster.png");
const TickTick_imageResource = require("TickTick.png");
const TikTok_imageResource = require("TikTok.png");
const Tinder_imageResource = require("Tinder.png");
const To_imageResource = require("To-do-(Microsoft).png");
const Todoist_imageResource = require("Todoist.png");
const TogglBlue_imageResource = require("Toggl-Blue-Icon.png");
const TogglHire_imageResource = require("Toggl-Hire.png");
const TogglPlan_imageResource = require("Toggl-Plan.png");
const TogglTrack_imageResource = require("Toggl-Track.png");
const Toggl_imageResource = require("Toggl.png");
const Translate_imageResource = require("Translate-(Google).png");
const Trello_imageResource = require("Trello.png");
const Tumblr_imageResource = require("Tumblr.png");
const TV_imageResource = require("TV-(Google).png");
const Twitch_imageResource = require("Twitch.png");
const Twitter_imageResource = require("Twitter.png");
const UberEats_imageResource = require("Uber-Eats.png");
const Uber_imageResource = require("Uber.png");
const Vivaldi_imageResource = require("Vivaldi.png");
const Whatsapp_imageResource = require("Whatsapp.png");
const Wikipedia_imageResource = require("Wikipedia.png");
const WinRAR_imageResource = require("WinRAR.png");
const Word_imageResource = require("Word-(Microsoft).png");
const Youtube_imageResource = require("Youtube.png");
const Zoom_imageResource = require("Zoom.png");

export const PasswordIcons: Password["category"][] = [
  "AirBnB",
  "Amazon Prime",
  "Amazon Shopping",
  "Amazon",
  "ArtStation",
  "ARZone",
  "Authenticator (Google)",
  "Authenticator (Microsoft)",
  "Authy",
  "Battle",
  "Booking",
  "Calendar (Google)",
  "Chrome (Google)",
  "CityMapper",
  "Cuenta DNI",
  "Currents (Google)",
  "DeviantArt",
  "Discord",
  "Docs (Google)",
  "Drive (Google)",
  "Duolingo",
  "Edge (Microsoft)",
  "Evernote",
  "Excel (Microsoft)",
  "Facebook",
  "Files (Google)",
  "Firefox",
  "Forms (Google)",
  "Galaxy Store",
  "Glovo",
  "Gmail",
  "Google Launcher",
  "Google",
  "Hangouts (Google)",
  "Idealista",
  "Instagram",
  "Itchio",
  "Keep (Google)",
  "Ko-Fi",
  "Link to Windows (Microsoft)",
  "LinkedIn",
  "London Guide",
  "London Offline Map",
  "London Tube Map",
  "Maps (Google)",
  "Mercadolibre",
  "Mercadopago",
  "Messenger (Facebook)",
  "Mi Argentina",
  "Microsoft Launcher",
  "Miro",
  "Moj",
  "Netflix",
  "Notion",
  "Nova Launcher",
  "Office",
  "OneDrive (Microsoft)",
  "OneNote (Microsoft)",
  "Opera",
  "Outlook (Microsoft)",
  "Patreon",
  "PayPal",
  "PedidosYa",
  "Photos (Google)",
  "Pinterest",
  "Playstore (Google)",
  "Podcasts (Google)",
  "PowerPoint (Microsoft)",
  "Presentations (Google)",
  "Publisher (Microsoft)",
  "Reddit",
  "Safari",
  "Samsung Free",
  "Santander",
  "Sheets (Google)",
  "Skype",
  "Slack",
  "Snapchat",
  "SocioPlus",
  "SoundCloud",
  "Spotify",
  "Steam",
  "Talkback (Google)",
  "Tarjeta Transporte Madrid",
  "Telegram",
  "Text to Speech (Google)",
  "Tfl Go",
  "Tfl Oyster",
  "TickTick",
  "TikTok",
  "Tinder",
  "To do (Microsoft)",
  "Todoist",
  "Toggl Blue Icon",
  "Toggl Hire",
  "Toggl Plan",
  "Toggl Track",
  "Toggl",
  "Translate (Google)",
  "Trello",
  "Tumblr",
  "TV (Google)",
  "Twitch",
  "Twitter",
  "Uber Eats",
  "Uber",
  "Vivaldi",
  "Whatsapp",
  "Wikipedia",
  "WinRAR",
  "Word (Microsoft)",
  "Youtube",
  "Zoom",
];

export const usePasswordIcon = (name: Password["category"]) => {
  switch (name) {
    case "AirBnB":
      return AirBnB_imageResource;
    case "Amazon Prime":
      return AmazonPrime_imageResource;
    case "Amazon Shopping":
      return AmazonShopping_imageResource;
    case "Amazon":
      return Amazon_imageResource;
    case "ArtStation":
      return ArtStation_imageResource;
    case "ARZone":
      return ARZone_imageResource;
    case "Authenticator (Microsoft)":
      return AuthentificatorMicrosoft_imageResource;
    case "Authenticator (Google)":
      return AuthentificatorGoogle_imageResource;
    case "Authy":
      return Authy_imageResource;
    case "Battle":
      return Battle_imageResource;
    case "Booking":
      return Booking_imageResource;
    case "Calendar (Google)":
      return Calendar_imageResource;
    case "Chrome (Google)":
      return Chrome_imageResource;
    case "CityMapper":
      return CityMapper_imageResource;
    case "Cuenta DNI":
      return Cuenta_imageResource;
    case "Currents (Google)":
      return Currents_imageResource;
    case "DeviantArt":
      return Deviantart_imageResource;
    case "Discord":
      return Discord_imageResource;
    case "Docs (Google)":
      return Docs_imageResource;
    case "Drive (Google)":
      return Drive_imageResource;
    case "Duolingo":
      return Duolingo_imageResource;
    case "Edge (Microsoft)":
      return Edge_imageResource;
    case "Evernote":
      return Evernote_imageResource;
    case "Excel (Microsoft)":
      return Excel_imageResource;
    case "Facebook":
      return Facebook_imageResource;
    case "Files (Google)":
      return Files_imageResource;
    case "Firefox":
      return Firefox_imageResource;
    case "Forms (Google)":
      return Forms_imageResource;
    case "Galaxy Store":
      return Galaxy_imageResource;
    case "Glovo":
      return Glovo_imageResource;
    case "Gmail":
      return Gmail_imageResource;
    case "Google":
      return Google_imageResource;
    case "Google Launcher":
      return GoogleLauncher_imageResource;
    case "Hangouts (Google)":
      return Hangouts_imageResource;
    case "Idealista":
      return Idealista_imageResource;
    case "Instagram":
      return Instagram_imageResource;
    case "Instagram":
      return Instagram_imageResource;
    case "Itchio":
      return Itchio_imageResource;
    case "Keep (Google)":
      return Keep_imageResource;
    case "Ko-Fi":
      return KoFi_imageResource;
    case "Link to Windows (Microsoft)":
      return Link_imageResource;
    case "LinkedIn":
      return LinkedIn_imageResource;
    case "London Guide":
      return LondonGuide_imageResource;
    case "London Offline Map":
      return LondonMap_imageResource;
    case "London Tube Map":
      return LondonTubeMap_imageResource;
    case "Maps (Google)":
      return GoogleMaps_imageResource;
    case "Mercadolibre":
      return Mercadolibre_imageResource;
    case "Mercadopago":
      return Mercadopago_imageResource;
    case "Messenger (Facebook)":
      return Messenger_imageResource;
    case "Mi Argentina":
      return Mi_imageResource;
    case "Microsoft Launcher":
      return Microsoft_imageResource;
    case "Miro":
      return Miro_imageResource;
    case "Moj":
      return Moj_imageResource;
    case "Netflix":
      return Netflix_imageResource;
    case "Netflix":
      return Netflix_imageResource;
    case "Notion":
      return Notion_imageResource;
    case "Nova Launcher":
      return Nova_imageResource;
    case "Office":
      return Office_imageResource;
    case "OneDrive (Microsoft)":
      return OneDrive_imageResource;
    case "OneNote (Microsoft)":
      return OneNote_imageResource;
    case "Opera":
      return Opera_imageResource;
    case "Outlook (Microsoft)":
      return Outlook_imageResource;
    case "Patreon":
      return Patreon_imageResource;
    case "PayPal":
      return PayPal_imageResource;
    case "PedidosYa":
      return PedidosYa_imageResource;
    case "Photos (Google)":
      return Photos_imageResource;
    case "Pinterest":
      return Pinterest_imageResource;
    case "Playstore (Google)":
      return Playstore_imageResource;
    case "Podcasts (Google)":
      return Podcasts_imageResource;
    case "PowerPoint (Microsoft)":
      return PowerPoint_imageResource;
    case "Presentations (Google)":
      return Presentations_imageResource;
    case "Publisher (Microsoft)":
      return Publisher_imageResource;
    case "Reddit":
      return Reddit_imageResource;
    case "Safari":
      return Safari_imageResource;
    case "Samsung Free":
      return Samsung_imageResource;
    case "Santander":
      return Santander_imageResource;
    case "Sheets (Google)":
      return Sheets_imageResource;
    case "Skype":
      return Skype_imageResource;
    case "Slack":
      return Slack_imageResource;
    case "Slack":
      return Slack_imageResource;
    case "Snapchat":
      return Snapchat_imageResource;
    case "SocioPlus":
      return SocioPlus_imageResource;
    case "SoundCloud":
      return SoundCloud_imageResource;
    case "Spotify":
      return Spotify_imageResource;
    case "Steam":
      return Steam_imageResource;
    case "Talkback (Google)":
      return Talkback_imageResource;
    case "Tarjeta Transporte Madrid":
      return Tarjeta_imageResource;
    case "Telegram":
      return Telegram_imageResource;
    case "Text to Speech (Google)":
      return Text_imageResource;
    case "Tfl Go":
      return TflGo_imageResource;
    case "Tfl Oyster":
      return TflOyster_imageResource;
    case "TickTick":
      return TickTick_imageResource;
    case "TikTok":
      return TikTok_imageResource;
    case "Tinder":
      return Tinder_imageResource;
    case "To do (Microsoft)":
      return To_imageResource;
    case "Todoist":
      return Todoist_imageResource;
    case "Toggl":
      return Toggl_imageResource;
    case "Toggl Blue Icon":
      return TogglBlue_imageResource;
    case "Toggl Hire":
      return TogglHire_imageResource;
    case "Toggl Plan":
      return TogglPlan_imageResource;
    case "Toggl Track":
      return TogglTrack_imageResource;
    case "Translate (Google)":
      return Translate_imageResource;
    case "Trello":
      return Trello_imageResource;
    case "Trello":
      return Trello_imageResource;
    case "Tumblr":
      return Tumblr_imageResource;
    case "TV (Google)":
      return TV_imageResource;
    case "Twitch":
      return Twitch_imageResource;
    case "Twitter":
      return Twitter_imageResource;
    case "Uber":
      return Uber_imageResource;
    case "Uber Eats":
      return UberEats_imageResource;
    case "Vivaldi":
      return Vivaldi_imageResource;
    case "Whatsapp":
      return Whatsapp_imageResource;
    case "Wikipedia":
      return Wikipedia_imageResource;
    case "WinRAR":
      return WinRAR_imageResource;
    case "Word (Microsoft)":
      return Word_imageResource;
    case "Youtube":
      return Youtube_imageResource;
    case "Zoom":
      return Zoom_imageResource;
  }
};
