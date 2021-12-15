(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["produtos"],{"6a76":function(t,o,e){"use strict";e.r(o);var r=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12"}},[e("v-card",{attrs:{color:"green",dark:""}},[e("v-card-title",{staticClass:"text-h5"},[t._v(" Novo produto ")]),e("v-list-item",[e("v-row",[e("v-col",{attrs:{md:"4"}},[e("p",[t._v("Tipo")]),e("v-select",{attrs:{items:t.items,rules:[function(t){return!!t||"Item is required"}],required:""},model:{value:t.produto.tipo,callback:function(o){t.$set(t.produto,"tipo",o)},expression:"produto.tipo"}}),e("p",[t._v("Descrição")]),e("v-text-field",{attrs:{rules:t.descricaoRegra,label:"CocaCola",required:""},model:{value:t.produto.descricao,callback:function(o){t.$set(t.produto,"descricao",o)},expression:"produto.descricao"}}),e("p",[t._v("Preço")]),e("v-text-field",{attrs:{rules:t.precoRegra,label:"ex: 1,00",required:""},model:{value:t.produto.valor,callback:function(o){t.$set(t.produto,"valor",o)},expression:"produto.valor"}})],1)],1)],1),e("v-card-actions",[e("v-btn",{attrs:{color:"blue"},on:{click:t.save}},[t._v("Salvar")])],1)],1)],1)],1),t._l(t.produtos,(function(t){return e("produtos",{key:t.id,attrs:{produtos:t}})}))],2)},a=[],s=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-container",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12"}},[e("v-card",{staticClass:"mx-auto my-12",attrs:{"max-width":"374"}},[e("template",{slot:"progress"}),e("v-card-title",[e("span",{staticClass:"text-h6 font-weight-heavy"},[t._v(t._s(t.produtos.descricao)+" ")])]),e("v-divider"),e("v-card-text",{staticClass:"text-h6"},[e("strong",[t._v("R$"+t._s(t.produtos.valor))]),e("v-card-actions",[e("v-btn",{attrs:{color:"error"},on:{click:t.deleta}},[t._v("Deletar")])],1)],1)],2)],1)],1)],1)},i=[],n=e("bc3a").default,c=e("3d20"),l={name:"Produtos",props:{produtos:{type:Object[Array],required:!0}},data:function(){return{show:!0}},methods:{deleta:function(){var t=this;c.fire({title:"Voce quer mesmo finalizar a conta?",text:"apos finalizar não tera como voltar.",icon:"warning",showDenyButton:!0,confirmButtonText:"Sim",denyButtonText:"Não"}).then((function(o){o.isConfirmed?(n.post("http://localhost:8080/deletaProduto/"+t.produtos.id),c.fire({title:"Finalizado!",text:"O pedido foi finalizado com sucesso",icon:"success"}).then((function(o){o.isConfirmed&&(t.show=!1)}))):o.isDenied&&c.fire("O pedido não foi excluido","","info")}))}}},d=l,u=e("2877"),p=e("6544"),v=e.n(p),f=e("8336"),h=e("b0af"),m=e("99d9"),x=e("62ad"),w=e("a523"),b=e("ce7e"),C=e("0fd9"),V=Object(u["a"])(d,s,i,!1,null,null,null),_=V.exports;v()(V,{VBtn:f["a"],VCard:h["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:m["c"],VCol:x["a"],VContainer:w["a"],VDivider:b["a"],VRow:C["a"]});var g=e("bc3a").default,k=e("3d20"),q=(e("8c4f"),{components:{produtos:_},data:function(){return{items:["Refrigerante","Bebida Alcolica","Pizza","Entrada"],produto:{descricao:null,tipo:null,valor:null},produtos:[],descricaoRegra:[function(t){return!!t||"Descrição é requerido"}],precoRegra:[function(t){return!!t||"Preço é requerido"}]}},methods:{save:function(){var t=this;null!=this.produto.descricao&&null!=this.produto.tipo&&null!=this.produto.valor&&(g.post("http://localhost:8080/cadastrarProduto",this.produto),k.fire({title:"Salvo!",text:"Seu produto foi salvo com sucesso",icon:"success"}).then((function(o){o.isConfirmed&&t.load()})))},load:function(){var t=this;g.get("http://localhost:8080/listarProduto").then((function(o){return t.produtos=o.data}))}},mounted:function(){this.load()}}),R=q,y=e("da13"),P=e("b974"),T=e("8654"),z=Object(u["a"])(R,r,a,!1,null,null,null);o["default"]=z.exports;v()(z,{VBtn:f["a"],VCard:h["a"],VCardActions:m["a"],VCardTitle:m["c"],VCol:x["a"],VListItem:y["a"],VRow:C["a"],VSelect:P["a"],VTextField:T["a"]})}}]);
//# sourceMappingURL=produtos.7dac5b3d.js.map