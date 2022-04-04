import { Email, GitHub, LinkedIn } from '@material-ui/icons'
import { Casino, RestaurantMenu } from "@mui/icons-material";
import CalculateIcon from '@mui/icons-material/Calculate';


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
    url: '???',
    icon: <Email />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com/in/asaf-ovadya-219b76233/',
    icon: <LinkedIn />,
  },
  {
    id: 4,
    url: 'https://github.com/AsafO7',
    icon: <GitHub />
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
    icon: <Casino fontSize="large" color="action"/>,
    texth3: "Mini games project",
    texth4: "Vanilla Javascript",
    link: "/games/index.html"
  },
]
