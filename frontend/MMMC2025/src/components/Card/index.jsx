import './style.js';
import { Link } from 'react-router-dom';

export function Card({ title, description, link, external }) {

    return (
        <div className="card">
            {external ? 
                (<a href={link} target="_blank" rel="noopener noreferrer">{title}</a>)
                :(
                <Link to={link} style={{ display: 'inline-block', marginRight: '10px' }}>
                    {title}
                </Link>
                )
                }
            <p>{description}</p>
        </div>
    );
}