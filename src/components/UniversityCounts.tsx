type UniversityCountsProps = {
    counts: number;
}

function UniversityCounts ({counts}: UniversityCountsProps) {
    return <>{counts ? `${counts > 1 ? `${counts} universités trouvées.`: "une université trouvée."}` : "Pas d'université trouvé."}</>
}

export default UniversityCounts;