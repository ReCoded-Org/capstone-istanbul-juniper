import React from 'react';
import { Row, Col } from 'antd';
import './index.css';
import { useTranslation } from 'react-i18next';

const ShareYourExperience = () => {
    const [t] = useTranslation();

    return (
        <Row justify='center' className='spreadTheWord'>
            <Col xxl={10} xl={10} lg={12} md={12} sm={14} xs={16}>
                <button className='spreadTheWord__button'>
                    <a target='_blank' href='https://www.twitter.com'>
                        {t('spreadTheWord')}
                    </a>
                </button>
            </Col>
        </Row>
    );
};

export default ShareYourExperience;
