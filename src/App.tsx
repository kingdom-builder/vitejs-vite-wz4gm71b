import React, { useState } from 'react';

// setPage 프롭의 타입을 정의합니다.
interface PageNavProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

// 각 페이지 컴포넌트들
const Page1 = ({ setPage }: PageNavProps) => (
    <div className="tract-panel flex flex-col justify-between items-center text-center bg-gray-800 text-white" style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://placehold.co/300x630/334155/e2e8f0?text=UI')", backgroundSize: 'cover'}}>
        <div>
            <h2 className="text-4xl sm:text-5xl font-black leading-tight mt-8">Self-OS냐<br/>God-OS냐</h2>
            <p className="text-lg font-bold mt-2">이것이 문제로다!</p>
            <p className="mt-8 text-gray-300">마음은 인생의 운영체제입니다.<br/>당신은 어떤 시스템으로<br/>살아가고 있습니까?</p>
        </div>
        <div className="w-full mt-8">
            <button onClick={() => setPage(2)} className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg mb-3 transition">Self-OS로 부팅</button>
            <button onClick={() => setPage(4)} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition">God-OS로 부팅</button>
        </div>
    </div>
);

const Page2 = () => (
    <div className="tract-panel">
        <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
            </div>
            <h3 className="section-title text-red-600">Self-OS의 실상</h3>
            <p className="text-sm text-gray-500 mb-6">내가 주인일 때의 삶은...</p>
        </div>
        <div className="space-y-4 text-left">
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="font-bold text-red-700">반복된 오류</p>
                <p className="text-sm text-red-600">"또 같은 실수를 반복하고 있어..."</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-3">
                <p className="font-bold text-yellow-800">불안과 공허</p>
                <p className="text-sm text-yellow-700">"마음이 텅 빈 것 같고 늘 불안해."</p>
            </div>
            <div className="bg-gray-100 border border-gray-300 rounded-lg p-3">
                <p className="font-bold text-gray-700">비교와 조종</p>
                <p className="text-sm text-gray-600">"다른 사람처럼 되어야만 할 것 같아."</p>
            </div>
        </div>
    </div>
);

const Page3 = () => (
     <div className="tract-panel flex flex-col justify-between">
        <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
               <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
            </div>
            <h3 className="section-title text-green-700">함께 새로운 OS로 시작해요!</h3>
            <p className="text-gray-600">새로운 삶의 시스템을 설치할<br/>가장 완벽한 곳입니다.</p>
        </div>
        <div className="space-y-3 text-sm">
            <p><span className="font-bold">📍 예배시간:</span> 실로암교회 주일 오전 11:00</p>
            <p><span className="font-bold">🌐 홈페이지:</span> siloamch.com</p>
            <p><span className="font-bold">📞 연락처:</span> 010-3325-2931 이명재 목사</p>
            <p><span className="font-bold">📌 오시는길:</span> 경기 부천시 소사구 호현로 428</p>
        </div>
        <div className="text-center mt-4">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=http://siloamch.com" alt="교회 QR 코드" className="mx-auto rounded-lg border w-[150px] h-[150px]"/>
            <p className="text-xs mt-2 text-gray-500">홈페이지/카카오채널로 연결됩니다</p>
        </div>
    </div>
);

const Page4 = () => {
    const [checklist, setChecklist] = useState<{[key: string]: boolean}>({});
    const handleCheck = (item: string) => {
        setChecklist(prev => ({...prev, [item]: !prev[item]}));
    };
    return (
        <div className="tract-panel-flexible">
            <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                    <svg className="w-8 h-8 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h18m-7.5-14L21 6.5m0 0L16.5 11M21 6.5H3" />
                    </svg>
                </div>
                <h3 className="section-title">마음의 OS, 무엇이 다른가?</h3>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs items-start flex-grow">
                <div className="bg-red-50 p-3 rounded-lg border border-red-100 h-full flex flex-col">
                    <h4 className="font-bold text-red-700 text-center mb-2">Self-OS</h4>
                    <ul className="space-y-2 list-disc list-inside text-red-900">
                        <li><span className="font-bold">주인:</span> 나</li>
                        <li><span className="font-bold">기반:</span> 내 경험, 지식</li>
                        <li><span className="font-bold">결과:</span> 불안, 염려, 실패</li>
                        <li><span className="font-bold">업데이트:</span> 불가능</li>
                    </ul>
                    <div className="mt-4">
                        <h5 className="font-bold text-xs mb-2 text-center text-red-800">※ 증상 체크리스트</h5>
                        <div className="space-y-2">
                            {['열심히 살아도 허무하다.', '관계가 어렵고 자꾸 상처받는다.', '나도 나를 잘 모르겠다.', '하나님 없이 잘 살 수 있다고 믿는다.'].map((item: string) => (
                                <label key={item} className="flex items-center text-xs">
                                    <input type="checkbox" checked={!!checklist[item]} onChange={() => handleCheck(item)} className="h-4 w-4 rounded-sm border-gray-300 text-red-600 focus:ring-red-500"/>
                                    <span className="ml-2 text-gray-700">{item}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="mt-auto pt-3 border-t border-red-200 text-xs italic text-center text-red-800">
                        <p>"어떤 길은 사람이 보기에 바르나 필경은 사망의 길이니라" (잠언 14:12)</p>
                    </div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-100 h-full flex flex-col">
                    <div>
                        <h4 className="font-bold text-blue-700 text-center mb-2">God-OS</h4>
                        <ul className="space-y-2 list-disc list-inside text-blue-900">
                            <li><span className="font-bold">주인:</span> 하나님</li>
                            <li><span className="font-bold">기반:</span> 말씀, 진리</li>
                            <li><span className="font-bold">결과:</span> 평안, 기쁨, 승리</li>
                            <li><span className="font-bold">업데이트:</span> 매일 가능</li>
                        </ul>
                    </div>
                    <div className="mt-auto pt-3 border-t border-blue-200 text-xs italic text-center text-blue-800">
                        <p>"그런즉 누구든지 그리스도 안에 있으면 새로운 피조물이라 이전 것은 지나갔으니 보라 새 것이 되었도다" (고린도후서 5:17)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Page5 = ({ setPage }: PageNavProps) => (
    <div className="tract-panel bg-blue-50 border-blue-200">
        <div className="text-center mb-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <svg className="w-8 h-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
            </div>
            <h3 className="section-title text-blue-800">새 OS로 업그레이드!</h3>
            <p className="text-sm text-gray-600">예수님은 우리의 운영체제를<br/>바꾸러 오셨습니다.</p>
        </div>
        <div className="text-center space-y-3 my-4">
            <p className="font-bold">십자가 사건</p>
            <p className="text-2xl">⬇️</p>
            <p className="font-bold">모든 오류(죄) 삭제 및 포맷</p>
            <p className="text-2xl">⬇️</p>
            <p className="font-bold text-blue-600">성령을 통한 God-OS 설치</p>
        </div>
        <div className="text-xs bg-white p-2 rounded-lg border text-center">
            <p>"영접하는 자 곧 그 이름을 믿는 자들에게는 하나님의 자녀가 되는 권세를 주셨으니" (요한복음 1:12)</p>
        </div>
        <button onClick={() => setPage(6)} className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg mt-auto transition">
            <svg className="w-5 h-5 inline-block mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
              <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
            </svg>
            지금 설치하기
        </button>
    </div>
);

const Page6 = () => {
    const [decision, setDecision] = useState<{[key: string]: boolean}>({});
    const handleCheck = (item: string) => {
        setDecision(prev => ({...prev, [item]: !prev[item]}));
    };
    return (
        <div className="tract-panel flex flex-col">
            <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 mb-4">
                    <svg className="w-8 h-8 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h3 className="section-title">결단 및 다음 단계</h3>
                <p className="text-sm text-gray-500">새로운 시작을 위한 당신의 선택</p>
            </div>
            <div className="space-y-3 mb-4">
                {['예수님을 주인으로 믿겠습니다.', 'God-OS에 대해 더 알고 싶어요.', '교회에 함께 가고 싶습니다.'].map((item: string) => (
                    <label key={item} className="flex items-center p-3 bg-gray-50 rounded-lg border has-[:checked]:bg-green-100 has-[:checked]:border-green-300">
                        <input type="checkbox" checked={!!decision[item]} onChange={() => handleCheck(item)} className="h-5 w-5 rounded border-gray-300 text-green-600 focus:ring-green-500"/>
                        <span className="ml-3 text-gray-700">{item}</span>
                    </label>
                ))}
            </div>
            <div className="text-center text-xs text-gray-600 mb-2">
                <p>이렇게 하기를 원하시면 다음의 영접 기도문을 진심으로 소리내어 고백하시기 바랍니다.</p>
            </div>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-3 text-xs mt-auto">
                <h4 className="font-bold text-center mb-2">🛐 영접 기도문</h4>
                <p className="text-gray-600">하나님 저는 죄인입니다. 지금까지 저는 제 자신을 믿고 살아왔습니다. 지금 이 시간 저의 죄를 회개하오니 용서하여 주세요. 예수님께서 저의 죄 때문에 십자가에서 돌아가시고 또한 부활하신 것을 믿습니다. 지금 이 시간 제 마음의 문을 엽니다. 예수님께서 제 마음에 들어오셔서 저의 구주와 주님이 되어주세요. 이제부터 제가 하나님 앞에 설때까지 저의 삶을 인도해 주세요. 예수님의 이름으로 기도합니다. 아멘.</p>
            </div>
        </div>
    );
};


// App 컴포넌트를 정의하고 default로 export합니다.
export default function App() {
    const [page, setPage] = useState(1);

    const renderPage = () => {
        switch (page) {
            case 1: return <Page1 setPage={setPage} />;
            case 2: return <Page2 />;
            case 3: return <Page3 />;
            case 4: return <Page4 />;
            case 5: return <Page5 setPage={setPage} />;
            case 6: return <Page6 />;
            default: return <Page1 setPage={setPage} />;
        }
    };
    
    const totalPages = 6;

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4" style={{fontFamily: "'Noto Sans KR', sans-serif"}}>
            <style>{`
                .tract-panel, .tract-panel-flexible {
                    width: 100%;
                    max-width: 400px;
                    min-height: 70vh;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
                    border-radius: 1rem;
                    background-color: white;
                    display: flex;
                    flex-direction: column;
                    padding: 1.5rem;
                }
                .section-title {
                    font-weight: 900;
                    font-size: 1.5rem;
                    margin-bottom: 0.5rem;
                    color: #333;
                }
            `}</style>
            <div className="w-full max-w-sm">
                {renderPage()}
            </div>
            
            <div className="flex items-center justify-between w-full max-w-sm mt-4">
                <button 
                    onClick={() => setPage(p => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="px-6 py-2 bg-white rounded-full shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-transform active:scale-95"
                >
                    이전
                </button>
                <span className="text-gray-600 font-semibold">{page} / {totalPages}</span>
                <button 
                    onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="px-6 py-2 bg-white rounded-full shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-transform active:scale-95"
                >
                    다음
                </button>
            </div>
        </div>
    );
}
