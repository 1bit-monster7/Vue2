(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ff0c1872"],{"0eb6":function(e,t,i){"use strict";var r=i("23e7"),a=i("7c37"),o=i("d066"),s=i("d039"),n=i("7c73"),c=i("5c6c"),l=i("9bf2").f,u=i("cb2d"),h=i("edd0"),d=i("1a2d"),p=i("19aa"),g=i("825a"),m=i("aa1f"),f=i("e391"),v=i("cf98"),w=i("0d26"),b=i("69f3"),y=i("83ab"),E=i("c430"),S="DOMException",I="DATA_CLONE_ERR",C=o("Error"),x=o(S)||function(){try{var e=o("MessageChannel")||a("worker_threads").MessageChannel;(new e).port1.postMessage(new WeakMap)}catch(t){if(t.name==I&&25==t.code)return t.constructor}}(),R=x&&x.prototype,_=C.prototype,k=b.set,O=b.getterFor(S),D="stack"in C(S),T=function(e){return d(v,e)&&v[e].m?v[e].c:0},A=function(){p(this,z);var e=arguments.length,t=f(e<1?void 0:arguments[0]),i=f(e<2?void 0:arguments[1],"Error"),r=T(i);if(k(this,{type:S,name:i,message:t,code:r}),y||(this.name=i,this.message=t,this.code=r),D){var a=C(t);a.name=S,l(this,"stack",c(1,w(a.stack,1)))}},z=A.prototype=n(_),M=function(e){return{enumerable:!0,configurable:!0,get:e}},N=function(e){return M((function(){return O(this)[e]}))};y&&(h(z,"code",N("code")),h(z,"message",N("message")),h(z,"name",N("name"))),l(z,"constructor",c(1,A));var U=s((function(){return!(new x instanceof C)})),L=U||s((function(){return _.toString!==m||"2: 1"!==String(new x(1,2))})),P=U||s((function(){return 25!==new x(1,"DataCloneError").code})),H=U||25!==x[I]||25!==R[I],j=E?L||P||H:U;r({global:!0,constructor:!0,forced:j},{DOMException:j?A:x});var B=o(S),F=B.prototype;for(var W in L&&(E||x===B)&&u(F,"toString",m),P&&y&&x===B&&h(F,"code",M((function(){return T(g(this).name)}))),v)if(d(v,W)){var Y=v[W],Z=Y.s,q=c(6,Y.c);d(B,Z)||l(B,Z,q),d(F,Z)||l(F,Z,q)}},6534:function(e,t,i){"use strict";i("f6f9")},7913:function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"components-container"},[i("aside",[e._v("This is based on "),i("a",{staticClass:"link-type",attrs:{href:"//github.com/dai-siki/vue-image-crop-upload"}},[e._v(" vue-image-crop-upload")]),e._v(". "+e._s(e.$t("components.imageUploadTips"))+" ")]),i("pan-thumb",{attrs:{image:e.image}}),i("el-button",{staticStyle:{position:"absolute",bottom:"15px","margin-left":"40px"},attrs:{type:"primary",icon:"el-icon-upload"},on:{click:function(t){e.imagecropperShow=!0}}},[e._v(" Change Avatar ")]),i("image-cropper",{directives:[{name:"show",rawName:"v-show",value:e.imagecropperShow,expression:"imagecropperShow"}],key:e.imagecropperKey,attrs:{width:300,height:300,url:"https://httpbin.org/post","lang-type":"en"},on:{close:e.close,"crop-upload-success":e.cropSuccess}})],1)},a=[],o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}],staticClass:"vue-image-crop-upload"},[i("div",{staticClass:"vicp-wrap"},[i("div",{staticClass:"vicp-close",on:{click:e.off}},[i("i",{staticClass:"vicp-icon4"})]),i("div",{directives:[{name:"show",rawName:"v-show",value:1==e.step,expression:"step == 1"}],staticClass:"vicp-step1"},[i("div",{staticClass:"vicp-drop-area",on:{dragleave:e.preventDefault,dragover:e.preventDefault,dragenter:e.preventDefault,click:e.handleClick,drop:e.handleChange}},[i("i",{directives:[{name:"show",rawName:"v-show",value:1!=e.loading,expression:"loading != 1"}],staticClass:"vicp-icon1"},[i("i",{staticClass:"vicp-icon1-arrow"}),i("i",{staticClass:"vicp-icon1-body"}),i("i",{staticClass:"vicp-icon1-bottom"})]),i("span",{directives:[{name:"show",rawName:"v-show",value:1!==e.loading,expression:"loading !== 1"}],staticClass:"vicp-hint"},[e._v(e._s(e.lang.hint))]),i("span",{directives:[{name:"show",rawName:"v-show",value:!e.isSupported,expression:"!isSupported"}],staticClass:"vicp-no-supported-hint"},[e._v(e._s(e.lang.noSupported))]),1==e.step?i("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"fileinput",attrs:{type:"file"},on:{change:e.handleChange}}):e._e()]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.hasError,expression:"hasError"}],staticClass:"vicp-error"},[i("i",{staticClass:"vicp-icon2"}),e._v(" "+e._s(e.errorMsg)+" ")]),i("div",{staticClass:"vicp-operate"},[i("a",{on:{click:e.off,mousedown:e.ripple}},[e._v(e._s(e.lang.btn.off))])])]),2==e.step?i("div",{staticClass:"vicp-step2"},[i("div",{staticClass:"vicp-crop"},[i("div",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"vicp-crop-left"},[i("div",{staticClass:"vicp-img-container"},[i("img",{ref:"img",staticClass:"vicp-img",style:e.sourceImgStyle,attrs:{src:e.sourceImgUrl,draggable:"false"},on:{drag:e.preventDefault,dragstart:e.preventDefault,dragend:e.preventDefault,dragleave:e.preventDefault,dragover:e.preventDefault,dragenter:e.preventDefault,drop:e.preventDefault,touchstart:e.imgStartMove,touchmove:e.imgMove,touchend:e.createImg,touchcancel:e.createImg,mousedown:e.imgStartMove,mousemove:e.imgMove,mouseup:e.createImg,mouseout:e.createImg}}),i("div",{staticClass:"vicp-img-shade vicp-img-shade-1",style:e.sourceImgShadeStyle}),i("div",{staticClass:"vicp-img-shade vicp-img-shade-2",style:e.sourceImgShadeStyle})]),i("div",{staticClass:"vicp-range"},[i("input",{attrs:{type:"range",step:"1",min:"0",max:"100"},domProps:{value:e.scale.range},on:{input:e.zoomChange}}),i("i",{staticClass:"vicp-icon5",on:{mousedown:e.startZoomSub,mouseout:e.endZoomSub,mouseup:e.endZoomSub}}),i("i",{staticClass:"vicp-icon6",on:{mousedown:e.startZoomAdd,mouseout:e.endZoomAdd,mouseup:e.endZoomAdd}})]),e.noRotate?e._e():i("div",{staticClass:"vicp-rotate"},[i("i",{on:{mousedown:e.startRotateLeft,mouseout:e.endRotate,mouseup:e.endRotate}},[e._v("↺")]),i("i",{on:{mousedown:e.startRotateRight,mouseout:e.endRotate,mouseup:e.endRotate}},[e._v("↻")])])]),i("div",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"vicp-crop-right"},[i("div",{staticClass:"vicp-preview"},[e.noSquare?e._e():i("div",{staticClass:"vicp-preview-item"},[i("img",{style:e.previewStyle,attrs:{src:e.createImgUrl}}),i("span",[e._v(e._s(e.lang.preview))])]),e.noCircle?e._e():i("div",{staticClass:"vicp-preview-item vicp-preview-item-circle"},[i("img",{style:e.previewStyle,attrs:{src:e.createImgUrl}}),i("span",[e._v(e._s(e.lang.preview))])])])])]),i("div",{staticClass:"vicp-operate"},[i("a",{on:{click:function(t){return e.setStep(1)},mousedown:e.ripple}},[e._v(e._s(e.lang.btn.back))]),i("a",{staticClass:"vicp-operate-btn",on:{click:e.prepareUpload,mousedown:e.ripple}},[e._v(e._s(e.lang.btn.save))])])]):e._e(),3==e.step?i("div",{staticClass:"vicp-step3"},[i("div",{staticClass:"vicp-upload"},[i("span",{directives:[{name:"show",rawName:"v-show",value:1===e.loading,expression:"loading === 1"}],staticClass:"vicp-loading"},[e._v(e._s(e.lang.loading))]),i("div",{staticClass:"vicp-progress-wrap"},[i("span",{directives:[{name:"show",rawName:"v-show",value:1===e.loading,expression:"loading === 1"}],staticClass:"vicp-progress",style:e.progressStyle})]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.hasError,expression:"hasError"}],staticClass:"vicp-error"},[i("i",{staticClass:"vicp-icon2"}),e._v(" "+e._s(e.errorMsg)+" ")]),i("div",{directives:[{name:"show",rawName:"v-show",value:2===e.loading,expression:"loading === 2"}],staticClass:"vicp-success"},[i("i",{staticClass:"vicp-icon3"}),e._v(" "+e._s(e.lang.success)+" ")])]),i("div",{staticClass:"vicp-operate"},[i("a",{on:{click:function(t){return e.setStep(2)},mousedown:e.ripple}},[e._v(e._s(e.lang.btn.back))]),i("a",{on:{click:e.off,mousedown:e.ripple}},[e._v(e._s(e.lang.btn.close))])])]):e._e(),i("canvas",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"canvas",attrs:{width:e.width,height:e.height}})])])},s=[],n=i("53ca"),c=(i("a9e3"),i("d3b7"),i("159b"),i("b64b"),i("b775")),l={zh:{hint:"点击，或拖动图片至此处",loading:"正在上传……",noSupported:"浏览器不支持该功能，请使用IE10以上或其他现在浏览器！",success:"上传成功",fail:"图片上传失败",preview:"头像预览",btn:{off:"取消",close:"关闭",back:"上一步",save:"保存"},error:{onlyImg:"仅限图片格式",outOfSize:"单文件大小不能超过 ",lowestPx:"图片最低像素为（宽*高）："}},"zh-tw":{hint:"點擊，或拖動圖片至此處",loading:"正在上傳……",noSupported:"瀏覽器不支持該功能，請使用IE10以上或其他現代瀏覽器！",success:"上傳成功",fail:"圖片上傳失敗",preview:"頭像預覽",btn:{off:"取消",close:"關閉",back:"上一步",save:"保存"},error:{onlyImg:"僅限圖片格式",outOfSize:"單文件大小不能超過 ",lowestPx:"圖片最低像素為（寬*高）："}},en:{hint:"Click or drag the file here to upload",loading:"Uploading…",noSupported:"Browser is not supported, please use IE10+ or other browsers",success:"Upload success",fail:"Upload failed",preview:"Preview",btn:{off:"Cancel",close:"Close",back:"Back",save:"Save"},error:{onlyImg:"Image only",outOfSize:"Image exceeds size limit: ",lowestPx:"Image's size is too low. Expected at least: "}},ro:{hint:"Atinge sau trage fișierul aici",loading:"Se încarcă",noSupported:"Browser-ul tău nu suportă acest feature. Te rugăm încearcă cu alt browser.",success:"S-a încărcat cu succes",fail:"A apărut o problemă la încărcare",preview:"Previzualizează",btn:{off:"Anulează",close:"Închide",back:"Înapoi",save:"Salvează"},error:{onlyImg:"Doar imagini",outOfSize:"Imaginea depășește limita de: ",loewstPx:"Imaginea este prea mică; Minim: "}},ru:{hint:"Нажмите, или перетащите файл в это окно",loading:"Загружаю……",noSupported:"Ваш браузер не поддерживается, пожалуйста, используйте IE10 + или другие браузеры",success:"Загрузка выполнена успешно",fail:"Ошибка загрузки",preview:"Предпросмотр",btn:{off:"Отменить",close:"Закрыть",back:"Назад",save:"Сохранить"},error:{onlyImg:"Только изображения",outOfSize:"Изображение превышает предельный размер: ",lowestPx:"Минимальный размер изображения: "}},"pt-br":{hint:"Clique ou arraste o arquivo aqui para carregar",loading:"Carregando…",noSupported:"Browser não suportado, use o IE10+ ou outro browser",success:"Sucesso ao carregar imagem",fail:"Falha ao carregar imagem",preview:"Pré-visualizar",btn:{off:"Cancelar",close:"Fechar",back:"Voltar",save:"Salvar"},error:{onlyImg:"Apenas imagens",outOfSize:"A imagem excede o limite de tamanho: ",lowestPx:"O tamanho da imagem é muito pequeno. Tamanho mínimo: "}},fr:{hint:"Cliquez ou glissez le fichier ici.",loading:"Téléchargement…",noSupported:"Votre navigateur n'est pas supporté. Utilisez IE10 + ou un autre navigateur s'il vous plaît.",success:"Téléchargement réussit",fail:"Téléchargement echoué",preview:"Aperçu",btn:{off:"Annuler",close:"Fermer",back:"Retour",save:"Enregistrer"},error:{onlyImg:"Image uniquement",outOfSize:"L'image sélectionnée dépasse la taille maximum: ",lowestPx:"L'image sélectionnée est trop petite. Dimensions attendues: "}},nl:{hint:"Klik hier of sleep een afbeelding in dit vlak",loading:"Uploaden…",noSupported:"Je browser wordt helaas niet ondersteund. Gebruik IE10+ of een andere browser.",success:"Upload succesvol",fail:"Upload mislukt",preview:"Voorbeeld",btn:{off:"Annuleren",close:"Sluiten",back:"Terug",save:"Opslaan"},error:{onlyImg:"Alleen afbeeldingen",outOfSize:"De afbeelding is groter dan: ",lowestPx:"De afbeelding is te klein! Minimale afmetingen: "}},tr:{hint:"Tıkla veya yüklemek istediğini buraya sürükle",loading:"Yükleniyor…",noSupported:"Tarayıcı desteklenmiyor, lütfen IE10+ veya farklı tarayıcı kullanın",success:"Yükleme başarılı",fail:"Yüklemede hata oluştu",preview:"Önizle",btn:{off:"İptal",close:"Kapat",back:"Geri",save:"Kaydet"},error:{onlyImg:"Sadece resim",outOfSize:"Resim yükleme limitini aşıyor: ",lowestPx:"Resmin boyutu çok küçük. En az olması gereken: "}},"es-MX":{hint:"Selecciona o arrastra una imagen",loading:"Subiendo...",noSupported:"Tu navegador no es soportado, porfavor usa IE10+ u otros navegadores mas recientes",success:"Subido exitosamente",fail:"Sucedió un error",preview:"Vista previa",btn:{off:"Cancelar",close:"Cerrar",back:"Atras",save:"Guardar"},error:{onlyImg:"Unicamente imagenes",outOfSize:"La imagen excede el tamaño maximo:",lowestPx:"La imagen es demasiado pequeño. Se espera por lo menos:"}},de:{hint:"Klick hier oder zieh eine Datei hier rein zum Hochladen",loading:"Hochladen…",noSupported:"Browser wird nicht unterstützt, bitte verwende IE10+ oder andere Browser",success:"Upload erfolgreich",fail:"Upload fehlgeschlagen",preview:"Vorschau",btn:{off:"Abbrechen",close:"Schließen",back:"Zurück",save:"Speichern"},error:{onlyImg:"Nur Bilder",outOfSize:"Das Bild ist zu groß: ",lowestPx:"Das Bild ist zu klein. Mindestens: "}},ja:{hint:"クリック・ドラッグしてファイルをアップロード",loading:"アップロード中...",noSupported:"このブラウザは対応されていません。IE10+かその他の主要ブラウザをお使いください。",success:"アップロード成功",fail:"アップロード失敗",preview:"プレビュー",btn:{off:"キャンセル",close:"閉じる",back:"戻る",save:"保存"},error:{onlyImg:"画像のみ",outOfSize:"画像サイズが上限を超えています。上限: ",lowestPx:"画像が小さすぎます。最小サイズ: "}}},u={jpg:"image/jpeg",png:"image/png",gif:"image/gif",svg:"image/svg+xml",psd:"image/photoshop"},h=(i("81b2"),i("0eb6"),i("b7ef"),i("8bd4"),i("ace4"),i("5cc6"),i("907a"),i("9a8c"),i("a975"),i("735e"),i("c1ac"),i("d139"),i("3a7b"),i("986a"),i("1d02"),i("d5d6"),i("82f8"),i("e91f"),i("60bd"),i("5f96"),i("3280"),i("3fcc"),i("ca91"),i("25a1"),i("cd26"),i("3c5d"),i("2954"),i("649e"),i("219c"),i("170b"),i("b39a"),i("72f7"),function(e,t){e=e.split(",")[1],e=window.atob(e);for(var i=new Uint8Array(e.length),r=0;r<e.length;r++)i[r]=e.charCodeAt(r);return new Blob([i],{type:t})}),d=function(e,t){var i=Object.assign({ele:e.target,type:"hit",bgc:"rgba(0, 0, 0, 0.15)"},t),r=i.ele;if(r){var a=r.getBoundingClientRect(),o=r.querySelector(".e-ripple");switch(o?o.className="e-ripple":(o=document.createElement("span"),o.className="e-ripple",o.style.height=o.style.width=Math.max(a.width,a.height)+"px",r.appendChild(o)),i.type){case"center":o.style.top=a.height/2-o.offsetHeight/2+"px",o.style.left=a.width/2-o.offsetWidth/2+"px";break;default:o.style.top=e.pageY-a.top-o.offsetHeight/2-document.body.scrollTop+"px",o.style.left=e.pageX-a.left-o.offsetWidth/2-document.body.scrollLeft+"px"}return o.style.backgroundColor=i.bgc,o.className="e-ripple z-active",!1}},p={props:{field:{type:String,default:"avatar"},ki:{type:Number,default:0},value:{type:Boolean,default:!0},url:{type:String,default:""},params:{type:Object,default:null},headers:{type:Object,default:null},width:{type:Number,default:200},height:{type:Number,default:200},noRotate:{type:Boolean,default:!0},noCircle:{type:Boolean,default:!1},noSquare:{type:Boolean,default:!1},maxSize:{type:Number,default:10240},langType:{type:String,default:"zh"},langExt:{type:Object,default:null},imgFormat:{type:String,default:"png"},withCredentials:{type:Boolean,default:!1}},data:function(){var e=this.imgFormat,t=this.langType,i=this.langExt,r=this.width,a=this.height,o=!0,s=["jpg","png"],n=-1===s.indexOf(e)?"jpg":e,c=l[t]?l[t]:l["en"],h=u[n];return this.imgFormat=n,i&&Object.assign(c,i),"function"!==typeof FormData&&(o=!1),{mime:h,lang:c,isSupported:o,isSupportTouch:document.hasOwnProperty("ontouchstart"),step:1,loading:0,progress:0,hasError:!1,errorMsg:"",ratio:r/a,sourceImg:null,sourceImgUrl:"",createImgUrl:"",sourceImgMouseDown:{on:!1,mX:0,mY:0,x:0,y:0},previewContainer:{width:100,height:100},sourceImgContainer:{width:240,height:184},scale:{zoomAddOn:!1,zoomSubOn:!1,range:1,rotateLeft:!1,rotateRight:!1,degree:0,x:0,y:0,width:0,height:0,maxWidth:0,maxHeight:0,minWidth:0,minHeight:0,naturalWidth:0,naturalHeight:0}}},computed:{progressStyle:function(){var e=this.progress;return{width:e+"%"}},sourceImgStyle:function(){var e=this.scale,t=this.sourceImgMasking,i=e.y+t.y+"px",r=e.x+t.x+"px";return{top:i,left:r,width:e.width+"px",height:e.height+"px",transform:"rotate("+e.degree+"deg)","-ms-transform":"rotate("+e.degree+"deg)","-moz-transform":"rotate("+e.degree+"deg)","-webkit-transform":"rotate("+e.degree+"deg)","-o-transform":"rotate("+e.degree+"deg)"}},sourceImgMasking:function(){var e=this.width,t=this.height,i=this.ratio,r=this.sourceImgContainer,a=r,o=a.width/a.height,s=0,n=0,c=a.width,l=a.height,u=1;return i<o&&(u=a.height/t,c=a.height*i,s=(a.width-c)/2),i>o&&(u=a.width/e,l=a.width/i,n=(a.height-l)/2),{scale:u,x:s,y:n,width:c,height:l}},sourceImgShadeStyle:function(){var e=this.sourceImgMasking,t=this.sourceImgContainer,i=t,r=e,a=r.width===i.width?r.width:(i.width-r.width)/2,o=r.height===i.height?r.height:(i.height-r.height)/2;return{width:a+"px",height:o+"px"}},previewStyle:function(){var e=this.ratio,t=this.previewContainer,i=t,r=i.width,a=i.height,o=r/a;return e<o&&(r=i.height*e),e>o&&(a=i.width/e),{width:r+"px",height:a+"px"}}},watch:{value:function(e){e&&1!==this.loading&&this.reset()}},created:function(){document.addEventListener("keyup",this.closeHandler)},destroyed:function(){document.removeEventListener("keyup",this.closeHandler)},methods:{ripple:function(e){d(e)},off:function(){var e=this;setTimeout((function(){e.$emit("input",!1),e.$emit("close"),3===e.step&&2===e.loading&&e.setStep(1)}),200)},setStep:function(e){var t=this;setTimeout((function(){t.step=e}),200)},preventDefault:function(e){return e.preventDefault(),!1},handleClick:function(e){1!==this.loading&&e.target!==this.$refs.fileinput&&(e.preventDefault(),document.activeElement!==this.$refs&&this.$refs.fileinput.click())},handleChange:function(e){if(e.preventDefault(),1!==this.loading){var t=e.target.files||e.dataTransfer.files;this.reset(),this.checkFile(t[0])&&this.setSourceImg(t[0])}},checkFile:function(e){var t=this.lang,i=this.maxSize;return-1===e.type.indexOf("image")?(this.hasError=!0,this.errorMsg=t.error.onlyImg,!1):!(e.size/1024>i)||(this.hasError=!0,this.errorMsg=t.error.outOfSize+i+"kb",!1)},reset:function(){this.loading=0,this.hasError=!1,this.errorMsg="",this.progress=0},setSourceImg:function(e){var t=this,i=new FileReader;i.onload=function(e){t.sourceImgUrl=i.result,t.startCrop()},i.readAsDataURL(e)},startCrop:function(){var e=this,t=this.width,i=this.height,r=this.ratio,a=this.scale,o=this.sourceImgUrl,s=this.sourceImgMasking,n=this.lang,c=s,l=new Image;l.src=o,l.onload=function(){var o=l.naturalWidth,s=l.naturalHeight,u=o/s,h=c.width,d=c.height,p=0,g=0;if(o<t||s<i)return e.hasError=!0,e.errorMsg=n.error.lowestPx+t+"*"+i,!1;r>u&&(d=h/u,g=(c.height-d)/2),r<u&&(h=d*u,p=(c.width-h)/2),a.range=0,a.x=p,a.y=g,a.width=h,a.height=d,a.degree=0,a.minWidth=h,a.minHeight=d,a.maxWidth=o*c.scale,a.maxHeight=s*c.scale,a.naturalWidth=o,a.naturalHeight=s,e.sourceImg=l,e.createImg(),e.setStep(2)}},imgStartMove:function(e){if(e.preventDefault(),this.isSupportTouch&&!e.targetTouches)return!1;var t=e.targetTouches?e.targetTouches[0]:e,i=this.sourceImgMouseDown,r=this.scale,a=i;a.mX=t.screenX,a.mY=t.screenY,a.x=r.x,a.y=r.y,a.on=!0},imgMove:function(e){if(e.preventDefault(),this.isSupportTouch&&!e.targetTouches)return!1;var t=e.targetTouches?e.targetTouches[0]:e,i=this.sourceImgMouseDown,r=i.on,a=i.mX,o=i.mY,s=i.x,n=i.y,c=this.scale,l=this.sourceImgMasking,u=l,h=t.screenX,d=t.screenY,p=h-a,g=d-o,m=s+p,f=n+g;r&&(m>0&&(m=0),f>0&&(f=0),m<u.width-c.width&&(m=u.width-c.width),f<u.height-c.height&&(f=u.height-c.height),c.x=m,c.y=f)},startRotateRight:function(e){var t=this,i=this.scale;i.rotateRight=!0;var r=function e(){if(i.rotateRight){var r=++i.degree;t.createImg(r),setTimeout((function(){e()}),60)}};r()},startRotateLeft:function(e){var t=this,i=this.scale;i.rotateLeft=!0;var r=function e(){if(i.rotateLeft){var r=--i.degree;t.createImg(r),setTimeout((function(){e()}),60)}};r()},endRotate:function(){var e=this.scale;e.rotateLeft=!1,e.rotateRight=!1},startZoomAdd:function(e){var t=this,i=this.scale;i.zoomAddOn=!0;var r=function e(){if(i.zoomAddOn){var r=i.range>=100?100:++i.range;t.zoomImg(r),setTimeout((function(){e()}),60)}};r()},endZoomAdd:function(e){this.scale.zoomAddOn=!1},startZoomSub:function(e){var t=this,i=this.scale;i.zoomSubOn=!0;var r=function e(){if(i.zoomSubOn){var r=i.range<=0?0:--i.range;t.zoomImg(r),setTimeout((function(){e()}),60)}};r()},endZoomSub:function(e){var t=this.scale;t.zoomSubOn=!1},zoomChange:function(e){this.zoomImg(e.target.value)},zoomImg:function(e){var t=this,i=this.sourceImgMasking,r=this.scale,a=r.maxWidth,o=r.maxHeight,s=r.minWidth,n=r.minHeight,c=r.width,l=r.height,u=r.x,h=r.y,d=i,p=d.width,g=d.height,m=s+(a-s)*e/100,f=n+(o-n)*e/100,v=p/2-m/c*(p/2-u),w=g/2-f/l*(g/2-h);v>0&&(v=0),w>0&&(w=0),v<p-m&&(v=p-m),w<g-f&&(w=g-f),r.x=v,r.y=w,r.width=m,r.height=f,r.range=e,setTimeout((function(){r.range===e&&t.createImg()}),300)},createImg:function(e){var t=this.mime,i=this.sourceImg,r=this.scale,a=r.x,o=r.y,s=r.width,n=r.height,c=r.degree,l=this.sourceImgMasking.scale,u=this.$refs.canvas,h=u.getContext("2d");e&&(this.sourceImgMouseDown.on=!1),u.width=this.width,u.height=this.height,h.clearRect(0,0,this.width,this.height),h.fillStyle="#fff",h.fillRect(0,0,this.width,this.height),h.translate(.5*this.width,.5*this.height),h.rotate(Math.PI*c/180),h.translate(.5*-this.width,.5*-this.height),h.drawImage(i,a/l,o/l,s/l,n/l),this.createImgUrl=u.toDataURL(t)},prepareUpload:function(){var e=this.url,t=this.createImgUrl,i=this.field,r=this.ki;this.$emit("crop-success",t,i,r),"string"===typeof e&&e?this.upload():this.off()},upload:function(){var e=this,t=this.lang,i=this.imgFormat,r=this.mime,a=this.url,o=this.params,s=this.field,l=this.ki,u=this.createImgUrl,d=new FormData;d.append(s,h(u,r),s+"."+i),"object"===Object(n["a"])(o)&&o&&Object.keys(o).forEach((function(e){d.append(e,o[e])})),this.reset(),this.loading=1,this.setStep(3),Object(c["a"])({url:a,method:"post",data:d}).then((function(t){e.loading=2,e.$emit("crop-upload-success",t.data)})).catch((function(i){e.value&&(e.loading=3,e.hasError=!0,e.errorMsg=t.fail,e.$emit("crop-upload-fail",i,s,l))}))},closeHandler:function(e){!this.value||"Escape"!==e.key&&27!==e.keyCode||this.off()}}},g=p,m=(i("6534"),i("2877")),f=Object(m["a"])(g,o,s,!1,null,null,null),v=f.exports,w=i("3cbc"),b={name:"AvatarUploadDemo",components:{ImageCropper:v,PanThumb:w["a"]},data:function(){return{imagecropperShow:!1,imagecropperKey:0,image:"https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191"}},methods:{cropSuccess:function(e){this.imagecropperShow=!1,this.imagecropperKey=this.imagecropperKey+1,this.image=e.files.avatar},close:function(){this.imagecropperShow=!1}}},y=b,E=(i("eac2"),Object(m["a"])(y,r,a,!1,null,"22326c84",null));t["default"]=E.exports},"7c37":function(e,t,i){var r=i("605d");e.exports=function(e){try{if(r)return Function('return require("'+e+'")')()}catch(t){}}},"81b2":function(e,t,i){var r=i("23e7"),a=i("d066"),o=i("e330"),s=i("d039"),n=i("577e"),c=i("1a2d"),l=i("d6d6"),u=i("b917").ctoi,h=/[^\d+/a-z]/i,d=/[\t\n\f\r ]+/g,p=/[=]+$/,g=a("atob"),m=String.fromCharCode,f=o("".charAt),v=o("".replace),w=o(h.exec),b=s((function(){return""!==g(" ")})),y=!s((function(){g("a")})),E=!b&&!y&&!s((function(){g()})),S=!b&&!y&&1!==g.length;r({global:!0,enumerable:!0,forced:b||y||E||S},{atob:function(e){if(l(arguments.length,1),E||S)return g(e);var t,i,r=v(n(e),d,""),o="",s=0,b=0;if(r.length%4==0&&(r=v(r,p,"")),r.length%4==1||w(h,r))throw new(a("DOMException"))("The string is not correctly encoded","InvalidCharacterError");while(t=f(r,s++))c(u,t)&&(i=b%4?64*i+u[t]:u[t],b++%4&&(o+=m(255&i>>(-2*b&6))));return o}})},"86a2":function(e,t,i){},"8bd4":function(e,t,i){var r=i("d066"),a=i("d44e"),o="DOMException";a(r(o),o)},aa1f:function(e,t,i){"use strict";var r=i("83ab"),a=i("d039"),o=i("825a"),s=i("7c73"),n=i("e391"),c=Error.prototype.toString,l=a((function(){if(r){var e=s(Object.defineProperty({},"name",{get:function(){return this===e}}));if("true"!==c.call(e))return!0}return"2: 1"!==c.call({message:1,name:2})||"Error"!==c.call({})}));e.exports=l?function(){var e=o(this),t=n(e.name,"Error"),i=n(e.message);return t?i?t+": "+i:t:i}:c},b7ef:function(e,t,i){"use strict";var r=i("23e7"),a=i("da84"),o=i("d066"),s=i("5c6c"),n=i("9bf2").f,c=i("1a2d"),l=i("19aa"),u=i("7156"),h=i("e391"),d=i("cf98"),p=i("0d26"),g=i("83ab"),m=i("c430"),f="DOMException",v=o("Error"),w=o(f),b=function(){l(this,y);var e=arguments.length,t=h(e<1?void 0:arguments[0]),i=h(e<2?void 0:arguments[1],"Error"),r=new w(t,i),a=v(t);return a.name=f,n(r,"stack",s(1,p(a.stack,1))),u(r,this,b),r},y=b.prototype=w.prototype,E="stack"in v(f),S="stack"in new w(1,2),I=w&&g&&Object.getOwnPropertyDescriptor(a,f),C=!!I&&!(I.writable&&I.configurable),x=E&&!C&&!S;r({global:!0,constructor:!0,forced:m||x},{DOMException:x?b:w});var R=o(f),_=R.prototype;if(_.constructor!==R)for(var k in m||n(_,"constructor",s(1,R)),d)if(c(d,k)){var O=d[k],D=O.s;c(R,D)||n(R,D,s(6,O.c))}},b917:function(e,t){for(var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",r={},a=0;a<66;a++)r[i.charAt(a)]=a;e.exports={itoc:i,ctoi:r}},cf98:function(e,t){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},eac2:function(e,t,i){"use strict";i("86a2")},f6f9:function(e,t,i){}}]);