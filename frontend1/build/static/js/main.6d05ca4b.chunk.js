(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){e.exports=a(52)},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},50:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(21),c=a.n(l),s=(a(44),a(32)),i=(a(45),a(46),a(47),a(68)),r=a(2),d=a(6),m=["Covid Dataset","Credit Card Fraud Detection","\tEuropean Soccer Database","Red Wine Quality","Titanic","Medical Cost Personal Dataset","MNIST","MS-COCO","ImageNet","VisualQA","SVHN","CIFAR-10","Fashion-MNIST","IMDB-Reviews","WordNet","Music Archive","Libri Speech","VoxCeleb","IMDB-Wiki","Google Books N-grams","TIMIT"];function u(){Object(r.f)();var e=m.map(function(e,t){return o.a.createElement(i.a,{item:!0,lg:4,sm:6,xs:12,container:!0,spacing:0},o.a.createElement("div",{className:"featuredItem"},o.a.createElement("span",{className:"featuredTitle",key:t},o.a.createElement(d.b,{className:"dataset",to:{pathname:"/analysis/"+e,state:{dataset:{item:e}}}},e))))});return o.a.createElement("div",{className:"featured"},o.a.createElement(i.a,{item:!0,xs:12,container:!0,spacing:5},e))}function h(){return o.a.createElement("div",{className:"home"},o.a.createElement(u,null))}var p,f,E=a(26),g=a(27),b=a(33),_=a(28),v=a(34),N=a(10),w=a(15),y=a(16),j=(a(50),y.a.button(p||(p=Object(w.a)(['\n  background-color: "#333333";\n  color: white;\n  padding: 5px 15px;\n  border-radius: 5px;\n  outline: 0;\n  text-transform: uppercase;\n  margin: 10px 0px;\n  cursor: pointer;\n  box-shadow: 0px 2px 2px lightgray;\n  transition: ease background-color 250ms;\n  &:hover {\n    background-color: "black";\n  }\n  &:disabled {\n    cursor: default;\n    opacity: 0.7;\n  }\n'])))),x=(y.a.button(f||(f=Object(w.a)(["\n  padding: 10px 30px;\n  cursor: pointer;\n  opacity: 0.6;\n  background: white;\n  border: 0;\n  outline: 0;\n  border-bottom: 2px solid transparent;\n  transition: ease border-bottom 250ms;\n  ","\n"])),function(e){return e.active&&"\n    border-bottom: 2px solid black;\n    opacity: 1;\n  "}),function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(b.a)(this,Object(_.a)(t).call(this,e))).state={model_name:"None",dataset_size:0,citations:0,downloads:0,description:"None"},a.dataset_name=a.props.match.params.datasetName,a.model_name="None",a.analytics_json="None",a.get_metadata(),a.handleDownload=a.handleDownload.bind(Object(N.a)(Object(N.a)(a))),a.state={downloads:0},a}return Object(v.a)(t,e),Object(g.a)(t,[{key:"handleDownload",value:function(){var e=this;fetch("/dataset/analysis",{method:"post",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({model_name:this.state.model_name,downloads:this.state.downloads+1,citations:this.state.citations})}).then(function(e){return e.json()}).then(function(t){e.setState(function(e){return{downloads:e.downloads+1}})})}},{key:"get_metadata",value:function(){var e=this;fetch("/dataset/get_metadata?dataset="+this.dataset_name).then(function(e){return e.json()}).then(function(t){e.setState({model_name:t.model_name,dataset_size:t.dataset_size,citations:t.citations,downloads:t.downloads,description:t.description}),e.model_name=t.model_name,e.get_analytics()}).catch(function(e){return console.log("Error in fetching")})}},{key:"get_analytics",value:function(){var e=this;fetch("/dataset/get_data?model="+this.model_name).then(function(e){return e.json()}).then(function(t){console.log(t),e.analytics_json=JSON.parse(t)}).catch(function(e){return console.log("Error in fetching analytics")})}},{key:"get_download_track",value:function(){fetch("/dataset/track_download?dataset="+this.dataset_name).then(function(e){return e.json()}).then(function(e){console.log(e);var t=Object.keys(e);Object.values(e);console.log(typeof t)}).catch(function(e){return console.log("Error in fetching")})}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"grid1"},o.a.createElement(i.a,{item:!0,xs:12,container:!0,spacing:5},o.a.createElement(i.a,{item:!0,lg:6,sm:12,xs:12,container:!0,spacing:0,className:"dataset"},o.a.createElement("h1",null,this.dataset_name)),o.a.createElement(i.a,{item:!0,lg:6,sm:12,xs:12,container:!0,spacing:0,className:"download"},o.a.createElement(j,{className:"button",variant:"contained",onClick:this.handleDownload},o.a.createElement("h3",null,"Download (",this.state.dataset_size," KB) "))),o.a.createElement(i.a,{item:!0,lg:6,sm:12,xs:12,container:!0,spacing:0,className:"dataset"},o.a.createElement("p",null,this.state.description))),o.a.createElement("hr",{className:"horizontal_line_main"}),o.a.createElement("div",null,o.a.createElement("h2",null,"About dataset"),o.a.createElement("p",null,this.state.description)),o.a.createElement("hr",{className:"horizontal_line"}),o.a.createElement("div",null,o.a.createElement("h2",null,"Number of downloads"),o.a.createElement("p",null,this.state.downloads)),o.a.createElement("hr",{className:"horizontal_line"}),o.a.createElement("div",null,o.a.createElement("h2",null,"Number of citations"),o.a.createElement("p",null,this.state.citations)),o.a.createElement("hr",{className:"horizontal_line"}),o.a.createElement("div",null,o.a.createElement("h2",null,"Analytics of dataset")),o.a.createElement("hr",{className:"horizontal_line"}),o.a.createElement("p",null,"test"),o.a.createElement("p",null,this.analytics_json)))}}]),t}(n.Component));var k=function(){return o.a.createElement(d.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(r.c,null,o.a.createElement(r.a,{exact:!0,path:"/",element:o.a.createElement(h,null)}),o.a.createElement(r.a,{path:"/analysis/:datasetName",element:o.a.createElement(function(e){var t=Object(r.g)();return o.a.createElement(x,Object(s.a)({},e,{match:{params:t}}))},null)}))))},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,69)).then(function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,l=t.getLCP,c=t.getTTFB;a(e),n(e),o(e),l(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(k,null))),O()}},[[36,1,2]]]);
//# sourceMappingURL=main.6d05ca4b.chunk.js.map