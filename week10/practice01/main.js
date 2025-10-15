const defaultSetting = {
    backgroundColor: "#ffffff",
    fontColor: "#000000",
    fontSize: "18px"
};
const settingKey = Object.keys(defaultSetting);
const mappingStyle = {
    backgroundColor: settingKey[0],
    fontColor: "color",
    fontSize: settingKey[2],
}

function setStyle() {
    const body = document.body;
    for(const k in mappingStyle) {
        body.style[mappingStyle[k]] = localStorage.getItem(k);
    }
}

function setLocalStorage(key, value, notExist = false) {
    console.log(notExist && !localStorage.getItem(key));
    if(notExist && localStorage.getItem(key)) {
        return;
    }
    localStorage.setItem(key, value);
}

function removeLocalStorage(item) {
    localStorage.removeItem(item);
}

function init() {
    for (const key in defaultSetting) {
        setLocalStorage(key, defaultSetting[key], true);
    }
}
init();

// const input = document.querySelectorAll("#form-theme input, #form-theme select");
const btnSave = document.getElementById("btnSave");
const btnReset = document.getElementById("btnReset");

btnSave.addEventListener('click', (e) => {
    e.preventDefault();
    settingKey.forEach(k => {
        const value = document.querySelector(`#form-theme #${k}`).value;
        setLocalStorage(k, value, false);
    });
    setStyle();
});



const test = document.getElementById("btnSave");
test.style.color = "";
test.style.backgroundColor = "";