//�� node ��ʼͨ�� classname, ��ȡԪ�ؽڵ㣬ʹ�������������֧��  
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
  
// �� func ����Ϊҳ��������ʱִ�еĺ���  
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
  
//��Ŀ��Ԫ��֮�������Ԫ��  
function insertAfter(newElement,targetElement){  
    var parent = targetElement.parentNode;  
    if(parent.lastChild == targetElement){  
        parent.appendChild(newElement);  
    }else {  
        parent.insertBefore(newElement,targetElement.nextSibling);  
    }  
}  
  
//��ȡԪ�ص���һ��Ԫ�ؽڵ�  
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
  
// �� element ׷��һ���µ� class  
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
  
//���������Ƿ�֧��ĳ�����͵�����ؼ�  
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
  
//���ĳ�������Ƿ�֧��  
function elementSupportsAttribute(elementName,attribute){  
    if(!doucument.createElement) return false;  
    var temp = doucument.createElement(elementName);  
    return (attribute in test);  
}  