import { social } from '../../data'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export const About = () => {
  return (
    <section className="skills">
        <div className="about">
            <h3 className="about-header">Hey, I'm Asaf Ovadya</h3>
            <h1 className="about-me">Front-End Developer</h1>
            <h4>C.S student of The Open University of Israel.</h4>
            <div style={{display: "flex"}}>
              <span className="contact">Contact me:</span>
              {social.map((element: any) => {
                return <a key={element.id} href={element.url} className="contact-icons"
                target={"blank"}>{element.icon}</a>
              })}
            </div>
            <div style={{display: "flex", justifyContent: "space-evenly"}}>
              <ArrowDownwardIcon className="arrow" style={{fontSize: "4rem"}}/>
              <h1 className="about-project-header">Projects</h1>
              <ArrowDownwardIcon className="arrow" style={{fontSize: "4rem"}}/>
            </div>
        </div>
        {/* <img className="my-image" src="https://i.ibb.co/kq16mZq/e.png" alt="pic"></img> */}
    </section>
  )
}
