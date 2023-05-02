import { useEffect, useState } from "react";
import { UniversityInterface } from "../interfaces/university.interface";
import { apiFetch } from "../utils/apiFetch";
import Loading from "./Loding";
import Universities from "./Universities";
import UniversityCounts from "./UniversityCounts";

function Search () {
    //state
    const [inputSearch, setInputSearch] = useState<string>('');
    const [universities, setUniversities] = useState<UniversityInterface[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        setInputSearch(e.currentTarget.value);
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
        {loading && <Loading />}
        <div>
            <input type="text" value={inputSearch} onChange={(e) => handleInputChange(e)}/>
            <h2>{<UniversityCounts counts={universities.length}/>}</h2>
            <div>
                {<Universities universities={universities}/>}
            </div>
        </div>
    </div>
}

export default Search;