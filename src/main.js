let text = `/* 今天画一只机器猫~ */

/* 先来个。。 这叫什么。。 */
.D-fly {
    width: 20px;
    height: 10px;
    background: rgb(252, 193, 54);
    border: 2px solid #000;
    border-radius: 100px 100px 0 0;
}

.D-fly:before {
    width: 7px;
    height: 12px;
    border: 2px solid #000;
    top: 8px;
    left: 5px;
    border-top: 0;
    background: rgb(252, 193, 54);
}

/* 画个头~ */
.D-head {
    width: 200px;
    height: 200px;
    border: 2px solid #000;
    background: rgb(53, 161, 201);
    top: 19px;
    border-radius: 50%;
}

.D-head::before {
    width: 174px;
    height: 174px;
    background: #fff;
    border: 2px solid #000;
    left: 11px;
    top: 11px;
    border-radius: 50%;
    overflow: hidden;
}

/* 画眼睛~ */
.D-eye {
    width: 48px;
    height: 48px;
    background: #fff;
    border: 1px solid #000;
    border-radius: 50%;
    top: 14px;
    overflow: hidden;
}

.D-eye.left {
    right: 50%;
}

.D-eye.right {
    left: 50%;
}

.D-eye.left::after {
    width: 15px;
    height: 24px;
    border: 6px solid #000;
    border-top-width: 9px;
    border-bottom-width: 9px;
    border-radius: 100%;
    right: 5px;
    bottom: 8px;
}

.D-eye.right::after {
    width: 22px;
    height: 22px;
    border: 3px solid #000;
    border-radius: 50%;
    bottom: -13px;
    left: 12px;
}

/* 画鼻子~ */
.D-nose {
    width: 34px;
    height: 34px;
    background: rgb(177, 23, 53);
    border: 1px solid #000;
    top: 54px;
    border-radius: 50%;
}

.D-nose::after {
    width: 10px;
    height: 10px;
    background: #fff;
    border-radius: 50%;
    top: 7px;
    left: 6px;
}

.D-nose::before {
    width: 1px;
    height: 18px;
    border: 1px solid #000;
    left: 15px;
    top: 33px;
}

/* 画胡须~ */
.D-beard {
    width: 61px;
    height: 1px;
    border: 1px solid #000;
    top: 80px;
}

.D-beard.left {
    right: 61%;
}

.D-beard.right {
    left: 61%;
}

.D-beard.left::before,
.D-beard.left::after,
.D-beard.right::after,
.D-beard.right::before {
    width: 61px;
    height: 1px;
    border: 1px solid #000;
    top: -20px;
}

.D-beard.left::after,
.D-beard.right::after {
    top: 13px;
}

.D-beard.left::before {
    transform: rotate(20deg)
}

.D-beard.left::after {
    transform: rotate(-15deg)
}

.D-beard.right::before {
    transform: rotate(-20deg)
}

.D-beard.right::after {
    transform: rotate(15deg)
}

/* 画个大嘴~ */
.D-lip {
    width: 140px;
    height: 70px;
    background: rgb(177, 22, 53);
    border-radius: 0 0 70px 70px;
    top: 105px;
    overflow: hidden;
}

.D-lip::before,
.D-lip::after {
    width: 50px;
    height: 100px;
    background: rgb(202, 37, 51);
    border-radius: 25px 25px;
    top: 25px;
}

.D-lip::before {
    left: 40%;
    transform: rotate(35deg);
}

.D-lip::after {
    left: 25%;
    transform: rotate(-35deg);
}

/* 来个围巾~ */
.D-scarf {
    width: 116px;
    height: 102px;
    background: rgb(161, 23, 46);
    border-radius: 41%;
    top: 119px;
}

/* 配个铃铛~ */
.D-bell {
    width: 34px;
    height: 34px;
    background: rgb(241, 150, 41);
    border: 2px solid #000;
    border-radius: 50%;
    top: 215px;
}

.D-bell::after {
    width: 8px;
    height: 8px;
    background: #000;
    border-radius: 50%;
    bottom: 7px;
    left: 11px;
}

.D-bell:before {
    border: 1px solid #000;
    border-right-width: 13px;
    bottom: 4px;
    left: 8px;
}

/* 大肚子~ */
.D-tripe {
    width: 130px;
    height: 120px;
    background: rgb(53, 161, 201);
    border-radius: 60%;
    border: 2px solid #000;
    top: 160px;
}

.D-tripe::before {
    width: 80px;
    height: 50px;
    background: #fff;
    border-radius: 50%;
    top: 50px;
    left: 50%;
    transform: translateX(-50%)
}

.D-tripe::after {
    width: 56px;
    height: 28px;
    border: 2px solid #000;
    top: 70px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 0 0 56px 56px;
}

/* 画胳膊~ */
.D-arm {
    width: 100px;
    height: 60px;
    background: rgb(53, 161, 201);
    border: 2px solid #000;
    top: 140px;
    border-radius: 50%;
}

.D-arm.right {
    right: 5px;
    transform: rotate(-50deg);
}

.D-arm.left {
    left: 5px;
    transform: rotate(50deg);
}

.D-arm.left::after,
.D-arm.right::after {
    width: 60px;
    height: 60px;
    background: #fff;
    border-radius: 50%;
    border: 2px solid #000;
    top: 5px;
}

.D-arm.left::after {
    left: -10px
}

.D-arm.right::after {
    right: -10px;
}

/* 画脚~ */ 
.D-foot {
    width: 45px;
    height: 65px;
    background: #fff;
    border: 2px solid #000;
    top: 242px;
    border-radius: 46%;
}

.D-foot.left {
    right: 50%;
}

.D-foot.right {
    left: 50%;
}

/* 来，动起来~ */
.D-move.center {
    width: 80px;
    height: 4px;
    background: rgba(0, 0, 0, .5);
    top: 10px;
    margin-left: -40px;
    animation: fly .1s infinite;
}

/* 最后上个天~ */ 
.D-wrapper {
    animation: move .6s ease infinite alternate-reverse;
}

/* 好了就到这了~ */
/* 谢谢观看~ */
/* 欢迎留言~ */

/* 撒花 
*
*   *   
*   *   *
*   *   *   *
*   *   *   *   *
*   *   *   *   *  *
*/


`

let speed = 20,
    timer = null,
    rest = "",
    pre = '',
    app = new LearnCloud({
        id: "9M29rGtmAOIqfCwO42Drub6O-gzGzoHsz",
        key: "78lqrKFm181zXjaLQ61677tz",
        AppName: "Message",
        fn: addMessage,
    })
addCode('', text, speed);
app.init();
bindEvents();
btn.onclick = (e) => {
    pre = code.innerHTML;
    rest = text.slice(pre.length, text.length)
    clearTimeout(timer)
    switch (e.target) {
        case lower:
            speed = 80
            addCode(pre, rest, speed);
            break;
        case faster:
            speed = 1;
            addCode(pre, rest, speed);
            break;
        case retry:
            addCode(' ', text, speed);
            break;
        case change:
            if (change.className === 'pause') {
                change.innerText = 'Go';
                change.className = 'go'
            } else {
                addCode(pre, rest, speed);
                change.innerText = 'Pause';
                change.className = 'pause';
            }
            break;
        case skip:
            code.innerHTML = pre + rest;
            styleTag.innerHTML = pre + rest;
            break;
        case messageBtn:
            addCode(pre,rest,speed)
            messageWrapper.style.display = "block";
            myScreen.style.display = "block";
            break;

    }

}

function addCode(pre, str, time) {
    let i = 0;
    timer = setTimeout(function fn() {
        i++;
        code.innerHTML = pre + str.slice(0, i);
        styleTag.innerHTML = pre + str.slice(0, i);
        code.scrollTop = code.scrollHeight;
        if (i < str.length) {
            timer = setTimeout(fn, time)
        }
    }, time)
}

function LearnCloud(opt) {
    this.AppName = opt.AppName;
    this.init = () => {
        let APP_ID = opt.id;
        let APP_KEY = opt.key;

        AV.init({
            appId: APP_ID,
            appKey: APP_KEY
        });
        this.fetch();
    }
    this.fetch = () => {
        let query = new AV.Query(this.AppName);
        return query.find().then((res) => {
            res.forEach((item) => {
                let attr = item.attributes;
                this.handler(attr);
            })
        })

    };
    this.save = (obj) => {
        let Query = AV.Object.extend(this.AppName);
        let query = new Query();
        return query.save(obj).then(() => {
            this.handler(obj);
        })

    };
    this.handler = opt.fn;
}

function addMessage(obj) {
    let template = `<span class="name">${obj.name} : </span> <span class="text"> ${obj.content}</span>
         <div class="time" >${formateTime(obj.time)}</div>`;
    let li = document.createElement('li');
    li.innerHTML = template;
    messageList.prepend(li);
}

function bindEvents() {
    myForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let name = document.querySelector("#myForm [name='user']").value;
        let content = document.querySelector("#myForm textarea").value;
        let time = new Date();
        if (!name || !content) {
            alert("请输入姓名或留言！")
        } else {
            app.save({
                name,
                content,
                time
            }).then(() => {
                alert("留言成功！");
                messageWrapper.style.display = "none";
                myScreen.style.display = "none";
                document.querySelector("#myForm textarea").value = '';
            });
        }

    })
    myScreen.addEventListener('click', () => {
        messageWrapper.style.display = "none";
        myScreen.style.display = "none";
    })
}

function formateTime(time) {
    return time.toLocaleDateString() + ' ' + time.toTimeString().slice(0, 8)
}