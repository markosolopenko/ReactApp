import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export const Portal = ({
    children, 
    className = "root-portal",
    element = "div"  
}) => {
    const [container] = useState(document.createElement(element))

    container.classList.add(className)

    useEffect(() => {
        document.body.appendChild(container);
        // document.body.style.overflow = 'hidden';

        return () => {
            document.body.removeChild(container);
            document.body.style.overflow = 'auto';
        }
    }, [container]);

    return createPortal(children, container)
};
