(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{303:function(t,e,o){t.exports=o.p+"img/background-modal.9710ba7.png"},310:function(t,e,o){"use strict";o.r(e);o(13),o(11),o(9),o(14),o(10),o(15);var n=o(3),r=(o(23),o(33),o(25),o(60));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={components:{BIconStarFill:o(0).su},computed:l(l({},Object(r.c)("pokemon",["pokemon","pokemons","showModalPokemon"])),{},{showModal:{get:function(){return this.showModalPokemon},set:function(t){return t}},urlImageItem:{get:function(){var t,e,o;return null===(t=this.pokemon)||void 0===t||null===(e=t.sprites)||void 0===e||null===(o=e.other["official-artwork"])||void 0===o?void 0:o.front_default},set:function(t){return t}}}),methods:l(l({},Object(r.b)("pokemon",["setShowModalPokemon","setPokemons","setPokemon"])),{},{resetModal:function(){this.setShowModalPokemon(!1)},getTypes:function(t){return t.reduce((function(e,o,n){return e.concat(o.type.name,n===t.length-1?"":", ")}),"")},check:function(t){var e=this.pokemons.results.map((function(e){return e.name===t.name&&(e.favorite=!e.favorite),e}));this.setPokemon(l(l({},t),{},{favorite:!t.favorite}));var o=l(l({},this.pokemons),{},{results:e});this.setPokemons(o)},copy:function(t){var e="Name: ".concat(t.name),o="Weight: ".concat(t.weight),n="Height: ".concat(t.height),r="Types: ".concat(this.getTypes(t.types)),text=e.concat(", ",o,", ",n,", ",r,".");navigator.clipboard.writeText(text),this.$bvToast.toast(text,{title:"Texto copiado en el portapapeles",variant:"success",solid:!0})}})},v=o(73),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-pokemon"},[n("b-modal",{attrs:{scrollable:"",centered:""},on:{hidden:t.resetModal},model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}},[n("div",{staticClass:"text-center"},[n("img",{staticClass:"image-background-modal",attrs:{src:o(303)}}),t._v(" "),n("img",{staticClass:"image-pokemon-modal",attrs:{src:t.urlImageItem}})]),t._v(" "),n("div",{staticClass:"data content-name"},[n("h3",[t._v("Name:")]),t._v(" "),n("p",[t._v(" "+t._s(t.pokemon.name)+" ")])]),t._v(" "),n("div",{staticClass:"data content-name"},[n("h3",[t._v("Weight:")]),t._v(" "),n("p",[t._v(" "+t._s(t.pokemon.weight)+" ")])]),t._v(" "),n("div",{staticClass:"data content-name"},[n("h3",[t._v("Height:")]),t._v(" "),n("p",[t._v(" "+t._s(t.pokemon.height)+" ")])]),t._v(" "),t.pokemon&&t.pokemon.types?n("div",{staticClass:"data content-name"},[n("h3",[t._v("Types:")]),t._v(" "),n("p",[t._v(" "+t._s(t.getTypes(t.pokemon.types))+" ")])]):t._e(),t._v(" "),n("div",{staticClass:"data btn-share"},[n("b-button",{staticClass:"my-sm-0",attrs:{pill:"",variant:"danger"},on:{click:function(e){return t.copy(t.pokemon)}}},[t._v("\n          Share to my friends\n        ")]),t._v(" "),n("p",{on:{click:function(e){return t.check(t.pokemon)}}},[n("b-icon-star-fill",{class:t.pokemon.favorite?"icon-star-list check":"icon-star-list"})],1)],1)])],1)}),[],!1,null,null,null);e.default=component.exports}}]);