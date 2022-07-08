import { social } from '../../data'

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
              <span className="contact">Contact me:</span>
              {social.map((element: any) => {
                return <a key={element.id} href={element.url} className="contact-icons"
                target={"blank"}>{element.icon}</a>
              })}
            </div>
        </div>
        {/* <img className="my-image" src="https://i.ibb.co/kq16mZq/e.png" alt="pic"></img> */}
    </section>
  )
}
