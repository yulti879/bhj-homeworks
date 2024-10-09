const anchors = document.querySelectorAll('.has-tooltip');

const tooltips = document.querySelectorAll('.tooltip');

tooltips.forEach(tooltip => {    
    anchors.forEach(anchor => {        
        anchor.addEventListener('click', (event) => {
            event.preventDefault();
            tooltip.classList.add('tooltip_active');
            tooltip.textContent = anchor.getAttribute('title');
            let coords = anchor.getBoundingClientRect();
            tooltip.style.top = coords.top - 20 + 'px';
            tooltip.style.left = coords.right + 10 +'px';      
        })        
    })
});
