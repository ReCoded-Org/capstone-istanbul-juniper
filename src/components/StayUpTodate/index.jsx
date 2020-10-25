import React from 'react';
import TwitterImage from '../TwitterImage';
import { Typography, Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';
import './index.css';

const StayUpToDate = () => {
    const { Title } = Typography;
    const [t] = useTranslation();
    const twitterPagesArr = t('shareYourExperienceContainer.twitterPages', {
        returnObjects: true,
    });
    return (
        <div className='container'>
            <Title className='title'>
                {t('shareYourExperienceContainer.stayUpToDate')}
            </Title>
            <Row align='center' className='content'>
                {twitterPagesArr.map(page => (
                    <Col
                        xs={24}
                        sm={24}
                        md={24}
                        lg={24}
                        xl={12}
                        xxl={12}
                        className='twitterCol'
                    >
                        <TwitterImage
                            alt={page.alt}
                            href={page.href}
                            src={page.src}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default StayUpToDate;
