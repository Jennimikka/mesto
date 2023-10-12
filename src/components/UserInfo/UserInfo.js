export class UserInfo {
    constructor({userNameSelector, userProfessionSelector}) {
        this._name = document.querySelector(userNameSelector);
        this._profession = document.querySelector(userProfessionSelector);

    }
    getUserInfo() {
        this._userInfo = {};
        this._userInfo.name = this._name.textContent;
        this._userInfo.profession = this._profession.textContent;
        return this._userInfo;

    }
    setUserInfo(data) {
        this._name.textContent = data.name;
        this._profession.textContent = data.profession;
    }
}