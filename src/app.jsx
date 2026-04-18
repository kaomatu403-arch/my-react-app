import { useState } from 'react';

import './reset.css';
import './App.css';

const mockData = [
    {
        subject_name: "情報学概論",
        room_number: "301",
        teacher_name: "マーク・オフナー",
        day_of_week: 1,
        period: 1,
        color: "#cfe7fc"
    },
    {
        subject_name: "情報社会及び情報倫理",
        room_number: "実験室B",
        teacher_name: "佐藤花子",
        day_of_week: 3,
        period: 2,
        color: "#cfe7fc"
    },
    {
        subject_name: "モラル概論",
        room_number: "大講義室3",
        teacher_name: "モラ爺",
        day_of_week: 3,
        period: 3,
        color: "#cfe7fc"
    },
    {
        subject_name: "激渋論",
        room_number: "705-2",
        teacher_name: "激渋太郎",
        day_of_week: 5,
        period: 4,
        color: "#cfe7fc"
    },
    {
        subject_name: "データベース基礎",
        room_number: "実験室A",
        teacher_name: "田中次郎",
        day_of_week: 2,
        period: 1,
        color: "#cfe7fc"
    },
    {
        subject_name: "アルゴリズム入門",
        room_number: "402",
        teacher_name: "鈴木花子",
        day_of_week: 4,
        period: 2,
        color: "#cfe7fc"
    },
    {
        subject_name: "コミュニカティブイングリッシュC（一年同選考用）",
        room_number: "G2505",
        teacher_name: "高橋一郎",
        day_of_week: 1,
        period: 3,
        color: "#cfe7fc"
    },
    {
        subject_name: "ソフトウェア工学",
        room_number: "503",
        teacher_name: "伊藤美咲",
        day_of_week: 3,
        period: 4,
        color: "#cfe7fc"
    },
    {
        subject_name: "人工知能基礎",
        room_number: "実験室C",
        teacher_name: "渡辺健",
        day_of_week: 5,
        period: 5,
        color: "#cfe7fc"
    },
    {
        subject_name: "セキュリティ概論",
        room_number: "大講義室2",
        teacher_name: "小林太郎",
        day_of_week: 2,
        period: 3,
        color: "#cfe7fc"
    },
    {
        subject_name: "プログラミング言語論",
        room_number: "604",
        teacher_name: "斎藤花子",
        day_of_week: 4,
        period: 1,
        color: "#cfe7fc"
    },
    {
        subject_name: "データ構造とアルゴリズム",
        room_number: "実験室D",
        teacher_name: "松本次郎",
        day_of_week: 1,
        period: 5,
        color: "#cfe7fc"
    },
    {
        subject_name: "オペレーティングシステム",
        room_number: "705",
        teacher_name: "林美咲",
        day_of_week: 3,
        period: 6,
        color: "#cfe7fc"
    },
    {
        subject_name: "コンピュータアーキテクチャ",
        room_number: "大講義室4",
        teacher_name: "山本健",
        day_of_week: 5,
        period: 2,
        color: "#cfe7fc"
    },
    {
        subject_name: "ウェブ開発基礎",
        room_number: "実験室E",
        teacher_name: "中村太郎",
        day_of_week: 2,
        period: 4,
        color: "#cfe7fc"
    },
    {
        subject_name: "機械学習入門",
        room_number: "806",
        teacher_name: "藤田花子",
        day_of_week: 4,
        period: 6,
        color: "#cfe7fc"
    }
];

export default function App() {
    const [hoveringClassBlock, setHoveringClassBlock] = useState(false);

    // データマップを作成
    const dataMap = new Map();
    mockData.forEach(data => {
        const periodNames = ["first", "second", "third", "fourth", "fifth", "sixth"];
        const dayNames = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
        const key = `${periodNames[data.period - 1]}p-${dayNames[data.day_of_week - 1]}`;
        dataMap.set(key, data);
    });

    const handleClassBlockEnter = () => setHoveringClassBlock(true);
    const handleClassBlockLeave = () => setHoveringClassBlock(false);

    // セルを生成する関数
    const renderDayCells = (periodIndex) => {
        const periodNames = ["first", "second", "third", "fourth", "fifth", "sixth"];
        const dayNames = ["mon", "tue", "wed", "thu", "fri"];
        return dayNames.map((dayName, dayIndex) => {
            const key = `${periodNames[periodIndex]}p-${dayName}`;
            const data = dataMap.get(key);
            return (
                <div key={key} className={`day-cell ${key}`}>
                    {data ? (
                        <div className="class-block" style={{ backgroundColor: data.color }} onMouseEnter={handleClassBlockEnter} onMouseLeave={handleClassBlockLeave}>
                            <div className="day-cell-top">
                                <p>{data.subject_name}</p>
                            </div>
                            <div className="day-cell-bottom">
                                <div className="bottom-content">
                                    <p>{data.room_number}</p>
                                    <p className="teacher-name">{data.teacher_name}</p>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            );
        });
    };

    return (

        <section className='main-section'>

            <section className='calender-section'>

                <div className={`calender-table${hoveringClassBlock ? ' hover-class-block' : ''}`}>

                    <div className='weekday'>
                        <div className='left-spacer'></div>
                        <section className='calender-seiton'>
                            <div className='day'>月</div>
                            <div className='day'>火</div>
                            <div className='day'>水</div>
                            <div className='day'>木</div>
                            <div className='day'>金</div>

                        </section>
                    </div>

                    <div className='period-row first-period'>
                        <div className="period-left">
                            <p className='period-number'>1</p>
                            <p className='time'>9:00<br />~<br />10:30</p>
                        </div>
                        <section className='calender-seiton'>
                            {renderDayCells(0)}
                        </section>
                    </div>

                    <div className='period-row second-period'>
                        <div className="period-left">
                            <p className='period-number'>2</p>
                            <p className='time'>10:40<br />~<br />12:10</p>
                        </div>
                        <section className='calender-seiton'>
                            {renderDayCells(1)}
                        </section>
                    </div>

                    <div className='period-row third-period'>
                        <div className="period-left">
                            <p className='period-number'>3</p>
                            <p className='time'>13:00<br />~<br />14:30</p>
                        </div>
                        <section className='calender-seiton'>
                            {renderDayCells(2)}
                        </section>
                    </div>

                    <div className='period-row fourth-period'>
                        <div className="period-left">
                            <p className='period-number'>4</p>
                            <p className='time'>14:40<br />~<br />16:10</p>
                        </div>
                        <section className='calender-seiton'>
                            {renderDayCells(3)}
                        </section>
                    </div>

                    <div className='period-row fifth-period'>
                        <div className="period-left">
                            <p className='period-number'>5</p>
                            <p className='time'>16:20<br />~<br />17:50</p>
                        </div>
                        <section className='calender-seiton'>
                            {renderDayCells(4)}
                        </section>
                    </div>

                    <div className='period-row sixth-period'>
                        <div className="period-left">
                            <p className='period-number'>6</p>
                            <p className='time'>18:00<br />~<br />19:30</p>
                        </div>
                        <section className='calender-seiton'>
                            {renderDayCells(5)}
                        </section>
                    </div>

                </div>

            </section>

        </section>

    )

}