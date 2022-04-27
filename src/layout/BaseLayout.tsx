import React, { ReactNode } from 'react';

const BaseLayout = (component: ReactNode) => {
    return (
        <div className='base-lay-out'>
            {component}
        </div>
    )
}

export default BaseLayout;