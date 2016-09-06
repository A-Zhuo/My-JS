//从 node 开始通过 classname, 获取元素节点，使新老浏览器都能支持  
function getElementsByClassName(node,classname)  
{  
    if(node.getElementsByClassName){  
        return node.getElementsByClassName(classname);  
    }  
    else   
    {  
        var results = new Array();  
        var elems = node.getElementsByTagName("*");  
        for(var i = 0;i < elems.length;i++)  
        {  
            if(elem[i].classname.indexOf(classname) != -1)  
            {  
                results[results.length] = elems[i];  
            }  
        }  
        return results;  
    }  
}  
  
// 将 func 设置为页面加载完毕时执行的函数  
function addLoadEvent(func){  
    var oldonload = window.onload;  
    if(typeof window.onload != 'function'){  
        window.onload = func;  
    } else {  
        window.onload = function(){  
            oldonload();  
            func();  
        }  
    }  
}  
  
//在目标元素之后插入新元素  
function insertAfter(newElement,targetElement){  
    var parent = targetElement.parentNode;  
    if(parent.lastChild == targetElement){  
        parent.appendChild(newElement);  
    }else {  
        parent.insertBefore(newElement,targetElement.nextSibling);  
    }  
}  
  
//获取元素的下一个元素节点  
function getNextElement(node){  
    return nextElement(node.nextSibling);  
}  
  
  
function nextElement(node){  
    if(node.nodeType == 1){  
        return node;  
    }  
    if(node.nextSibling){  
        return nextElement(node.nextSibling);  
    }  
    return null;  
}  
  
// 向 element 追加一个新的 class  
function addClass(element,value){  
    if(!element.className){  
        element.className = value;  
    } else {  
        newClassName = element.className;  
        newClassName += " ";  
        newClassName += value;  
        element.className = newClassName;  
    }  
}  
  
//检查浏览器是否支持某种类型的输入控件  
function inputSupportsType(type){  
    if(!doucument.createElement) return false;  
    var input = doucument.createElement('input');  
    input.setAttribute('type',type);  
    if(input.type == 'text' && type != 'text'){  
        return false;  
    } else {  
        return true;  
    }  
}  
  
//检查某种属性是否支持  
function elementSupportsAttribute(elementName,attribute){  
    if(!doucument.createElement) return false;  
    var temp = doucument.createElement(elementName);  
    return (attribute in test);  
}  