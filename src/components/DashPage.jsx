import axios from "axios"
import { useEffect, useState } from "react"

const style = {
    width: "23rem",
    backgroundColor: "#009688",
    height: "12rem",
}

function DashPage() {
    const [empData, setEmpData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:9999/getAdmin')
            .then(res => {
                setEmpData(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" className="scrollspy-example-2" tabIndex="0">
                <div className="row">
                    {empData.map((data) =>
                        <div className="col-4">
                            <div className="card" style={style} key={data._id}>
                                <div className="card-body">
                                    <h5 className="card-title">ADMIN CARD</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <p className="card-text">EMAIL OF THE ADMIN : {data.email}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default DashPage