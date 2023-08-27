import { newLogo, attachLogoTo } from "../utilities/logoFactory";

let { renderer } = newLogo();

export default () => attachLogoTo(document.getElementById('loader-logo-container'), renderer);
