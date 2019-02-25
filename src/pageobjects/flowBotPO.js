import { NAVBAR } from '../helpers/constants/navbarConstants.js';
import { BOT_SECTION } from '../helpers/constants/botsSectionConstants.js';
import Utils from '../helpers/utils';

export default class Dashboard {
	constructor (page, browser) {
		this.page = page;
		this.browser = browser;
		this.utils = new Utils(page);
	}

	async test () {
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
		await this.page.click(BOT_SECTION.SELECTORS.CREATE_BOT_BUTTON_AFTER_TYPE_NAME);

		//* Free text
		await this.page.waitFor(1000);
		await this.page.click(BOT_SECTION.SELECTORS.EDIT_FIRST_QUESTION);
		await this.page.waitFor(500);
		await this.page.click(BOT_SECTION.SELECTORS.REMOVE_DEFAULT_QUESTION);
		await this.page.type(BOT_SECTION.SELECTORS.ENTER_QUESTION_INPUT, 'What is your name?');
		await this.page.click(BOT_SECTION.SELECTORS.ADD_ON);
		await this.page.waitFor(500);
		await this.page.select(BOT_SECTION.SELECTORS.CHOOSE_QUESTION_TYPE, 'Freetext Feedback');
		await this.page.click(BOT_SECTION.SELECTORS.QUESTION_SAVE_BUTTON);

		//* Options
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

		//* Multiple options
		await this.page.waitFor(500);
		await this.page.click(BOT_SECTION.SELECTORS.ADD_SUB_DIALOG);
		await this.page.waitFor(500);
		await this.page.type(BOT_SECTION.SELECTORS.ENTER_QUESTION_INPUT, 'You are a man or woman?');
		await this.page.click(BOT_SECTION.SELECTORS.ADD_ON);
		await this.page.waitFor(500);
		await this.page.select(BOT_SECTION.SELECTORS.CHOOSE_QUESTION_TYPE, 'Multiple Options');
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

		//? new question for boy
		await this.page.waitFor(500);
		await this.page.click(BOT_SECTION.SELECTORS.QUESTION_ON_ANSWER_BOY);
		await this.page.waitFor(500);
		await this.page.type(BOT_SECTION.SELECTORS.ENTER_QUESTION_INPUT, 'How old are you?');
		await this.page.click(BOT_SECTION.SELECTORS.ADD_ON);
		await this.page.waitFor(500);
		await this.page.select(BOT_SECTION.SELECTORS.CHOOSE_QUESTION_TYPE, 'Freetext Feedback');
		await this.page.click(BOT_SECTION.SELECTORS.SAVE_NEW_ANSWER);

		//* DataPicker
		await this.page.waitFor(500);
		await this.page.click(BOT_SECTION.SELECTORS.ADD_SUB_DIALOG);
		await this.page.waitFor(500);
		await this.page.type(BOT_SECTION.SELECTORS.ENTER_QUESTION_INPUT, 'When is your birthday?');
		await this.page.click(BOT_SECTION.SELECTORS.ADD_ON);
		await this.page.select(BOT_SECTION.SELECTORS.CHOOSE_QUESTION_TYPE, 'Datepicker');
		await this.page.click(BOT_SECTION.SELECTORS.QUESTION_SAVE_BUTTON);

		//* Location
		await this.page.waitFor(500);
		await this.page.click(BOT_SECTION.SELECTORS.ADD_SUB_DIALOG);
		await this.page.waitFor(500);
		await this.page.type(BOT_SECTION.SELECTORS.ENTER_QUESTION_INPUT, 'Where are you from?');
		await this.page.click(BOT_SECTION.SELECTORS.ADD_ON);
		await this.page.waitFor(500);
		await this.page.select(BOT_SECTION.SELECTORS.CHOOSE_QUESTION_TYPE, 'Location picker');
		await this.page.click(BOT_SECTION.SELECTORS.QUESTION_SAVE_BUTTON);

		//! new question for girl
		await this.page.waitFor(500);
		await this.page.click(BOT_SECTION.SELECTORS.QUESTION_ON_ANSWER_GIRL);
		await this.page.waitFor(500);
		await this.page.select(BOT_SECTION.SELECTORS.FILL_WITH_EXISTING_QUESTION, 'Where are you from?');
		await this.page.click(BOT_SECTION.SELECTORS.QUESTION_SAVE_BUTTON);

		//* URL
		await this.page.waitFor(500);
		await this.page.click(BOT_SECTION.SELECTORS.ADD_SUB_DIALOG);
		await this.page.type(BOT_SECTION.SELECTORS.ENTER_QUESTION_INPUT, 'This is the form for your profile:');
		await this.page.click(BOT_SECTION.SELECTORS.ADD_ON);
		await this.page.waitFor(500);
		await this.page.select(BOT_SECTION.SELECTORS.CHOOSE_QUESTION_TYPE, 'URL Generator');
		await this.page.type(BOT_SECTION.SELECTORS.URL_INPUT_FOR_MAIN_URL, 'https://google.com');
		await this.page.click(BOT_SECTION.SELECTORS.ADD_NEW_URL_PARAMETER);
		await this.page.type(BOT_SECTION.SELECTORS.URL_INPUT_FOR_PATH_PARAMETER1, 'freetext_option_1');
		await this.page.click(BOT_SECTION.SELECTORS.ADD_NEW_URL_PARAMETER);
		await this.page.click(BOT_SECTION.SELECTORS.URL_CHECK_QUERY);
		await this.page.type(BOT_SECTION.SELECTORS.URL_INPUT_FOR_PATH_PARAMETER2, 'datepicker_option_1');
		await this.page.click(BOT_SECTION.SELECTORS.QUESTION_SAVE_BUTTON);

		// //* Slider 
		await this.page.waitFor(500);
		await this.page.click(BOT_SECTION.SELECTORS.ADD_SUB_DIALOG);
		await this.page.waitFor(500);
		await this.page.type(BOT_SECTION.SELECTORS.ENTER_QUESTION_INPUT, 'Please choose your IQ level from 1 to 100');
		await this.page.click(BOT_SECTION.SELECTORS.ADD_ON);
		await this.page.waitFor(500);
		await this.page.select(BOT_SECTION.SELECTORS.CHOOSE_QUESTION_TYPE, 'Slider');

		await this.page.click(BOT_SECTION.SELECTORS.SLIDER_MAX_VALUE_INPUT);
		await this.page.keyboard.down('Backspace');
		await this.page.keyboard.down('Backspace');
		await this.page.type(BOT_SECTION.SELECTORS.SLIDER_MAX_VALUE_INPUT, '100');

		await this.page.click(BOT_SECTION.SELECTORS.SLIDER_MIN_VALUE_INPUT);
		await this.page.keyboard.down('Backspace');
		await this.page.keyboard.down('Backspace');
		await this.page.type(BOT_SECTION.SELECTORS.SLIDER_MIN_VALUE_INPUT, '0');

		await this.page.click(BOT_SECTION.SELECTORS.SLIDER_STEP_INPUT);
		await this.page.keyboard.down('Backspace');
		await this.page.keyboard.down('Backspace');
		await this.page.type(BOT_SECTION.SELECTORS.SLIDER_STEP_INPUT, '10');

		await this.page.click(BOT_SECTION.SELECTORS.SLIDER_DEFAULT_INPUT);
		await this.page.keyboard.down('Backspace');
		await this.page.keyboard.down('Backspace');
		await this.page.type(BOT_SECTION.SELECTORS.SLIDER_DEFAULT_INPUT, '50');
		await this.page.click(BOT_SECTION.SELECTORS.QUESTION_SAVE_BUTTON);

		//await this.page.click(BOT_SECTION.SELECTORS.SLIDER_CUSTOM_VALUE);





		//! Train Bot
		// await this.page.waitFor(500);
		// await this.page.click(BOT_SECTION.SELECTORS.RUN);
		// await this.page.waitFor(500);
		// await this.page.click(BOT_SECTION.SELECTORS.TRAIN);
		// await this.page.waitFor(600000); // 10 minutes


		//* only for screenshots
		// await this.page.evaluate(() => {document.querySelector(
		// 			'body > app-root > div > iox-page-container > div > iox-create > div > iox-conversation-tree > div > div.conversation-page > div > tree > tree-internal > ul > li > tree-internal:nth-child(5) > ul > li > tree-internal:nth-child(3) > ul > li > div > div.node-value.ng-star-inserted > div > div > button.btn.btn-primary.btn-xs.pull-right > span'
		// 		).scrollIntoView();
		// });		
		//await this.utils.compareScreenshots('flowBot', 'bot2');

		await this.utils.deleteBot('testBot');
		return await true;
	}

}
