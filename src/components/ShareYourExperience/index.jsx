import React from 'react';
import { Row, Button, Col } from 'antd';
import './index.css';
import { useTranslation } from 'react-i18next';

const ShareYourExperience = () => {
    const [t] = useTranslation();

    return (
        <div className='container'>
            <div className='curve'>
                <div className='curveTopHalf'></div>
                <div className='curveBottomHalf'></div>
            </div>
            <Row justify='center' className='shareButtonRow'>
                <Col xxl={10} xl={10} lg={12} md={12} sm={14} xs={16}>
                    <Button className='shareExperienceButton'>
                        <a
                            target='_blank'
                            href='https://www.twitter.com'
                            rel='noopener noreferrer'
                        >
                            {t('shareYourExperienceContainer.spreadTheWord')}
                        </a>
                    </Button>
                </Col>
            </Row>
        </div>
    );
};

export default ShareYourExperience;
