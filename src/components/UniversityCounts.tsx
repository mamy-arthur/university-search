type UniversityCountsProps = {
    counts: number;
    input: string;
}

function UniversityCounts ({counts, input}: UniversityCountsProps) {
    return <>{input.trim().length !== 0 ?(counts ? (`${counts > 1 ? `${counts} universités trouvées.`: "une université trouvée."}`) : ("Pas d'université trouvé.")): ("Entrer du texte pour faire des recherches.")}</>
}

export default UniversityCounts;