define(function(require, exports, module) {


var uri = module.uri;
    uri = uri.substring(0, uri.lastIndexOf('/'));

console.log(uri);
    //require("plugin.js");

    //var $ = require("jquery");
    CKEDITOR.config.allowedContent = {
        $1: {
            // Use the ability to specify elements as an object.
            elements: CKEDITOR.dtd,
            attributes: true,
            styles: false,
            classes: true
        }
    };



    CKEDITOR.config.extraPlugins = 'cloudcms-image,balloonpanel,a11ychecker';
    CKEDITOR.config.enterMode = CKEDITOR.ENTER_BR;
    CKEDITOR.config.pasteFromWordRemoveStyles = true;
    CKEDITOR.config.pasteFromWordRemoveFontStyles = true;
    CKEDITOR.config.entities_processNumerical = true;
    CKEDITOR.config.disallowedContent = 'script; style; *[on*, border, width, height, cellpadding, valign, cellspacing, font]; *{*}';













});