module.exports = {
	BOT_SECTION: {
		SELECTORS: {
			BOT_2323: 'body > app-root > div > iox-page-container > div > iox-bots > div > div:nth-child(1) > iox-bot-item > div > div.img-container > img',
			RUN: '#collapseNavbarId > ul.nav.navbar-nav.cfg-navbar-center.ng-star-inserted > li:nth-child(3) > a',
			TRAIN: 'body > app-root > div > iox-page-container > div > iox-check > iox-toolbar-menu > div > div > ul > li.toolbar-menu-item.toolbar-menu-item-enabled.button-style-item.ng-star-inserted > a > i',
			ALL_BOTS: 'body > app-root > div > iox-page-container > div > iox-bots > div > div',
			CREATE_FLOW_BOT: 'body > modal-container > div > div > div.modal-body.ng-star-inserted > div > iox-cb-kind-item:nth-child(1) > div > div.image-container.ng-star-inserted > img',
			CREATE_BOT_CONTINUE: 'body > modal-container > div > div > div.modal-body.ng-star-inserted > button',
			CREATE_WEB_CHAT_BOT: 'body > modal-container > div > div > div.modal-body.ng-star-inserted > div > iox-cb-kind-item:nth-child(1) > div > div.image-container.ng-star-inserted > img',
			BOT_NAME_INPUT: 'body > modal-container > div > div > div.modal-body.ng-star-inserted > form > div > input',
			CREATE_BOT_BUTTON_AFTER_TYPE_NAME: 'body > modal-container > div > div > div.modal-body.ng-star-inserted > form > div > button',
			EDIT_FIRST_QUESTION: 'body > app-root > div > iox-page-container > div > iox-create > div > iox-conversation-tree > div > div.conversation-page > div > tree > tree-internal > ul > li > tree-internal:nth-child(3) > ul > li > div > div.node-value.ng-star-inserted > div > div > button.btn.btn-info.btn-xs.pull-right > span',
			REMOVE_DEFAULT_QUESTION: 'body > modal-container > div > div > div.modal-body > form > div:nth-child(1) > iox-multiple-input > div.responses-table > div:nth-child(1) > button > i',
			ENTER_QUESTION_INPUT: '#row0',
			ADD_ON: 'body > modal-container > div > div > div.modal-body > form > div.form-group.ng-star-inserted > div > div > label',
			CHOOSE_QUESTION_TYPE: 'body > modal-container > div > div > div.modal-body > form > div.form-group.ng-star-inserted > div > select',
			QUESTION_SAVE_BUTTON: 'body > modal-container > div > div > div.modal-footer > button',
			ADD_SUB_DIALOG: 'body > app-root > div > iox-page-container > div > iox-create > div > iox-conversation-tree > div > div.conversation-page > div > div.tool-bar > button',
			CREATE_ANSWER_Q4: 'body > app-root > div > iox-page-container > div > iox-create > div > iox-conversation-tree > div > div.conversation-page > div > tree > tree-internal > ul > li > tree-internal:nth-child(4) > ul > li > div > div.node-value.ng-star-inserted > div > div > button.btn.btn-primary.btn-xs.pull-right > span',
			CREATE_ANSWER_Q5: 'body > app-root > div > iox-page-container > div > iox-create > div > iox-conversation-tree > div > div.conversation-page > div > tree > tree-internal > ul > li > tree-internal:nth-child(5) > ul > li > div > div.node-value.ng-star-inserted > div > div > button.btn.btn-primary.btn-xs.pull-right > span',
			ADD_NEW_ANSWER_INPUT: 'body > modal-container > div > div > div.modal-body > form > div > input:nth-child(1)',
			SAVE_NEW_ANSWER: 'body > modal-container > div > div > div.modal-footer > button',
			QUESTION_ON_ANSWER_BOY: 'body > app-root > div > iox-page-container > div > iox-create > div > iox-conversation-tree > div > div.conversation-page > div > tree > tree-internal > ul > li > tree-internal:nth-child(5) > ul > li > tree-internal:nth-child(2) > ul > li > div > div.node-value.ng-star-inserted > div > div > button.btn.btn-primary.btn-xs.pull-right > span',
			QUESTION_ON_ANSWER_GIRL: 'body > app-root > div > iox-page-container > div > iox-create > div > iox-conversation-tree > div > div.conversation-page > div > tree > tree-internal > ul > li > tree-internal:nth-child(5) > ul > li > tree-internal:nth-child(3) > ul > li > div > div.node-value.ng-star-inserted > div > div > button.btn.btn-primary.btn-xs.pull-right > span',
			FILL_WITH_EXISTING_QUESTION: 'body > modal-container > div > div > div.modal-body > form > div:nth-child(1) > select',
			DELETE_BOT: 'body > app-root > div > iox-page-container > div > iox-bots > div > div:nth-child(23) > iox-bot-item > div > div.bot-content > div.action-buttons.btn-group > button:nth-child(3) > i',
			YES_BUTTON_ON_DELETE: 'body > modal-container > div > div > div > form > button.btn.btn-default',
			ADD_NEW_URL_PARAMETER: 'body > modal-container > div > div > div.modal-body > form > iox-url-generator > div > button',
			URL_INPUT_FOR_PATH_PARAMETER1: 'body > modal-container > div > div > div.modal-body > form > iox-url-generator > div > div.wrapper > div > div:nth-child(1) > iox-url-param-item > div > div.param-name-area > input:nth-child(1)',
			URL_INPUT_FOR_PATH_PARAMETER2: 'body > modal-container > div > div > div.modal-body > form > iox-url-generator > div > div.wrapper > div > div:nth-child(2) > iox-url-param-item > div > div.param-name-area > input:nth-child(1)',
			URL_CHECK_QUERY: 'body > modal-container > div > div > div.modal-body > form > iox-url-generator > div > div.wrapper > div > div.param-object.no-drag.ng-star-inserted > iox-url-param-item > div > div.param-type-area.vertical-middle > input[type="checkbox"]',
			URL_INPUT_FOR_MAIN_URL: 'body > modal-container > div > div > div.modal-body > form > iox-url-generator > div > div.base-url > input',
			SLIDER_CUSTOM_VALUE_CHECKER: 'body > modal-container > div > div > div.modal-body > form > iox-slider-addon > div.switch > label',
			SLIDER_MAX_VALUE_INPUT: 'body > modal-container > div > div > div.modal-body > form > iox-slider-addon > form > label:nth-child(1) > input',
			SLIDER_MIN_VALUE_INPUT: 'body > modal-container > div > div > div.modal-body > form > iox-slider-addon > form > label:nth-child(2) > input',
			SLIDER_STEP_INPUT: 'body > modal-container > div > div > div.modal-body > form > iox-slider-addon > form > label:nth-child(3) > input',
			SLIDER_DEFAULT_INPUT: 'body > modal-container > div > div > div.modal-body > form > iox-slider-addon > form > label:nth-child(4) > input',
			SLIDER_CUSTOM_FROM_1: 'body > modal-container > div > div > div.modal-body > form > iox-slider-addon > div.ng-star-inserted > div:nth-child(3) > form > label:nth-child(1) > input',
			SLIDER_CUSTOM_TO_1: 'body > modal-container > div > div > div.modal-body > form > iox-slider-addon > div.ng-star-inserted > div:nth-child(3) > form > label:nth-child(2) > input',
			SLIDER_CUSTOM_VALUE_1: 'body > modal-container > div > div > div.modal-body > form > iox-slider-addon > div.ng-star-inserted > div:nth-child(3) > form > label:nth-child(3) > input',
			SLIDER_CUSTOM_ADD_1: 'body > modal-container > div > div > div.modal-body > form > iox-slider-addon > div.ng-star-inserted > div:nth-child(3) > form > div > button.btn.btn-success.add-btn > i',
			SLIDER_CUSTOM_FROM_2: 'body > modal-container > div > div > div.modal-body > form > iox-slider-addon > div.ng-star-inserted > div:nth-child(4) > form > label:nth-child(1) > input',
			SLIDER_CUSTOM_TO_2: 'body > modal-container > div > div > div.modal-body > form > iox-slider-addon > div.ng-star-inserted > div:nth-child(4) > form > label:nth-child(2) > input',
			SLIDER_CUSTOM_VALUE_2: 'body > modal-container > div > div > div.modal-body > form > iox-slider-addon > div.ng-star-inserted > div:nth-child(4) > form > label:nth-child(3) > input',
			SLIDER_CUSTOM_ADD_2: 'body > modal-container > div > div > div.modal-body > form > iox-slider-addon > div.ng-star-inserted > div:nth-child(4) > form > div > button.btn.btn-success.add-btn > i',
			SLIDER_CUSTOM_FROM_3: 'body > modal-container > div > div > div.modal-body > form > iox-slider-addon > div.ng-star-inserted > div:nth-child(5) > form > label:nth-child(1) > input',
			SLIDER_CUSTOM_TO_3: 'body > modal-container > div > div > div.modal-body > form > iox-slider-addon > div.ng-star-inserted > div:nth-child(5) > form > label:nth-child(2) > input',
			SLIDER_CUSTOM_VALUE_3: 'body > modal-container > div > div > div.modal-body > form > iox-slider-addon > div.ng-star-inserted > div:nth-child(5) > form > label:nth-child(3) > input',
			SLIDER_CUSTOM_ADD_3: 'body > modal-container > div > div > div.modal-body > form > iox-slider-addon > div.ng-star-inserted > div:nth-child(5) > form > div > button.btn.btn-success.add-btn > i',
			SLIDER_CUSTOM_FROM_4: 'body > modal-container > div > div > div.modal-body > form > iox-slider-addon > div.ng-star-inserted > div:nth-child(6) > form > label:nth-child(1) > input',
			SLIDER_CUSTOM_TO_4: 'body > modal-container > div > div > div.modal-body > form > iox-slider-addon > div.ng-star-inserted > div:nth-child(6) > form > label:nth-child(2) > input',
			SLIDER_CUSTOM_VALUE_4: 'body > modal-container > div > div > div.modal-body > form > iox-slider-addon > div.ng-star-inserted > div:nth-child(6) > form > label:nth-child(3) > input',
			SLIDER_CUSTOM_ADD_4: 'body > modal-container > div > div > div.modal-body > form > iox-slider-addon > div.ng-star-inserted > div:nth-child(6) > form > div > button.btn.btn-success.add-btn > i',
			SLIDER_CUSTOM_FROM_5: 'body > modal-container > div > div > div.modal-body > form > iox-slider-addon > div.ng-star-inserted > div:nth-child(7) > form > label:nth-child(1) > input',
			SLIDER_CUSTOM_TO_5: 'body > modal-container > div > div > div.modal-body > form > iox-slider-addon > div.ng-star-inserted > div:nth-child(7) > form > label:nth-child(2) > input',
			SLIDER_CUSTOM_VALUE_5: 'body > modal-container > div > div > div.modal-body > form > iox-slider-addon > div.ng-star-inserted > div:nth-child(7) > form > label:nth-child(3) > input',
			SLIDER_CUSTOM_DEFAULT_VALUE: 'body > modal-container > div > div > div.modal-body > form > iox-slider-addon > div.ng-star-inserted > div:nth-child(8) > label:nth-child(1) > input',
			SEARCH_UPLOAD_FILE: 'body > modal-container > div > div > div.modal-body > form > iox-search-in-file > div > div > div > div > label > input[type="file"]',
			SEARCH_ADD_BUTTON: 'body > modal-container > div > div > div.modal-body > form > iox-search-in-file > div > div > div > form > table > tbody > tr > td > button',
			SEARCH_SELECT_PARAMETER_INPUT: 'body > modal-container > div > div > div.modal-body > form > iox-search-in-file > div > div > div > form > table > tbody > tr.param-object.ng-star-inserted > td:nth-child(1) > ng-select > div > div > div.ng-input > input[type="text"]',
			SEARCH_SELECT_COLUMN_INPUT: 'body > modal-container > div > div > div.modal-body > form > iox-search-in-file > div > div > div > form > table > tbody > tr.param-object.ng-star-inserted > td:nth-child(2) > ng-select > div > div > div.ng-input > input[type="text"]',
			SEARCH_RESULT_MESSAGE_INPUT: '#textarea-0'
		}
	}
};