//设置cookie
export function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
    console.log("setCookie cname = " + cname + ", cvalue = " + cvalue + ", expires = " + expires);
}

//获取cookie
export function getCookie(cname) {
    // var name = cname + "=";
    // var ca = document.cookie.split(';');
    // for (var i = 0; i < ca.length; i++) {
    //     var c = ca[i];
    //     while (c.charAt(0) == ' ') c = c.substring(1);
    //     if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    // }
    // return "";
    console.log("getCookie cname = " + cname);
    var arr, reg = new RegExp("(^| )" + cname + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
        let find = arr[2];
        console.log("getCookie cname = " + cname + ", find = " + find);
        return find;
    }
    return null;
}

//清除cookie  
export function clearCookie(name) {
    setCookie(name, "", -1);
}

export function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}