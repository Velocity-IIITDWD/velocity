import Logo3D from "../utilities/logoFactory";

let logo = new Logo3D(0.5);

export default () => logo.attachLogoTo(document.getElementById('loader-logo-container'));
