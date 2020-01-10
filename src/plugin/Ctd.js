/* eslint-disable no-console */
import Vue from 'vue';

const Ctd = {};

function createEl() {
    const obj = document.createElement('OBJECT');
    obj.setAttribute('id', 'Ts');
    obj.setAttribute('classid', 'clsid:81c29cd3-3bb3-4a9f-9c82-1deb159acf81');
    obj.setAttribute('width', 0);
    obj.setAttribute('height', 0);
    obj.setAttribute('hspace', 0);
    obj.setAttribute('vspace', 0);
    obj.style.display = 'none';
    document.body.appendChild(obj);
    const ocx = document.getElementById('Ts');
    return ocx;
}

Ctd.install = function CTD() {
    createEl();

    // 读身份证
    const readIdCard = (cb) => {
        let readIdCardTime = 10; // 读取身份证次数
        let readInterval; // 读取身份证的定时器
        const Tocx = document.getElementById('Ts');
        const result = Tocx.IDCardGetMessage(); // 字符串类型
        setTimeout(() => {
            if (result === '-10001' || result.split('|')[10].length < 200) {
                readIdCardTime -= 1;
                if (readIdCardTime <= 0) {
                    readIdCardTime = 10;
                    clearInterval(readInterval);
                    console.log('请正确放置您的身份证');
                    cb([]);
                    console.log('暂无读取到身份证信息');
                } else {
                    console.log('读取身份证次数--readIdCardTime--》', readIdCardTime);
                    clearInterval(readInterval);
                    readInterval = setTimeout(() => {
                        readIdCard(cb);
                    }, 1000);
                }
            } else {
                const readInfo = result.split('|');
                clearInterval(readInterval);
                readIdCardTime = 10;

                if (readInfo === '') {
                    console.log('未读取到身份证信息');
                    return;
                }
                for (let i = 0; i < readInfo.length; i += 1) {
                    readInfo[i] = readInfo[i].trim();
                }
                // eslint-disable-next-line consistent-return
                return cb(readInfo);
            }
        }, 500);
    };

    Vue.prototype.$readIdCard = readIdCard;
};

export default Ctd;
