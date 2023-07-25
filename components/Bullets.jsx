'use client'
import React, { useEffect, useState } from 'react';
import BulletScreen, { StyledBullet } from 'rc-bullets';

const Bullets = () => {
    const [screen, setScreen] = useState(null);
    const [bullet, setBullet] = useState(['张三爸爸：老师辛苦啦！', '李老师：同学们比我想像的更棒', '罗红：就差一点，我也能拿奖！', '王六爷爷：你们太帅了！', '李四妈妈：孩子们真棒！']);
    useEffect(() => {
        let s = new BulletScreen('#screen', { duration: 20, loopCount: 'infinite' });

        // bullet.forEach((bullet) => () => s.push(bullet))
        let index = 0;

        function addBulletWithRAF() {
            if (index < bullet.length) {
                s.push(bullet[index]);
                index++;
                requestAnimationFrame(addBulletWithRAF);
            }
        }

        addBulletWithRAF();
    }, []);
    return (
        <div id="screen" className='w-full h-40 absolute z-10 text-white font-bold' ></div>
    )
}
export default Bullets