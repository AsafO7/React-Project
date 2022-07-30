import { Email, GitHub, LinkedIn } from '@material-ui/icons'
import { /*Casino,*/ RestaurantMenu } from "@mui/icons-material";
import CalculateIcon from '@mui/icons-material/Calculate';
import DateRangeIcon from '@mui/icons-material/DateRange';
import WebAssetIcon from '@mui/icons-material/WebAsset';

// export const links = [
//   {
//     id: 1,
//     url: '/',
//     text: 'home',
//   },
// ]

export const social = [
  {
    id: 2,
    url: 'mailto:ovasaf@gmail.com',
    icon: <Email fontSize='large'/>,
  },
  {
    id: 3,
    url: 'https://linkedin.com/in/asaf-ovadya',
    icon: <LinkedIn fontSize='large'/>,
  },
  {
    id: 4,
    url: 'https://github.com/AsafO7',
    icon: <GitHub fontSize='large'/>
  }
]

export const cardData = [
  {
    id: 1,
    img: "https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_960_720.jpg",
    icon: <RestaurantMenu fontSize="large" color="action"/>,
    texth3: "Recipe Menu",
    texth4: "Displaying various recipes fetched from an API.\n" +
    "Written with React and Typescript.",
    link: "/disheslist"
  },

  {
    id: 2,
    img: "https://cdn.pixabay.com/photo/2017/06/05/15/52/calculator-2374442_960_720.png",
    icon: <CalculateIcon fontSize="large" color="action"/>,
    texth3: "Calculator",
    texth4: "A simple calculator.\nWritten with React and Javascript",
    link: "/calculator"
  },

  {
    id: 3,
    img: "https://cdn.pixabay.com/photo/2016/11/21/20/03/calendar-1847346_960_720.png",
    icon: <DateRangeIcon fontSize="large" color="action"/>,
    texth3: "Calendar",
    texth4: "A calendar you can add events to.\nWritten with React and Typescript",
    link: "/calendar"
  },

  {
    id: 4,
    img: "https://cdn.pixabay.com/photo/2016/09/30/09/16/tablet-1704786_960_720.png",
    icon: <WebAssetIcon fontSize="large" color="action"/>,
    texth3: "Website clone",
    texth4: "A clone of a modern website.\nWritten with React and Typescript.\n(for copyright issues contact me via mail and I'll take it down)",
    link: "/ca-clone"
  },
  
  // {
  //   id: 4,
  //   icon: <Casino fontSize="large" color="action"/>,
  //   texth3: "Mini games project",
  //   texth4: "Vanilla Javascript",
  //   link: "/games/index.html"
  // },
]
