function UniversityWebsites ({websites}: any) {
    return <div>
        {websites.map((website: string, index: number) => {
            return <div key={index}>
                <a href={website}>{website}</a>
            </div>
        })}
    </div>
}

export default UniversityWebsites;