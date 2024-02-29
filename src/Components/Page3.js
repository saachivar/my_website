import ProjectDescrip from "./ProjectDescrip.js";

const heading1 = 'Solo Projects:';
const links1 = [
        { text: 'CodeNotes', url: 'https://github.com/saachivar/CodeNotes' },
        { text: 'This Website', url: 'https://github.com/saachivar/my_website' },
    ];

const heading2 = 'Group Projects';
const links2 = [
        { text: 'UGAHACKS9: Spotify Stats', url: 'https://github.com/saachivar/SpotifyStats' },
        { text: 'Foodiez', url: 'https://github.com/audreyyyf/Foodiez' }
    ];

function Page3() {
return (
    <div className = "Page3">
        <ProjectDescrip heading={heading1} links={links1} />
        <ProjectDescrip heading={heading2} links={links2} />
        </div>
);

}
export default Page3;