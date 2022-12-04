const sidebar = () => {
    const tabWrapper = document.querySelector('.sidebar__list');
    const tabItems = document.querySelectorAll('.sidebar__item');
    const tabContents = document.querySelectorAll('.tabcontent-dt');
    const mainContent = document.querySelector('.main__content-page');
    const indexContent = document.querySelector('.main__content-index');


    const hideTabs = (current) => {
        tabItems.forEach((i, n) => {
            if(i != current) {
                i.classList.remove('active');
                const bb = i.querySelector('.sidebar__item_body');
                bb.style.height = '0px';
                
            }
        })
        if(tabContents.length > 0) {
            tabContents.forEach(t => t.classList.remove('active'))
        }
    }

    const gradToggle = (tab) => {
        if(tab.classList.contains('active') && window.innerWidth >= 1200) {
            document.body.classList.add('grad')
        }
        if(!tab.classList.contains('active') && window.innerWidth >= 1200) {
            document.body.classList.remove('grad')
        }
    }

    tabItems.forEach((tab,index) => {
        tab.addEventListener('click', (e) => {
            if(e.target.classList.contains('sidebar__item_label')) {
                hideTabs(e.currentTarget)
                tab.classList.toggle('active')
                gradToggle(tab)

                if(tab.classList.contains('active')) {
                    if(tabContents.length > 0) {
                        tabContents[index].classList.add('active')
                    }
                    const bb = tab.querySelector('.sidebar__item_body')
                    bb.style.height = `${bb.scrollHeight}px`;
                    if(mainContent) {
                        mainContent.classList.add('hide')
                        indexContent.classList.remove('hide')
                    }
                } else {
                    const bb = tab.querySelector('.sidebar__item_body')
                    bb.style.height = `0px`;
                    if(tabContents.length > 0) {
                        tabContents[index].classList.remove('active')
                    }
                    if(mainContent) {
                        mainContent.classList.remove('hide')
                        indexContent.classList.add('hide')
                    }
                }
            }
            
        })
    })


    window.addEventListener('resize', () => {
        if(window.innerWidth < 1200) {
            hideTabs()
            
        }
    })

    

}

export default sidebar;