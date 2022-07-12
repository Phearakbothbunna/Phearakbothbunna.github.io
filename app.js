const sections = document.querySelectorAll('.section');
// All buttons (container)
const sectBtns = document.querySelectorAll('.controls');
// Each actual button
const sectBtn = document.querySelectorAll('.control');
// Body (main content)
const allSects = document.querySelector('.main-content');


function PageTransitions(){
    // Button click active class
    // Only show the active ones 
    for (let i = 0; i < sectBtn.length; i++){

        // Can be dblclick, mouseup, mousedown, mouseover (are called Events)
        sectBtn[i].addEventListener('click', 

            function() {
                let currentBtn = document.querySelectorAll('.active-btn');
                currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
                this.className += ' active-btn';
            }

        )
    }

    // All sections
    allSects.addEventListener('click', (e)=>{
        // This shows us in console which one we click 
        //console.log(e.target);

        // Dataset refers to the data-id we have in index.html
        const id = e.target.dataset.id;
        if(id){
            // Remove selected from the other btns
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })

            e.target.classList.add('active')

            // Hide other sections
            sections.forEach((section) =>{
                section.classList.remove('active')
            })

            // Whatever id that's coming from dataset will be stored in element
            const element = document.getElementById(id);
            element.classList.add('active')
        }
        
        
    })
    
}

PageTransitions();