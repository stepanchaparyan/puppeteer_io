import CREDS from '../../creds';
import {LOGIN_PAGE} from '../helpers/constants/loginPageConstants.js';

export default class LoginPage {

    constructor(page) {
        this.page = page;
    }

    async open(component) {
        return await this.page.goto(`https://app.iox.bot/${component}`);
    }

    async logIn() {
        await this.page.waitForSelector(LOGIN_PAGE.SELECTORS.EMAIL);
        await this.page.type(LOGIN_PAGE.SELECTORS.EMAIL, CREDS.usernameS);
        await this.page.type(LOGIN_PAGE.SELECTORS.PASSWORD, CREDS.passwordS);
        await this.page.click(LOGIN_PAGE.SELECTORS.LOGIN_BUTTON);
        await this.page.waitFor(2000);
    }
}