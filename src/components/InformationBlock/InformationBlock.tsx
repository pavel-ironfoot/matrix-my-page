import { TypeAnimation } from 'react-type-animation';
import myPhoto from './images/me13.jpg';

import './InformationBlock.scss';

export const InformationBlock = () => {
    return (
        <div className="info-block">
            <img className="info-block__my-photo" src={myPhoto} alt="my_photo" />
            <TypeAnimation
                style={{ lineHeight: '35px', color: 'rgb(45, 194, 45)', fontSize: '24px', whiteSpace: 'pre-line', fontWeight: '300', height: '55px', display: 'block' }}
                sequence={[
                    `Pavel Orlov (Ironfoot)
                            Front-End Developer`,
                    5000,
                    '',
                ]}
                repeat={Infinity}
                speed={5}
            />
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