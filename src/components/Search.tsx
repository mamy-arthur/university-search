import { useEffect, useState } from "react";
import { UniversityInterface } from "../interfaces/university.interface";
import { apiFetch } from "../utils/apiFetch";
import Loading from "./Loading";
import Universities from "./Universities";
import UniversityCounts from "./UniversityCounts";

function Search () {
    //state
    const [inputSearch, setInputSearch] = useState<string>('');
    const [universities, setUniversities] = useState<UniversityInterface[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        setInputSearch(e.currentTarget.value.trim());
    }

    //effect
    useEffect(() => {
        setLoading(true);
        let getData = setTimeout(async () => {
            if (inputSearch.length) {
                let data =  await apiFetch(`/search?name=${inputSearch}`);
                setUniversities(data);
                setLoading(false);
            } else if (inputSearch.length === 0) {
                setUniversities([]);
                setLoading(false);
            }
        }, 750)
        return () => clearTimeout(getData)
    }, [inputSearch]);

    //render
    return <div>
        <div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Rechercher</span>
                <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    value={inputSearch}
                    onChange={(e) => handleInputChange(e)}
                />
            </div>
            <h2>{<UniversityCounts counts={universities.length}/>}</h2>
            <div className="row position-relative">
                { loading &&
                    <Loading />}
                {<Universities universities={universities}/>}
            </div>
        </div>
    </div>
}

export default Search;