(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"/WnK":function(t,e,r){"use strict";function a(t){if(!t||!t.POSITION)return null;var e=1/0,r=1/0,a=1/0,n=-1/0,o=-1/0,i=-1/0,c=t.POSITION.value,s=c&&c.length;if(!s)return null;for(var u=0;u<s;u+=3){var d=c[u],p=c[u+1],f=c[u+2];e=d<e?d:e,r=p<r?p:r,a=f<a?f:a,n=d>n?d:n,o=p>o?p:o,i=f>i?f:i}return[[e,r,a],[n,o,i]]}r.d(e,"a",(function(){return a}))},"1Nab":function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var a=r("o0o1"),n=r.n(a),o=(r("wcNg"),r("HaE+")),i=r("rePB"),c=r("cUFQ"),s=r("iq2z"),u=r("/WnK"),d=0,p=1,f={POSITION:"POSITION",NORMAL:"NORMAL",COLOR:"COLOR_0",TEX_COORD:"TEXCOORD_0"},y={1:Int8Array,2:Uint8Array,3:Int16Array,4:Uint16Array,5:Int32Array,6:Uint32Array,9:Float32Array},h=function(){function t(t){this.draco=t,this.drawMode="TRIANGLE",this.metadataQuerier={}}var e=t.prototype;return e.destroy=function(){},e.parseSync=function(t,e){void 0===e&&(e={}),this.metadataQuerier=new this.draco.MetadataQuerier;var r=new this.draco.DecoderBuffer;r.Init(new Int8Array(t),t.byteLength);var a,n,o,i=new this.draco.Decoder,c={};try{var s=i.GetEncodedGeometryType(r);switch(s){case this.draco.TRIANGULAR_MESH:n=new this.draco.Mesh,a=i.DecodeBufferToMesh(r,n),o={type:d,faceCount:n.num_faces(),attributeCount:n.num_attributes(),vertexCount:n.num_points()};break;case this.draco.POINT_CLOUD:n=new this.draco.PointCloud,a=i.DecodeBufferToPointCloud(r,n),o={type:p,attributeCount:n.num_attributes(),vertexCount:n.num_points()};break;default:throw new Error("Unknown DRACO geometry type.")}if(!a.ok()||!n.ptr){var f="DRACO decompression failed: "+a.error_msg();throw n&&this.draco.destroy(n),new Error(f)}c.loaderData={header:o},this._extractDRACOGeometry(i,n,s,c,e);var y=this._getGeometryMetadata(i,n);c.header={vertexCount:o.vertexCount,boundingBox:Object(u.a)(c.attributes),metadata:y}}finally{this.draco.destroy(i),this.draco.destroy(r),this.draco.destroy(n),this.draco.destroy(this.metadataQuerier)}return c},e._extractDRACOGeometry=function(t,e,r,a,n){var o=this._getAttributes(t,e,n);if(!o.POSITION)throw new Error("DRACO decompressor: No position attribute found.");return r===this.draco.TRIANGULAR_MESH?(o.indices="TRIANGLE_STRIP"===this.drawMode?this._getMeshStripIndices(t,e):this._getMeshFaceIndices(t,e),a.mode="TRIANGLE_STRIP"===this.drawMode?5:4):a.mode=0,o.indices&&(a.indices={value:o.indices,size:1},delete o.indices),a.attributes=o,a},e.getPositionAttributeMetadata=function(t){this.metadata=this.metadata||{},this.metadata.attributes=this.metadata.attributes||{};var e=new this.draco.AttributeQuantizationTransform;if(e.InitFromAttribute(t)){this.metadata.attributes.position.isQuantized=!0,this.metadata.attributes.position.maxRange=e.range(),this.metadata.attributes.position.numQuantizationBits=e.quantization_bits(),this.metadata.attributes.position.minValues=new Float32Array(3);for(var r=0;r<3;++r)this.metadata.attributes.position.minValues[r]=e.min_value(r)}this.draco.destroy(e)},e._getAttributes=function(t,e,r){for(var a={},n=e.num_points(),o=0;o<e.num_attributes();o++){var i=t.GetAttribute(e,o),c=this._getAttributeMetadata(t,e,o),s={uniqueId:i.unique_id(),attributeType:i.attribute_type(),dataType:y[i.data_type()],size:i.size(),numComponents:i.num_components(),byteOffset:i.byte_offset(),byteStride:i.byte_stride(),normalized:i.normalized(),metadata:c},u=this._deduceAttributeName(s,r),d=this._getAttributeTypedArray(t,e,i,u).typedArray;a[u]={value:d,size:d.length/n,metadata:c}}return a},e._getMeshFaceIndices=function(t,e){var r=3*e.num_faces(),a=4*r,n=this.draco._malloc(a);t.GetTrianglesUInt32Array(e,a,n);var o=new Uint32Array(this.draco.HEAPF32.buffer,n,r).slice();return this.draco._free(n),o},e._getMeshStripIndices=function(t,e){var r=new this.draco.DracoInt32Array;t.GetTriangleStripsFromMesh(e,r);for(var a=new Uint32Array(r.size()),n=0;n<r.size();++n)a[n]=r.GetValue(n);return this.draco.destroy(r),a},e._getAttributeTypedArray=function(t,e,r,a){if(0===r.ptr)throw new Error("DRACO decode bad attribute "+a);var n=y[r.data_type()],o=r.num_components(),i=e.num_points()*o,c=i*n.BYTES_PER_ELEMENT,s=this._getDracoDataType(n),u=this.draco._malloc(c);t.GetAttributeDataArrayForAllPoints(e,r,s,c,u);var d=new n(this.draco.HEAPF32.buffer,u,i).slice();return this.draco._free(u),{typedArray:d,components:o}},e._getDracoDataType=function(t){switch(t){case Float32Array:return this.draco.DT_FLOAT32;case Int8Array:return this.draco.DT_INT8;case Int16Array:return this.draco.DT_INT16;case Int32Array:return this.draco.DT_INT32;case Uint8Array:return this.draco.DT_UINT8;case Uint16Array:return this.draco.DT_UINT16;case Uint32Array:return this.draco.DT_UINT32;default:return this.draco.DT_INVALID}},e._deduceAttributeName=function(t,e){var r=e.extraAttributes,a=void 0===r?{}:r;if(a&&"object"==typeof a)for(var n=0,o=Object.entries(a);n<o.length;n++){var i=o[n],c=i[0];if(i[1]===t.uniqueId)return c}for(var s in f){var u=this.draco[s];if(t.attributeType===u)return f[s]}if(t.metadata){var d=e.attributeNameEntry||"name";if(t.metadata[d])return t.metadata[d].string}return"CUSTOM_ATTRIBUTE_"+t.uniqueId},e._getGeometryMetadata=function(t,e){var r=t.GetMetadata(e);return this._queryDracoMetadata(r)},e._getAttributeMetadata=function(t,e,r){var a=t.GetAttributeMetadata(e,r);return this._queryDracoMetadata(a)},e._queryDracoMetadata=function(t){if(!t||!t.ptr)return{};for(var e={},r=this.metadataQuerier.NumEntries(t),a=new this.draco.DracoInt32Array,n=0;n<r;n++){var o=this.metadataQuerier.GetEntryName(t,n);this.metadataQuerier.GetIntEntryArray(t,o,a);for(var i=a.size(),c=new Int32Array(i),s=0;s<i;s++)c[s]=a.GetValue(s);e[o]={int:this.metadataQuerier.GetIntEntry(t,o),string:this.metadataQuerier.GetStringEntry(t,o),double:this.metadataQuerier.GetDoubleEntry(t,o),intArray:c}}return this.draco.destroy(a),e},e.decode=function(t,e){return this.parseSync(t,e)},t}();function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach((function(e){Object(i.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l=m(m({},{name:"Draco",id:"draco",module:"draco",version:c.a,worker:!0,extensions:["drc"],mimeTypes:["application/octet-stream"],binary:!0,tests:["DRACO"],options:{draco:{decoderType:"object"==typeof WebAssembly?"wasm":"js",libraryPath:"libs/",extraAttributes:{}}}}),{},{parse:function(t,e,r,a){return O.apply(this,arguments)}});function O(){return(O=Object(o.a)(n.a.mark((function t(e,r,a,o){var i,c,u;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.a)(r);case 2:return i=t.sent,c=i.draco,u=new h(c),t.prev=5,t.abrupt("return",u.parseSync(e,m({extraAttributes:r.draco&&r.draco.extraAttributes||null},r.parseOptions||{})));case 7:return t.prev=7,u.destroy(),t.finish(7);case 10:case"end":return t.stop()}}),t,null,[[5,,7,10]])})))).apply(this,arguments)}},cUFQ:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var a="undefined"!=typeof __VERSION__?__VERSION__:"latest"},iq2z:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return v}));var a=r("o0o1"),n=r.n(a),o=(r("wcNg"),r("rePB")),i=r("HaE+"),c=r("aiNV"),s=r("1UZV");function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var p,f,y="https://www.gstatic.com/draco/versioned/decoders/1.4.1/draco_decoder.js",h="https://www.gstatic.com/draco/versioned/decoders/1.4.1/draco_wasm_wrapper.js",b="https://www.gstatic.com/draco/versioned/decoders/1.4.1/draco_decoder.wasm",m="https://raw.githubusercontent.com/google/draco/1.4.1/javascript/draco_encoder.js";function l(t){return O.apply(this,arguments)}function O(){return(O=Object(i.a)(n.a.mark((function t(e){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.modules||{},p=r.draco3d?p||r.draco3d.createDecoderModule({}).then((function(t){return{draco:t}})):p||_(e),t.next=4,p;case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return w.apply(this,arguments)}function w(){return(w=Object(i.a)(n.a.mark((function t(e){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.modules||{},f=r.draco3d?f||r.draco3d.createEncoderModule({}).then((function(t){return{draco:t}})):f||T(e),t.next=4,f;case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t){return A.apply(this,arguments)}function A(){return(A=Object(i.a)(n.a.mark((function t(e){var r,a,o;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=e.draco&&e.draco.decoderType,t.next="js"===t.t0?3:(t.t0,7);break;case 3:return t.next=5,Object(c.a)(y,"draco",e);case 5:return r=t.sent,t.abrupt("break",20);case 7:return t.t1=Promise,t.next=10,Object(c.a)(h,"draco",e);case 10:return t.t2=t.sent,t.next=13,Object(c.a)(b,"draco",e);case 13:return t.t3=t.sent,t.t4=[t.t2,t.t3],t.next=17,t.t1.all.call(t.t1,t.t4);case 17:o=t.sent,r=o[0],a=o[1];case 20:return r=r||s.a.DracoDecoderModule,t.next=23,g(r,a);case 23:return t.abrupt("return",t.sent);case 24:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t,e){var r={};return e&&(r.wasmBinary=e),new Promise((function(e){t(d(d({},r),{},{onModuleLoaded:function(t){return e({draco:t})}}))}))}function T(t){return I.apply(this,arguments)}function I(){return(I=Object(i.a)(n.a.mark((function t(e){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.a)(m,"draco",e);case 2:return r=(r=t.sent)||s.a.DracoEncoderModule,t.abrupt("return",new Promise((function(t){r({onModuleLoaded:function(e){return t({draco:e})}})})));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},kHIg:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var a=r("foSv"),n=r("s4An");var o=r("RHh3");function i(t){var e="function"==typeof Map?new Map:void 0;return(i=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,i)}function i(){return Object(o.a)(t,arguments,Object(a.a)(this).constructor)}return i.prototype=Object.create(t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),Object(n.a)(i,t)})(t)}}}]);