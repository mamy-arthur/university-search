import { UniversityInterface } from "../interfaces/university.interface";
import University from "./University";

type UniversitiesProps = {
    universities: UniversityInterface[];
}

function Universities ({universities}: UniversitiesProps) {
    return <div className="row">{
        universities.map((university: UniversityInterface, index: number) => {
            return <div className="col-md-4 mt-3" key={index}>
                <University university={university}/>
            </div>
        })
    }</div>
}

export default Universities;