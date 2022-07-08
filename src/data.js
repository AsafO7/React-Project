import { Email, GitHub, LinkedIn } from '@material-ui/icons'
import { /*Casino,*/ RestaurantMenu } from "@mui/icons-material";
import CalculateIcon from '@mui/icons-material/Calculate';
import DateRangeIcon from '@mui/icons-material/DateRange';


export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
]

export const social = [
  {
    id: 2,
    url: 'mailto:ovasaf@gmail.com',
    icon: <Email fontSize='large'/>,
  },
  {
    id: 3,
    url: 'www.linkedin.com/in/asaf-ovadya',
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
    icon: <RestaurantMenu fontSize="large" color="action"/>,
    texth3: "Recipe menu project",
    texth4: "React and Typescript",
    link: "/disheslist"
  },

  {
    id: 2,
    icon: <CalculateIcon fontSize="large" color="action"/>,
    texth3: "Calculator project",
    texth4: "React and Javascript",
    link: "/calculator"
  },

  {
    id: 3,
    icon: <DateRangeIcon fontSize="large" color="action"/>,
    texth3: "Calendar project",
    texth4: "React and Typescript",
    link: "/calendar"
  },
  
  // {
  //   id: 4,
  //   icon: <Casino fontSize="large" color="action"/>,
  //   texth3: "Mini games project",
  //   texth4: "Vanilla Javascript",
  //   link: "/games/index.html"
  // },
]
