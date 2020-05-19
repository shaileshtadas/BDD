$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/stadas/Documents/My workspaces/Cucumber-leraning/CucumberBDDProject/src/main/java/Features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Test login page",
  "description": "",
  "id": "test-login-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "login to free crm",
  "description": "",
  "id": "test-login-page;login-to-free-crm",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user is on Free CRM page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Title of page is free crm",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "enter user \"\u003cusername\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "enter pass \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User is on Home page after logged-in",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "click on contact",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "add new contact",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "submit contact details \"\u003cfname\u003e\" and \"\u003clname\u003e\" and \"\u003cposition\u003e\" and save",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "test-login-page;login-to-free-crm;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "fname",
        "lname",
        "position"
      ],
      "line": 14,
      "id": "test-login-page;login-to-free-crm;;1"
    },
    {
      "cells": [
        "shailesht304@gmail.com",
        "Test@123",
        "shailesh",
        "tadas",
        "manager"
      ],
      "line": 15,
      "id": "test-login-page;login-to-free-crm;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "login to free crm",
  "description": "",
  "id": "test-login-page;login-to-free-crm;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user is on Free CRM page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Title of page is free crm",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "enter user \"shailesht304@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "enter pass \"Test@123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User is on Home page after logged-in",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "click on contact",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "add new contact",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "submit contact details \"shailesh\" and \"tadas\" and \"manager\" and save",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Free_CRM_page()"
});
formatter.result({
  "duration": 8411367100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_page_is_free_crm()"
});
formatter.result({
  "duration": 11047700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shailesht304@gmail.com",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.enter_user(String)"
});
formatter.result({
  "duration": 310887600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test@123",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.enter_pass(String)"
});
formatter.result({
  "duration": 109911600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.click_on_login_button()"
});
formatter.result({
  "duration": 44989300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_login_page()"
});
formatter.result({
  "duration": 6744400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.click_on_contact()"
});
formatter.result({
  "duration": 1754339000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.add_new_contact()"
});
formatter.result({
  "duration": 80488100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shailesh",
      "offset": 24
    },
    {
      "val": "tadas",
      "offset": 39
    },
    {
      "val": "manager",
      "offset": 51
    }
  ],
  "location": "LoginStepDefinition.submit_contact_details_and_save(String,String,String)"
});
formatter.result({
  "duration": 16072558000,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d81.0.4044.138)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027STADAS01\u0027, ip: \u0027192.168.1.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.138, chrome: {chromedriverVersion: 81.0.4044.138 (8c6c7ba89cc9..., userDataDir: C:\\Users\\stadas\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:3560}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 225db47ff729e62fe6550f124110775b\n*** Element info: {Using\u003dxpath, value\u003d//*[@name\u003d\u0027first_name\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat stepDefinitions.LoginStepDefinition.submit_contact_details_and_save(LoginStepDefinition.java:93)\r\n\tat ✽.Then submit contact details \"shailesh\" and \"tadas\" and \"manager\" and save(/Users/stadas/Documents/My workspaces/Cucumber-leraning/CucumberBDDProject/src/main/java/Features/Login.feature:11)\r\n",
  "status": "failed"
});
});