/*
 *  /MathJax/jax/output/HTML-CSS/autoload/mtable.js
 *  
 *  Copyright (c) 2010 Design Science, Inc.
 *
 *  Part of the MathJax library.
 *  See http://www.mathjax.org for details.
 * 
 *  Licensed under the Apache License, Version 2.0;
 *  you may not use this file except in compliance with the License.
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 */

MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready",function(){var c="2.0";var a=MathJax.ElementJax.mml,b=MathJax.OutputJax["HTML-CSS"];a.mtable.Augment({toHTML:function(r){r=this.HTMLcreateSpan(r);if(this.data.length===0){return r}var G=this.getValues("columnalign","rowalign","columnspacing","rowspacing","columnwidth","equalcolumns","equalrows","columnlines","rowlines","frame","framespacing","align","useHeight","width","side","minlabelspacing");var aF=G.width.match(/%$/);var av=b.createStack(r);var aC=this.HTMLgetScale(),ax=this.HTMLgetMu(r),ay=-1;var ao=[],ar=[],ai=[],au=[],at=[],ad,ac,an=-1,ab,am,V,aB,aJ=[];var aj=b.FONTDATA.baselineskip*aC*G.useHeight,E=b.FONTDATA.lineH*aC,L=b.FONTDATA.lineD*aC;for(ad=0,ab=this.data.length;ad<ab;ad++){aB=this.data[ad];V=(aB.type==="mlabeledtr"?ay:0);au[ad]=[];ao[ad]=ar[ad]=0;for(ac=V,am=aB.data.length+V;ac<am;ac++){if(ai[ac]==null){if(ac>an){an=ac}at[ac]=b.createStack(b.createBox(av));ai[ac]=-b.BIGDIMEN}au[ad][ac]=b.createBox(at[ac]);aJ.push(aB.data[ac-V].toHTML(au[ad][ac]))}}b.MeasureSpans(aJ);for(ad=0,ab=this.data.length;ad<ab;ad++){aB=this.data[ad];V=(aB.type==="mlabeledtr"?ay:0);for(ac=V,am=aB.data.length+V;ac<am;ac++){if(aB.data[ac-V].isMultiline){au[ad][ac].style.width="100%"}if(au[ad][ac].bbox.h>ao[ad]){ao[ad]=au[ad][ac].bbox.h}if(au[ad][ac].bbox.d>ar[ad]){ar[ad]=au[ad][ac].bbox.d}if(au[ad][ac].bbox.w>ai[ac]){ai[ac]=au[ad][ac].bbox.w}}}if(ao[0]+ar[0]){ao[0]=Math.max(ao[0],E)}if(ao[au.length-1]+ar[au.length-1]){ar[au.length-1]=Math.max(ar[au.length-1],L)}var aw=G.columnspacing.split(/ /),aL=G.rowspacing.split(/ /),e=G.columnalign.split(/ /),z=G.rowalign.split(/ /),d=G.columnlines.split(/ /),v=G.rowlines.split(/ /),aH=G.columnwidth.split(/ /),T=[];for(ad=0,ab=aw.length;ad<ab;ad++){aw[ad]=b.length2em(aw[ad],ax)}for(ad=0,ab=aL.length;ad<ab;ad++){aL[ad]=b.length2em(aL[ad],ax)}while(aw.length<an){aw.push(aw[aw.length-1])}while(e.length<=an){e.push(e[e.length-1])}while(d.length<an){d.push(d[d.length-1])}while(aH.length<=an){aH.push(aH[aH.length-1])}while(aL.length<au.length){aL.push(aL[aL.length-1])}while(z.length<=au.length){z.push(z[z.length-1])}while(v.length<au.length){v.push(v[v.length-1])}if(at[ay]){e[ay]=(G.side.substr(0,1)==="l"?"left":"right");aw[ay]=-ai[ay]}for(ad=0,ab=au.length;ad<ab;ad++){aB=this.data[ad];T[ad]=[];if(aB.rowalign){z[ad]=aB.rowalign}if(aB.columnalign){T[ad]=aB.columnalign.split(/ /);while(T[ad].length<=an){T[ad].push(T[ad][T[ad].length-1])}}}if(G.equalrows){var aA=Math.max.apply(Math,ao),U=Math.max.apply(Math,ar);for(ad=0,ab=au.length;ad<ab;ad++){V=((aA+U)-(ao[ad]+ar[ad]))/2;ao[ad]+=V;ar[ad]+=V}}var aN=ao[0]+ar[au.length-1];for(ad=0,ab=au.length-1;ad<ab;ad++){aN+=Math.max((ao[ad]+ar[ad]?aj:0),ar[ad]+ao[ad+1]+aL[ad])}var aE=0,aD=0,aP,g=aN;if(G.frame!=="none"||(G.columnlines+G.rowlines).match(/solid|dashed/)){aE=b.length2em(G.framespacing.split(/[, ]+/)[0],ax);aD=b.length2em(G.framespacing.split(/[, ]+/)[1],ax);g=aN+2*aD}var ah,aO,Z="";if(typeof(G.align)!=="string"){G.align=String(G.align)}if(G.align.match(/(top|bottom|center|baseline|axis)( +(-?\d+))?/)){Z=RegExp.$3;G.align=RegExp.$1}else{G.align=this.defaults.align}if(Z!==""){Z=parseInt(Z);if(Z<0){Z=au.length+1+Z}if(Z<1){Z=1}else{if(Z>au.length){Z=au.length}}ah=0;aO=-(aN+aD)+ao[0];for(ad=0,ab=Z-1;ad<ab;ad++){var K=Math.max((ao[ad]+ar[ad]?aj:0),ar[ad]+ao[ad+1]+aL[ad]);ah+=K;aO+=K}}else{ah=({top:-(ao[0]+aD),bottom:aN+aD-ao[0],center:aN/2-ao[0],baseline:aN/2-ao[0],axis:aN/2+b.TeX.axis_height*aC-ao[0]})[G.align];aO=({top:-(aN+2*aD),bottom:0,center:-(aN/2+aD),baseline:-(aN/2+aD),axis:b.TeX.axis_height*aC-aN/2-aD})[G.align]}var aa,ae=0,w=0,I=0,X=0,af=0,al=[],aq=[],Q=1;if(G.equalcolumns&&G.width!=="auto"){if(aF){aa=(100/(an+1)).toFixed(2).replace(/\.?0+$/,"")+"%";for(ad=0,ab=Math.min(an+1,aH.length);ad<ab;ad++){aH[ad]=aa}aa=0;ae=1;af=an+1;for(ad=0,ab=Math.min(an+1,aw.length);ad<ab;ad++){aa+=aw[ad]}}else{aa=b.length2em(G.width,ax);for(ad=0,ab=Math.min(an+1,aw.length);ad<ab;ad++){aa-=aw[ad]}aa/=an+1;for(ad=0,ab=Math.min(an+1,aH.length);ad<ab;ad++){ai[ad]=aa}}}else{for(ad=0,ab=Math.min(an+1,aH.length);ad<ab;ad++){if(aH[ad]==="auto"){w+=ai[ad]}else{if(aH[ad]==="fit"){aq[af]=ad;af++;w+=ai[ad]}else{if(aH[ad].match(/%$/)){al[X]=ad;X++;I+=ai[ad];ae+=b.length2em(aH[ad],ax,1)}else{ai[ad]=b.length2em(aH[ad],ax);w+=ai[ad]}}}}if(aF){aa=0;for(ad=0,ab=Math.min(an,aw.length);ad<ab;ad++){aa+=aw[ad]}if(ae>0.98){Q=0.98/ae;ae=0.98}}else{if(G.width==="auto"){if(ae>0.98){Q=I/(w+I);aa=w+I}else{aa=w/(1-ae)}}else{aa=b.length2em(G.width,ax);for(ad=0,ab=Math.min(an+1,aw.length);ad<ab;ad++){aa-=aw[ad]}}for(ad=0,ab=al.length;ad<ab;ad++){ai[al[ad]]=b.length2em(aH[al[ad]],ax,aa*Q);w+=ai[al[ad]]}if(Math.abs(aa-w)>0.01){if(af&&aa>w){aa=(aa-w)/af;for(ad=0,ab=aq.length;ad<ab;ad++){ai[aq[ad]]+=aa}}else{aa=aa/w;for(ac=0;ac<=an;ac++){ai[ac]*=aa}}}if(G.equalcolumns){var N=Math.max.apply(Math,ai);for(ac=0;ac<=an;ac++){ai[ac]=N}}}}var R=ah,o,q,aM;V=(at[ay]?ay:0);for(ac=V;ac<=an;ac++){for(ad=0,ab=au.length;ad<ab;ad++){if(au[ad][ac]){V=(this.data[ad].type==="mlabeledtr"?ay:0);var O=this.data[ad].data[ac-V];if(O.HTMLcanStretch("Horizontal")){au[ad][ac].bbox=O.HTMLstretchH(at[ac],ai[ac]).bbox}else{if(O.HTMLcanStretch("Vertical")){var az=O.CoreMO();var aG=az.symmetric;az.symmetric=false;au[ad][ac].bbox=O.HTMLstretchV(at[ac],ao[ad],ar[ad]).bbox;az.symmetric=aG}}aM=O.rowalign||this.data[ad].rowalign||z[ad];o=({top:ao[ad]-au[ad][ac].bbox.h,bottom:au[ad][ac].bbox.d-ar[ad],center:((ao[ad]-ar[ad])-(au[ad][ac].bbox.h-au[ad][ac].bbox.d))/2,baseline:0,axis:0})[aM];aM=(O.columnalign||T[ad][ac]||e[ac]);b.alignBox(au[ad][ac],aM,R+o)}if(ad<au.length-1){R-=Math.max((ao[ad]+ar[ad]?aj:0),ar[ad]+ao[ad+1]+aL[ad])}}R=ah}if(aF){var B=b.createBox(av);B.style.left=B.style.top=0;B.style.right=b.Em(aa+2*aE);B.style.display="inline-block";B.style.height="0px";if(b.msieRelativeWidthBug){B=b.createBox(B);B.style.position="relative";B.style.height="1em";B.style.width="100%";B.bbox=av.bbox}var aK=0,aQ=aE,k,l;if(af){k=100*(1-ae)/af,l=w/af}else{k=100*(1-ae)/(an+1);l=w/(an+1)}for(ac=0;ac<=an;ac++){b.placeBox(at[ac].parentNode,0,0);at[ac].style.position="relative";at[ac].style.left=b.Em(aQ);at[ac].style.width="100%";at[ac].parentNode.parentNode.removeChild(at[ac].parentNode);var ak=b.createBox(B);b.addBox(ak,at[ac]);at[ac]=ak;var h=ak.style;h.display="inline-block";h.left=aK+"%";if(aH[ac].match(/%$/)){var t=parseFloat(aH[ac])*Q;if(af===0){h.width=(k+t)+"%";aK+=k+t;ak=b.createBox(ak);b.addBox(ak,at[ac].firstChild);ak.style.left=0;ak.style.right=b.Em(l);aQ-=l}else{h.width=t+"%";aK+=t}}else{if(aH[ac]==="fit"||af===0){h.width=k+"%";ak=b.createBox(ak);b.addBox(ak,at[ac].firstChild);ak.style.left=0;ak.style.right=b.Em(l-ai[ac]);aQ+=ai[ac]-l;aK+=k}else{h.width=b.Em(ai[ac]);aQ+=ai[ac]}}if(b.msieRelativeWidthBug){b.addText(ak.firstChild,b.NBSP);ak.firstChild.style.position="relative"}aQ+=aw[ac];if(d[ac]!=="none"&&ac<an&&ac!==ay){q=b.createBox(B);q.style.left=aK+"%";q=b.createRule(q,g,0,1.25/b.em);q.style.position="absolute";q.bbox={h:g,d:0,w:0,rw:1.25/b.em,lw:0};q.parentNode.bbox=av.bbox;b.placeBox(q,aQ-aw[ac]/2,aO,true);q.style.borderStyle=d[ac]}}}else{var S=aE;for(ac=0;ac<=an;ac++){if(!at[ac].bbox.width){b.setStackWidth(at[ac],ai[ac])}if(aH[ac]!=="auto"&&aH[ac]!=="fit"){at[ac].bbox.width=ai[ac];at[ac].bbox.isFixed=true}b.placeBox(at[ac].parentNode,S,0);S+=ai[ac]+aw[ac];if(d[ac]!=="none"&&ac<an&&ac!==ay){q=b.createRule(av,g,0,1.25/b.em);b.addBox(av,q);q.bbox={h:g,d:0,w:0,rw:1.25/b.em,lw:0};b.placeBox(q,S-aw[ac]/2,aO,true);q.style.borderStyle=d[ac]}}}av.bbox.d=-aO;av.bbox.h=g+aO;b.setStackWidth(av,av.bbox.w+aE);aP=av.bbox.w;var ag;if(G.frame!=="none"){ag=b.createFrame(av,g,0,aP,1.25/b.em,G.frame);b.addBox(av,ag);b.placeBox(ag,0,aO,true);if(aF){ag.style.width="100%"}}R=ah;for(ad=0,ab=au.length-1;ad<ab;ad++){o=Math.max(aj,ar[ad]+ao[ad+1]+aL[ad]);if(v[ad]!=="none"){q=b.createRule(av,1.25/b.em,0,aP);b.addBox(av,q);q.bbox={h:1.25/b.em,d:0,w:aP,rw:aP,lw:0};b.placeBox(q,0,R-ar[ad]-(o-ar[ad]-ao[ad+1])/2,true);if(v[ad]==="dashed"||aF){q.style.borderTop=q.style.height+" "+v[ad];q.style.height=0;q.style.width=q.style.borderLeftWidth;q.style.borderLeft="";if(aF){q.style.width="100%"}}}R-=o}if(aF){r.bbox.width=G.width;av.style.width="100%"}if(at[ay]){var ap=this.getValues("indentalignfirst","indentshiftfirst","indentalign","indentshift");if(ap.indentalignfirst!==a.INDENTALIGN.INDENTALIGN){ap.indentalign=ap.indentalignfirst}if(ap.indentalign===a.INDENTALIGN.AUTO){ap.indentalign=this.displayAlign}if(ap.indentshiftfirst!==a.INDENTSHIFT.INDENTSHIFT){ap.indentshift=ap.indentshiftfirst}if(ap.indentshift==="auto"){ap.indentshift=this.displayIndent}var aI=b.createStack(r,false,"100%");b.addBox(aI,av);b.alignBox(av,ap.indentalign,0);if(ap.indentshift&&ap.indentalign!==a.INDENTALIGN.CENTER){av.style[{left:"Left",right:"Right"}[ap.indentalign]]=b.Em(b.length2em(ap.indentshift,ax))}at[ay].parentNode.parentNode.removeChild(at[ay].parentNode);b.addBox(aI,at[ay]);b.alignBox(at[ay],e[ay],0);if(b.msieRelativeWidthBug){av.style.top=at[ay].style.top=""}if(aF){av.style.width=G.width;r.bbox.width="100%"}at[ay].style.marginRight=at[ay].style.marginLeft=b.Em(b.length2em(G.minlabelspacing,ax))}if(!aF){this.HTMLhandleSpace(r)}var u=this.HTMLhandleColor(r);if(u&&aF){if(!ag){ag=b.createFrame(av,g,0,aP,0,"none");b.addBox(av,ag);b.placeBox(ag,0,aO,true);ag.style.width="100%"}ag.style.backgroundColor=u.style.backgroundColor;ag.parentNode.insertBefore(ag,ag.parentNode.firstChild);u.parentNode.removeChild(u)}return r},HTMLhandleSpace:function(d){d.bbox.keepPadding=true;d.bbox.exact=true;if(!this.hasFrame){d.style.paddingLeft=d.style.paddingRight=".1667em"}this.SUPER(arguments).HTMLhandleSpace.call(this,d)}});a.mtd.Augment({toHTML:function(e,d,g){e=this.HTMLcreateSpan(e);if(this.data[0]){var f=this.data[0].toHTML(e);if(g!=null){f=this.data[0].HTMLstretchV(e,d,g)}else{if(d!=null){f=this.data[0].HTMLstretchH(e,d)}}e.bbox=f.bbox}this.HTMLhandleSpace(e);this.HTMLhandleColor(e);return e},HTMLstretchH:a.mbase.HTMLstretchH,HTMLstretchV:a.mbase.HTMLstretchV});MathJax.Hub.Startup.signal.Post("HTML-CSS mtable Ready");MathJax.Ajax.loadComplete(b.autoloadDir+"/mtable.js")});

