var tlist = [];
                $.getJSON("http://192.168.0.36:8090/board/wordcloud", function(hlist){
            console.log("start ccc");
                    $(hlist).each(function(index){
                        console.log(hlist[index][0]);
                        tlist.push([hlist[index][0].slice(1), hlist[index][1]])
                        //console.log(hlist[index]["text"].split("#"));
                        //console.log(hlist[index]["text"].slice(1));
                        });
                    
                    WordCloud(document.getElementById('cloud'), {
                        list : tlist.map(function(word) { return [word[0], word[1]]; })
                    });
                });
                WordCloud.minFontSize = "30px";
                /*
                WordCloud(document.getElementById('cloud'), { list: list} );
                console.log(list); */
                

                var clicked = function(ev) {
                if (ev.target.nodeName === "SPAN") {
                    var tag = ev.target.textContent;
                    //var realTag = tag.slice(1);
                    var realTag = tag;
                    /*
                    var tagElem;
                    if (tlist.some(function(el) { if (el[0] === tag) {tagElem = el; return true;} return false; })) {
                    document.getElementById("details").innerText = "There were " + tagElem[1] + 
                        " Stack Overflow questions tagged " + tag;
                    } */
                    // self.location = "list"
                    // + "${pageMaker.makeQuery(1)}"
                    // + "&searchType=rna"
                    // + "&keyword="
                    // + realTag;
                    console.log("clicked");
                        console.log(realTag);
                } else {
                    document.getElementById("details").innerText = "";
                }
                }
                document.getElementById("cloud").addEventListener("click", clicked)
                console.log(document.getElementById("cloud")+"dddd");
                console.log(document.getElementById("details")+"dddd");