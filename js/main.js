// for GIT

let certificate = document.getElementById('certificate');
let activities = document.getElementById('activities');
let competition = document.getElementById('competition');
let recent = document.getElementById('recent');
let specBox = document.getElementById('spec-box');

let specBoxText = {
    certificate:[
        '<p>사회조사분석사 2급</p>',
        '<p>국가공인 데이터분석 준전문가 ADsP</p>',
        '<p>국가공인 데이터분석 전문가 ADP</p>',
        '<p>정보처리기사</p>',
        '<p>빅데이터 분석기사</p>',
    ],
    activities:[
        '<p>현재 데이터가 없습니다</p>'
    ],
    competition:[
        '<p>현재 데이터가 없습니다</p>'
    ],
    recent:[
        '<p>현재 데이터가 없습니다</p>'
    ]
}

certificate.addEventListener('click',(e)=>{
    console.log("hi")
    certificate.className += ' taged';
    activities.classList.remove('taged');
    competition.classList.remove('taged');
    recent.classList.remove('taged');
    specBox.style.display = "block";
    let html = "";

    for(let i = 0; i<specBoxText.certificate.length; i++){
        html += specBoxText.certificate[i];
    }

    specBox.innerHTML = html;
});

activities.addEventListener('click',(e)=>{
    activities.className += ' taged';
    certificate.classList.remove('taged');
    competition.classList.remove('taged');
    recent.classList.remove('taged');
    specBox.style.display = "block";

    let html = "";

    for(let i = 0; i<specBoxText.activities.length; i++){
        html += specBoxText.activities[i];
    }

    specBox.innerHTML = html;
});

competition.addEventListener('click',(e)=>{
    competition.className += ' taged';
    certificate.classList.remove('taged');
    activities.classList.remove('taged');
    recent.classList.remove('taged');
    specBox.style.display = "block";
    
    let html = "";

    for(let i = 0; i<specBoxText.competition.length; i++){
        html += specBoxText.competition[i];
    }

    specBox.innerHTML = html;
});

recent.addEventListener('click',(e)=>{
    recent.className += ' taged';
    certificate.classList.remove('taged');
    activities.classList.remove('taged');
    competition.classList.remove('taged');
    specBox.style.display = "block";

    let html = "";

    for(let i = 0; i<specBoxText.recent.length; i++){
        html += specBoxText.recent[i];
    }

    specBox.innerHTML = html;
});

window.onload = ()=>{
    console.log("hi")
}