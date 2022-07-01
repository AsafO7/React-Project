import { GitHub, LinkedIn } from '@material-ui/icons'

export const About = () => {
  return (
    <section className="skills">
        <div className="about">
            <h3 className="about-header">My name is Asaf Ovadya</h3>
            <p className="about-me">C.S student of The
                Open University of Israel.
            </p>
            <h4>I'm looking for my first job as a Front-end developer.</h4>
            <div style={{display: "flex"}}>
              <a href="mailto:ovasaf@gmail.com" className="contact"><button className="contact">Contact me</button></a>
              <a href="https://www.linkedin.com/in/asaf-ovadya-219b76233/"
               className='contact-icons' target={"blank"} style={{margin: "0 5px"}}><LinkedIn fontSize='large'/></a>
              <a href="https://github.com/AsafO7" target={"blank"} className='contact-icons'>
                <GitHub fontSize='large' /></a>
            </div>
        </div>
        {/* <img className="my-image" src="https://i.ibb.co/kq16mZq/e.png" alt="pic"></img> */}
    </section>
  )
}
