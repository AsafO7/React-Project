import { data, data2 } from "./MainContent-data"

export const MainContent = () => {
    return (<>
            <main className="ca-main-container">
                {data.map((item) => {
                    if(item.id % 2 === 1) {
                        return (
                            <div key={item.id} className="ca-container-row">
                                <img src={item.image} alt="img" className="ca-main-img" id={`ca-main-img${item.id}`}></img>
                                <div className="ca-info">
                                    <h1 className="h1-reveal">{item.h1}</h1>
                                    <h3 className="h3-reveal">{item.h3}</h3>
                                    <p>{item.desc}</p>
                                    <button>{item.btnDesc}</button>
                                </div>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div key={item.id} className="ca-container-row">
                                <div className="ca-info">
                                    <h1 className="h1-reveal">{item.h1}</h1>
                                    <h3 className="h3-reveal">{item.h3}</h3>
                                    <p>{item.desc}</p>
                                    <button>{item.btnDesc}</button>
                                </div>
                                <img src={item.image} alt="img" className="ca-main-img" id={`ca-main-img${item.id}`}></img>
                            </div>
                        )
                    }
                })}
            </main>
            <div className="ca-bottom-main">
                {data2.map((item) => {
                    return (
                        <div key={item.id} className="ca-bottom-info">
                            <span className="ca-main-icon">{item.icon}</span>
                            <h1>{item.h1}</h1>
                            <p>{item.desc}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

/* animate the elements as needed */