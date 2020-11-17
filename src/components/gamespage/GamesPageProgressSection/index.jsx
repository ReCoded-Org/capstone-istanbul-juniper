import React from 'react';
import './index.css';
import { useTranslation } from 'react-i18next';
import { Progress, Row, Col } from 'antd';
import { QuestionOutlined } from '@ant-design/icons';
import trashBinReward from '../../../images/trash-bin.svg';

const ProgressSection = () => {
    const [t] = useTranslation();
    return (
        <div className='progressSectionContainer'>
            <Row justify='center'>
                <h3 className='progressSectionContainer___xp'>
                    50/100 {t('gamesPage.experiencePoint')}
                </h3>
            </Row>
            <Row justify='center' className='progressSectionContainer___row'>
                <Col span={6}>
                    <h3
                        className='
                        progressSectionContainer___row___header 
                        progressSectionContainer___row___leftLevel
                        '
                    >
                        {t('gamesPage.level')} 5
                    </h3>
                </Col>
                <Col span={12}>
                    <Progress
                        percent={50}
                        className='progressSectionContainer___row___progressBar'
                        strokeColor='#4BA747'
                        trailColor='white'
                        strokeWidth={20}
                        showInfo={false}
                    />
                </Col>
                <Col span={6}>
                    <h3
                        className='
                        progressSectionContainer___row___header 
                        progressSectionContainer___row___rightLevel
                        '
                    >
                        {t('gamesPage.level')} 6
                    </h3>
                </Col>
            </Row>
            <Row className='progressSectionContainer___row'>
                <Col span={3} push={6}>
                    <h3 className='progressSectionContainer___row___header'>
                        {t('gamesPage.previous')}
                        <br />
                        {t('gamesPage.reward')}
                    </h3>
                    <img
                        src={trashBinReward}
                        alt='trash'
                        className='progressSectionContainer___row___header___prevReward'
                    />
                </Col>
                <Col span={3} push={14}>
                    <h3 className='progressSectionContainer___row___header'>
                        {t('gamesPage.next')}
                        <br />
                        {t('gamesPage.reward')}
                    </h3>
                    <QuestionOutlined className='progressSectionContainer___row___header___questionMark' />
                </Col>
            </Row>
        </div>
    );
};

export default ProgressSection;
