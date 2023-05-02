type UniversityWebsitesProps = {
    websites: string[];
}

function UniversityWebsites ({websites}: UniversityWebsitesProps) {
    return <ul className="list-group list-group-flush">
        {websites.map((website: string, index: number) => {
            return <li key={index} className="list-group-item"><a href={website}>{website}</a></li>
        })}
    </ul>
}

export default UniversityWebsites;