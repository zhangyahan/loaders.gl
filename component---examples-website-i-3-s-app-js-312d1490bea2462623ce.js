(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{TwbF:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return $e})),r.d(t,"renderToDOM",(function(){return Xe}));var n=r("o0o1"),a=r.n(n),o=(r("wcNg"),r("HaE+")),i=r("JX7q"),s=r("dI71"),c=r("rePB"),u=r("q1tI"),l=r.n(u),p=r("i8i4"),f=r("UP1k"),d=r("rta6"),h=r("yYqN"),m=r("Wium"),b=r("BENj"),y=r("G8qk"),g=r("24Wh"),v=r("KQm4"),x=r("zXfU"),w=r("Ns70"),S=r("O6hP"),O=r("rOwd");function j(e){var t=e.halfSize,r=w.a.WGS84.cartographicToCartesian(e.center),n=(new O.a).fromCornerPoints([r[0]-t[0],r[1]-t[1],r[2]-t[2]],[r[0]+t[0],r[1]+t[1],r[2]+t[2]]);return[].concat(Object(v.a)(e.center),[n.radius])}function _(e){return P.apply(this,arguments)}function P(){return(P=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",JSON.parse((new TextDecoder).decode(t)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=_(t),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T={id:"i3s-node-page",name:"I3S Node Page",version:"undefined"!=typeof __VERSION__?__VERSION__:"latest",mimeTypes:["application/json"],parse:function(e){return k.apply(this,arguments)},extensions:["json"],options:{}};function I(e,t){return void 0===t&&(t=null),t?e+"?token="+t:e}function M(e,t){for(var r=[],n=e.attributeStorageInfo,a=e.url,o=0;o<n.length;o++){var i=n[o].key;r.push(a+"/nodes/"+t+"/attributes/"+i+"/0")}return r}var C=r("ipMt");function D(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return E(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var U=function(){function e(e,t){this.tileset=e,this.nodesPerPage=e.nodePages.nodesPerPage,this.lodSelectionMetricType=e.nodePages.lodSelectionMetricType,this.options=t,this.nodePages=[],this.textureDefinitionsSelectedFormats=[],this._initSelectedFormatsForTextureDefinitions(e)}var t=e.prototype;return t.getNodeById=function(){var e=Object(o.a)(a.a.mark((function e(t){var r,n,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=Math.floor(t/this.nodesPerPage),this.nodePages[r]){e.next=7;break}return n=this.tileset.url+"/nodepages/"+r,this.nodePages[r]=Object(g.a)(n,T,this.options),e.next=6,this.nodePages[r];case 6:this.nodePages[r]=e.sent;case 7:if(!(this.nodePages[r]instanceof Promise)){e.next=11;break}return e.next=10,this.nodePages[r];case 10:this.nodePages[r]=e.sent;case 11:return o=t%this.nodesPerPage,e.abrupt("return",this.nodePages[r].nodes[o]);case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),t.formTileFromNodePages=function(){var e=Object(o.a)(a.a.mark((function e(t){var r,n,o,i,s,c,u,l,p,f,d,h,m,b,y;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getNodeById(t);case 2:r=e.sent,n=[],o=D(r.children||[]);case 5:if((i=o()).done){e.next=13;break}return s=i.value,e.next=9,this.getNodeById(s);case 9:c=e.sent,n.push({id:s,obb:c.obb,mbs:j(c.obb)});case 11:e.next=5;break;case 13:return u=null,l=null,p=null,f="jpeg",d=[],r&&r.mesh&&(r.mesh.geometry&&(u=this.tileset.url+"/nodes/"+r.mesh.geometry.resource+"/geometries/0"),h=this._getInformationFromMaterial(r.mesh.material),m=h[0],b=h[1],p=b,f=m.format||f,m.name&&(l=this.tileset.url+"/nodes/"+r.mesh.material.resource+"/textures/"+m.name),this.tileset.attributeStorageInfo&&(d=M(this.tileset,r.mesh.material.resource))),y=[],"maxScreenThresholdSQ"===this.lodSelectionMetricType&&y.push({metricType:"maxScreenThreshold",maxError:Math.sqrt(r.lodThreshold/(.25*Math.PI))}),y.push({metricType:this.lodSelectionMetricType,maxError:r.lodThreshold}),e.abrupt("return",A({id:t,lodSelection:y,obb:r.obb,mbs:j(r.obb),contentUrl:u,textureUrl:l,attributeUrls:d,materialDefinition:p,textureFormat:f,children:n}));case 23:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),t._getInformationFromMaterial=function(e){var t={name:null,format:null};if(e){var r=this.tileset.materialDefinitions[e.definition],n=r&&r.pbrMetallicRoughness&&r.pbrMetallicRoughness.baseColorTexture&&r.pbrMetallicRoughness.baseColorTexture.textureSetDefinitionId;return n||0===n?[this.textureDefinitionsSelectedFormats[n]||t,r]:[t,r]}return[t,null]},t._initSelectedFormatsForTextureDefinitions=function(e){this.textureDefinitionsSelectedFormats=[];for(var t,r=this._getSupportedTextureFormats(),n=D(e.textureSetDefinitions||[]);!(t=n()).done;){for(var a,o=t.value,i=o&&o.formats||[],s=null,c=function(){var e=a.value,t=i.find((function(t){return t.format===e}));if(t)return s=t,"break"},u=D(r);!(a=u()).done;){if("break"===c())break}this.textureDefinitionsSelectedFormats.push(s)}},t._getSupportedTextureFormats=function(){var e=[],t=Object(C.a)();return t.has("etc2")&&e.push("ktx-etc2"),t.has("dxt")&&e.push("dds"),e.push("jpg"),e.push("png"),e},e}(),F=new x.a;function N(e,t,r){return e.url=r.url,e.featureData&&(e.featureUrl=e.url+"/"+e.featureData[0].href),e.geometryData&&(t.i3s.useDracoGeometry&&-1!==t.i3s.dracoGeometryIndex?e.contentUrl=e.url+"/geometries/"+t.i3s.dracoGeometryIndex:e.contentUrl=e.url+"/"+e.geometryData[0].href),e.textureData&&(e.textureUrl=e.url+"/"+e.textureData[0].href),e.attributeData&&(e.attributeUrls=function(e){for(var t=e.url,r=e.attributeData,n=[],a=0;a<r.length;a++){var o=r[a].href.replace("./","");n.push(t+"/"+o)}return n}(e)),A(e)}function A(e){F.copy(e.mbs);var t=w.a.WGS84.cartographicToCartesian(e.mbs.slice(0,3));return e.boundingVolume={sphere:[].concat(Object(v.a)(t),[e.mbs[3]])},e.lodMetricType=e.lodSelection[0].metricType,e.lodMetricValue=e.lodSelection[0].maxError,e.transformMatrix=e.transform,e.type=S.f.MESH,e.refine=S.e.REPLACE,e}function z(e,t,r){return R.apply(this,arguments)}function R(){return(R=Object(o.a)(a.a.mark((function e(t,r,n){var o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.url=n.url,!t.nodePages){e.next=8;break}return t.nodePagesTile=new U(t,r),e.next=5,t.nodePagesTile.formTileFromNodePages(0);case 5:t.root=e.sent,e.next=12;break;case 8:return o=I(t.url+"/nodes/root",r.token),e.next=11,Object(g.a)(o,t.loader,{i3s:{loadContent:!1,isTileHeader:!0,isTileset:!1}});case 11:t.root=e.sent;case 12:t.basePath=t.url,t.type=S.c.I3S,t.lodMetricType=t.root.lodMetricType,t.lodMetricValue=t.root.lodMetricValue;case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var W=r("Nw31"),L=r("gQyj"),G=r("pUAI"),B=r("1Nab"),V=5121,q=5125,J=5126,H=5130,Y={UInt8:Uint8Array,UInt16:Uint16Array,UInt32:Uint32Array,Float32:Float32Array,UInt64:Float64Array},Q={UInt8:V,UInt16:q,Float32:J,UInt32:q,UInt64:H},Z={position:"position",normal:"normal",uv0:"uv0",color:"color",region:"region"},$={vertexAttributes:"vertexAttributes",featureAttributeOrder:"featureAttributeOrder",featureAttributes:"featureAttributes"},X="header",K="vertexCount",ee="featureCount",te={UInt8:1,UInt16:2,UInt32:4,Float32:4,UInt64:8},re=r("+PVp");function ne(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return ae(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ae(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}function ae(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ie(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(r),!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):oe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var se=new x.a([0,0,0]),ce={jpeg:L.a,png:L.a,"ktx-etc2":re.a,dds:re.a};function ue(e,t,r,n){return le.apply(this,arguments)}function le(){return(le=Object(o.a)(a.a.mark((function e(t,r,n,o){var i,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.content=r.content||{},r.content.featureData=me(r,n),r.content.attributes={},!r.textureUrl){e.next=10;break}return i=I(r.textureUrl,o.token),s=ce[r.textureFormat]||L.a,e.next=8,Object(g.a)(i,s);case 8:r.content.texture=e.sent,s===re.a&&(r.content.texture={compressed:!0,mipmaps:!1,width:r.content.texture[0].width,height:r.content.texture[0].height,data:r.content.texture});case 10:return e.next=12,pe(t,r,o);case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function pe(e,t,r){return fe.apply(this,arguments)}function fe(){return(fe=Object(o.a)(a.a.mark((function e(t,r,n){var o,i,s,c,u,l,p,f,d,h,m,b,y,g,v,x,w,S,O,j,_,P,k,T,I,M,C,D;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===r&&(r={}),r.content){e.next=3;break}return e.abrupt("return",r);case 3:if(o=r.content,c=0,u=0,!n.i3s.useDracoGeometry||-1===n.i3s.dracoGeometryIndex){e.next=16;break}return e.next=9,Object(G.a)(t,B.a);case 9:l=e.sent,s=l.header.vertexCount,p=l.indices.value,f=l.attributes,d=f.POSITION,h=f.NORMAL,m=f.COLOR_0,b=f.TEXCOORD_0,i={position:he(d,p),normal:he(h,p),color:he(m,p),uv0:he(b,p)},e.next=24;break;case 16:y=o.featureData,g=y.vertexAttributes,v=y.attributesOrder,x=y.featureAttributes,w=y.featureAttributeOrder,S=be(o,t),c=S.byteOffset,s=S.vertexCount,u=S.featureCount,O=ye(t,c,g,s,v),j=O.attributes,_=O.byteOffset,P=ye(t,_,x,u,w),k=P.attributes,i=de(j,k);case 24:return T=ge(i.position,r),I=T.enuMatrix,M=T.cartographicOrigin,C=T.cartesianOrigin,D=(new W.a).multiplyRight(I),o.attributes={positions:i.position,normals:i.normal,colors:i.color,texCoords:i.uv0,featureIds:i.id,faceRange:i.faceRange},o.vertexCount=s,o.cartographicCenter=M,o.cartesianOrigin=C,o.modelMatrix=D.invert(),o.byteLength=t.byteLength,e.abrupt("return",r);case 33:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function de(e,t){return ie(ie({},e),t)}function he(e,t){for(var r=e.value.constructor,n=new r(t.length*e.size),a=0;a<t.length;a++){var o=t[a]*e.size;n.set(new r(e.value.buffer,o*e.value.BYTES_PER_ELEMENT,e.size),a*e.size)}return{size:e.size,value:n}}function me(e,t){var r=t.store.defaultGeometrySchema,n=r;for(var a in $)for(var o in Z){var i=r[a][o];if(i){var s=i.byteOffset,c=void 0===s?0:s,u=i.count,l=void 0===u?0:u,p=i.valueType,f=i.valuesPerElement;n[a][o]={valueType:p,valuesPerElement:f,byteOffset:c,count:l}}}return n.attributesOrder=r.ordering,n}function be(e,t){var r=0,n=0,a=0,o=e.featureData[X];for(var i in o){var s=o[i],c=s.property,u=s.type,l=Y[u];c===K&&(n=new l(t,0,4)[0],r+=te[u]),c===ee&&(a=new l(t,4,4)[0],r+=te[u])}return{vertexCount:n,featureCount:a,byteOffset:r}}function ye(e,t,r,n,a){for(var o,i={},s=ne(a);!(o=s()).done;){var c=o.value;if(r[c]){var u=r[c],l=u.valueType,p=u.valuesPerElement,f=n;if(t+f*p>e.byteLength)break;var d=new(0,Y[l])(e.slice(t),0,f*p);switch(i[c]={value:d,type:Q[l],size:p},c){case"color":i.color.normalized=!0}t+=f*p*te[l]}}return{attributes:i,byteOffset:t}}function ge(e,t){var r=t.mbs,n=e.value,a=new W.a,o=new x.a(r[0],r[1],r[2]),i=new x.a;return w.a.WGS84.cartographicToCartesian(o,i),w.a.WGS84.eastNorthUpToFixedFrame(i,a),e.value=function(e,t){for(var r=new Float64Array(e.length),n=0;n<r.length;n+=3)r[n]=e[n]+t.x,r[n+1]=e[n+1]+t.y,r[n+2]=e[n+2]+t.z;for(var a=0;a<r.length;a+=3)w.a.WGS84.cartographicToCartesian(r.subarray(a,a+3),se),r[a]=se.x,r[a+1]=se.y,r[a+2]=se.z;return r}(n,o),{enuMatrix:a,fixedFrameToENUMatrix:a.invert(),cartographicOrigin:o,cartesianOrigin:i}}var ve="undefined"!=typeof __VERSION__?__VERSION__:"latest",xe=/layers\/[0-9]+$/,we=/nodes\/([0-9-]+|root)$/;function Se(e,t,r){return Oe.apply(this,arguments)}function Oe(){return(Oe=Object(o.a)(a.a.mark((function e(t,r,n){var o,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=r.i3s.tile,i=r.i3s.tileset,o.content=o.content||{},e.next=5,ue(t,o,i,r);case 5:return e.abrupt("return",o.content);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function je(e,t,r){return _e.apply(this,arguments)}function _e(){return(_e=Object(o.a)(a.a.mark((function e(t,r,n){var o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=JSON.parse((new TextDecoder).decode(t))).loader=Te,e.next=4,z(o,r,n);case 4:return e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Pe(e,t,r){return ke.apply(this,arguments)}function ke(){return(ke=Object(o.a)(a.a.mark((function e(t,r,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse((new TextDecoder).decode(t)),e.abrupt("return",N(t,r,n));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Te={id:"i3s",name:"I3S 3D Tiles",version:ve,mimeTypes:["application/octet-stream"],parse:function(e,t,r,n){return Ie.apply(this,arguments)},extensions:["bin"],options:{i3s:{loadContent:!0,isTileset:"auto",isTileHeader:"auto",tile:null,tileset:null,dracoGeometryIndex:-1,useDracoGeometry:!1}}};function Ie(){return(Ie=Object(o.a)(a.a.mark((function e(t,r,n,o){var i,s,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n.url,r.i3s=r.i3s||{},s="auto"===r.i3s.isTileset?xe.test(i):r.i3s.isTileset,c="auto"===r.isTileHeader?we.test(i):r.i3s.isTileHeader,!s){e.next=10;break}return e.next=7,je(t,r,n);case 7:t=e.sent,e.next=23;break;case 10:if(!c){e.next=20;break}return e.next=13,Pe(t,r,n);case 13:if(t=e.sent,!r.i3s.loadContent){e.next=18;break}return r.i3s.tile=t,e.next=18,Object(g.a)(t.contentUrl,Te,r);case 18:e.next=23;break;case 20:return e.next=22,Se(t,r,n);case 22:t=e.sent;case 23:return e.abrupt("return",t);case 24:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Me=Te,Ce=r("J4mz");function De(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?De(Object(r),!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):De(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Ue={height:600,width:800,pitch:45,maxPitch:60,bearing:0,minZoom:2,maxZoom:30,zoom:14.5},Fe={"San Francisco":{name:"San Francisco",url:"https://tiles.arcgis.com/tiles/z2tnIkrLQ2BRzr6P/arcgis/rest/services/SanFrancisco_Bldgs/SceneServer/layers/0",viewport:Ee(Ee({},Ue),{},{longitude:-120,latitude:34})},"New York":{name:"New York",url:"https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/Buildings_NewYork_17/SceneServer/layers/0",viewport:Ee(Ee({},Ue),{},{longitude:-74,latitude:40})}},Ne=r("vOnD"),Ae={"Base Map: Satellite":"https://basemaps.cartocdn.com/gl/voyager-nolabels-gl-style/style.json","Base Map: Light":"https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json","Base Map: Dark":"https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json"},ze=Ae["Base Map: Dark"],Re=Ne.c.div.withConfig({displayName:"control-panel__Container",componentId:"sc-14q5t5u-0"})(["display:flex;flex-direction:column;position:absolute;top:0;right:0;width:300px;background:#fff;box-shadow:0 2px 4px rgba(0,0,0,0.3);padding:12px 18px;margin:20px;font-size:13px;line-height:2;outline:none;z-index:100;"]),We=Ne.c.select.withConfig({displayName:"control-panel__DropDown",componentId:"sc-14q5t5u-1"})(["margin-bottom:12px;"]),Le=Ne.c.select.withConfig({displayName:"control-panel__TilesetDropDown",componentId:"sc-14q5t5u-2"})(["margin-bottom:12px;font-weight:800;font-size:16px;"]),Ge=Ne.c.div.withConfig({displayName:"control-panel__FrameWrap",componentId:"sc-14q5t5u-3"})(["height:fit-content;padding:0;overflow:hidden;"]),Be=Ne.c.div.withConfig({displayName:"control-panel__FrameControl",componentId:"sc-14q5t5u-4"})(["margin:",";display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%;"],(function(e){return e.showFullInfo?"12px 0":0})),Ve=Ne.c.div.withConfig({displayName:"control-panel__FrameButton",componentId:"sc-14q5t5u-5"})(["display:flex;padding:6px 12px;color:white;background:rgb(52,152,219);align-items:center;height:20px;&:hover{background:rgb(0,152,219);cursor:pointer;}"]),qe=function(e){function t(t){var r;return(r=e.call(this,t)||this)._renderMapStyles=r._renderMapStyles.bind(Object(i.a)(r)),r.state={showFullInfo:!1},r}Object(s.a)(t,e);var r=t.prototype;return r._renderExamples=function(){var e=this,t=this.props,r=t.name,n=t.onExampleChange;return l.a.createElement(Le,{value:r,onChange:function(t){var r=t.target.value;e.setState({selected:r}),n(Fe[r])}},!r&&l.a.createElement("option",{key:"custom-example",value:"custom-example"},"Custom example"),Object.keys(Fe).map((function(e){var t=Fe[e];return l.a.createElement("option",{key:e,value:t.name},t.name)})))},r._renderMapStyles=function(){var e=this.props,t=e.mapStyles,r=void 0===t?Ae:t,n=e.selectedMapStyle,a=e.onMapStyleChange;return l.a.createElement(We,{value:n,onChange:function(e){var t=e.target.value;a({selectedMapStyle:t})}},Object.keys(r).map((function(e){return l.a.createElement("option",{key:e,value:r[e]},e)})))},r._renderInfo=function(){var e=this,t=this.props,r=t.metadata,n=t.token,a=this.state.showFullInfo;if(!r)return null;var o="https://www.arcgis.com/home/item.html?id="+r.serviceItemId;return n&&(o=o+"&token="+n),l.a.createElement(Ge,null,l.a.createElement("iframe",{id:"tileset-info",title:"tileset-info",style:{display:a?"inherit":"none",height:500,width:"99%",border:"1px solid rgba(200, 200, 200, 100)"},src:o}),l.a.createElement(Be,{showFullInfo:a},l.a.createElement(Ve,{onClick:function(){return e.setState({showFullInfo:!a})}},"Show ",a?"Less":"More"),l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:o},"Go to ArcGIS")))},r.render=function(){return l.a.createElement(Re,null,this._renderExamples(),this._renderMapStyles(),this._renderInfo(),this.props.children)},t}(u.PureComponent);function Je(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function He(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Je(Object(r),!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Je(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}qe.defaultProps={droppedFile:null,onChange:function(){}};var Ye={longitude:-120,latitude:34,height:600,width:800,pitch:45,maxPitch:60,bearing:0,minZoom:2,maxZoom:30,zoom:14.5},Qe={wordBreak:"break-word",position:"absolute",padding:12,zIndex:"10000",maxWidth:300,background:"#000",color:"#fff"};function Ze(e,t){var r=new URL(e),n=e.lastIndexOf("/layers/0"),a=e.substring(0,n),o=t&&t.token;return r.search&&(o=r.searchParams.get("token"),a=""+a+r.search),He(He({},t),{},{tilesetUrl:e,token:o,metadataUrl:a})}var $e=function(e){function t(t){var r;return(r=e.call(this,t)||this)._tilesetStatsWidget=null,r.state={url:null,token:null,name:"San Francisco",viewState:Ye,selectedMapStyle:ze},r._onSelectTileset=r._onSelectTileset.bind(Object(i.a)(r)),r}Object(s.a)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e;this._memWidget=new Ce.a(d.a.get("Memory Usage"),{framesPerUpdate:1,formatters:{"GPU Memory":"memory","Buffer Memory":"memory","Renderbuffer Memory":"memory","Texture Memory":"memory"},container:this._statsWidgetContainer}),this._tilesetStatsWidget=new Ce.a(null,{container:this._statsWidgetContainer});var t=new URL(window.location.href).searchParams.get("url");e=t?{url:t}:Fe["San Francisco"],this._onSelectTileset(e)},r._onSelectTileset=function(){var e=Object(o.a)(a.a.mark((function e(t){var r,n,o,i,s,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Ze(t.url,t),n=r.tilesetUrl,o=r.token,i=r.name,s=r.metadataUrl,this.setState({tilesetUrl:n,name:i,token:o}),e.next=5,fetch(s).then((function(e){return e.json()}));case 5:c=e.sent,this.setState({metadata:c});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),r._updateStatWidgets=function(){this._memWidget.update(),this._tilesetStatsWidget.update()},r._onTilesetLoad=function(e){var t=e.zoom,r=e.cartographicCenter,n=r[0],a=r[1],o=He(He({},this.state.viewState),{},{zoom:t+2.5,longitude:n,latitude:a});this.setState({tileset:e,viewState:He(He({},o),{},{transitionDuration:4e3,transitionInterpolator:new m.a})}),this._tilesetStatsWidget.setStats(e.stats)},r._onViewStateChange=function(e){var t=e.viewState;this.setState({viewState:t})},r._onSelectMapStyle=function(e){var t=e.selectedMapStyle;this.setState({selectedMapStyle:t})},r._renderLayers=function(){var e=this,t=this.state,r=t.tilesetUrl,n=t.token,a={throttleRequests:!0};return n&&(a.token=n),[new y.a({data:r,loader:Me,onTilesetLoad:this._onTilesetLoad.bind(this),onTileLoad:function(){return e._updateStatWidgets()},onTileUnload:function(){return e._updateStatWidgets()},loadOptions:a})]},r._renderStats=function(){var e=this;return l.a.createElement("div",{style:Qe,ref:function(t){return e._statsWidgetContainer=t}})},r._renderControlPanel=function(){var e=this.state,t=e.name,r=e.tileset,n=e.token,a=e.metadata,o=e.selectedMapStyle;return l.a.createElement(qe,{tileset:r,name:t,metadata:a,token:n,onExampleChange:this._onSelectTileset,onMapStyleChange:this._onSelectMapStyle.bind(this),selectedMapStyle:o})},r.render=function(){var e=this,t=this._renderLayers(),r=this.state,n=r.viewState,a=r.selectedMapStyle;return l.a.createElement("div",{style:{position:"relative",height:"100%"}},this._renderStats(),this._renderControlPanel(),l.a.createElement(h.a,{layers:t,viewState:n,onViewStateChange:this._onViewStateChange.bind(this),controller:{type:b.a,maxPitch:85},onAfterRender:function(){return e._updateStatWidgets()}},l.a.createElement(f.a,{mapStyle:a,preventStyleDiffing:!0})))},t}(u.PureComponent);function Xe(e){Object(p.render)(l.a.createElement($e,null),e)}}}]);