import { UniversityInterface } from "../interfaces/university.interface";
import University from "./University";

type UniversitiesProps = {
    universities: UniversityInterface[];
}

function Universities ({universities}: UniversitiesProps) {
    return <div className="row">{
        universities.map((university: UniversityInterface, index: number) => {
            return <div className="col-xl-3 col-lg-4 col-md-6 col-xs-12 mt-3" key={index}>
                <University university={university}/>
            </div>
        })
    }</div>
}

export default Universities;