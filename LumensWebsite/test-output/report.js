$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("lumens.feature");
formatter.feature({
  "line": 1,
  "name": "lumensApplication TestCases (End to End validation)",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation)",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "TC001 Register Account",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc001-register-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user should open link",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "click on accountand enter credentials \"\u003cSheetName\u003e\" and \u003cRowNumber\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "click on submit",
  "keyword": "And "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc001-register-account;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 10,
      "id": "lumensapplication-testcases-(end-to-end-validation);tc001-register-account;;1"
    },
    {
      "cells": [
        "Accountcreation",
        "0"
      ],
      "line": 11,
      "id": "lumensapplication-testcases-(end-to-end-validation);tc001-register-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1838200,
  "status": "passed"
});
formatter.before({
  "duration": 3661594800,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "TC001 Register Account",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc001-register-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user should open link",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "click on accountand enter credentials \"Accountcreation\" and 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "click on submit",
  "keyword": "And "
});
formatter.match({
  "location": "LumensStepdefinition.user_should_open_link()"
});
formatter.result({
  "duration": 14127524000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accountcreation",
      "offset": 39
    },
    {
      "val": "0",
      "offset": 60
    }
  ],
  "location": "LumensStepdefinition.click_on_accountand_enter_credentials_and(String,int)"
});
formatter.result({
  "duration": 6423613500,
  "status": "passed"
});
formatter.match({
  "location": "LumensStepdefinition.click_on_submit()"
});
formatter.result({
  "duration": 2761002800,
  "status": "passed"
});
formatter.after({
  "duration": 177700,
  "status": "passed"
});
formatter.after({
  "duration": 1026513500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "TC002 Account Login and TC003 Verify title",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc002-account-login-and-tc003-verify-title",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User enters the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User fill the Login form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc002-account-login-and-tc003-verify-title;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 21,
      "id": "lumensapplication-testcases-(end-to-end-validation);tc002-account-login-and-tc003-verify-title;;1"
    },
    {
      "cells": [
        "login",
        "0"
      ],
      "line": 22,
      "id": "lumensapplication-testcases-(end-to-end-validation);tc002-account-login-and-tc003-verify-title;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 904600,
  "status": "passed"
});
formatter.before({
  "duration": 2219570200,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "TC002 Account Login and TC003 Verify title",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc002-account-login-and-tc003-verify-title;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User enters the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User fill the Login form from given sheetname \"login\" and rownumber 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LumensStepdefinition.user_enters_the_URL()"
});
formatter.result({
  "duration": 18907361300,
  "status": "passed"
});
formatter.match({
  "location": "LumensStepdefinition.user_click_on_My_account_and_Login()"
});
formatter.result({
  "duration": 4135548000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 47
    },
    {
      "val": "0",
      "offset": 68
    }
  ],
  "location": "LumensStepdefinition.user_fill_the_Login_form_from_given_sheetname_and_rownumber(String,int)"
});
formatter.result({
  "duration": 4523088600,
  "status": "passed"
});
formatter.match({
  "location": "LumensStepdefinition.user_should_be_logged_in_successfully()"
});
formatter.result({
  "duration": 10256252600,
  "status": "passed"
});
formatter.after({
  "duration": 34800,
  "status": "passed"
});
formatter.after({
  "duration": 1023286600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "TC004 Verify User is able to select ceiling lights from Lighting tab",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc004-verify-user-is-able-to-select-ceiling-lights-from-lighting-tab",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "User navigates to the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "enter credetials from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Navigate to lighting tab and select ceiling lights",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Select the product Chandeliers and large chandeliers",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc004-verify-user-is-able-to-select-ceiling-lights-from-lighting-tab;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 31,
      "id": "lumensapplication-testcases-(end-to-end-validation);tc004-verify-user-is-able-to-select-ceiling-lights-from-lighting-tab;;1"
    },
    {
      "cells": [
        "login",
        "0"
      ],
      "line": 32,
      "id": "lumensapplication-testcases-(end-to-end-validation);tc004-verify-user-is-able-to-select-ceiling-lights-from-lighting-tab;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 495800,
  "status": "passed"
});
formatter.before({
  "duration": 2371609200,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "TC004 Verify User is able to select ceiling lights from Lighting tab",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc004-verify-user-is-able-to-select-ceiling-lights-from-lighting-tab;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "User navigates to the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "enter credetials from given sheetname \"login\" and rownumber 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Navigate to lighting tab and select ceiling lights",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Select the product Chandeliers and large chandeliers",
  "keyword": "Then "
});
formatter.match({
  "location": "LumensStepdefinition.user_navigates_to_the_URL()"
});
formatter.result({
  "duration": 16462032800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 39
    },
    {
      "val": "0",
      "offset": 60
    }
  ],
  "location": "LumensStepdefinition.enter_credetials_from_given_sheetname_and_rownumber(String,int)"
});
formatter.result({
  "duration": 27369519800,
  "status": "passed"
});
formatter.match({
  "location": "LumensStepdefinition.navigate_to_lighting_tab_and_select_ceiling_lights()"
});
formatter.result({
  "duration": 27044709700,
  "status": "passed"
});
formatter.match({
  "location": "LumensStepdefinition.select_the_product_Chandeliers_and_large_chandeliers()"
});
formatter.result({
  "duration": 9445945700,
  "status": "passed"
});
formatter.after({
  "duration": 43700,
  "status": "passed"
});
formatter.after({
  "duration": 1001054300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 34,
  "name": "TC005 \u0026 TC006 Verify user is able to select the specific product by applying  filter and add to cart",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc005-\u0026-tc006-verify-user-is-able-to-select-the-specific-product-by-applying--filter-and-add-to-cart",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "User navigates to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "User enters the Login form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Select the filter Ready to ship and style",
  "keyword": "And "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc005-\u0026-tc006-verify-user-is-able-to-select-the-specific-product-by-applying--filter-and-add-to-cart;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 40,
      "id": "lumensapplication-testcases-(end-to-end-validation);tc005-\u0026-tc006-verify-user-is-able-to-select-the-specific-product-by-applying--filter-and-add-to-cart;;1"
    },
    {
      "cells": [
        "login",
        "0"
      ],
      "line": 41,
      "id": "lumensapplication-testcases-(end-to-end-validation);tc005-\u0026-tc006-verify-user-is-able-to-select-the-specific-product-by-applying--filter-and-add-to-cart;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 624600,
  "status": "passed"
});
formatter.before({
  "duration": 3641709800,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "TC005 \u0026 TC006 Verify user is able to select the specific product by applying  filter and add to cart",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc005-\u0026-tc006-verify-user-is-able-to-select-the-specific-product-by-applying--filter-and-add-to-cart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "User navigates to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "User enters the Login form from given sheetname \"login\" and rownumber 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Select the filter Ready to ship and style",
  "keyword": "And "
});
formatter.match({
  "location": "LumensStepdefinition.user_navigates_to_the_application()"
});
formatter.result({
  "duration": 9457134700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 49
    },
    {
      "val": "0",
      "offset": 70
    }
  ],
  "location": "LumensStepdefinition.user_enters_the_Login_form_from_given_sheetname_and_rownumber(String,int)"
});
formatter.result({
  "duration": 21025442100,
  "status": "passed"
});
formatter.match({
  "location": "LumensStepdefinition.select_the_filter_Ready_to_ship_and_style()"
});
formatter.result({
  "duration": 21263267800,
  "status": "passed"
});
formatter.after({
  "duration": 44800,
  "status": "passed"
});
formatter.after({
  "duration": 1069101800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 43,
  "name": "TC0017 Verify logout functionality",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc0017-verify-logout-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "User launches the application",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "User logins the application form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "User selects the Signout icon on the menu",
  "keyword": "And "
});
formatter.examples({
  "line": 48,
  "name": "",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc0017-verify-logout-functionality;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 49,
      "id": "lumensapplication-testcases-(end-to-end-validation);tc0017-verify-logout-functionality;;1"
    },
    {
      "cells": [
        "login",
        "0"
      ],
      "line": 50,
      "id": "lumensapplication-testcases-(end-to-end-validation);tc0017-verify-logout-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 594100,
  "status": "passed"
});
formatter.before({
  "duration": 2445533900,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "TC0017 Verify logout functionality",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc0017-verify-logout-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "User launches the application",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "User logins the application form from given sheetname \"login\" and rownumber 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "User selects the Signout icon on the menu",
  "keyword": "And "
});
formatter.match({
  "location": "LumensStepdefinition.user_launches_the_application()"
});
formatter.result({
  "duration": 13874912700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 55
    },
    {
      "val": "0",
      "offset": 76
    }
  ],
  "location": "LumensStepdefinition.user_logins_the_application_form_from_given_sheetname_and_rownumber(String,int)"
});
formatter.result({
  "duration": 20995697600,
  "status": "passed"
});
formatter.match({
  "location": "LumensStepdefinition.user_selects_the_Signout_icon_on_the_menu()"
});
formatter.result({
  "duration": 5723738600,
  "status": "passed"
});
formatter.after({
  "duration": 42800,
  "status": "passed"
});
formatter.after({
  "duration": 981939800,
  "status": "passed"
});
});