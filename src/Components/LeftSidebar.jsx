import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';

const data = [{
    title: 'Dashboard',
    icon: <AiOutlineUser />
}];

const LeftSidebar = () => {
    return (
        <div className="leftsidebar">
            <div className="sidebar-items">
                <div className='slidermain'>
                    {data.map((item, index) => {
                        return (
                            <div key={index}>
                                {item.icon} {/* Use the icon component directly */}
                                <span>{item.title}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default LeftSidebar;
