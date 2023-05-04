import { UniversityInterface } from "../interfaces/university.interface";
import UniversityWebsites from "./UniversityWebsites";

type UniversityProps = {
    university: UniversityInterface;
}
function University ({university}: UniversityProps) {
    return (<div className="card" data-testid="university">
        <div className="card-header">
            {university.name}
        </div>
        <div className="card-body">
            <h5 className="card-title">{university.country}</h5>
            <UniversityWebsites websites={university.web_pages}/>
        </div>
    </div>)
}

export default University;