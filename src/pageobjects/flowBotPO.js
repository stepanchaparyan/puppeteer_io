import {DASHBOARD} from '../helpers/constants/dashboardConstants.js';
import {NAVBAR} from '../helpers/constants/navbarConstants.js';
import {BOT_SECTION} from '../helpers/constants/botsSectionConstants.js';
import Utils from '../helpers/utils';


export default class Dashboard {
    constructor(page, browser) {
        this.page = page;
        this.browser = browser;
        this.utils = new Utils(page);
    }

    async test() {
        await this.page.click(NAVBAR.SELECTORS.BOTS);
        await this.page.click(BOT_SECTION.SELECTORS.CREATE_BOT);
        await this.page.waitFor(500);
        await this.page.click(BOT_SECTION.SELECTORS.CREATE_FLOW_BOT);
        await this.page.waitFor(500);
        await this.page.click(BOT_SECTION.SELECTORS.CREATE_BOT_CONTINUE);
        await this.page.waitFor(500);
        await this.page.click(BOT_SECTION.SELECTORS.CREATE_WEB_CHATBOT);
        await this.page.waitFor(500);
        await this.page.type(BOT_SECTION.SELECTORS.BOT_NAME_INPUT, 'testBot');
        await this.page.waitFor(500);
        await this.page.click(BOT_SECTION.SELECTORS.CREATE_BOT_BUTTON_AFTER_TYPE_NAME);

        await this.page.waitFor(1000);
        await this.page.click(BOT_SECTION.SELECTORS.EDIT_FIRST_QUESTION);
        await this.page.waitFor(500);
        await this.page.click(BOT_SECTION.SELECTORS.REMOVE_DEFAULT_QUESTION);
        await this.page.waitFor(500);
        await this.page.type(BOT_SECTION.SELECTORS.ENTER_QUESTION_INPUT, 'What is your name?');
        await this.page.waitFor(500);
        await this.page.click(BOT_SECTION.SELECTORS.ADD_ON);
        await this.page.waitFor(500);
        await this.page.select(BOT_SECTION.SELECTORS.CHOOSE_QUESTION_TYPE,'Freetext Feedback');
        await this.page.waitFor(500);
        await this.page.click(BOT_SECTION.SELECTORS.QUESTION_SAVE_BUTTON);

        await this.page.waitFor(500);
        await this.page.click(BOT_SECTION.SELECTORS.ADD_SUB_DIALOG);
        await this.page.waitFor(500);
        await this.page.type(BOT_SECTION.SELECTORS.ENTER_QUESTION_INPUT, 'Would you like to continue?');
        await this.page.click(BOT_SECTION.SELECTORS.QUESTION_SAVE_BUTTON);
        await this.page.waitFor(500);
        await this.page.click(BOT_SECTION.SELECTORS.CREATE_ANSWER_Q4);
        await this.page.waitFor(500);
        await this.page.type(BOT_SECTION.SELECTORS.ADD_NEW_ANSWER_INPUT, 'Yes');
        await this.page.click(BOT_SECTION.SELECTORS.SAVE_NEW_ANSWER);
        await this.page.waitFor(500);
        await this.page.click(BOT_SECTION.SELECTORS.CREATE_ANSWER_Q4);
        await this.page.waitFor(500);
        await this.page.type(BOT_SECTION.SELECTORS.ADD_NEW_ANSWER_INPUT, 'No');
        await this.page.click(BOT_SECTION.SELECTORS.SAVE_NEW_ANSWER);
        await this.page.waitFor(500);

        await this.page.waitFor(500);
        await this.page.click(BOT_SECTION.SELECTORS.ADD_SUB_DIALOG);
        await this.page.waitFor(500);
        await this.page.type(BOT_SECTION.SELECTORS.ENTER_QUESTION_INPUT, 'You are a man or woman?');
        await this.page.click(BOT_SECTION.SELECTORS.ADD_ON);
        await this.page.waitFor(500);
        await this.page.select(BOT_SECTION.SELECTORS.CHOOSE_QUESTION_TYPE,'Multiple Options');
        await this.page.waitFor(500);
        await this.page.click(BOT_SECTION.SELECTORS.QUESTION_SAVE_BUTTON);
        await this.page.waitFor(500);
        await this.page.click(BOT_SECTION.SELECTORS.CREATE_ANSWER_Q5);
        await this.page.waitFor(500);
        await this.page.type(BOT_SECTION.SELECTORS.ADD_NEW_ANSWER_INPUT, 'Boy - Man');
        await this.page.click(BOT_SECTION.SELECTORS.SAVE_NEW_ANSWER);
        await this.page.waitFor(500);
        await this.page.click(BOT_SECTION.SELECTORS.CREATE_ANSWER_Q5);
        await this.page.waitFor(500);
        await this.page.type(BOT_SECTION.SELECTORS.ADD_NEW_ANSWER_INPUT, 'Girl - Woman');
        await this.page.click(BOT_SECTION.SELECTORS.SAVE_NEW_ANSWER);
        await this.page.waitFor(500);


        await this.utils.compareScreenshots('flowBot', 'bot6');
        return await true;
    }


}