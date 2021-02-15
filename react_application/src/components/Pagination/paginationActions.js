

export const moveBackArrow = (pagin, page, range) => {
    if(pagin.style.marginLeft === '') {
        pagin.style.marginLeft = '0px';
    }else {
        if(page > 8) {
            pagin.style.marginLeft = parseInt(pagin.style.marginLeft) + 52 + 'px';
        } 
    }
    
}

export const moveAheadArrow = (pagin, page, range) => {
    if(pagin.style.marginLeft === '') {
        pagin.style.marginLeft = '0px';
    }else {
        if(page >= 8 && page < range) {
            pagin.style.marginLeft = parseInt(pagin.style.marginLeft) - 52 + 'px';
        } 
    }
    
}

export const moveAheadButton = (pagin, page, range) => {
    if(pagin.style.marginLeft === '') {
        pagin.style.marginLeft = '-52px';
    }else {
        if(page >= 8 && page < range) {
            pagin.style.marginLeft = parseInt(pagin.style.marginLeft) - 52 + 'px';
        } 
    }
}