import './InformationBlock.scss';
import myPhoto from './images/me13.jpg';

export const InformationBlock = () => {
    return (
        <div className="info-block">
            <img className="info-block__my-photo" src={myPhoto} alt="my_photo" />
            <h1>Pavel Orlov (Ironfoot)</h1>
            <h3>Front-End Developer</h3>
            <div className="text__links">
                <div><a target="_blank" href="https://github.com/pavel-ironfoot">GitHub</a></div>
                <div><a target="_blank" href="https://www.linkedin.com/in/pavel-ironfoot/">Linkedin</a></div>
                <div>
                    <a target="_blank" href="mailto:khuzdblacksmith@gmail.com">khuzdblacksmith@gmail.com</a>
                </div>
            </div>
        </div>
    );
}