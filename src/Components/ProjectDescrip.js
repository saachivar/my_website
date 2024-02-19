// Child Component
const ProjectDescrip = ({ heading, links }) => {
    return (
        <div className="ProjectDescrip">
            <h2> HELLO </h2>
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


export default ProjectDescrip;