import { data } from "./footer-data"

export const Footer = () => {
    return <footer className="ca-footer">
        <img src="https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/5527f403715879bc5767fce1_hipster-white.png" alt="logo"></img>
        {data.map((item) => {
            return <div key={item.id} className="footer-info-container">
                <h5>{item.h5}</h5>
                {item.id === 1 ? <a href="#ovasaf.com\ca-clone">{item.p}</a> : <p>{item.p}</p>}
            </div>
        })}
    </footer>
}