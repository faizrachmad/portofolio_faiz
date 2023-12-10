class LoginPage {
    get txtUsername () {
        return $('#username');
    }

    get txtPassword () {
        return $('#password');
    }

    get btnLogin () {
        return $('.loginbtn')
    }

    open () {
        return browser.url(`${browser.options.baseUrl}/signin`);
    }

    async setLogin (username, password) {
        await this.txtUsername.waitForDisplayed();
        await this.txtUsername.setValue(username);
        await this.txtPassword.waitForDisplayed();
        await this.txtPassword.setValue(password);
        await this.btnLogin.waitForDisplayed();
        await this.btnLogin.click();
    }
}

export default new LoginPage();
