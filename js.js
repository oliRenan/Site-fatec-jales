const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        // console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    })
});

const hideElements = document.querySelectorAll('.hidden');
hideElements.forEach((el)=> observer.observe(el));


const observer2 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        // console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('.to-left-show');
        }
    })
});


const toRightsElements =  document.querySelectorAll('.to-right');
toRightsElements.forEach((el)=> observer2.observe(el))



// darktheme
var darkButton = document.getElementById("darkBtn");

darkButton.onclick = function(){
    document.body.classList.toggle("dark-theme");
    
    if(document.body.classList.contains("dark-theme")){
        darkButton.classList = 'bx bxs-sun';
        darkButton.style.color = '#202124';
    }else{
        darkButton.classList ='bx bxs-moon' 
        darkButton.style.color = '#eeeeee';
    }
}


