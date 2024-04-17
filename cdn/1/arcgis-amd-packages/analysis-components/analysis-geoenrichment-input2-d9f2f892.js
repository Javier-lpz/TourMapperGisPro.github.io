define(["exports","./index-86304dcd","./index2-600fb1b2","./utils-2b3d82c1","./analysis-geoenrichment-databrowser2-dbeaea59","./analysis-label2-b880686f"],(function(e,t,a,i,s,l){"use strict";const n="list-item-border",r=t.proxyCustomElement(class extends t.H{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.analysisGeoenrichmentInputChange=t.createEvent(this,"analysisGeoenrichmentInputChange",7),this.analysisHelpClick=t.createEvent(this,"analysisHelpClick",7),this.doValidate=!1,this.renderAddVariable=()=>t.h("calcite-button",{width:"full",appearance:"outline",kind:"neutral","icon-start":"plus",scale:i.UIDefaults.Scale,round:!0,onClick:this.openDataBrowser},this.strings.addVariableLabel),this.renderSelectedVariables=()=>{var e,a;const i=null===(a=null===(e=this.value)||void 0===e?void 0:e.analysisVariables)||void 0===a?void 0:a.map(((e,a)=>{var i,s,l;return t.h("calcite-value-list-item",{key:e,label:null!==(l=null===(s=null===(i=this.value)||void 0===i?void 0:i.labels)||void 0===s?void 0:s[a])&&void 0!==l?l:e,value:e,class:n,removable:!0,onCalciteListItemRemove:this.onListItemRemove})}));return t.h("calcite-value-list",null,i)},this.onListItemRemove=e=>{const t=e.target,a=null==t?void 0:t.value;if(void 0!==this.value){let{analysisVariables:e,labels:i}=this.value;e=null==e?void 0:e.filter((e=>e!==a)),i=null==i?void 0:i.filter((e=>e!==(null==t?void 0:t.label))),this.doValidate=!0,0===(null==e?void 0:e.length)?this.value=void 0:this.value=Object.assign({},this.value,{analysisVariables:e,labels:i})}this.analysisGeoenrichmentInputChange.emit()},this.openDataBrowser=()=>{var e;this.dataBrowserElement=document.createElement("analysis-geoenrichment-databrowser"),this.dataBrowserElement.addEventListener("analysisDataBrowserSelectionChange",this.onSelectedVariables),this.dataBrowserElement.addEventListener("analysisDataBrowserClose",this.closeModal),document.body.appendChild(this.dataBrowserElement),this.dataBrowserElement.value=null===(e=this.value)||void 0===e?void 0:e.analysisVariables,this.dataBrowserElement.portal=this.portal,this.dataBrowserElement.countryId=this.countryId,this.dataBrowserElement.hierarchyId=this.hierarchyId},this.closeModal=()=>{void 0!==this.dataBrowserElement&&(this.dataBrowserElement.removeEventListener("analysisDataBrowserSelectionChange",this.onSelectedVariables),this.dataBrowserElement.removeEventListener("analysisDataBrowserClose",this.closeModal),this.dataBrowserElement.remove(),this.dataBrowserElement=void 0)},this.onSelectedVariables=e=>{const{selectedValues:t,countryId:a,hierarchyId:i,countryAlias:s,hierarchyAlias:l}=e.detail;this.countryId=a,this.hierarchyId=i;const[n,r]=t.reduce(((e,t)=>{const[a,i]=e;return a.push(t.value),i.push(t.label),[a,i]}),[[],[]]);this.doValidate=!0,this.value={country:this.countryId,hierarchy:this.hierarchyId,countryAlias:s,hierarchyAlias:l,analysisVariables:n,labels:r},this.analysisGeoenrichmentInputChange.emit(),this.closeModal()},this.validate=()=>{var e;let t;return this.required&&!0===a.isEmptyDataItem(null===(e=this.value)||void 0===e?void 0:e.analysisVariables)?(t=!1,this.error=this.strings.requiredInputMessage):(t=!0,this.error=void 0),t},this.error=void 0,this.value=void 0,this.required=!1,this.label=void 0,this.portal=void 0}valueChange(e){var t,a;this.countryId=null!==(t=null==e?void 0:e.country)&&void 0!==t?t:void 0,this.hierarchyId=null!==(a=null==e?void 0:e.hierarchy)&&void 0!==a?a:void 0,!0===this.doValidate&&this.validate()}get hasError(){return void 0!==this.error}async componentWillLoad(){var e,i,s;({strings:this.strings}=await a.fetchComponentLocaleStrings(this.hostElement,t.getAssetPath("."))),(null!==(s=null===(i=null===(e=this.value)||void 0===e?void 0:e.analysisVariables)||void 0===i?void 0:i.length)&&void 0!==s?s:0)>0&&(this.doValidate=!0),void 0!==this.value&&this.valueChange(this.value)}disconnectedCallback(){this.closeModal()}async checkValidity(){const e=this.validate();return Promise.resolve(e)}render(){var e,s,l;const n=(null!==(l=null===(s=null===(e=this.value)||void 0===e?void 0:e.analysisVariables)||void 0===s?void 0:s.length)&&void 0!==l?l:0)>0?this.renderSelectedVariables():null;return t.h(t.Host,null,!1===a.isEmptyDataItem(this.label)?t.h("analysis-label",{label:this.label,required:this.required,onAnalysisLabelHelpActionClick:()=>this.analysisHelpClick.emit()}):null,n,this.renderAddVariable(),t.h("calcite-input-message",{status:"invalid",scale:i.UIDefaults.Scale,hidden:!this.hasError,icon:"exclamationMarkTriangle"},this.error))}static get assetsDirs(){return["t9n"]}get hostElement(){return this}static get watchers(){return{value:["valueChange"]}}static get style(){return":root{--analysis-quarter-spacing:0.25rem;--analysis-half-spacing:0.5rem;--analysis-three-quarter-spacing:0.75rem;--analysis-full-spacing:1rem;--analysis-component-default-width:100%;--analysis-ui-border-input:var(--calcite-ui-border-2);--analysis-label-font-size:var(--calcite-font-size--2);--analysis-popover-content-min-height:30vh;--analysis-popover-content-max-height:60vh;--analysis-popover-content-height:45vh}.list-item-border{border:1px solid var(--analysis-ui-border-input);box-shadow:none}"}},[1,"analysis-geoenrichment-input",{value:[1040],required:[516],label:[513],portal:[16],error:[32],checkValidity:[64]}]);function o(){"undefined"!=typeof customElements&&["analysis-geoenrichment-input","analysis-geoenrichment-databrowser","analysis-label"].forEach((e=>{switch(e){case"analysis-geoenrichment-input":customElements.get(e)||customElements.define(e,r);break;case"analysis-geoenrichment-databrowser":customElements.get(e)||s.defineCustomElement();break;case"analysis-label":customElements.get(e)||l.defineCustomElement()}}))}o(),e.AnalysisGeoenrichmentInput=r,e.defineCustomElement=o}));