(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"0oQD":function(e,t,n){"use strict";n.r(t),n.d(t,"LoginModule",function(){return V});var o=n("ofXK"),i=n("3Pt+"),r=n("tyNb"),l=n("YZbJ"),a=n("ahC7"),s=n("Nm8O"),d=n("Zx3/"),m=n("K3ix"),c=n("fXoL"),u=n("dPL8"),p=n("pW6c"),g=n("l7P3"),h=n("b6Qw"),f=n("JqCM"),v=n("1kSV");function b(e,t){1&e&&c["\u0275\u0275element"](0,"img",10)}function S(e,t){1&e&&c["\u0275\u0275element"](0,"img",11)}function w(e,t){1&e&&c["\u0275\u0275element"](0,"img",10)}function k(e,t){1&e&&c["\u0275\u0275element"](0,"img",11)}function x(e,t){1&e&&c["\u0275\u0275element"](0,"img",10)}function y(e,t){1&e&&c["\u0275\u0275element"](0,"img",11)}function E(e,t){1&e&&c["\u0275\u0275element"](0,"img",10)}function I(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"label"),c["\u0275\u0275text"](1," Email must contain @asscat.edu.ph "),c["\u0275\u0275elementEnd"]())}function F(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"label",38),c["\u0275\u0275template"](1,I,2,0,"label",39),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"](2);c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",e.email.errors.required||e.email.errors.whitespace||e.email.errors.noEduEmail)}}function j(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"label",40),c["\u0275\u0275text"](1,"Please enter a valid password."),c["\u0275\u0275elementEnd"]())}const C=function(e,t){return{"is-valid":e,"is-invalid":t}},T=function(){return["/auth/reset-password-v2"]};function q(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"div",12),c["\u0275\u0275elementStart"](1,"form",13),c["\u0275\u0275listener"]("ngSubmit",function(){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().login()}),c["\u0275\u0275elementStart"](2,"div",14),c["\u0275\u0275element"](3,"img",15),c["\u0275\u0275elementStart"](4,"h3",16),c["\u0275\u0275text"](5,"Signin"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"div",17),c["\u0275\u0275elementStart"](7,"div",18),c["\u0275\u0275elementStart"](8,"div",19),c["\u0275\u0275element"](9,"label",20),c["\u0275\u0275element"](10,"input",21),c["\u0275\u0275template"](11,F,2,1,"label",22),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](12,"div",17),c["\u0275\u0275elementStart"](13,"div",18),c["\u0275\u0275elementStart"](14,"div",19),c["\u0275\u0275element"](15,"label",23),c["\u0275\u0275element"](16,"input",24),c["\u0275\u0275template"](17,j,2,0,"label",25),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](18,"div",26),c["\u0275\u0275element"](19,"input",27),c["\u0275\u0275elementStart"](20,"label",28),c["\u0275\u0275text"](21,"Save credentials."),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](22,"button",29),c["\u0275\u0275listener"]("submit",function(){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().login()}),c["\u0275\u0275text"](23," Signin "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](24,"div",30),c["\u0275\u0275elementStart"](25,"div",31),c["\u0275\u0275elementStart"](26,"span"),c["\u0275\u0275text"](27,"OR"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](28,"button",32),c["\u0275\u0275listener"]("click",function(){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().facebookLogin()}),c["\u0275\u0275element"](29,"i",33),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](30,"button",34),c["\u0275\u0275listener"]("click",function(){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().socialLogin()}),c["\u0275\u0275element"](31,"i",35),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](32,"p",36),c["\u0275\u0275text"](33,"Forgot password? "),c["\u0275\u0275elementStart"](34,"a",37),c["\u0275\u0275text"](35,"Reset"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()}if(2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("formGroup",e.loginForm),c["\u0275\u0275advance"](9),c["\u0275\u0275property"]("ngClass",c["\u0275\u0275pureFunction2"](8,C,e.email.touched&&e.email.valid,(e.email.dirty||e.email.touched)&&e.email.invalid)),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",!e.email.valid&&(e.email.dirty||e.email.touched)),c["\u0275\u0275advance"](5),c["\u0275\u0275property"]("type",e.fieldTextType?"text":"password")("ngClass",c["\u0275\u0275pureFunction2"](11,C,e.password.touched&&e.password.valid,(e.password.dirty||e.password.touched)&&e.password.invalid)),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",e.loginForm.get("password").hasError("required")||e.loginForm.get("email").hasError("password")),c["\u0275\u0275advance"](5),c["\u0275\u0275property"]("disabled",e.loginForm.invalid),c["\u0275\u0275advance"](12),c["\u0275\u0275property"]("routerLink",c["\u0275\u0275pureFunction0"](14,T))}}const A=[{path:"",component:(()=>{class e{constructor(e,t,n,o,i,r,l,a,d,m,c){this.toastHotService=e,this.modalService=t,this.authService=n,this.fb=o,this.store=i,this.cookieService=r,this.authenticationService=l,this.socialAuthService=a,this.auth=d,this.router=m,this.ngxSpinner=c,this.model={},this.jwtHelper=new s.a,this.data="<h1>asdasdasdasdasdasd</h1>"}get email(){return this.loginForm.get("email")}get password(){return this.loginForm.get("password")}getClass(e){let t="";return t=e?"auth-wrapper align-items-stretch aut-bg-img":"auth-wrapper align-items-stretch",t}ngOnInit(){this.socialAuthService.authState.subscribe(e=>{this.user=e}),this.store.select(l.u).subscribe(e=>{console.log(e),console.log(e),console.log(e),console.log(e),console.log(e),console.log(e),console.log(e)}),this.loginForm=this.fb.group({email:["",[i.Validators.required,d.b.noWhitespaceValidator,d.a.eduEmailValidator]],password:["",i.Validators.required]})}openModal(){this.lgModal.show()}hideModal(){this.lgModal.hide()}toggleFieldTextType(){this.fieldTextType=!this.fieldTextType}login(){if(this.loginForm.valid){localStorage.clear(),this.cookieService.deleteAll();const e=this.loginForm.value;console.log(e),this.store.dispatch(new l.i(e))}else this.validateAllFormFields(this.loginForm)}validateAllFormFields(e){Object.keys(e.controls).forEach(t=>{const n=e.get(t);n instanceof i.FormControl?n.markAsTouched({onlySelf:!0}):n instanceof i.FormGroup&&this.validateAllFormFields(n)})}socialLogin(){this.ngxSpinner.show("loginSpinner"),this.socialAuthService.signIn(a.b.PROVIDER_ID).then(e=>{var t,n;console.log(null===(t=this.user)||void 0===t?void 0:t.email);let o=null===(n=this.user)||void 0===n?void 0:n.email;for(let i=0;i<=5;i++)console.log("old",o),o=btoa(o),console.log("new",o);this.auth.socialLogin(o).subscribe(e=>{localStorage.setItem("token",e.token);const t=this.jwtHelper.decodeToken(e.token);this.cookieService.set("token",e.token),this.jwtHelper.getTokenExpirationDate(e.token),this.cookieService.set("token",e.token,{expires:this.jwtHelper.getTokenExpirationDate(e.token),sameSite:"Strict",secure:!0}),window.location.reload(),this.router.navigate(["employee/profile",t.unique_name,btoa(String(t.nameid))],{fragment:btoa("profile")})})}).catch(e=>{console.log(e),e.error||this.toastHotService.error("<b style='color: red'>Failed to load third party login</b>")}).finally(()=>{this.ngxSpinner.hide("loginSpinner")})}test(){}facebookLogin(){this.ngxSpinner.show("loginSpinner"),this.socialAuthService.signIn(a.a.PROVIDER_ID).then(e=>{var t;const n=null===(t=this.user)||void 0===t?void 0:t.id;console.log(this.user),this.auth.facebookLogin(n).subscribe(e=>{localStorage.setItem("token",e.token);const t=this.jwtHelper.decodeToken(e.token);this.cookieService.set("token",e.token),this.jwtHelper.getTokenExpirationDate(e.token),this.cookieService.set("token",e.token,{expires:this.jwtHelper.getTokenExpirationDate(e.token),sameSite:"Strict",secure:!0}),window.location.reload(),this.router.navigate(["employee/profile",t.unique_name,btoa(String(t.nameid))],{fragment:btoa("profile")})})}).catch(e=>{console.log(e),e.error||this.toastHotService.error("<b style='color: red'>Failed to load third party login</b>")}).finally(()=>{this.ngxSpinner.hide("loginSpinner")})}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](u.b),c["\u0275\u0275directiveInject"](m.a),c["\u0275\u0275directiveInject"](p.a),c["\u0275\u0275directiveInject"](i.FormBuilder),c["\u0275\u0275directiveInject"](g.h),c["\u0275\u0275directiveInject"](h.a),c["\u0275\u0275directiveInject"](p.a),c["\u0275\u0275directiveInject"](a.c),c["\u0275\u0275directiveInject"](p.a),c["\u0275\u0275directiveInject"](r.g),c["\u0275\u0275directiveInject"](f.c))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["app-login"]],viewQuery:function(e,t){if(1&e&&c["\u0275\u0275viewQuery"](m.b,1),2&e){let e;c["\u0275\u0275queryRefresh"](e=c["\u0275\u0275loadQuery"]())&&(t.lgModal=e.first)}},decls:20,vars:3,consts:[[1,"auth-wrapper","align-items-stretch","aut-bg-img"],[1,"flex-grow-1"],[1,"h-100","d-md-flex","align-items-center","auth-side-img"],[1,"col-sm-8","auth-content","w-auto"],[1,"d-flex","justify-content-center"],["src","assets/images/auth/auth-logo.png","alt","",1,"img-fluid"],[1,"text-white"],[3,"wrap","interval"],["ngbSlide",""],["class","auth-side-form ",4,"ngIf"],["src","assets/images/slider/img-slide-1.png","alt","Third Slide",1,"d-block","w-100"],["src","assets/images/slider/img-slide-2.png","alt","Third Slide",1,"d-block","w-100"],[1,"auth-side-form"],["name","loginForm","autocomplete","off",3,"formGroup","ngSubmit"],[1,"auth-content"],["src","assets/images/auth/auth-logo.png","alt","",1,"img-fluid","mb-4","d-block","d-xl-none","d-lg-none","d-md-none","d-sm-none"],[1,"f-w-400","mb-4"],[1,"row"],[1,"col-md-12"],[1,"form-group"],["for","emailAddress"],["autocomplete","off","type","email","id","emailAddress","name","emailAddress","formControlName","email","placeholder","Email address",1,"form-control","input-md",3,"ngClass"],["id","validation-middlename-error","class","error jquery-validation-error small form-text invalid-feedback",4,"ngIf"],["for","password"],["autocomplete","off","id","password","name","password","formControlName","password","placeholder","Password",1,"form-control","input-md",3,"type","ngClass"],["id","validation-password-error","class","error jquery-validation-error small form-text invalid-feedback",4,"ngIf"],[1,"custom-control","custom-checkbox","text-left","mb-4","mt-2"],["type","checkbox","id","customCheck1",1,"custom-control-input"],["for","customCheck1",1,"custom-control-label"],[1,"btn","btn-block","btn-outline-primary","mb-0","rounded-pill",3,"disabled","submit"],[1,"text-center"],[1,"saprator","my-4"],["aria-label","facebookLogin","type","button",1,"btn","text-white","bg-facebook","mb-2","mr-2","wid-40","px-0","hei-40","rounded-circle",3,"click"],[1,"fab","fa-facebook-f"],["aria-label","googleLogin","type","button",1,"btn","text-white","bg-googleplus","mb-2","mr-2","wid-40","px-0","hei-40","rounded-circle",3,"click"],[1,"fab","fa-google-plus-g"],[1,"mb-2","text-dark"],[1,"f-w-400",3,"routerLink"],["id","validation-middlename-error",1,"error","jquery-validation-error","small","form-text","invalid-feedback"],[4,"ngIf"],["id","validation-password-error",1,"error","jquery-validation-error","small","form-text","invalid-feedback"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"div",0),c["\u0275\u0275elementStart"](1,"div",1),c["\u0275\u0275elementStart"](2,"div",2),c["\u0275\u0275elementStart"](3,"div",3),c["\u0275\u0275elementStart"](4,"div",4),c["\u0275\u0275element"](5,"img",5),c["\u0275\u0275element"](6,"br"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](7,"div",4),c["\u0275\u0275elementStart"](8,"h1",6),c["\u0275\u0275text"](9,"Human Resource Information System"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](10,"br"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](11,"ngb-carousel",7),c["\u0275\u0275template"](12,b,1,0,"ng-template",8),c["\u0275\u0275template"](13,S,1,0,"ng-template",8),c["\u0275\u0275template"](14,w,1,0,"ng-template",8),c["\u0275\u0275template"](15,k,1,0,"ng-template",8),c["\u0275\u0275template"](16,x,1,0,"ng-template",8),c["\u0275\u0275template"](17,y,1,0,"ng-template",8),c["\u0275\u0275template"](18,E,1,0,"ng-template",8),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275template"](19,q,36,15,"div",9),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](11),c["\u0275\u0275property"]("wrap",!1)("interval",2e3),c["\u0275\u0275advance"](8),c["\u0275\u0275property"]("ngIf",t.authenticationService.loggedIn))},directives:[v.c,v.w,o.q,i["\u0275angular_packages_forms_forms_ba"],i.NgControlStatusGroup,i.FormGroupDirective,i.DefaultValueAccessor,i.NgControlStatus,i.FormControlName,o.n,r.j],styles:[""]}),e})()}];let L=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({imports:[[r.k.forChild(A)],r.k]}),e})(),V=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({imports:[[o.c,L,i.FormsModule,i.ReactiveFormsModule,v.d,m.c]]}),e})()}}]);