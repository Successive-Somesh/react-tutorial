import { Link } from "react-router-dom";
function Sidebar(props) {
    return (<nav className={props.className} style={{padding:'1em'}}>
        <p style={{padding:'0.5em',border:'solid 1px #fff'}}> Module 1 </p>
        <ul>
            <li><Link to="m1/child">Child</Link></li>
            <li><Link to="m1/childwithprops">Child with Props</Link></li>
            <li><Link to="m1/childwithstateandprops">Child with State and Props</Link></li>
            <li><Link to="m1/lifecycle">Component Lifecycle</Link></li>
        </ul>
        <p style={{padding:'0.5em',border:'solid 1px #fff'}}> Module 2 </p>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="m1">M1</Link></li>
            <li><Link to="m1/basic">Basic</Link></li>
        </ul>
        <p style={{padding:'0.5em',border:'solid 1px #fff'}}> Module 3 </p>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="m1">M1</Link></li>
            <li><Link to="m1/basic">Basic</Link></li>
        </ul>
    </nav>);
}
export default Sidebar;