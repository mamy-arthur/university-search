import { UniversityInterface } from "../interfaces/university.interface";
import UniversityWebsites from "./UniversityWebsites";

function Universities ({universities}: any) {
    return <ul>{
        universities.map((university: UniversityInterface, index: number) => {
            return <li key={index}>
                {university.name} {university.country}
                {<UniversityWebsites websites={university.web_pages}/>}
            </li>
        })
    }</ul>
}

export default Universities;