import React from 'react';
import TwitterImage from '../TwitterImage';
import { Typography, Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';
import './index.css';

const StayUpToDate = () => {
    const { Title } = Typography;
    const [t] = useTranslation();

    const twitterPages = [
        ...t('twitterPages', {
            returnObjects: true,
        }),
    ];

    return (
        <div className='stayUpToDate'>
            <Title>
                <span className='stayUpToDate__title'>{t('stayUpToDate')}</span>
            </Title>
            <Row align='center' className='stayUpToDate__twitterContent'>
                {twitterPages.map((page, index) => (
                    <Col
                        xs={24}
                        sm={24}
                        md={24}
                        lg={24}
                        xl={12}
                        xxl={12}
                        className='stayUpToDate__twitterContent__col'
                        key={index}
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
