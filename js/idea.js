const mateSearchSelection = document.querySelector('.mateSearch_section_2');
 
function select(olEl, liEl){
    Array.from(olEl.children).forEach(
        v => v.classList.remove('selected')
    )
    if(liEl) liEl.classList.add('selected');
}

mateSearchSelection.addEventListener('click', e => {
    const selected = e.target;
    select(mateSearchSelection , selected);
})

$(function(){

    $("#click").click(function(){
        $("#text1").text("01 빅데이터 분석")
        $("#text2").text("02 인공지능")
        $("#text1").show();
        $("#text2").show();
    })
});


/*function show(id){
    if (document.getElementById(id).style.display=="none") document.getElementById(id).style.display="block"; //표시하게 하기
    
    else document.getElementById(id).style.display="none"; //안보이게 하기
    
    }*/