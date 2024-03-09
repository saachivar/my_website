
function About2() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="about about2">
            <p style={{fontSize: '35px', marginBottom: '30px'}}>skills</p>
            <div id="skillsBox"  style={{fontSize: '40px', }}>
               <p  style={{fontSize: '40px', margin: '0px' }}>HTML   |   CSS    |   JavaScript    |   Java   |   C</p>
            </div>
            </div>
        )
    
    }
    export default About2;