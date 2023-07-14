const prevtBtn = document.querySelector('.prev');
const nextBtn =  document.querySelector('.next'); 


const listImgArr = ['1.jpg', '2.jpg', '3.jpg', '4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg'] ;

    const eleListImg = document.querySelector('.list-image');
    listImgArr.forEach((img, index ) => { 
    var oImg = document.createElement("img");
    oImg.setAttribute('src', img);
    eleListImg.appendChild(oImg);
    if(index == 0) {
        oImg.classList.add('active');
    }
    });
    
    const eleLisbtn = document.querySelector('.list-button');

    listImgArr.forEach((button, index ) => { 
    var oBtn = document.createElement("button");
    eleLisbtn.appendChild(oBtn);
    oBtn.innerHTML = index +1;
    if(index == 0 ) {
            oBtn.classList.add('activebtn');
        }

    });


const feature = document.querySelector('.img-feature ');
feature.setAttribute('src', listImgArr[0]);

var listImage = document.querySelectorAll('.list-image img');
const lisbtn = document.querySelectorAll('.list-button button');

var currentIndex = 0;
function UpdateImgBtnIndex (index){
    document.querySelectorAll('.list-image img ').forEach(item => {
        item.classList.remove('active');
    })
    document.querySelectorAll('.list-button button').forEach(item => {
                item.classList.remove('activebtn');
            })
    currentIndex = index;
    feature.src = listImage[index].getAttribute('src');2
    listImage[index].classList.add('active');
    lisbtn[index].classList.add('activebtn');
    //lấy element cha của thằng imgae cụ thể là thằng div rồi add active
}


lisbtn.forEach((btnElement,index) =>{
    btnElement.addEventListener('click', e => {
     
        UpdateImgBtnIndex(index);
        })

});


listImage.forEach((btnElement ,index) => {
    btnElement.addEventListener('click', e => {
        UpdateImgBtnIndex(index);
    });
})


prevtBtn.addEventListener('click', e => {
    if(currentIndex ==0){
        currentIndex = listImage.length -1
    }else
    {
        currentIndex--;
    }
    UpdateImgBtnIndex(currentIndex);
});

nextBtn.addEventListener('click', e => {
    if(currentIndex ==listImage.length -1){
        currentIndex = 0
    }else
    {
        currentIndex++;
    }
    UpdateImgBtnIndex(currentIndex);
});

UpdateImgBtnIndex(0)


