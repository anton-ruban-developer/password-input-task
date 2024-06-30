import './polyfills.server.mjs';
import{$ as X,Ba as K,Ca as J,Fa as _e,Ga as Ce,I as k,J as z,K as m,Ka as Ve,M as _,P as C,Q as y,R as g,U as S,V as Z,W as Y,Y as V,Z as p,_ as c,ba as D,e as ae,ea as ce,fa as b,ga as he,h as le,ha as a,ia as o,ja as v,ka as M,la as u,m as ue,ma as fe,na as pe,oa as ge,pa as me,qa as j,r as de,sa as G,ua as ye,za as ve}from"./chunk-E6YADNB4.mjs";import{a as h,b as f}from"./chunk-NDYDZJSS.mjs";var De={production:!1};var Oe=(()=>{let e=class e{constructor(n,r){this._renderer=n,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(n,r){this._renderer.setProperty(this._elementRef.nativeElement,n,r)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}};e.\u0275fac=function(r){return new(r||e)(c(X),c(Y))},e.\u0275dir=g({type:e});let t=e;return t})(),Je=(()=>{let e=class e extends Oe{};e.\u0275fac=(()=>{let n;return function(s){return(n||(n=Z(e)))(s||e)}})(),e.\u0275dir=g({type:e,features:[D]});let t=e;return t})(),xe=new _("");var Qe={provide:xe,useExisting:k(()=>H),multi:!0};function et(){let t=J()?J().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var tt=new _(""),H=(()=>{let e=class e extends Oe{constructor(n,r,s){super(n,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!et())}writeValue(n){let r=n??"";this.setProperty("value",r)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}};e.\u0275fac=function(r){return new(r||e)(c(X),c(Y),c(tt,8))},e.\u0275dir=g({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&M("input",function(l){return s._handleInput(l.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(l){return s._compositionEnd(l.target.value)})},features:[j([Qe]),D]});let t=e;return t})();function nt(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}var Pe=new _(""),it=new _("");function rt(t){return nt(t.value)?{required:!0}:null}function be(t){return null}function Ne(t){return t!=null}function ke(t){return ye(t)?le(t):t}function je(t){let e={};return t.forEach(i=>{e=i!=null?h(h({},e),i):e}),Object.keys(e).length===0?null:e}function Ge(t,e){return e.map(i=>i(t))}function st(t){return!t.validate}function Te(t){return t.map(e=>st(e)?e:i=>e.validate(i))}function ot(t){if(!t)return null;let e=t.filter(Ne);return e.length==0?null:function(i){return je(Ge(i,e))}}function Be(t){return t!=null?ot(Te(t)):null}function at(t){if(!t)return null;let e=t.filter(Ne);return e.length==0?null:function(i){let n=Ge(i,e).map(ke);return de(n).pipe(ue(je))}}function Ue(t){return t!=null?at(Te(t)):null}function Me(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function lt(t){return t._rawValidators}function ut(t){return t._rawAsyncValidators}function Q(t){return t?Array.isArray(t)?t:[t]:[]}function B(t,e){return Array.isArray(t)?t.includes(e):t===e}function we(t,e){let i=Q(e);return Q(t).forEach(r=>{B(i,r)||i.push(r)}),i}function Ae(t,e){return Q(e).filter(i=>!B(t,i))}var U=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Be(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Ue(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,i){return this.control?this.control.hasError(e,i):!1}getError(e,i){return this.control?this.control.getError(e,i):null}},ee=class extends U{get formDirective(){return null}get path(){return null}},N=class extends U{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},te=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},dt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},en=f(h({},dt),{"[class.ng-submitted]":"isSubmitted"}),Re=(()=>{let e=class e extends te{constructor(n){super(n)}};e.\u0275fac=function(r){return new(r||e)(c(N,2))},e.\u0275dir=g({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&he("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[D]});let t=e;return t})();var I="VALID",T="INVALID",w="PENDING",O="DISABLED",E=class{},R=class extends E{constructor(e,i){super(),this.value=e,this.source=i}},x=class extends E{constructor(e,i){super(),this.pristine=e,this.source=i}},P=class extends E{constructor(e,i){super(),this.touched=e,this.source=i}},A=class extends E{constructor(e,i){super(),this.status=e,this.source=i}};function ct(t){return(L(t)?t.validators:t)||null}function ht(t){return Array.isArray(t)?Be(t):t||null}function ft(t,e){return(L(e)?e.asyncValidators:t)||null}function pt(t){return Array.isArray(t)?Ue(t):t||null}function L(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var ne=class{constructor(e,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._events=new ae,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===I}get invalid(){return this.status===T}get pending(){return this.status==w}get disabled(){return this.status===O}get enabled(){return this.status!==O}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(we(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(we(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ae(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ae(e,this._rawAsyncValidators))}hasValidator(e){return B(this._rawValidators,e)}hasAsyncValidator(e){return B(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let i=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(f(h({},e),{sourceControl:n})),i&&e.emitEvent!==!1&&this._events.next(new P(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(i=>i.markAllAsTouched(e))}markAsUntouched(e={}){let i=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),i&&e.emitEvent!==!1&&this._events.next(new P(!1,n))}markAsDirty(e={}){let i=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(f(h({},e),{sourceControl:n})),i&&e.emitEvent!==!1&&this._events.next(new x(!1,n))}markAsPristine(e={}){let i=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),i&&e.emitEvent!==!1&&this._events.next(new x(!0,n))}markAsPending(e={}){this.status=w;let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new A(this.status,i)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(f(h({},e),{sourceControl:i}))}disable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=O,this.errors=null,this._forEachChild(r=>{r.disable(f(h({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new R(this.value,n)),this._events.next(new A(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(f(h({},e),{skipPristineCheck:i}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=I,this._forEachChild(n=>{n.enable(f(h({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(f(h({},e),{skipPristineCheck:i}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,i){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},i),this._parent._updateTouched({},i))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===I||this.status===w)&&this._runAsyncValidator(n,e.emitEvent)}let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new R(this.value,i)),this._events.next(new A(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(f(h({},e),{sourceControl:i}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?O:I}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,i){if(this.asyncValidator){this.status=w,this._hasOwnPendingAsyncValidator={emitEvent:i!==!1};let n=ke(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:i,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,i={}){this.errors=e,this._updateControlsErrors(i.emitEvent!==!1,this,i.shouldHaveEmitted)}get(e){let i=e;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((n,r)=>n&&n._find(r),this)}getError(e,i){let n=i?this.get(i):this;return n&&n.errors?n.errors[e]:null}hasError(e,i){return!!this.getError(e,i)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,i,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new A(this.status,i)),this._parent&&this._parent._updateControlsErrors(e,i,n)}_initObservables(){this.valueChanges=new V,this.statusChanges=new V}_calculateStatus(){return this._allControlsDisabled()?O:this.errors?T:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(w)?w:this._anyControlsHaveStatus(T)?T:I}_anyControlsHaveStatus(e){return this._anyControls(i=>i.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,i){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),r&&this._events.next(new x(this.pristine,i))}_updateTouched(e={},i){this.touched=this._anyControlsTouched(),this._events.next(new P(this.touched,i)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){L(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let i=this._parent&&this._parent.dirty;return!e&&!!i&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=ht(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=pt(this._rawAsyncValidators)}};var He=new _("CallSetDisabledState",{providedIn:"root",factory:()=>ie}),ie="always";function gt(t,e){return[...e.path,t]}function mt(t,e,i=ie){vt(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||i==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),_t(t,e),Vt(t,e),Ct(t,e),yt(t,e)}function Ee(t,e){t.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(e)})}function yt(t,e){if(e.valueAccessor.setDisabledState){let i=n=>{e.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(i),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(i)})}}function vt(t,e){let i=lt(t);e.validator!==null?t.setValidators(Me(i,e.validator)):typeof i=="function"&&t.setValidators([i]);let n=ut(t);e.asyncValidator!==null?t.setAsyncValidators(Me(n,e.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();Ee(e._rawValidators,r),Ee(e._rawAsyncValidators,r)}function _t(t,e){e.valueAccessor.registerOnChange(i=>{t._pendingValue=i,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Le(t,e)})}function Ct(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Le(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function Le(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Vt(t,e){let i=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};t.registerOnChange(i),e._registerOnDestroy(()=>{t._unregisterOnChange(i)})}function Dt(t,e){if(!t.hasOwnProperty("model"))return!1;let i=t.model;return i.isFirstChange()?!0:!Object.is(e,i.currentValue)}function bt(t){return Object.getPrototypeOf(t.constructor)===Je}function Mt(t,e){if(!e)return null;Array.isArray(e);let i,n,r;return e.forEach(s=>{s.constructor===H?i=s:bt(s)?n=s:r=s}),r||n||i||null}function Fe(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}function Se(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var wt=class extends ne{constructor(e=null,i,n){super(ct(i),ft(n,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),L(i)&&(i.nonNullable||i.initialValueIsDefault)&&(Se(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,i={}){this.value=this._pendingValue=e,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(e,i={}){this.setValue(e,i)}reset(e=this.defaultValue,i={}){this._applyFormState(e),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Fe(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Fe(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Se(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var At={provide:N,useExisting:k(()=>re)},Ie=Promise.resolve(),re=(()=>{let e=class e extends N{constructor(n,r,s,d,l,q){super(),this._changeDetectorRef=l,this.callSetDisabledState=q,this.control=new wt,this._registered=!1,this.name="",this.update=new V,this._parent=n,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=Mt(this,d)}ngOnChanges(n){if(this._checkForErrors(),!this._registered||"name"in n){if(this._registered&&(this._checkName(),this.formDirective)){let r=n.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in n&&this._updateDisabled(n),Dt(n,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){mt(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(n){Ie.then(()=>{this.control.setValue(n,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(n){let r=n.isDisabled.currentValue,s=r!==0&&K(r);Ie.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(n){return this._parent?gt(n,this._parent):[n]}};e.\u0275fac=function(r){return new(r||e)(c(ee,9),c(Pe,10),c(it,10),c(xe,10),c(ve,8),c(He,8))},e.\u0275dir=g({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[j([At]),D,S]});let t=e;return t})();var Et=(()=>{let e=class e{constructor(){this._validator=be}ngOnChanges(n){if(this.inputName in n){let r=this.normalizeInput(n[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):be,this._onChange&&this._onChange()}}validate(n){return this._validator(n)}registerOnValidatorChange(n){this._onChange=n}enabled(n){return n!=null}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=g({type:e,features:[S]});let t=e;return t})();var Ft={provide:Pe,useExisting:k(()=>se),multi:!0};var se=(()=>{let e=class e extends Et{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=K,this.createValidator=n=>rt}enabled(n){return n}};e.\u0275fac=(()=>{let n;return function(s){return(n||(n=Z(e)))(s||e)}})(),e.\u0275dir=g({type:e,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(r,s){r&2&&ce("required",s._enabled?"":null)},inputs:{required:"required"},features:[j([Ft]),D]});let t=e;return t})();var St=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=y({type:e}),e.\u0275inj=m({});let t=e;return t})();var We=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:He,useValue:n.callSetDisabledState??ie}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=y({type:e}),e.\u0275inj=m({imports:[St]});let t=e;return t})();var $e=(()=>{let e=class e{constructor(){this.password="",this.ngModelChange=new V}onPasswordChange(n){this.password=n,this.ngModelChange.emit(this.password)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=C({type:e,selectors:[["app-password-input"]],outputs:{ngModelChange:"ngModelChange"},decls:39,vars:1,consts:[[1,"form-control"],["type","password","required","",3,"ngModelChange","ngModel"],[2,"transition-delay","0ms"],[2,"transition-delay","50ms"],[2,"transition-delay","100ms"],[2,"transition-delay","150ms"],[2,"transition-delay","200ms"],[2,"transition-delay","250ms"],[2,"transition-delay","300ms"],[2,"transition-delay","350ms"],[2,"transition-delay","400ms"],[2,"transition-delay","450ms"],[2,"transition-delay","500ms"],[2,"transition-delay","550ms"],[2,"transition-delay","600ms"],[2,"transition-delay","650ms"],[2,"transition-delay","700ms"],[2,"transition-delay","750ms"],[2,"transition-delay","800ms"],[2,"transition-delay","850ms"],[2,"transition-delay","900ms"]],template:function(r,s){r&1&&(a(0,"div",0)(1,"input",1),me("ngModelChange",function(l){return ge(s.password,l)||(s.password=l),l}),M("ngModelChange",function(l){return s.onPasswordChange(l)}),o(),a(2,"label")(3,"span",2),u(4,"E"),o(),a(5,"span",3),u(6,"n"),o(),a(7,"span",4),u(8,"t"),o(),a(9,"span",5),u(10,"e"),o(),a(11,"span",6),u(12,"r"),o(),v(13,"span",7),a(14,"span",8),u(15,"y"),o(),a(16,"span",9),u(17,"o"),o(),a(18,"span",10),u(19,"u"),o(),a(20,"span",11),u(21,"r"),o(),v(22,"span",12),a(23,"span",13),u(24,"p"),o(),a(25,"span",14),u(26,"a"),o(),a(27,"span",15),u(28,"s"),o(),a(29,"span",16),u(30,"s"),o(),a(31,"span",17),u(32,"w"),o(),a(33,"span",18),u(34,"o"),o(),a(35,"span",19),u(36,"r"),o(),a(37,"span",20),u(38,"d"),o()()()),r&2&&(p(),pe("ngModel",s.password))},dependencies:[H,Re,se,re],styles:[".form-control[_ngcontent-%COMP%]{position:relative;margin:20px 0;width:300px}.form-control[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%]{background-color:transparent;border:0;border-bottom:2px #fff solid;display:block;width:100%;padding:15px 0;font-size:19px;color:#fff}.form-control[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%]:focus, .form-control[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%]:valid{outline:0;border-bottom-color:#add8e6}.form-control[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{position:absolute;top:15px;left:0;pointer-events:none}.form-control[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;font-size:18px;min-width:5px;color:#fff;transition:.3s cubic-bezier(.68,-.55,.265,1.55)}.form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid + label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#add8e6;transform:translateY(-30px)}"]});let t=e;return t})();var W=(()=>{let e=class e{evaluatePasswordStrength(n){let r=n.length>=8,s=/[a-zA-Zа-яА-ЯёЁіІїЇєЄ]/.test(n),d=/\d/.test(n),l=/[!@#$%^&*(),.?":{}|<>]/.test(n),q=n.length===0,Ye=r&&s&&d&&l,Xe=r&&(s&&d||s&&l||d&&l),Ke=r&&(s||d||l);if(q)return{colors:["gray","gray","gray"],message:""};if(r){if(Ye)return{colors:["SeaGreen","SeaGreen","SeaGreen"],message:"Secure password"};if(Xe){if(s&&d)return{colors:["gold","gold","gray"],message:"Add symbols to make it stronger"};if(s&&l)return{colors:["gold","gold","gray"],message:"Add digits to make it stronger"};if(d&&l)return{colors:["gold","gold","gray"],message:"Add letters to make it stronger"}}else if(Ke){if(s)return{colors:["tomato","gray","gray"],message:"Add digits and symbols to make it stronger"};if(d)return{colors:["tomato","gray","gray"],message:"Add letters and symbols to make it stronger"};if(l)return{colors:["tomato","gray","gray"],message:"Add letters and digits to make it stronger"}}}else return{colors:["tomato","tomato","tomato"],message:"Password must be at least 8 characters long"};return{colors:["gray","gray","gray"],message:""}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=z({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var oe=t=>({"background-color":t}),qe=(()=>{let e=class e{constructor(n){this.passwordStrengthService=n,this.password="",this.getColor=["gray","gray","gray"],this.strengthMessage=""}ngOnChanges(n){n.password&&this.checkPasswordStrength()}checkPasswordStrength(){let{colors:n,message:r}=this.passwordStrengthService.evaluatePasswordStrength(this.password);this.getColor=n,this.strengthMessage=r}};e.\u0275fac=function(r){return new(r||e)(c(W))},e.\u0275cmp=C({type:e,selectors:[["app-password-strength-checker"]],inputs:{password:"password"},features:[S],decls:6,vars:10,consts:[[1,"strength-bar"],[1,"strength-section",3,"ngStyle"],[1,"strength-message"]],template:function(r,s){r&1&&(a(0,"div",0),v(1,"div",1)(2,"div",1)(3,"div",1),o(),a(4,"p",2),u(5),o()),r&2&&(p(),b("ngStyle",G(4,oe,s.getColor[0])),p(),b("ngStyle",G(6,oe,s.getColor[1])),p(),b("ngStyle",G(8,oe,s.getColor[2])),p(2),fe(s.strengthMessage))},dependencies:[_e],styles:[".strength-bar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%;max-width:305px;margin-top:20px}.strength-bar[_ngcontent-%COMP%]   .strength-section[_ngcontent-%COMP%]{width:30%;height:6px;background-color:gray;margin:0}.strength-bar[_ngcontent-%COMP%]   .strength-section[_ngcontent-%COMP%]:first-child{border-top-left-radius:10px;border-bottom-left-radius:10px}.strength-bar[_ngcontent-%COMP%]   .strength-section[_ngcontent-%COMP%]:last-child{border-top-right-radius:10px;border-bottom-right-radius:10px}.strength-message[_ngcontent-%COMP%]{color:#fff;font-size:17px;margin-top:15px}"]});let t=e;return t})();var $=(()=>{let e=class e{constructor(){this.password=""}onPasswordChange(n){this.password=n}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=C({type:e,selectors:[["app-root"]],decls:3,vars:1,consts:[[1,"container"],[3,"ngModelChange"],[3,"password"]],template:function(r,s){r&1&&(a(0,"div",0)(1,"app-password-input",1),M("ngModelChange",function(l){return s.onPasswordChange(l)}),o(),v(2,"app-password-strength-checker",2),o()),r&2&&(p(2),b("password",s.password))},dependencies:[$e,qe],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;height:95vh;text-align:center}"]});let t=e;return t})();var ze=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=y({type:e,bootstrap:[$]}),e.\u0275inj=m({providers:[W],imports:[Ce,We]});let t=e;return t})();var Ze=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=y({type:e,bootstrap:[$]}),e.\u0275inj=m({imports:[ze,Ve]});let t=e;return t})();De.production&&void 0;var Mn=Ze;export{Mn as a};
