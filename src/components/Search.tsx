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
        setInputSearch(e.currentTarget.value);
    }

    //effect
    useEffect(() => {
        setLoading(true);
        const controller = new AbortController();
        const {signal} = controller;
        let searchText = inputSearch.trim();
        if (searchText) {
            (async () => {
                let data = await apiFetch(`/search?name=${searchText}`, {signal});
                setUniversities(data);
                setLoading(false);
            })();
        } else {
            setUniversities([]);
            setLoading(false);
        }
        return () => controller.abort();
    }, [inputSearch]);

    //render
    return <div>
        <div>
            <div className="row">
                <div className="col-md-5 offset-md-3">
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
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                <h2>{<UniversityCounts counts={universities.length} input={inputSearch}/>}</h2>
                </div>
            </div>
            <div className="row position-relative">
                { loading &&
                    <Loading />}
                {<Universities universities={universities}/>}
            </div>
        </div>
    </div>
}

export default Search;