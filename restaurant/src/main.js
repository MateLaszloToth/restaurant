import './style.scss'
import {loadLandingPage} from "./landing-page-builder.js";
import {loadNavBar} from "./navigation-builder.js";
import {enableTabs} from "./controller.js";

loadNavBar()
enableTabs()
loadLandingPage();



