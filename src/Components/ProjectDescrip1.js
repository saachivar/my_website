// Child Component
const ProjectDescrip1 = ({ heading, links }) => {
    return (
        <div className="ProjectDescrip">
            <h2>{heading}</h2>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.url}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default ProjectDescrip1;