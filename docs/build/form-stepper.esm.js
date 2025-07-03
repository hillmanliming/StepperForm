import { B as BUILD, c as consoleDevInfo, H, w as win, N as NAMESPACE, p as promiseResolve, g as globalScripts, b as bootstrapLazy } from './index-DcwCctZS.js';
export { s as setNonce } from './index-DcwCctZS.js';

/*
 Stencil Client Patch Browser v4.35.1 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  if (BUILD.isDev && !BUILD.isTesting) {
    consoleDevInfo("Running in development mode.");
  }
  if (BUILD.cloneNodeFix) {
    patchCloneNodeFix(H.prototype);
  }
  const scriptElm = BUILD.scriptDataOpts ? win.document && Array.from(win.document.querySelectorAll("script")).find(
    (s) => new RegExp(`/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) || s.getAttribute("data-stencil-namespace") === NAMESPACE
  ) : null;
  const importMeta = import.meta.url;
  const opts = BUILD.scriptDataOpts ? (scriptElm || {})["data-opts"] || {} : {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};
var patchCloneNodeFix = (HTMLElementPrototype) => {
  const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
  HTMLElementPrototype.cloneNode = function(deep) {
    if (this.nodeName === "TEMPLATE") {
      return nativeCloneNodeFn.call(this, deep);
    }
    const clonedNode = nativeCloneNodeFn.call(this, false);
    const srcChildNodes = this.childNodes;
    if (deep) {
      for (let i = 0; i < srcChildNodes.length; i++) {
        if (srcChildNodes[i].nodeType !== 2) {
          clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
        }
      }
    }
    return clonedNode;
  };
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["form-field",[[1,"form-field",{"label":[1],"name":[1],"type":[1],"value":[1],"required":[4],"placeholder":[1],"minlength":[2],"maxlength":[2],"pattern":[1],"error":[1],"options":[16],"valid":[32],"touched":[32],"showError":[32]}]]],["form-navigation",[[1,"form-navigation",{"currentStep":[2,"current-step"],"maxStep":[2,"max-step"],"disableNext":[4,"disable-next"],"onSubmit":[16,"on-submit"]}]]],["form-step",[[1,"form-step",{"step":[2]},[[0,"valueChanged","handleValueChanged"]]]]],["stepper-status",[[1,"stepper-status"]]],["form-stepper",[[1,"form-stepper",{"validationStatus":[32],"formData":[32],"submitted":[32]},[[0,"valueChanged","handleFieldChange"]]]]]], options);
});
//# sourceMappingURL=form-stepper.esm.js.map

//# sourceMappingURL=form-stepper.esm.js.map